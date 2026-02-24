"use client";

import { Product } from "@/sanity.types";

interface ProductsDetailsProps {
  product: Product;
}

const ProductsDetails = ({ product }: ProductsDetailsProps) => {
  const detailedDescription = product?.detailedDescription || product?.description;
  const weight = product?.weight || "N/A";
  const dimensions = product?.dimensions || "N/A";

  return (
    <div className="w-full space-y-8 mb-10">
      {/* Description Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-shop_dark_green mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-shop_orange rounded-full"></span>
          Description
        </h2>
        <div className="prose prose-sm max-w-none text-gray-600">
          {detailedDescription ? (
            <p className="whitespace-pre-wrap">{detailedDescription}</p>
          ) : (
            <p>No detailed description available for this product.</p>
          )}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-shop_dark_green mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-shop_orange rounded-full"></span>
          Additional Information
        </h2>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 w-1/3">
                  Weight
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {weight}
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 w-1/3">
                  Dimensions
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {dimensions}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
