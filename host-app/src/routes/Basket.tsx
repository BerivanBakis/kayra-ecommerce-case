import React from "react";

const BasketApp = React.lazy(() => import("basket_remote/BasketApp"));

export default function Basket() {
  return (
    <React.Suspense fallback={<div>Sepet yükleniyor...</div>}>
      <BasketApp />
    </React.Suspense>
  );
}
