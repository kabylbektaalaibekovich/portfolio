"use client";
import { TfiLocationPin } from "react-icons/tfi";
import scss from "./Contacts.module.scss";
import { useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const validateFields = () => {
    const newErrors = {
      name: name.trim() === "",
      email:
        email.trim() === "" ,
      phone:
        phone.trim() === "" ,
      message: message.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleOrderClick = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFields()) {
      setLoading(true);
      const my_id = " -1002339165857";
      const token = "7898696286:AAHDC3uvHShyLFyq3IX_NV4jnYgkxMfSb1M";

      try {
        const orderSummaryText = `
          Order Summary: 
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `;
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
          chat_id: my_id,
          parse_model: "html",
          text: orderSummaryText,
        });
        setModalVisible(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section id="contacts" className={scss.Contacts}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.contactForm}>
            <h1 className={scss.contactTitle}>Get in Touch</h1>
            <p className={scss.contactDescreption}>
              Let's work together{" "}
              <span className={scss.pin} role="img" aria-label="pin">
                <TfiLocationPin />
              </span>
            </p>
            <form className={scss.form} onSubmit={handleOrderClick}>
              <input
                type="text"
                placeholder="Your name"
                className={`${scss.input} ${errors.name ? scss.error : ""}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your email"
                className={`${scss.input} ${errors.email ? scss.error : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Your phone"
                className={`${scss.input} ${errors.phone ? scss.error : ""}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Your message"
                className={`${scss.textarea} ${
                  errors.message ? scss.error : ""
                }`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className={scss.button} disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
            {modalVisible && (
              <div className={scss.modal}>
                <p className={scss.modalText}>
                  Thank you for reaching out! We will get back to you shortly.
                </p>
                <button
                  className={scss.closeButton}
                  onClick={() => setModalVisible(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
