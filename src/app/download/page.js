"use client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Smartphone } from "lucide-react";
import Link from "next/link";

export default function Download() {
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
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Download NutriChef
              </h1>
            </div>

            <p className="text-lg text-muted-foreground mb-12">
              Get NutriChef on your device and start tracking your nutrition
              with ease.
            </p>

            <div className="space-y-6">
              {/* Apple Download Button */}
              <motion.a
                href="https://apps.apple.com/us/app/nutrichef-ai/id6755775670"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="block bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:border-primary/50 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <i className="bi bi-apple text-white dark:text-black text-4xl"></i>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Download for Apple
                    </h2>
                    <p className="text-muted-foreground">
                      Available now on the App Store
                    </p>
                  </div>
                  <ArrowLeft className="w-6 h-6 text-muted-foreground rotate-180 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.a>

              {/* Android Download Button (Waitlist) */}
              <motion.a
                href="/"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:border-primary/50 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <i className="bi bi-android text-white text-4xl"></i>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Download for Android
                      <span className="ml-3 text-sm font-normal text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        Waitlist
                      </span>
                    </h2>
                    <p className="text-muted-foreground">
                      Join the waitlist for early access
                    </p>
                  </div>
                  <ArrowLeft className="w-6 h-6 text-muted-foreground rotate-180 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
