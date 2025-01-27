import "./styles.css";

export default function Checkout() {
  return (
    <div className="wrapper-container page-wrapper">
      <div className="app-container SIw4dP4NNrZDEIo663TkX">
        <header className="header-main">
          <div className="content-container nav-container">
            <a className="header-logo logo" href="/">
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
          <div className="checkout-layout checkout-container">
            <div className="checkout-progress checkout-steps">
              <div className="progress-tracker steps-indicator">
                <div className="progress-step step active">
                  <div className="step-active step-number">1</div>
                  <span>Shipping</span>
                </div>
                <div className="progress-step step">
                  <div className="step-inactive step-number">2</div>
                  <span>Payment</span>
                </div>
                <div className="progress-step step">
                  <div className="step-inactive step-number">3</div>
                  <span>Review</span>
                </div>
                <div className="progress-line step-line"></div>
              </div>
              <div className="shipping-form form-section">
                <h2>Shipping Address</h2>
                <form>
                  <div className="form-field input-group">
                    <label className="field-label" htmlFor="fullname">
                      Full Name
                    </label>
                    <input className="field-input" id="fullname" type="text" />
                  </div>
                  <div className="form-field input-group">
                    <label className="field-label" htmlFor="address">
                      Street Address
                    </label>
                    <input className="field-input" id="address" type="text" />
                  </div>
                  <div className="form-field input-group">
                    <label className="field-label" htmlFor="city">
                      City
                    </label>
                    <input className="field-input" id="city" type="text" />
                  </div>
                  <div className="form-field input-group">
                    <label className="field-label" htmlFor="country">
                      Country
                    </label>
                    <select className="field-input" id="country">
                      <option>Select Country</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                    </select>
                  </div>
                  <div className="form-field input-group">
                    <label className="field-label" htmlFor="zip">
                      ZIP Code
                    </label>
                    <input className="field-input" id="zip" type="text" />
                  </div>
                  <div className="form-actions button-group">
                    <button className="button-secondary btn-back" type="button">
                      Back
                    </button>
                    <button className="button-primary btn-next" type="button">
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="order-summary order-summary">
              <h2>Order Summary</h2>
              <div className="summary-row summary-item">
                <span>Subtotal</span>
                <span>$99.99</span>
              </div>
              <div className="summary-row summary-item">
                <span>Shipping</span>
                <span>$4.99</span>
              </div>
              <div className="summary-row summary-item">
                <span>Tax</span>
                <span>$10.00</span>
              </div>
              <div className="summary-total summary-item total">
                <span>Total</span>
                <span>$114.98</span>
              </div>
              <div className="security-badge secure-badge">
                <span>🔒</span>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer-main">
          <div className="content-container footer-content">
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
