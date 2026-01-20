// import useScrollAnimation from "../hooks/useScrollAnimation";
// import styles from "./Contact.module.css";
// import { useState } from "react";

// const Contact = () => {
//   const ref = useScrollAnimation();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you, ${form.name}! Your message has been sent.`);
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <section id="contact" ref={ref} className={`${styles.contact} fade-up`}>
//       <h2>Contact Me</h2>
//       <p>Have a project idea or want to get in touch? Send me a message!</p>

//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//           rows="5"
//           required
//         ></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;


// import { useState } from "react";
// import { send } from "emailjs-com";
// import useScrollAnimation from "../hooks/useScrollAnimation";
// import styles from "./Contact.module.css";

// const Contact = () => {
//   const ref = useScrollAnimation();
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
//       .then(() => {
//         alert(`Thank you, ${form.name}! Your message has been sent.`);
//         setForm({ name: "", email: "", message: "" });
//       })
//       .catch((err) => {
//         alert("Oops! Something went wrong. Try again.");
//         console.error(err);
//       });
//   };

//   return (
//     <section id="contact" ref={ref} className={`${styles.contact} fade-up`}>
//       <h2>Contact Me</h2>
//       <p>Have a project idea or want to get in touch? Send me a message!</p>

//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//           rows="5"
//           required
//         ></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { send } from "emailjs-com";
import useScrollAnimation from "../hooks/useScrollAnimation";
import styles from "./Contact.module.css";

const Contact = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace the following with your EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        alert(`Thank you, ${form.name}! Your message has been sent.`);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" ref={ref} className={`${styles.contact} fade-up`}>
      <h2>Contact Me</h2>
      <p>Have a project idea or want to get in touch? Send me a message!</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
