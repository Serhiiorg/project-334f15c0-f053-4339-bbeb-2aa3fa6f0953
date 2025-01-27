import "./styles.css";
import "@phosphor-icons/web/regular";

export default function Productdetail() {
  return (
    <div className="wrapper-container page-wrapper">
      <div className="content-container 96uGMcAJOP7IEZint0gai">
        <header className="header-main">
          <div className="container-flex nav-container">
            <a className="brand-logo logo" href="/">
              📈 SellMax
            </a>
            <nav>
              <a className="nav-link" href="/product_listing">
                Products
              </a>
              <a className="nav-link" href="/product_detail">
                Details
              </a>
              <a className="nav-link" href="/shopping_cart">
                Cart
              </a>
              <a className="nav-link" href="/checkout">
                Checkout
              </a>
              <a className="nav-link" href="/user_account">
                Account
              </a>
            </nav>
          </div>
        </header>
        <main className="main-content main-content-container">
          <div className="product-details-container product-container">
            <div className="product-gallery image-gallery">
              <img
                className="gallery-image product-image"
                alt="Product view 1"
                src="https://placehold.co/400x300"
              />
              <img
                className="gallery-image product-image"
                alt="Product view 2"
                src="https://placehold.co/400x300"
              />
              <img
                className="gallery-image product-image"
                alt="Product view 3"
                src="https://placehold.co/400x300"
              />
              <img
                className="gallery-image product-image"
                alt="Product view 4"
                src="https://placehold.co/400x300"
              />
            </div>
            <div className="product-info product-details">
              <h1 className="product-heading product-title">
                Premium Wireless Headphones
              </h1>
              <p className="product-price price">$299.99</p>
              <p>
                Experience crystal-clear sound with our premium wireless
                headphones. Features active noise cancellation and 30-hour
                battery life.
              </p>
              <div className="quantity-control quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  className="quantity-input"
                  id="quantity"
                  min={1}
                  type="number"
                  value={1}
                />
              </div>
              <button className="cart-button add-to-cart">
                Add to Cart 🛒
              </button>
              <div className="specs-container specifications">
                <h2>Specifications</h2>
                <ul className="specs-items specs-list">
                  <li>🕗 Battery Life: 30 hours</li>
                  <li>🔊 Active Noise Cancellation</li>
                  <li>🎶 Bluetooth 5.0</li>
                  <li>📶 Built-in Microphone</li>
                  <li>🔙 Touch Controls</li>
                  <li>🔠 Quick Charge Support</li>
                </ul>
              </div>
            </div>
          </div>
          <section className="reviews-container reviews-section">
            <h2>Customer Reviews</h2>
            <div className="review-card review">
              <div className="review-info review-header">
                <strong>John D.</strong>
                <span className="rating-stars stars">★★★★★</span>
              </div>
              <p>Amazing sound quality and comfort. Worth every penny!</p>
            </div>
            <div className="review-card review">
              <div className="review-info review-header">
                <strong>Sarah M.</strong>
                <span className="rating-stars stars">★★★★☆</span>
              </div>
              <p>Great headphones, but battery life could be better.</p>
            </div>
          </section>
          <section className="related-products-section related-products">
            <div className="related-product-card related-product">
              <img
                className="product-thumbnail"
                alt="Related product 1"
                src="https://placehold.co/200x150"
              />
              <h3>Wireless Earbuds</h3>
              <p>$149.99</p>
            </div>
            <div className="related-product-card related-product">
              <img
                className="product-thumbnail"
                alt="Related product 2"
                src="https://placehold.co/200x150"
              />
              <h3>Sports Headphones</h3>
              <p>$199.99</p>
            </div>
            <div className="related-product-card related-product">
              <img
                className="product-thumbnail"
                alt="Related product 3"
                src="https://placehold.co/200x150"
              />
              <h3>Studio Headphones</h3>
              <p>$399.99</p>
            </div>
          </section>
        </main>
        <footer className="footer-main">
          <div className="container-flex footer-content">
            <div className="footer-logo">📈 SellMax</div>
            <div className="footer-links">
              <a className="footer-link" href="/product_listing">
                Products
              </a>
              <a className="footer-link" href="/product_detail">
                Details
              </a>
              <a className="footer-link" href="/shopping_cart">
                Cart
              </a>
              <a className="footer-link" href="/checkout">
                Checkout
              </a>
              <a className="footer-link" href="/user_account">
                Account
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
