import "./styles.css";

export default function Useraccount() {
  return (
    <div className="wrapper-container page-wrapper">
      <div className="content-container c69Mvt34QwGo7W5IKrWBw">
        <header className="header-main">
          <div className="nav-wrapper nav-container">
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
        <main className="main-wrapper main-content-container">
          <aside className="sidebar-container sidebar">
            <ul className="menu-list sidebar-menu">
              <li className="menu-item">
                <a className="menu-link" href="/#">
                  <span>⚙️</span>
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="/#">
                  <span>📦</span>
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="/#">
                  <span>📍</span>
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="/#">
                  <span>💳</span>
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="/#">
                  <span>🔒</span>
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="/#">
                  <span>🛍️</span>
                </a>
              </li>
            </ul>
          </aside>
          <section className="content-section main-section">
            <h2 className="section-heading section-title">Account Overview</h2>
            <div className="profile-grid profile-grid">
              <div className="info-card profile-card">
                <h3 className="card-header">
                  <button className="edit-button edit-btn">✏️ Edit</button>
                </h3>
                <ul className="menu-list info-list">
                  <li className="info-item">John Doe</li>
                  <li className="info-item">john.doe@email.com</li>
                  <li className="info-item">+1 (555) 123-4567</li>
                </ul>
              </div>
              <div className="info-card profile-card">
                <h3 className="card-header">
                  <button className="edit-button edit-btn">✏️ Edit</button>
                </h3>
                <ul className="menu-list info-list">
                  <li className="info-item">123 Main Street</li>
                  <li className="info-item">Apt 4B</li>
                  <li className="info-item">New York, NY 10001</li>
                </ul>
              </div>
              <div className="info-card profile-card">
                <h3 className="card-header">
                  <button className="edit-button edit-btn">✏️ Edit</button>
                </h3>
                <ul className="menu-list info-list">
                  <li className="info-item">•••• •••• •••• 4567</li>
                  <li className="info-item">Expires 12/25</li>
                </ul>
              </div>
              <div className="info-card profile-card">
                <h3 className="card-header">Recent Orders</h3>
                <div className="order-item order-card">
                  <div className="order-header order-header">
                    <span>Order #12345</span>
                    <span className="status-badge order-status">Delivered</span>
                  </div>
                  <div>2 items • $124.99</div>
                </div>
                <div className="order-item order-card">
                  <div className="order-header order-header">
                    <span>Order #12344</span>
                    <span className="status-badge order-status">
                      In Transit
                    </span>
                  </div>
                  <div>1 item • $59.99</div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer-main">
          <div className="nav-wrapper footer-content">
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
