import "./styles.css";
import "@phosphor-icons/web/regular";

export default function Shoppingcart() {
  return (
    <div className="wrapper-container page-wrapper">
      <div className="main-container WPMzdt8w32iTt99d9Q4Dh">
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
          <div className="cart-container cart-section">
            <div className="cart-items-list cart-items">
              <div className="cart-item-box cart-item">
                <div className="product-image item-image"></div>
                <div className="item-details">
                  <h3 className="product-title">Premium Wireless Headphones</h3>
                  <p>Black | Noise Cancelling</p>
                </div>
                <div className="quantity-wrapper quantity-controls">
                  <button className="quantity-control-btn quantity-btn">
                    −
                  </button>
                  <input
                    className="quantity-input-field quantity-input"
                    min={1}
                    type="number"
                    value={1}
                  />
                  <button className="quantity-control-btn quantity-btn">
                    +
                  </button>
                </div>
                <button className="remove-item-btn remove-btn">×</button>
              </div>
              <div className="cart-item-box cart-item">
                <div className="product-image item-image"></div>
                <div className="item-details">
                  <h3 className="product-title">Smart Watch Series 5</h3>
                  <p>Silver | 44mm</p>
                </div>
                <div className="quantity-wrapper quantity-controls">
                  <button className="quantity-control-btn quantity-btn">
                    −
                  </button>
                  <input
                    className="quantity-input-field quantity-input"
                    min={1}
                    type="number"
                    value={1}
                  />
                  <button className="quantity-control-btn quantity-btn">
                    +
                  </button>
                </div>
                <button className="remove-item-btn remove-btn">×</button>
              </div>
            </div>
            <div className="summary-container order-summary">
              <h2>Order Summary</h2>
              <div className="summary-row summary-item">
                <span>Subtotal</span>
                <span>$599.98</span>
              </div>
              <div className="shipping-section shipping-options">
                <h3>Shipping</h3>
                <label className="shipping-option-item shipping-option">
                  <input name="shipping" type="radio" />
                  <span>Standard Delivery (Free)</span>
                </label>
                <label className="shipping-option-item shipping-option">
                  <input name="shipping" type="radio" />
                  <span>Express Delivery (+$15.00)</span>
                </label>
              </div>
              <div className="total-row summary-item total">
                <span>Total</span>
                <span>$599.98</span>
              </div>
              <button className="checkout-button checkout-btn">
                Proceed to Checkout
              </button>
              <a className="continue-shopping-link continue-shopping" href="/#">
                Continue Shopping
              </a>
            </div>
          </div>
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
