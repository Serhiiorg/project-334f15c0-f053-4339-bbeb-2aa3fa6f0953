export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ fontSize: "1.5rem", margin: "10px 0" }}>
        Your generated pages:{" "}
      </div>
      <a href="/product_listing">Product Listing</a>
      <a href="/product_detail">Product Detail</a>
      <a href="/shopping_cart">Shopping Cart</a>
      <a href="/checkout">Checkout</a>
      <a href="/user_account">User Account</a>
    </div>
  );
}
