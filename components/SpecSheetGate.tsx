"use client";

import { useState } from "react";
import { HubspotForm } from "@/components/HubspotForm";

/**
 * "Download spec sheet" flow. The button reveals the HubSpot-gated form; once
 * HubSpot confirms the submission, we surface the PDF and start the download.
 *
 * The site is a static export, so the PDF is a real file under
 * /public/spec-sheets/ (placeholders for now, see the TODO in content/hardware.ts).
 */
export function SpecSheetGate({
  pdfUrl,
  sheetName,
}: {
  pdfUrl: string;
  sheetName: string;
}) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  function serve() {
    setReady(true);
    // Start the download for the user once the form is submitted.
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-dozer-yellow px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-[rgb(230_154_12)]"
      >
        Download spec sheet
      </button>
    );
  }

  return (
    <div className="rounded-md border border-medium-grey/30 bg-white p-6">
      {ready ? (
        <div role="status">
          <h3 className="text-lg font-bold text-darker-grey">Your spec sheet is downloading</h3>
          <p className="mt-2 text-sm text-dark-grey">
            If it does not start automatically,{" "}
            <a href={pdfUrl} className="text-darker-grey underline underline-offset-2" download>
              download the {sheetName} spec sheet
            </a>
            .
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-bold text-darker-grey">Get the {sheetName} spec sheet</h3>
          <p className="mt-1.5 text-sm text-dark-grey">
            Tell us where to send it and the PDF opens right away.
          </p>
          <div className="mt-5">
            <HubspotForm trackId="demo_form_submit" onSubmitted={serve} />
          </div>
        </>
      )}
    </div>
  );
}
