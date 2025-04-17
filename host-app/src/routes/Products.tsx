import React from "react";

const ProductsApp = React.lazy(() => import("products_remote/ProductsApp"));

export default function Products() {
  return (
    <React.Suspense fallback={<div>Ürünler yükleniyor...</div>}>
      <ProductsApp />
    </React.Suspense>
  );
}
