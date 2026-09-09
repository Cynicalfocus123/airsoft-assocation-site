import type { Metadata } from "next";
import styles from "./ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Thailand Airsoft Association",
  description: "Contact the Thailand Airsoft Association for general inquiries, complaints, partnerships, sponsorships, and other requests.",
};

const purposes = ["GENERAL INQUIRY", "COMPLAINT", "PARTNERSHIP", "SPONSORSHIP", "OTHER REQUESTS"];

export default function ContactPage() {
  return <section className={styles.page} aria-labelledby="contact-title">
    <p className="eyebrow">GET IN TOUCH</p>
    <div className={styles.intro}>
      <h1 id="contact-title">CONTACT US</h1>
      <div className={styles.copy}>
        <p>For complaints, general inquiries, partnerships, sponsorships, or any other requests, please contact the Thailand Airsoft Association at:</p>
        <a href="mailto:info@thaiairsoft.org">info@thaiairsoft.org</a>
      </div>
    </div>
    <div className={styles.purposes} aria-label="Contact purposes">
      {purposes.map((purpose) => <span key={purpose}>{purpose}</span>)}
    </div>
  </section>;
}
