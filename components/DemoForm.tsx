"use client";

import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  email?: string;
  fullName?: string;
  company?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Free inboxes — we ask for a work email to qualify.
const FREE_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com"];

/**
 * Lean demo form: 3 required (work email, full name, company) + 2 optional
 * (fleet size, phone) — down from the live site's 7 fields. Client-side
 * validation + a real success state.
 *
 * TODO before launch: wire handleSubmit to the CRM / scheduler. The fetch to
 * /api/demo below is a placeholder — point it at HubSpot/Salesforce/Chili Piper
 * (or post directly to a form endpoint) and remove the simulated success.
 */
export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [startedTracked, setStartedTracked] = useState(false);

  // Fire demo_form_start the first time the user interacts with any field.
  const onFirstInteraction = () => {
    if (!startedTracked) {
      setStartedTracked(true);
      track("demo_form_start");
    }
  };

  function validate(data: FormData): FieldErrors {
    const next: FieldErrors = {};
    const email = String(data.get("email") ?? "").trim();
    const fullName = String(data.get("fullName") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();

    if (!email) next.email = "Work email is required.";
    else if (!EMAIL_RE.test(email)) next.email = "Enter a valid email address.";
    else if (FREE_DOMAINS.includes(email.split("@")[1]?.toLowerCase()))
      next.email = "Please use your work email.";

    if (!fullName) next.fullName = "Full name is required.";
    if (!company) next.company = "Company is required.";
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
    track("demo_form_submit", {
      hasFleetSize: Boolean(data.get("fleetSize")),
      hasPhone: Boolean(data.get("phone")),
    });

    try {
      // TODO: replace this placeholder with the real CRM/scheduler endpoint.
      // Example: await fetch("/api/demo", { method: "POST", body: data });
      await new Promise((r) => setTimeout(r, 600));
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
        <h3 className="mt-4 text-xl font-bold text-darker-grey">You&apos;re all set</h3>
        <p className="mt-2 text-dark-grey">
          Thanks — we got your request. A Dozer specialist will reach out within
          one business day to book your 15-minute intro and show live footage.
        </p>
        <p className="mt-4 text-sm text-medium-grey">
          Prefer to grab a time now? Use the calendar link on the left.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={onFirstInteraction} noValidate className="space-y-5">
      <Field
        id="email"
        name="email"
        label="Work email"
        type="email"
        required
        autoComplete="email"
        error={errors.email}
      />
      <Field
        id="fullName"
        name="fullName"
        label="Full name"
        required
        autoComplete="name"
        error={errors.fullName}
      />
      <Field
        id="company"
        name="company"
        label="Company"
        required
        autoComplete="organization"
        error={errors.company}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fleetSize" name="fleetSize" label="Fleet size" optional type="number" />
        <Field id="phone" name="phone" label="Phone" optional type="tel" autoComplete="tel" />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong submitting the form. Please try again or email us.
        </p>
      )}

      {/* Privacy reassurance right next to the submit button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-dozer-yellow px-6 py-3.5 font-medium text-black transition-colors hover:bg-[rgb(230_154_12)] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Book a 15-min intro"}
      </button>
      <p className="text-center text-xs text-medium-grey">
        No obligation. We&apos;ll never share your information, and you can opt out
        anytime. See our{" "}
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
