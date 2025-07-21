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
    } catch {
      setFormStatus("error");
      setMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Navigation />
      <main className="contact-simple">
        {/* Decorative SVG background pattern */}
        <svg
          className="contact-bg-pattern"
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="contactGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5f2e8" />
              <stop offset="100%" stopColor="#ede8dc" />
            </linearGradient>
          </defs>
          <rect width="1440" height="320" fill="url(#contactGradient)" />
          <circle cx="1200" cy="80" r="120" fill="#4ecdc4" fillOpacity="0.08" />
          <circle cx="200" cy="200" r="80" fill="#4ecdc4" fillOpacity="0.06" />
        </svg>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="contact-content contact-card">
            <h1>
              <span className="contact-title-highlight">Get In Touch</span>
            </h1>
            <p>Have a project in mind? I&apos;d love to hear from you.</p>

            <form
              onSubmit={handleSubmit}
              className="contact-form-simple"
              aria-label="Contact form"
            >
              <div className="form-field">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "submitting"}
                  autoComplete="name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "submitting"}
                  autoComplete="email"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
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
                aria-busy={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>

            {formStatus === "success" && (
              <div className="message-success" role="status" aria-live="polite">
                {message}
              </div>
            )}

            {formStatus === "error" && (
              <div className="message-error" role="alert">
                {message}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
