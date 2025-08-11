"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  Database,
  Zap,
  TrendingUp,
  Users,
  Heart,
  Play,
  RotateCcw,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect, useRef } from "react";

export function Features() {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThemeHint, setShowThemeHint] = useState(false);
  const hintTimeoutRef = useRef(null);
  const [hintPos, setHintPos] = useState({ top: 0, left: 0 });
  const hasShownHintRef = useRef(false);
  const scrollRafRef = useRef(0);
  const demoTitleRef = useRef(null);

  // Demo flow steps
  const demoSteps = [
    {
      id: "homepage",
      title: "Homepage - Track Your Progress",
      description: "View your daily nutrition progress and streaks",
      lightImage: "/Mockup screenshots/NC_light_SS-portrait.png",
      darkImage: "/Mockup screenshots/NC_dark_SS-portrait.png",
      buttonText: "Tap AI Scanner",
      buttonAction: "scanner",
    },
    {
      id: "scanner",
      title: "AI Scanner - Capture Your Meal",
      description: "Point your camera at any Indian dish",
      lightImage: "/Mockup screenshots/scanner_light.png", // You'll add this
      darkImage: "/Mockup screenshots/scanner_dark.png", // You'll add this
      buttonText: "Detecting Food...",
      buttonAction: "detecting",
      autoAdvance: true,
      delay: 2000,
    },
    {
      id: "results",
      title: "Instant Results - Nutrition Breakdown",
      description: "Get detailed nutrition info in seconds",
      lightImage: "/Mockup screenshots/results_light.png", // You'll add this
      darkImage: "/Mockup screenshots/results_dark.png", // You'll add this
      buttonText: "Save to Progress",
      buttonAction: "updated",
    },
    {
      id: "updated",
      title: "Updated Progress - Goal Achieved!",
      description: "See your progress update in real-time",
      lightImage: "/Mockup screenshots/updated_light.png", // You'll add this
      darkImage: "/Mockup screenshots/updated_dark.png", // You'll add this
      buttonText: "Try Again",
      buttonAction: "restart",
    },
  ];

  const currentImage =
    theme === "dark"
      ? demoSteps[currentStep].darkImage
      : demoSteps[currentStep].lightImage;

  const MotionImage = motion(Image);

  const handleStepAction = () => {
    const action = demoSteps[currentStep].buttonAction;

    if (action === "restart") {
      setCurrentStep(0);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }
  };

  // Auto-advance for detection step
  useEffect(() => {
    if (demoSteps[currentStep].autoAdvance && isPlaying) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, demoSteps[currentStep].delay);

      return () => clearTimeout(timer);
    }
  }, [currentStep, isPlaying]);

  // Preload demo images (light and dark) to reduce perceived latency during step changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    const urls = new Set();
    demoSteps.forEach((s) => {
      if (s.lightImage) urls.add(s.lightImage);
      if (s.darkImage) urls.add(s.darkImage);
    });
    urls.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Show a desktop-only floating hint pointing to the theme toggle when the progress dots are centered on screen
  useEffect(() => {
    // Only on desktop width
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    // Fine-tune horizontal alignment in case the nav layout needs a tiny nudge (in px)
    const HINT_X_OFFSET = 0;
    const SHOW_DELAY_MS = 2000; // Delay before showing the hint

    const calcPos = () => {
      const toggle = document.getElementById("theme-toggle");
      if (!toggle) return false;
      const rect = toggle.getBoundingClientRect();
      // Place hint below the toggle and center horizontally
      setHintPos({
        top: rect.bottom + 12,
        left: rect.left + rect.width / 2 + HINT_X_OFFSET,
      });
      return true;
    };

    let pollId = null;
    let autoHideId = null;
    let toggleEl = null;

    const isTitleAtTop = () => {
      const el = demoTitleRef.current;
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      // Consider it "at top" when the top is within the first 80px of the viewport
      const TOP_BAND = 80;
      return rect.top >= 0 && rect.top <= TOP_BAND;
    };

    const show = () => {
      // Delay slightly to avoid initial layout shift
      hintTimeoutRef.current = setTimeout(() => {
        const positioned = calcPos();
        setShowThemeHint(true);
        // If toggle isn't found yet, poll briefly to position once it mounts
        if (!positioned) {
          let tries = 0;
          pollId = setInterval(() => {
            tries += 1;
            if (calcPos() || tries >= 10) {
              clearInterval(pollId);
              pollId = null;
            }
          }, 100);
        }
        // Auto hide after a bit
        autoHideId = setTimeout(() => setShowThemeHint(false), 6000);
      }, SHOW_DELAY_MS);
    };

    // Recalculate on resize/scroll without hiding; trigger show when title reaches top band
    const handleResize = () => {
      calcPos();
      if (!hasShownHintRef.current && isTitleAtTop()) {
        hasShownHintRef.current = true;
        show();
      }
    };
    const handleScroll = () => {
      if (scrollRafRef.current) return;
      scrollRafRef.current = requestAnimationFrame(() => {
        calcPos();
        if (!hasShownHintRef.current && isTitleAtTop()) {
          hasShownHintRef.current = true;
          show();
        }
        scrollRafRef.current = 0;
      });
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check in case the title starts in the top band
    if (!hasShownHintRef.current && isTitleAtTop()) {
      hasShownHintRef.current = true;
      show();
    }

    // Hide when user clicks the toggle
    toggleEl = document.getElementById("theme-toggle");
    const hide = () => setShowThemeHint(false);
    if (toggleEl) toggleEl.addEventListener("click", hide, { once: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (autoHideId) clearTimeout(autoHideId);
      if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
      if (pollId) clearInterval(pollId);
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
      if (toggleEl) toggleEl.removeEventListener("click", hide);
    };
  }, []);

  const features = [
    {
      icon: Camera,
      title: "AI Photo Recognition",
      description:
        "Simply snap a photo of your Indian meal and let our AI identify the dish and calculate nutrition instantly.",
      color: "text-blue-500",
    },
    {
      icon: Database,
      title: "Curated Indian Food Database",
      description:
        "Comprehensive database covering regional Indian cuisines from North to South, street food to home cooking.",
      color: "text-green-500",
    },
    {
      icon: Zap,
      title: "Instant Macro Breakdown",
      description:
        "Get detailed macronutrient information (proteins, carbs, fats) and calorie count in seconds.",
      color: "text-yellow-500",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Visual charts and streak trackers to monitor your nutrition goals and build healthy habits.",
      color: "text-purple-500",
    },
    {
      icon: Users,
      title: "Community Features",
      description:
        "Connect with fellow Indians on their health journey. Share recipes, tips, and stay motivated together.",
      color: "text-pink-500",
    },
    {
      icon: Heart,
      title: "Culturally Aware",
      description:
        "Built specifically for Indian eating patterns, festivals, and dietary preferences including vegetarian options.",
      color: "text-red-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Features Built for
            <span className="text-primary"> Indian Food</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature is designed with Indian cuisine and eating habits in
            mind. No more struggling with Western-centric food databases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg bg-secondary ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive App Demo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          {/* Desktop-only floating hint to toggle theme with fade in/out */}
          <AnimatePresence>
            {showThemeHint && (
              <motion.div
                key="theme-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="hidden lg:block pointer-events-none fixed z-[70]"
                style={{
                  top: hintPos.top,
                  left: hintPos.left,
                  transform: "translateX(-50%)",
                }}
                aria-hidden
              >
                <div className="relative">
                  {/* Arrow centered under the toggle, looping and pointing upward */}
                  <svg
                    width="140"
                    height="90"
                    viewBox="0 0 140 90"
                    fill="none"
                    className="text-primary block mx-auto"
                  >
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="6"
                        markerHeight="6"
                        refX="5"
                        refY="3"
                        orient="auto"
                      >
                        <polygon points="0 0, 6 3, 0 6" fill="currentColor" />
                      </marker>
                    </defs>
                    <path
                      d="M0 45 C 35 45, 95 55, 88 42 C 78 28, 70 22, 70 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      markerEnd="url(#arrowhead)"
                      strokeDasharray="6 6"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="-24"
                        dur="1.2s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                  {/* Plain text on the left side, much bigger font, no background/shadow; vertically centered to arrow tail */}
                  <span className="absolute right-full mr-1 top-1/2 -translate-y-1/2 text-2xl md:text-3xl font-semibold text-muted-foreground whitespace-nowrap inline-flex">
                    Toggle theme
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="text-center mb-8">
            <h3
              ref={demoTitleRef}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Try the <span className="text-primary">Interactive Demo</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Experience how Nutrichef works - from photo to progress in seconds
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Screenshot Side */}
              <div className="order-2 md:order-1">
                <div className="relative max-w-sm mx-auto">
                  {/* Fixed-aspect container prevents layout collapse during image transitions */}
                  <div className="relative w-full aspect-[9/19] rounded-3xl shadow-2xl border border-border/20 bg-muted overflow-hidden">
                    <MotionImage
                      key={currentStep}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                      src={currentImage}
                      alt={`Indian food tracker app screenshot — ${demoSteps[currentStep].title}`}
                      fill
                      sizes="(max-width: 768px) 90vw, 384px"
                      className="object-contain"
                      quality={70}
                      priority={currentStep === 0}
                      fetchPriority={currentStep === 0 ? "high" : "auto"}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='60'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3C/svg%3E"
                    />
                  </div>

                  {/* Step indicator */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Step {currentStep + 1} of {demoSteps.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-xl font-bold mb-3">
                    {demoSteps[currentStep].title}
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {demoSteps[currentStep].description}
                  </p>

                  <button
                    onClick={handleStepAction}
                    disabled={demoSteps[currentStep].autoAdvance && isPlaying}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto md:mx-0"
                  >
                    {demoSteps[currentStep].buttonAction === "restart" ? (
                      <>
                        <RotateCcw className="w-4 h-4" />
                        {demoSteps[currentStep].buttonText}
                      </>
                    ) : demoSteps[currentStep].autoAdvance && isPlaying ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        {demoSteps[currentStep].buttonText}
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        {demoSteps[currentStep].buttonText}
                      </>
                    )}
                  </button>
                </motion.div>

                {/* Progress dots */}
                <div className="flex justify-center md:justify-start gap-2 mt-6">
                  {demoSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentStep(index);
                        setIsPlaying(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentStep
                          ? "bg-primary scale-110"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mt-8 text-center text-sm">
            *Interactive demo - actual app experience may vary
          </p>
        </motion.div>
      </div>
    </section>
  );
}
