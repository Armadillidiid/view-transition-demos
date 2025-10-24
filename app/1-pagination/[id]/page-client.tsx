"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addTransitionType, startTransition, ViewTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { type Product } from "@/lib/products";
import { ProductImage, ProductImageDialog } from "@/components/product-image";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  productId: string;
  products: Product[];
};

const Page = ({ productId, products }: Props) => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const currentPage =
    products.findIndex((product) => product.id.toString() === productId) + 1;
  const currentProduct = products[currentPage - 1];
  const totalPages = products.length;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const newProductId = products[page - 1].id;
      router.push(`/1-pagination/${newProductId}`, { scroll: false });
    }
  };

  return (
    <ViewTransition>
      <div className="min-h-screen flex flex-col">
        {/* Back Button */}
        <div className="p-4">
          <Button variant="outline" asChild>
            <Link href="/1-pagination">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Menu
            </Link>
          </Button>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="flex-1 container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Product Image */}
            {isDialogOpen ? (
              <>
                <ProductImageDialog
                  id={currentProduct.id.toString()}
                  isOpen={isDialogOpen}
                  onOpenChange={() =>
                    startTransition(() => setIsDialogOpen(false))
                  }
                  emoji={currentProduct.emoji}
                />
                <Skeleton className="bg-background" />
              </>
            ) : (
              <ProductImage
                id={currentProduct.id.toString()}
                emoji={currentProduct.emoji}
                onClick={() => startTransition(() => setIsDialogOpen(true))}
              />
            )}

            {/* Right Column - Product Details */}
            <div className="flex flex-col gap-6">
              <div>
                {currentProduct.badge && (
                  <Badge className="mb-2">{currentProduct.badge}</Badge>
                )}
                <h1 className="text-4xl font-bold mb-2">
                  {currentProduct.name}
                </h1>
                <p className="text-3xl font-semibold text-primary">
                  ${currentProduct.price.toFixed(2)}
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {currentProduct.description}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {currentProduct.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Button size="lg" className="w-full" disabled>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Footer - Pagination */}
        <div className="border-t py-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    startTransition(() => {
                      addTransitionType("navigation-back");
                      handlePageChange(currentPage - 1);
                    })
                  }
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() =>
                        startTransition(() => {
                          addTransitionType(
                            page > currentPage
                              ? "navigation-forward"
                              : "navigation-back",
                          );
                          handlePageChange(page);
                        })
                      }
                      isActive={page === currentPage}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    startTransition(() => {
                      addTransitionType("navigation-forward");
                      handlePageChange(currentPage + 1);
                    })
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </ViewTransition>
  );
};

export default Page;
