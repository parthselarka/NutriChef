"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { addToWaitlist } from "../lib/waitlist";

/**
 * Android early-access waitlist form (Supabase-backed).
 * `source` is stored with the signup — keep existing values ("hero"/"footer")
 * so historical analytics stay comparable.
 */
export function WaitlistForm({ source = "footer", buttonLabel = "Join the Android waitlist" }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await addToWaitlist(email, source, navigator.userAgent, "");
      if (result.success) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        setError(result.error || "Couldn’t join the waitlist. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        role="status"
        className="card-surface p-5 text-left"
      >
        <p className="font-semibold">You’re on the list.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We’ll email you when NutriChef is ready for Android. Nothing else.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`waitlist-email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`waitlist-email-${source}`}
          type="email"
          name="email"
          autoComplete="email"
          spellCheck={false}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={isLoading}
          className="input-base flex-1"
        />
        <button type="submit" disabled={isLoading} className="btn btn-primary">
          <span>{isLoading ? "Joining…" : buttonLabel}</span>
          {!isLoading && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </button>
      </form>
      <p aria-live="polite" className="min-h-5 mt-2 text-sm text-red-600 dark:text-red-400">
        {error}
      </p>
    </div>
  );
}
