'use client';

export default function Subscribe() {

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
        <p className="newsletter-description">
          Stay updated with the latest news, recipes, and exclusive offers from our restaurant.
        </p>
        <p className="newsletter-description">
          Join our community and never miss a delicious moment!
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
