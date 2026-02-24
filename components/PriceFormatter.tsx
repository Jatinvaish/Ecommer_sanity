import { memo } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = memo(({ amount, className }: Props) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "USD";
  const currencySymbol = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";
  const locale = process.env.NEXT_PUBLIC_CURRENCY_LOCALE || "en-US";

  const formattedPrice = new Number(amount).toLocaleString(locale, {
    currency: currency,
    style: "currency",
    minimumFractionDigits: 2,
  });

  return (
    <span
      className={twMerge("text-sm font-semibold text-dark-color", className)}
    >
      {formattedPrice}
    </span>
  );
});

PriceFormatter.displayName = "PriceFormatter";

export default PriceFormatter;
