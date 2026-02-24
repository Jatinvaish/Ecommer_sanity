import { Product, BRAND_QUERYResult } from "@/sanity.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface ProductCharacteristicsProps {
  product: Product;
  brand: BRAND_QUERYResult | null;
}

const ProductCharacteristics = ({
  product,
  brand,
}: ProductCharacteristicsProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold">
          {product?.name}: Characteristics
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <p className="flex items-center justify-between">
            Brand:{" "}
            {brand && brand.length > 0 && (
              <span className="font-semibold tracking-wide">
                {brand[0]?.brandName}
              </span>
            )}
          </p>
          <p className="flex items-center justify-between">
            Type:{" "}
            <span className="font-semibold tracking-wide">
              {product?.variant || "General"}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Stock:{" "}
            <span className="font-semibold tracking-wide">
              {product?.stock ? `${product.stock} Available` : "Out of Stock"}
            </span>
          </p>
          {product?.status && (
            <p className="flex items-center justify-between">
              Status:{" "}
              <span className="font-semibold tracking-wide uppercase">
                {product.status}
              </span>
            </p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;
