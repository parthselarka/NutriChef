"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { addToWaitlist } from "../lib/waitlist";
import Image from "next/image";

export function Footer() {
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
        "footer",
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
    <footer className="bg-muted/50 border-t">
      {/* Final CTA Section */}
      <section id="waitlist" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="text-primary"> Indian Food Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join thousands of Indians who are excited about finally having a
              nutrition app that understands their food culture. Be the first to
              know when we launch.
            </p>

            {/* Why join benefits */}
            <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                Early access
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                Help shape features
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                No spam
              </li>
            </ul>

            {/* Email Signup */}
            <div className="max-w-lg mx-auto mb-8">
              {!isSubmitted ? (
                <>
                  <form onSubmit={handleSubmit} className="flex gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for early access"
                      required
                      disabled={isLoading}
                      className="flex-1 px-6 py-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center space-x-2 whitespace-nowrap disabled:opacity-50"
                    >
                      <span>
                        {isLoading ? "Joining..." : "Get Early Access"}
                      </span>
                      {!isLoading && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </form>
                  {error && (
                    <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-red-700 dark:text-red-400 text-sm">
                        {error}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-secondary border border-border rounded-lg p-6">
                  <p className="text-secondary-foreground font-medium text-lg">
                    🎉 Welcome to the family!
                  </p>
                  <p className="text-muted-foreground mt-2">
                    You'll be among the first to try Nutrichef when we launch.
                  </p>
                </div>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              🔒 Your email is safe with us. We'll only send updates about
              Nutrichef.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logos/nutrichef-ai-high-resolution-logo-transparent.png"
                  alt="Nutrichef Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                India's first AI-powered nutrition app designed specifically for
                Indian cuisine. Track your food, your way.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:parthselarka2006@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/parth_builds_stuff/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#why-nutrichef"
                    className="hover:text-foreground transition-colors"
                  >
                    Why Nutrichef
                  </a>
                </li>
                <li>
                  <a
                    href="#waitlist"
                    className="hover:text-foreground transition-colors"
                  >
                    Join Waitlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              Nutrichef. Made with ❤️ in India.
            </p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0">
              Built for Indians, by Indians 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
