"use client";

import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * General "Contact us" form: 3 required (full name, work email, message) +
 * company optional. Client-side validation + real success state.
 *
 * Submissions are captured by Netlify Forms (requires the site to be hosted on
 * Netlify). The form carries the `data-netlify` attribute + a hidden
 * `form-name` input so Netlify's build bot detects it in the static HTML, and
 * the submit POSTs the encoded fields back to Netlify.
 */
const FORM_NAME = "contact";

/** URL-encode FormData for a Netlify Forms POST. */
function encode(data: FormData): string {
  const params = new URLSearchParams();
  data.forEach((value, key) => params.append(key, String(value)));
  return params.toString();
}
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [startedTracked, setStartedTracked] = useState(false);

  const onFirstInteraction = () => {
    if (!startedTracked) {
      setStartedTracked(true);
      track("contact_form_start");
    }
  };

  function validate(data: FormData): FieldErrors {
    const next: FieldErrors = {};
    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!fullName) next.fullName = "Your name is required.";
    if (!email) next.email = "Email is required.";
    else if (!EMAIL_RE.test(email)) next.email = "Enter a valid email address.";
    if (!message) next.message = "Please add a short message.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    track("contact_form_submit");
    try {
      // Netlify Forms: POST the encoded fields (incl. the hidden form-name).
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error(`Form POST failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border border-dozer-yellow/50 bg-dozer-yellow/10 p-8 text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-dozer-yellow text-black">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-darker-grey">Thanks, message received</h3>
        <p className="mt-2 text-dark-grey">
          We&apos;ll get back to you within one business day. If it&apos;s urgent,
          use the phone or calendar link on the left.
        </p>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      onFocus={onFirstInteraction}
      noValidate
      className="space-y-5"
    >
      {/* Netlify Forms detection + spam honeypot */}
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <Field id="fullName" name="fullName" label="Full name" required autoComplete="name" error={errors.fullName} />
      <Field id="email" name="email" label="Work email" type="email" required autoComplete="email" error={errors.email} />
      <Field id="company" name="company" label="Company" optional autoComplete="organization" />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-darker-grey">
          How can we help?
          <span className="ml-1 text-dozer-yellow" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-darker-grey outline-none transition-colors placeholder:text-medium-grey focus:border-dozer-yellow ${
            errors.message ? "border-red-400" : "border-medium-grey/50"
          }`}
          placeholder="Tell us about your fleet, your site, or what you're trying to solve."
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong sending your message. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-dozer-yellow px-6 py-3.5 font-medium text-black transition-colors hover:bg-[rgb(230_154_12)] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
      <p className="text-center text-xs text-medium-grey">
        We&apos;ll only use your details to respond. See our{" "}
        <a href="/privacy-policy" className="underline hover:text-dark-grey">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

interface FieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  error?: string;
}

function Field({ id, name, label, type = "text", required, optional, autoComplete, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-darker-grey">
        {label}
        {optional && <span className="ml-1.5 font-normal text-medium-grey">(optional)</span>}
        {required && <span className="ml-1 text-dozer-yellow" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-darker-grey outline-none transition-colors placeholder:text-medium-grey focus:border-dozer-yellow ${
          error ? "border-red-400" : "border-medium-grey/50"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
