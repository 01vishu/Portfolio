import style from "./Contact.module.css";
import { IoPaperPlane } from "react-icons/io5";
const Contact = () => {
  return (
    <article className={`${style.contact} ${style.active}`}>
      <header>
        <h2 className={style.article_title}>Contact</h2>
      </header>
      <section className={style.mapbox}>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5407284784606!2d77.28108831543027!3d28.70338208762096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc0bcd231da7%3A0xce4caf44c61d1c6e!2sGokalpuri%2C%20Gokalpur%2C%20Delhi%2C%20110094!5e0!3m2!1sen!2sin!4v1674647044770!5m2!1sen!2sin"
            width="300"
            height="400"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className={style.contact_form}>
        <h3 className={style.form_title}>Contact Form</h3>
        <form className={style.form}>
          <div className={style.input_wrapper}>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className={style.form_input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={style.form_input}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className={style.form_input}
              required
            />
            <button type="submit" className={style.form_btn} disabled>
              <IoPaperPlane size={16} />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </section>
    </article>
  );
};

export default Contact;
