"use client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
              <p className="text-muted-foreground mb-8">
                <strong>Effective date:</strong> December 23, 2025
              </p>

              <p className="text-lg mb-8">
                NutriChef (“we”, “us”) helps you track meals and nutrition. This
                Privacy Policy explains what information we collect, how we use
                it, and your choices.
              </p>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  1) Information we collect
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      A. Account information
                    </h3>
                    <p className="text-muted-foreground">
                      When you create an account, we collect:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>
                        Email address (stored in our authentication system)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      B. Profile and onboarding information
                    </h3>
                    <p className="text-muted-foreground">
                      If you choose to provide it, we collect information stored
                      in your profile, such as:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>Display name</li>
                      <li>Goal type, target weight, timeline</li>
                      <li>Dietary preferences</li>
                      <li>Gender, age</li>
                      <li>Height, weight, activity level</li>
                      <li>
                        Other onboarding responses (e.g., previous apps,
                        obstacles, accomplishments, whether you have a coach)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      C. Nutrition and meal logging information
                    </h3>
                    <p className="text-muted-foreground">
                      When you log meals, we store:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>Meal name and optional brand</li>
                      <li>
                        Nutrition values (calories, protein, carbs, fat) and
                        base values
                      </li>
                      <li>Portion multiplier</li>
                      <li>Log time/date</li>
                      <li>Source of the log (e.g., search or scan)</li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      If you use camera/logging features, we may store:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>
                        image_url (a link to an uploaded image if you upload
                        one)
                      </li>
                      <li>
                        raw_payload (structured data generated from
                        logging/scanning to improve accuracy and record the
                        result)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      D. Notification preferences
                    </h3>
                    <p className="text-muted-foreground">
                      If you enable notifications/reminders, we store settings
                      like:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>Whether notifications are enabled</li>
                      <li>
                        Reminder toggles (meal reminders, digest, coaching
                        nudges)
                      </li>
                      <li>Reminder times and quiet hours</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      E. Subscription information
                    </h3>
                    <p className="text-muted-foreground">
                      If you subscribe to NutriChef Pro:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>
                        Payments are processed by Apple (and subscription
                        management may be handled via RevenueCat).
                      </li>
                      <li>
                        We may receive and store subscription status information
                        (e.g., active/inactive entitlement) to unlock Pro
                        features.
                      </li>
                      <li>We do not store your full payment card details.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      F. Analytics and diagnostics (if enabled)
                    </h3>
                    <p className="text-muted-foreground">
                      We may collect limited usage analytics and
                      crash/diagnostic data to improve reliability and
                      performance. If we do, it is used for:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>App performance monitoring</li>
                      <li>Bug fixing</li>
                      <li>Improving core features</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  2) How we use your information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information above to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Create and manage your account</li>
                  <li>
                    Provide core features (meal logging, goals, nutrition
                    tracking)
                  </li>
                  <li>
                    Personalize your experience (e.g., goals and reminders)
                  </li>
                  <li>
                    Send notifications you enable (meal reminders/digests)
                  </li>
                  <li>Enable and manage Pro subscription access</li>
                  <li>Maintain security and prevent abuse</li>
                  <li>
                    Improve the app (e.g., debugging, performance, feature
                    improvements)
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  3) How we share your information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal data.
                </p>
                <p className="text-muted-foreground mb-4">
                  We may share information only in these cases:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>
                    Service providers that help run the app (e.g.,
                    hosting/database services such as Supabase, notification
                    delivery, analytics/diagnostics if used)
                  </li>
                  <li>
                    Subscription services (Apple and RevenueCat) for purchase
                    verification and entitlement management
                  </li>
                  <li>
                    Legal requirements if required by law or to protect rights,
                    safety, and security
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  4) Data retention
                </h2>
                <p className="text-muted-foreground mb-4">We keep your data:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>As long as your account is active, and</li>
                  <li>
                    As needed to provide the service and comply with legal
                    obligations
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can request deletion (see Section 6).
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  5) Security
                </h2>
                <p className="text-muted-foreground">
                  We use reasonable administrative, technical, and physical
                  safeguards to protect your data. No system is 100% secure, but
                  we aim to protect your information from unauthorized access
                  and misuse.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  6) Your rights and choices
                </h2>
                <p className="text-muted-foreground mb-4">You can:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>
                    Access and update certain profile information in the app
                  </li>
                  <li>
                    Disable notifications in the app or through your device
                    settings
                  </li>
                  <li>
                    Request deletion of your account and associated data by
                    contacting us (see Section 8)
                  </li>
                  <li>
                    Subscription management: Subscriptions are managed through
                    your Apple ID settings in iOS.
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  7) Children’s privacy
                </h2>
                <p className="text-muted-foreground">
                  NutriChef is not intended for children under 13 (or the
                  minimum age required in your country). We do not knowingly
                  collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  8) Contact us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions or want to request deletion:
                </p>
                <p className="text-lg font-medium">
                  Email:{" "}
                  <a
                    href="mailto:parthselarka2006@gmail.com"
                    className="text-primary hover:underline"
                  >
                    parthselarka2006@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
