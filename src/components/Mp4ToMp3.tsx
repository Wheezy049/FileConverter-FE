"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import { toast } from 'react-toastify';
import { apiFetch } from '@/lib/apiFetch';

function Mp4ToMp3() {

    const [file, setFile] = useState<File | null>(null);
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [showHover, setShowHover] = useState<boolean>(false);
    const [isConverting, setIsConverting] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string | null>(null);
    const [convertedFile, setConvertedFile] = useState<File | null>(null);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [converted, setConverted] = useState<boolean>(false);
    const [isDownloading, setIsDownloading] = useState<boolean>(false);
    const [filename, setFilename] = useState<string>("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const acceptedFormats = ["video/*"];

        const selectedFile = e.target.files?.[0];

        if (selectedFile && acceptedFormats.includes(selectedFile.type)) {
            setFile(selectedFile);
            setIsComplete(true);
            setErrMsg("");
        } else {
            setFile(null);
            setIsComplete(false);
            setErrMsg("Please upload a valid MP4 file.");
        }
    };

    useEffect(() => {
        if (errMsg) {
            const timer = setTimeout(() => {
                setErrMsg("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [errMsg]);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const droppedFile = e.dataTransfer.files[0];
        const acceptedFormats = [
            "video/*",
        ];

        if (
            droppedFile && acceptedFormats.includes(droppedFile.type)
        ) {
            setFile(droppedFile);
            setIsComplete(true);
            setErrMsg("");
        } else {
            setFile(null);
            setErrMsg("Please upload a valid MP4 file.");
        }
    };

    const truncateFileName = (
        name: string | undefined,
        maxLength: number = 40
    ): string => {
        if (!name) return "";

        if (name.length <= maxLength) return name;

        const halfLength = Math.floor(maxLength / 2);
        const firstHalf = name.slice(0, halfLength - 1);
        const secondHalf = name.slice(-halfLength + 2);

        return `${firstHalf}...${secondHalf}`;
    };

    const handleCancelUpload = () => {
        setFile(null);
        setIsComplete(false);
        setIsConverting(false);
        setConvertedFile(null);
        setConverted(false);
        setFilename("");
    };


    const handleConvert = async () => {
        setIsConverting(true);

        if (!file) {
            setErrMsg("No file selected.");
            setIsConverting(false);
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await apiFetch("/api/v1/convert/mp4-to-mp3", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("API failed to fetch");
            }

            const data = await response.json();
            setDownloadUrl(data.download_url);
            setFilename(data.filename);

            const fileResponse = await apiFetch(data.download_url, {
                method: "POST",
            });

            if (!fileResponse.ok) {
                throw new Error("Failed to fetch converted file");
            }

            const fileBlob = await fileResponse.blob();
            const convertedFileObj = new File([fileBlob], data.filename, {
                type: fileBlob.type,
                lastModified: Date.now(),
            });

            setConvertedFile(convertedFileObj);
            setIsConverting(false);
            setConverted(true);
            toast.success(data.message || "File has been converted successfully");
        } catch (error: unknown) {
            console.error("Error while converting", error);

            let errorMessage = "Failed while converting";

            if (error instanceof Response) {
                try {
                    const errorData = await error.json();
                    errorMessage = errorData.detail || errorMessage;
                } catch (e) {
                    console.error("Failed to parse error JSON", e);
                }
            }

            setConverted(false);
            setConvertedFile(null);
            setIsConverting(false);
            toast.error(errorMessage);
        }
    };

    const handleDownload = async () => {
        setIsDownloading(true);

        if (!downloadUrl) {
            throw new Error("Download URL is not set");
        }

        try {
            const response = await apiFetch(downloadUrl, {
                method: "POST",
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
            setIsDownloading(false);
            toast.success("Download Successful");
        } catch (error) {
            console.error("Error downloadind", error);
            setIsDownloading(false);
            toast.error("Failed to download.");
        }
    };

    return (
        <div className="max-w-[1268px] w-full h-auto flex flex-col items-center mx-auto lg:px-0 px-[24px]">
            <div className="w-full max-w-[700px] animate-fade-in">
                <div className="relative gap-[24px] w-full max-w-[700px] md:mb-12 flex flex-col items-center justify-center">
                    <div className="gap-[16px] flex flex-col items-center pt-[40px] relative">
                        <h1 className="text-[32px] md:text-[48px] lg:text-[48px] text-[#1A1A1A] font-bold leading-[40px] md:leading-[72px] text-center animate-slide-up opacity-0 animate-delay-[100ms]">
                            MP4 TO MP3
                        </h1>
                        <p className="text-[14px] md:text-[17px] font-medium leading-[24px] md:leading-[27.32px] text-center text-[#555555] animate-slide-up opacity-0 animate-delay-[200ms]">
                            Extract audio from your MP4 videos and save it as an MP3 file instantly.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center mx-auto">
                {converted ? (
                    <>
                        {convertedFile && (
                            <>
                                <div className="space-y-2 relative bg-white border-dashed w-[90%] sm:w-[80%] md:w-[80%] lg:w-[85%] xl:w-[90%] max-w-6xl h-[260px] sm:h-[280px] md:h-[300px]  my-5 mx-auto border-[1px] border-[#7E97B4] rounded-lg flex flex-row items-center justify-between p-5 md:p-10 hover:bg-[#E6F0FA]/10 hover:border-[#3A78BA] transition ease-in-out delay-150">
                                    <div className="flex gap-2 md:gap-4 sm:justify-center md:justify-normal items-center">
                                        <span className="text-[#475467]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M6 2H14L20 8V22C20 22.5304 19.7893 23.0391 19.4142 23.4142C19.0391 23.7893 18.5304 24 18 24H6C5.46957 24 4.96086 23.7893 4.58579 23.4142C4.21071 23.0391 4 22.5304 4 22V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2Z" />
                                                <path d="M14 2V8H20" />
                                            </svg>
                                        </span>
                                        <div>
                                            <p className="text-base md:text-xl text-left font-bold text-[#292D32] mb-2">
                                                {filename}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M16.2806 9.21937C16.3504 9.28903 16.4057 9.37175 16.4434 9.46279C16.4812 9.55384 16.5006 9.65144 16.5006 9.75C16.5006 9.84856 16.4812 9.94616 16.4434 10.0372C16.4057 10.1283 16.3504 10.211 16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.289 9.14964 15.3718 9.09432 15.4628 9.05658C15.5538 9.01884 15.6514 8.99941 15.75 8.99941C15.8486 8.99941 15.9462 9.01884 16.0372 9.05658C16.1283 9.09432 16.211 9.14964 16.2806 9.21937ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z"
                                                        fill="#35BB26"
                                                    />
                                                </svg>
                                                <span className="text-[#555] text-sm md:text-xl">
                                                    Conversion completed
                                                </span>
                                                <span>
                                                    {convertedFile
                                                        ? `${(convertedFile.size / (1024 * 1024)).toFixed(
                                                            2
                                                        )} MB`
                                                        : ""}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleCancelUpload}
                                        onMouseEnter={() => setShowHover(true)}
                                        onMouseLeave={() => setShowHover(false)}
                                        className="absolute right-4 top-4"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="31"
                                            viewBox="0 0 30 31"
                                            fill="none"
                                        >
                                            <path
                                                d="M15 28.9375C7.5875 28.9375 1.5625 22.9125 1.5625 15.5C1.5625 8.0875 7.5875 2.0625 15 2.0625C22.4125 2.0625 28.4375 8.0875 28.4375 15.5C28.4375 22.9125 22.4125 28.9375 15 28.9375ZM15 3.9375C8.625 3.9375 3.4375 9.125 3.4375 15.5C3.4375 21.875 8.625 27.0625 15 27.0625C21.375 27.0625 26.5625 21.875 26.5625 15.5C26.5625 9.125 21.375 3.9375 15 3.9375Z"
                                                fill="#292D32"
                                            />
                                            <path
                                                d="M11.4617 19.9742C11.2242 19.9742 10.9867 19.8867 10.7992 19.6992C10.4367 19.3367 10.4367 18.7367 10.7992 18.3742L17.8742 11.2992C18.2367 10.9367 18.8367 10.9367 19.1992 11.2992C19.5617 11.6617 19.5617 12.2617 19.1992 12.6242L12.1242 19.6992C11.9492 19.8867 11.6992 19.9742 11.4617 19.9742Z"
                                                fill="#292D32"
                                            />
                                            <path
                                                d="M18.5367 19.9742C18.2992 19.9742 18.0617 19.8867 17.8742 19.6992L10.7992 12.6242C10.4367 12.2617 10.4367 11.6617 10.7992 11.2992C11.1617 10.9367 11.7617 10.9367 12.1242 11.2992L19.1992 18.3742C19.5617 18.7367 19.5617 19.3367 19.1992 19.6992C19.0117 19.8867 18.7742 19.9742 18.5367 19.9742Z"
                                                fill="#292D32"
                                            />
                                        </svg>
                                    </button>
                                    {showHover && (
                                        <div className="absolute right-0 -top-5 px-2 py-1 flex bg-white text-[#222224] text-[16px] font-medium rounded-[4px] shadow-lg">
                                            Remove file
                                        </div>
                                    )}
                                </div>
                                <div
                                    className={`w-[90%] sm:w-[80%] md:w-[80%] lg:w-[85%] xl:w-[90%] py-2 rounded-[8px] flex items-center justify-end`}
                                >
                                    <button
                                        onClick={handleDownload}
                                        disabled={isDownloading}
                                        className={`px-5 py-2 rounded-[8px] bg-[#4A90E2] text-white hover:bg-[#3A78BA] focus:outline-none flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50 transition`}
                                    >
                                        {isDownloading ? (
                                            <div className="flex justify-center items-center gap-2">
                                                <Image
                                                    src="/starry.svg"
                                                    alt="Music icon"
                                                    className="animate-spin text-white ml-2 w-4 h-4 md:w-6 md:h-6"
                                                    width={6}
                                                    height={6}
                                                />
                                                <span>Downloading</span>
                                            </div>
                                        ) : (
                                            <>
                                                <span> Download</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="w-full mx-auto items-center flex flex-col justify-center lg:max-w-6xl mb-6">
                        {isComplete ? (
                            <>
                                {file && (
                                    <>
                                        <div className="space-y-2 relative bg-white border-dashed w-[90%] sm:w-[80%] md:w-[80%] lg:w-[85%] xl:w-[90%] max-w-6xl h-[260px] sm:h-[280px] md:h-[300px]  my-5 mx-auto border-[1px] border-[#7E97B4] rounded-lg flex flex-row items-center justify-between p-5 md:p-10 hover:bg-[#E6F0FA]/10 hover:border-[#3A78BA] transition ease-in-out delay-150">
                                            <div className="flex gap-4 md:gap-8 sm:justify-center md:justify-normal items-center">
                                                <span className="text-[#475467]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M6 2H14L20 8V22C20 22.5304 19.7893 23.0391 19.4142 23.4142C19.0391 23.7893 18.5304 24 18 24H6C5.46957 24 4.96086 23.7893 4.58579 23.4142C4.21071 23.0391 4 22.5304 4 22V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2Z" />
                                                        <path d="M14 2V8H20" />
                                                    </svg>
                                                </span>
                                                <div>
                                                    <p className="text-base md:text-xl text-left font-bold text-[#292D32] mb-2">
                                                        {truncateFileName(file?.name)} {filename}
                                                    </p>
                                                    <div className="flex items-center gap-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M16.2806 9.21937C16.3504 9.28903 16.4057 9.37175 16.4434 9.46279C16.4812 9.55384 16.5006 9.65144 16.5006 9.75C16.5006 9.84856 16.4812 9.94616 16.4434 10.0372C16.4057 10.1283 16.3504 10.211 16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.289 9.14964 15.3718 9.09432 15.4628 9.05658C15.5538 9.01884 15.6514 8.99941 15.75 8.99941C15.8486 8.99941 15.9462 9.01884 16.0372 9.05658C16.1283 9.09432 16.211 9.14964 16.2806 9.21937ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z"
                                                                fill="#35BB26"
                                                            />
                                                        </svg>
                                                        <span className="text-[#555] text-sm md:text-xl">
                                                            Upload complete
                                                        </span>
                                                        <span>
                                                            {file
                                                                ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
                                                                : ""}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={handleCancelUpload}
                                                onMouseEnter={() => setShowHover(true)}
                                                onMouseLeave={() => setShowHover(false)}
                                                className="absolute right-4 top-4"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="31"
                                                    viewBox="0 0 30 31"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M15 28.9375C7.5875 28.9375 1.5625 22.9125 1.5625 15.5C1.5625 8.0875 7.5875 2.0625 15 2.0625C22.4125 2.0625 28.4375 8.0875 28.4375 15.5C28.4375 22.9125 22.4125 28.9375 15 28.9375ZM15 3.9375C8.625 3.9375 3.4375 9.125 3.4375 15.5C3.4375 21.875 8.625 27.0625 15 27.0625C21.375 27.0625 26.5625 21.875 26.5625 15.5C26.5625 9.125 21.375 3.9375 15 3.9375Z"
                                                        fill="#292D32"
                                                    />
                                                    <path
                                                        d="M11.4617 19.9742C11.2242 19.9742 10.9867 19.8867 10.7992 19.6992C10.4367 19.3367 10.4367 18.7367 10.7992 18.3742L17.8742 11.2992C18.2367 10.9367 18.8367 10.9367 19.1992 11.2992C19.5617 11.6617 19.5617 12.2617 19.1992 12.6242L12.1242 19.6992C11.9492 19.8867 11.6992 19.9742 11.4617 19.9742Z"
                                                        fill="#292D32"
                                                    />
                                                    <path
                                                        d="M18.5367 19.9742C18.2992 19.9742 18.0617 19.8867 17.8742 19.6992L10.7992 12.6242C10.4367 12.2617 10.4367 11.6617 10.7992 11.2992C11.1617 10.9367 11.7617 10.9367 12.1242 11.2992L19.1992 18.3742C19.5617 18.7367 19.5617 19.3367 19.1992 19.6992C19.0117 19.8867 18.7742 19.9742 18.5367 19.9742Z"
                                                        fill="#292D32"
                                                    />
                                                </svg>
                                            </button>
                                            {showHover && (
                                                <div className="absolute right-0 -top-5 px-2 py-1 flex bg-white text-[#222224] text-[16px] font-medium rounded-[4px] shadow-lg">
                                                    Remove file
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className={`w-[90%] sm:w-[80%] md:w-[80%] lg:w-[85%] xl:w-[90%] py-2 rounded-[8px] flex items-center justify-between gap-2`}
                                        >
                                            <button
                                                onClick={handleConvert}
                                                disabled={isConverting}
                                                className={`w-full py-2 rounded-[8px] bg-[#4A90E2] text-white hover:bg-[#3A78BA] focus:outline-none flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50 transition`}
                                            >
                                                {isConverting ? (
                                                    <div className="flex justify-center items-center gap-2">
                                                        <Image
                                                            src="/starry.svg"
                                                            alt="Music icon"
                                                            className="animate-spin text-white ml-2 w-4 h-4 md:w-6 md:h-6"
                                                            width={6}
                                                            height={6}
                                                        />
                                                        <span>Converting</span>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <span>Convert</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="relative bg-white border-dashed w-[90%] sm:w-[80%] md:w-[80%] lg:w-[85%] xl:w-[90%] max-w-6xl h-[260px] sm:h-[280px] md:h-[300px] mb-4 mx-auto border-[1px] border-[#7E97B4] rounded-lg flex flex-col items-center justify-center hover:bg-[#E6F0FA]/10 hover:border-[#3A78BA] transition ease-in-out delay-150">
                                    <div onDragOver={handleDragOver} onDrop={handleDrop}>
                                        <input
                                            type="file"
                                            accept="video/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="fileUpload"
                                            ref={fileInputRef}
                                        />
                                        <label
                                            htmlFor="fileUpload"
                                            className="w-full h-full mx-auto cursor-pointer self-stretch flex flex-col items-center justify-center px-5"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="120"
                                                height="120"
                                                viewBox="0 0 120 120"
                                                fill="none"
                                            >
                                                <mask
                                                    id="mask0_16145_81277"
                                                    style={{ maskType: "luminance" }}
                                                    maskUnits="userSpaceOnUse"
                                                    x="10"
                                                    y="20"
                                                    width="110"
                                                    height="80"
                                                >
                                                    <path
                                                        d="M65 80C81.5685 80 95 66.5685 95 50C95 33.4315 81.5685 20 65 20C48.4315 20 35 33.4315 35 50C35 66.5685 48.4315 80 65 80Z"
                                                        fill="white"
                                                    />
                                                    <path d="M85 60H40V100H85V60Z" fill="white" />
                                                    <path
                                                        d="M55 40H40C23.4315 40 10 53.4315 10 70C10 86.5685 23.4315 100 40 100H55C71.5685 100 85 86.5685 85 70C85 53.4315 71.5685 40 55 40Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M95 50H80C66.1929 50 55 61.1929 55 75C55 88.8071 66.1929 100 80 100H95C108.807 100 120 88.8071 120 75C120 61.1929 108.807 50 95 50Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M58.9941 75.9985H70.9941V60.9985H58.9941V75.9985Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        d="M50 64.0015H80L65 49.0015L50 64.0015Z"
                                                        fill="black"
                                                    />
                                                </mask>
                                                <g mask="url(#mask0_16145_81277)">
                                                    <path d="M120 0H0V120H120V0Z" fill="#D0D5DD" />
                                                </g>
                                            </svg>
                                            <p className="text-[16px] md:text-[20px] text-[#475467] pt-3">
                                                <span className="text-[#4A90E2] font-medium">Upload</span> or drag & drop your MP4 file here.
                                            </p>
                                            <span className="block text-[#71717A] text-sm md:text-base">
                                                Maximum file size: 100MB (MP4 only)
                                            </span>
                                            {errMsg && <p className="text-red-500 mt-2">{errMsg}</p>}
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Mp4ToMp3