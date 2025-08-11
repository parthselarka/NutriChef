"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Camera, BarChart3 } from "lucide-react";
import { useState } from "react";
import { addToWaitlist } from "../lib/waitlist";

export function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await addToWaitlist(
        email,
        "hero",
        navigator.userAgent,
        // IP address will be handled server-side if needed
        ""
      );

      if (result.success) {
        setIsSubmitted(true);
        setEmail("");
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(result.error || "Failed to join waitlist");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-muted-foreground">
              Coming Soon • MVP in Development
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Indian Food Tracker & Calorie Counter
            <br />
            <span className="text-primary">The Smart Way</span>
          </motion.h1>

          {/* SEO-friendly subheading (H2) with primary keywords */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            The Indian food tracker and Indian calorie tracker built for real
            Indian cuisine.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            India’s first AI-powered nutrition app designed specifically for
            Indian cuisine. This{" "}
            <a
              href="#features"
              className="underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-primary"
            >
              Indian food tracker
            </a>{" "}
            and{" "}
            <a
              href="#features"
              className="underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-primary"
            >
              Indian calorie tracker
            </a>{" "}
            lets you snap a photo of your{" "}
            <span className="text-foreground font-semibold">vada pav</span>,
            <span className="text-foreground font-semibold">
              {" "}
              paneer butter masala
            </span>
            , or
            <span className="text-foreground font-semibold"> dosa</span> and get
            instant macro breakdowns.{" "}
            <a
              href="#why-nutrichef"
              className="underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-primary"
            >
              See why Nutrichef is different
            </a>{" "}
            or{" "}
            <a
              href="#waitlist"
              className="underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-primary"
            >
              join the waitlist
            </a>
            .
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Camera className="w-5 h-5 text-primary" />
              <span>AI Photo Recognition</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Smartphone className="w-5 h-5 text-primary" />
              <span>Indian Food Database</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Instant Nutrition Facts</span>
            </div>
          </motion.div>

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="max-w-md mx-auto"
          >
            {!isSubmitted ? (
              <>
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center space-x-2 whitespace-nowrap disabled:opacity-50"
                  >
                    <span>{isLoading ? "Joining..." : "Join Waitlist"}</span>
                    {!isLoading && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
                {error && (
                  <div className="mt-3 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-700 dark:text-red-400 text-sm">
                      {error}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-secondary border border-border rounded-lg p-4">
                <p className="text-secondary-foreground font-medium">
                  🎉 You're on the list!
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  We'll notify you when Nutrichef is ready.
                </p>
              </div>
            )}

            <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                Early access
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                Help shape features
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                No spam
              </li>
            </ul>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Made for Indians, by Indians
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-sm font-medium">Mumbai</span>
              <span className="text-sm font-medium">Delhi</span>
              <span className="text-sm font-medium">Bangalore</span>
              <span className="text-sm font-medium">Chennai</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
