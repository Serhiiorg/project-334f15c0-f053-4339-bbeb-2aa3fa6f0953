import "./styles.css";
import "@phosphor-icons/web/regular";

export default function Productlisting() {
  return (
    <div className="wrapper-container page-wrapper">
      <div className="main-layout main-layout main-layout main-layout clazz-70uylg clazz-aol7pp main-layout layout-container">
        <header className="header-wrapper header-wrapper header-wrapper header-wrapper header-wrapper clazz-hgehf9 clazz-1kp9hno">
          <div className="container container container container container container container nav-container">
            <a
              className="brand-logo clazz-15wpq9w clazz-1xp645q clazz-14q3fw5 clazz-1gsxus8 clazz-1gsxus8 clazz-1gsxus8 logo"
              href="/"
            >
              📈 SellMax
            </a>
            <nav>
              <a
                className="nav-link clazz-vq78ka clazz-1vjxt7 clazz-1rarg19 clazz-q2mnix clazz-q2mnix clazz-q2mnix"
                href="/product_listing"
              >
                Products
              </a>
              <a
                className="nav-link clazz-vq78ka clazz-1vjxt7 clazz-1rarg19 clazz-q2mnix clazz-q2mnix clazz-q2mnix"
                href="/product_detail"
              >
                Details
              </a>
              <a
                className="nav-link clazz-vq78ka clazz-1vjxt7 clazz-1rarg19 clazz-q2mnix clazz-q2mnix clazz-q2mnix"
                href="/shopping_cart"
              >
                Cart
              </a>
              <a
                className="nav-link clazz-vq78ka clazz-1vjxt7 clazz-1rarg19 clazz-q2mnix clazz-q2mnix clazz-q2mnix"
                href="/checkout"
              >
                Checkout
              </a>
              <a
                className="nav-link clazz-vq78ka clazz-1vjxt7 clazz-1rarg19 clazz-q2mnix clazz-q2mnix clazz-q2mnix"
                href="/user_account"
              >
                Account
              </a>
            </nav>
          </div>
        </header>
        <main className="main-content main-content main-content main-content main-content main-content main-content">
          <section className="hero-section hero-section hero-section hero-section hero-section clazz-hx4ge5 clazz-23s9l1 hero">
            <h1 className="hero-title clazz-utsbcy clazz-1hb8t66 clazz-7da330 clazz-14x9q8i clazz-14x9q8i clazz-14x9q8i clazz-3pwdtb clazz-14x9q8i">
              Transform Your Product into a Success Story 457913
            </h1>
            <p className="hero-description clazz-70qkve clazz-22brdj clazz-1c4w4ba clazz-19s2r2p clazz-19s2r2p clazz-19s2r2p">
              Leverage our platform to maximize your product's potential and
              reach more customers
            </p>
            <a
              className="primary-button clazz-12ddy8x clazz-1pnxn3z clazz-1gu2yhr clazz-1vdf5q clazz-1vdf5q clazz-1vdf5q clazz-1dex6v1 clazz-1vdf5q clazz-1dex6v1 clazz-1vdf5q clazz-1dex6v1 clazz-yvpgll cta-button"
              href="/product_listing"
            >
              Get Started 2357
            </a>
          </section>
          <div className="features-grid features-grid features-grid features-grid features-grid features-grid features-grid features">
            <div className="feature-card feature-card feature-card feature-card feature-card clazz-b0756d clazz-rtdmvs feature-card">
              <div className="feature-icon clazz-197cqfb clazz-atquz2 clazz-1xwbxah clazz-od4j2q clazz-od4j2q clazz-od4j2q feature-icon">
                📊
              </div>
              <h3 className="feature-title clazz-1jyx6gg clazz-19ef3mf clazz-5vk5ht clazz-19fns4c clazz-19fns4c clazz-19fns4c">
                Market Analysis
              </h3>
              <p>
                Get detailed insights about your target market and competitors
              </p>
            </div>
            <div className="feature-card feature-card feature-card feature-card feature-card clazz-b0756d clazz-rtdmvs feature-card">
              <div className="feature-icon clazz-197cqfb clazz-atquz2 clazz-1xwbxah clazz-od4j2q clazz-od4j2q clazz-od4j2q feature-icon">
                🎯
              </div>
              <h3 className="feature-title clazz-1jyx6gg clazz-19ef3mf clazz-5vk5ht clazz-19fns4c clazz-19fns4c clazz-19fns4c">
                Target Audience
              </h3>
              <p>Identify and reach your ideal customers effectively</p>
            </div>
            <div className="feature-card feature-card feature-card feature-card feature-card clazz-b0756d clazz-rtdmvs feature-card">
              <div className="feature-icon clazz-197cqfb clazz-atquz2 clazz-1xwbxah clazz-od4j2q clazz-od4j2q clazz-od4j2q feature-icon">
                📈
              </div>
              <h3 className="feature-title clazz-1jyx6gg clazz-19ef3mf clazz-5vk5ht clazz-19fns4c clazz-19fns4c clazz-19fns4c">
                Growth Strategy
              </h3>
              <p>Develop a winning strategy for sustainable growth</p>
            </div>
          </div>
        </main>
        <footer className="footer-wrapper clazz-1w9ynuw clazz-gc8lko clazz-it194j clazz-13h61k0 clazz-1ih6btx clazz-1jkz06w">
          <div className="container container container container container container container footer-content">
            <div className="footer-logo">📈 SellMax</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
