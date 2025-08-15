import Image from 'next/image';

interface CardProps {
    step: number;
    title: string;
    description: string;
    src: string;
}

export default function HowItWorks({ data, pageTitle }: {data: CardProps[], pageTitle: string}) {
    return (
        <div className="w-[90%] sm:w-[85%] md:w-[100%] lg:max-w-[1300px] md:max-w-[900px] mx-auto mt-10 mb-10 space-y-5 md:space-y-7 md:p-6 lg:px-14">
            <h1 className="text-[24px] md:text-[40px] font-[500] leading-[32.78px] md:leading-[54.64px] text-center text-[#1F1F1F]">
                {pageTitle}
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 content-center justify-items-center">
                {data.map((step) => (
                    <Card key={step.step} {...step} />
                ))}
            </div>
        </div>
    )
}

const Card = ({ step, title, description, src }: CardProps) => {
    return (
        <div className="w-full px-5 py-10 flex flex-col justify-between space-y-3 border border-[#CBD5E1] rounded-2xl hover:-translate-y-1 hover:shadow-lg transition ease-in-out delay-150 duration-300">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-lg bg-[#4A90E2] text-white text-center flex items-center justify-center h-8 w-8">{step}</span>
                    <h3 className="text-base md:text-xl font-semibold text-[#1A1A1A]">{title}</h3>
                </div>
                <p className="text-sm md:text-base text-[#555555]">
                    {description}
                </p>
            </div>
            <Image src={src} alt={title} width={250} height={140} className="w-3/4 mx-auto" />
        </div>
    )
}