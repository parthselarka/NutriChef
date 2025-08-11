"use client";

import { motion } from "framer-motion";
import {
  X,
  Zap,
  Users,
  Smartphone,
  Clock,
  AlertCircle,
  Frown,
  Globe,
  TrendingDown,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function WhyNutrichef() {
  const { theme } = useTheme();

  const problems = [
    {
      title: "Too Broad & Complex",
      description:
        "others include workouts, sleep, shopping, coaching - overwhelming for users who just want to track meals.",
      icon: AlertCircle,
      color: "text-red-500",
    },
    {
      title: "Not Beginner-Friendly",
      description:
        "Complex interfaces requiring 5+ clicks to log a single meal. Users get frustrated and quit.",
      icon: Frown,
      color: "text-red-500",
    },
    {
      title: "Western-Centric Database",
      description:
        "Limited Indian food options. You'll struggle to find accurate data for dal, roti, or regional dishes.",
      icon: Globe,
      color: "text-red-500",
    },
    {
      title: "Low Engagement & Retention",
      description:
        "Users abandon the app after a few weeks due to lack of personalization and community support.",
      icon: TrendingDown,
      color: "text-red-500",
    },
  ];

  const solutions = [
    {
      title: "Laser-Focused on Indian Diet",
      description:
        "Only features that matter for Indian food tracking. No distractions, no feature bloat.",
      icon: Zap,
      color: "text-yellow-500",
    },
    {
      title: "Photo-First, Simple UX",
      description:
        "Snap a photo, get instant results. One tap meal logging designed for busy Indian lifestyles.",
      icon: Smartphone,
      color: "text-blue-500",
    },
    {
      title: "Built-in Community",
      description:
        "Connect with fellow Indians, share regional recipes, and stay motivated together on your health journey.",
      icon: Users,
      color: "text-green-500",
    },
    {
      title: "Habit-Reinforcing Design",
      description:
        "Streak trackers, personalized insights, and gentle reminders that actually work for Indian eating patterns.",
      icon: Clock,
      color: "text-purple-500",
    },
  ];

  return (
    <section id="why-nutrichef" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why <span className="text-primary">Nutrichef</span> vs Others?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Current apps like HealthifyMe fail Indian users. We're building
            something specifically for our needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems with existing apps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8 h-24 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-red-500 flex items-center justify-center space-x-2">
                <X className="w-6 h-6" />
                <span>Current Apps Fail Because</span>
              </h3>
              <p className="text-muted-foreground">
                What's wrong with existing solutions
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-red-900/20 border-l-4 border-l-red-500 border border-gray-200 dark:border-red-800 rounded-lg p-6 shadow-sm h-32 flex items-center"
                  style={
                    theme === "light"
                      ? { backgroundColor: "#e2e8f0", borderColor: "#cbd5e1" }
                      : {}
                  }
                >
                  <div className="flex items-start space-x-4 w-full">
                    <div
                      className={`p-2 rounded-lg bg-red-100 dark:bg-red-900/30 ${problem.color} flex-shrink-0`}
                    >
                      <problem.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-semibold text-gray-900 dark:text-red-300 mb-2"
                        style={theme === "light" ? { color: "#1e293b" } : {}}
                      >
                        {problem.title}
                      </h4>
                      <p
                        className="text-gray-700 dark:text-red-400 text-sm leading-relaxed"
                        style={theme === "light" ? { color: "#475569" } : {}}
                      >
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Nutrichef solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8 h-24 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-primary flex items-center justify-center space-x-2">
                <Zap className="w-6 h-6" />
                <span>Nutrichef Does It Right</span>
              </h3>
              <p className="text-muted-foreground">
                Our approach to solving these problems
              </p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black dark:bg-emerald-900/30 border-l-4 border-l-green-500 border border-green-200 dark:border-emerald-700/50 rounded-lg p-6 shadow-sm h-32 flex items-center"
                  style={
                    theme === "light"
                      ? { backgroundColor: "#f8fafc", color: "#1e293b" }
                      : {}
                  }
                >
                  <div className="flex items-start space-x-4 w-full">
                    <div
                      className={`p-2 rounded-lg bg-green-100 dark:bg-emerald-800/50 ${solution.color} flex-shrink-0`}
                      style={
                        theme === "light"
                          ? { backgroundColor: "#a0f3a8ff" }
                          : {}
                      }
                    >
                      <solution.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-semibold text-white dark:text-emerald-100 mb-2"
                        style={theme === "light" ? { color: "#1e293b" } : {}}
                      >
                        {solution.title}
                      </h4>
                      <p
                        className="text-white dark:text-emerald-200 text-sm leading-relaxed"
                        style={theme === "light" ? { color: "#475569" } : {}}
                      >
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core positioning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/20 rounded-2xl p-8 max-w-3xl mx-auto border border-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              "Made for Indians, by Indians"
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your health journey, your food, your way. We understand Indian
              culture, eating habits, and the unique challenges of tracking
              nutrition in a diverse food landscape.
            </p>
            <div className="flex justify-center items-center space-x-2 mt-6">
              <span className="text-2xl">🇮🇳</span>
              <span className="font-semibold text-primary">
                Trust. Reliability. Cultural Understanding.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
