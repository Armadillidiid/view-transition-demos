import Link from "next/link";
import { products } from "@/lib/products";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ViewTransition } from "react";
import { PRODUCT_IMAGE_VT_NAME } from "@/components/product-image";

const Page = () => {
  return (
    <ViewTransition>
      <div className="min-h-screen">
        {/* Header */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-2">Product Gallery</h1>
            <p className="text-muted-foreground">
              Browse our collection of premium products
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <CardHeader>
                  {product.badge && (
                    <Badge className="w-fit mb-2">{product.badge}</Badge>
                  )}
                  {/* Product Emoji */}
                  <ViewTransition
                    name={`${PRODUCT_IMAGE_VT_NAME}-${product.id}`}
                    default={"banner-img"}
                  >
                    <div className="text-8xl w-fit mb-4 mx-auto text-center">
                      {product.emoji}
                    </div>
                  </ViewTransition>
                  <ViewTransition name={`product-name-${product.id}`}>
                    <CardTitle className="text-4xl font-bold w-fit">
                      {product.name}
                    </CardTitle>
                  </ViewTransition>
                  <ViewTransition name={`product-price-${product.id}`}>
                    <CardDescription className="text-2xl font-semibold text-primary">
                      ${product.price.toFixed(2)}
                    </CardDescription>
                  </ViewTransition>
                </CardHeader>
                <CardFooter>
                  <Button asChild className="w-full" variant="secondary">
                    <Link href={`/1-pagination/${product.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </ViewTransition>
  );
};

export default Page;
