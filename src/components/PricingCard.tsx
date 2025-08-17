import React from 'react'
import Link from 'next/link';

type PricingCardProps = {
  id: number;
  plan: string;
  price: number;
  description: string;
  billingCircle: string;
  features: string[];
  billingType: "Month" | "Annually";
  isAuthenticated: boolean;
};

function PricingCard({
  id,
  plan,
  description,
  price,
  features,
  billingType,
  isAuthenticated,
}: PricingCardProps) {

  const annualPrice = billingType === "Annually" ? Math.round(price * 12 * 0.85) : price;

  const billingText =
    plan.toLowerCase() === "free"
      ? "Enduring free access"
      : billingType === "Annually"
        ? "Billed Annually"
        : "Per Month";

  return (
    <div
      className={`
        space-y-6 p-4 md:p-8 border-2 w-full rounded-2xl h-full min-h-[642px] transition-transform duration-300
        ${plan.toLowerCase() === "free" && id === 1 ? "bg-transparent" : "bg-white"}
        hover:bg-[#E6F0FA] hover:border-[#4A90E2] hover:-translate-y-1 hover:shadow-lg
        ${plan.toLowerCase() !== "free" && "border-[#CBD5E1]"}
      `}
    >
      <div>
        <h4 className="text-3xl mb-2 font-[550]">{plan}</h4>
        <p className="text-[1rem]">{description}</p>
      </div>
      <div>
        <h3 className="font-bold text-[3rem] mb-1">
          ${billingType === "Annually" ? annualPrice : price}
        </h3>
        <p>{billingText}</p>
      </div>
      {isAuthenticated ? (
        <button
          className="block text-center text-white bg-[#4A90E2] cursor-not-allowed hover:bg-[#023978] font-medium transition-all duration-300 rounded-full w-full py-3 px-5"
          disabled
        >
          Current Plan
        </button>
      ) : (
        <Link
          href="#"
          className="block text-center text-white bg-[#4A90E2] hover:bg-[#023978] font-medium transition-all duration-300 rounded-full w-full py-3 px-5"
        >
          Select Plan
        </Link>
      )}
      <div className="space-y-3">
        <ul className="ml-3 list-none">
          <li>
            <span className="flex gap-2 font-medium">Access to tools</span>
            <ul className="list-disc ml-12 my-3 gap-4 flex flex-col text-[#555555]">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PricingCard