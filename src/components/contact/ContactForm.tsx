import { useState, type FormEvent } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { contactDirect } from "../../data/contact-data";

type FormStatus = "idle" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  return (
    <div className="contact-form-panel">
      <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-ink md:text-2xl">
        Send a message
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Share your name and question. For urgent orders, call or email us directly.
      </p>

      <form onSubmit={onSubmit} className="contact-form mt-7" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="contact-field">
            <label htmlFor="contact-first-name">First name</label>
            <input
              id="contact-first-name"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className="contact-input"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-last-name">Last name</label>
            <input
              id="contact-last-name"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className="contact-input"
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="contact-phone">Phone number</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="contact-input"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">
            Email address <span className="text-steel">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="contact-input"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="contact-input contact-input--area"
          />
        </div>

        <button type="submit" className="contact-submit group">
          <span>Send message</span>
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </button>

        {status === "sent" ? (
          <p className="contact-form-success" role="status">
            Thanks for writing. This form is not connected yet. Email{" "}
            <a href={contactDirect.emailHref} className="contact-form-success__link">
              {contactDirect.email}
            </a>{" "}
            for a direct reply.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="contact-form-error" role="alert">
            Something went wrong. Try again or email us at {contactDirect.email}.
          </p>
        ) : null}
      </form>
    </div>
  );
}
