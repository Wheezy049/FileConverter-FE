import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type ProductShowcase = {
    imageSrc: string;
    header: string;
    description: string;
    url: string;
};

export default function ProductCard({ product }: { product: ProductShowcase }) {
    return (
        <Link href={product.url ? product.url : "#"}>
            <div
                className={`
                        transition ease-in-out delay-150 w-auto p-[24px] gap-[8px] rounded-[16px] bg-[#FAFAFA] md:bg-[#ffffff] flex flex-col h-auto md:h-[250px] hover:-translate-y-1 hover:shadow-lg duration-300 cursor-pointer border-[1px] border-[#CBD5E1]`}
            >
                <div className="w-full flex flex-col items-start">
                    <Image
                        src={product.imageSrc}
                        alt={product.header}
                        className="w-[64px] h-[64px] object-cover"
                        height={64}
                        width={64}
                    />
                    <div className="w-full flex-1 items-start mt-4">
                        <h2 className="text-[22px] font-bold leading-[29.05px] uppercase text-[#1F1F1F] ">
                            {product.header}
                        </h2>
                        <p className="text-[14px] font-medium leading-[16.94px] text-[#4B4B4B] mt-2 h-auto md:h-[50px]">
                            {product.description}
                        </p>
                        <div className="mt-4 flex items-center transition ease-out duration-300 group-hover:translate-y-[-10px]">
                            <Link
                                href={product.url ? product.url : "#"}
                                className="transform text-[16px] font-semibold leading-[19.36px] text-[#4A90E2] flex gap-[8px] transition ease-out duration-300 group-hover:translate-x-[10px]"
                            >
                                Try it now
                                <ArrowRight
                                    className="transform transition ease-out duration-300 group-hover:translate-y-[-10px]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}