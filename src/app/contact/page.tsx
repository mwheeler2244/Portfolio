"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "70f7e2d3-d299-4c2c-afec-eb3be67514da",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        setMessage("Thanks for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("error");
      setMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Navigation />
      <main className="contact-simple">
        <div className="container">
          <div className="contact-content">
            <h1>Get In Touch</h1>
            <p>Have a project in mind? I'd love to hear from you.</p>

            <form onSubmit={handleSubmit} className="contact-form-simple">
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="form-field">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="submit-button-simple"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>

            {formStatus === "success" && (
              <div className="message-success">{message}</div>
            )}

            {formStatus === "error" && (
              <div className="message-error">{message}</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
