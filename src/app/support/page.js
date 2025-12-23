"use client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Support for <span className="text-primary">Nutrichef</span>
            </h1>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>

              <h2 className="text-2xl font-semibold mb-4">Need help?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                For support, email us at:
              </p>

              <a
                href="mailto:parthselarka2006@gmail.com"
                className="text-2xl md:text-3xl font-bold text-primary hover:underline break-all"
              >
                parthselarka2006@gmail.com
              </a>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24-48 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
