import { Card, CardContent } from "@/components/ui/card";
import { ViewTransition } from "react";

interface ProductImageProps {
  id: string;
  emoji: string;
  onClick: () => void;
}

export const PRODUCT_CONTAINER_VT_NAME = "product-container";
export const PRODUCT_IMAGE_VT_NAME = "product-image";

export function ProductImage({ id, emoji, onClick }: ProductImageProps) {
  return (
    <ViewTransition name={`${PRODUCT_CONTAINER_VT_NAME}-${id}`}>
      <div className="flex items-center justify-center">
        <Card className="w-full p-0 aspect-square">
          <CardContent className="flex flex-1 p-16">
            <div
              className="relative bg-gray-100 rounded-lg flex flex-1 items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={onClick}
            >
              <ViewTransition
                name={`${PRODUCT_IMAGE_VT_NAME}-${id}`}
                default={"banner-img"}
              >
                <span className="text-gray-400 text-9xl w-fit">{emoji}</span>
              </ViewTransition>
            </div>
          </CardContent>
        </Card>
      </div>
    </ViewTransition>
  );
}

interface ProductImageDialogProps {
  id: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  emoji: string;
}

export function ProductImageDialog({
  id,
  isOpen,
  onOpenChange,
  emoji,
}: ProductImageDialogProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => onOpenChange(false)}
    >
      <ViewTransition name={`${PRODUCT_CONTAINER_VT_NAME}-${id}`}>
        <div
          className="bg-white rounded-lg p-8 max-w-[600px] w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-center p-8">
            <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-9xl">{emoji}</span>
            </div>
          </div>
        </div>
      </ViewTransition>
    </div>
  );
}
