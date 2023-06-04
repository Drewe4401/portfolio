import React, { useState } from "react";
import "./EmailForm.css";


// If you're using Firebase v9 or later, import like this
// import { getFunctions, httpsCallable } from 'firebase/functions';

function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const sendEmailFunctionURL = "https://us-central1-portfoliodrewe4401.cloudfunctions.net/sendEmailHttps";
  
    try {
      const response = await fetch(sendEmailFunctionURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log("Email sent successfully!");
        alert("Email Successfully sent!");
      } else {
        console.error("Error sending email.");
        alert("Error sending Email!");
      }
    } catch (error) {
      console.error("Error calling sendEmailHttps function:", error);
      alert("Error calling sendEmailHttps function:", error)
    }
  };

  return (
    <div className="Contactme">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
      <input
          className="feedback-input"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="feedback-input"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="feedback-input"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default EmailForm;