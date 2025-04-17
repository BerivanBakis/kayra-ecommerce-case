import React, { Suspense } from "react";

const ProductsApp = React.lazy(() => import("products_remote/ProductsApp"));
const BasketApp = React.lazy(() => import("basket_remote/BasketApp"));

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: 40 }}>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <ProductsApp />
        <BasketApp />
      </Suspense>
    </div>
  );
};

export default App;
