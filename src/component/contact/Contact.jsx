import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState("");
  const [disabled, setDisabled] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
    from_name: name,
    from_email: email,
    from_number: number,
    from_contact: contact
    };

    
    await emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        console.log("SUCCESS!");
        setName("");
        setEmail("");
        setNumber("");
        setContact("");
        alert("thank you for contacting us! We will get back to you soon.");
        setTimeout(() => setDisabled(false), 5000);
      })

      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4 p-6  rounded-lg shadow-md max-w-md mx-auto my-12">
      <label htmlFor="name" className="text-lg font-medium">NAME</label>
      <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-orange-500" />

      <label htmlFor="email" className="text-lg font-medium">EMAIL</label>
      <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-orange-500" />

      <label htmlFor="number" className="text-lg font-medium">MOBILE NO</label>
      <input type="tel" pattern="[0-9]{10}" id="number" placeholder="Enter without 0 and country code"required value={number} onChange={(e) => setNumber(e.target.value)} className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-orange-500" style={{ appearance: "textfield" }} />

      <label htmlFor="contact" className="text-lg font-medium">CONTACT</label>
      <textarea id="contact" required value={contact} onChange={(e) => setContact(e.target.value)} className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-orange-500"></textarea>

      <button type="submit" disabled={disabled} className="mt-4 bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition duration-200">Send Email</button>
    </form>
  );
};

export default Contact;