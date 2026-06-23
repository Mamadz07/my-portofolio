"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

import {
  NAVIGATION_LINKS,
  SITE_CONFIG,
} from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAVIGATION_LINKS.map(
        (item) => item.href.replace("#", "")
      );

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`
          fixed top-0 left-0 z-50 w-full
          transition-all duration-300
          ${
            isScrolled
              ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}

            <a
              href="#"
              className="font-bold text-xl tracking-tight"
            >
              <span className="text-white">
                Muhammad
              </span>

              <span className="text-[#FF6B00]">
                Ilham
              </span>
            </a>

            {/* Desktop Navigation */}

            <nav className="hidden md:flex items-center gap-8">
              {NAVIGATION_LINKS.map((item) => {
                const isActive =
                  activeSection ===
                  item.href.replace("#", "");

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`
                      relative text-sm font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-[#FF6B00]"
                          : "text-white/80 hover:text-white"
                      }
                    `}
                  >
                    {item.name}

                    {isActive && (
                      <motion.span
                        layoutId="active-nav"
                        className="
                          absolute
                          -bottom-2
                          left-0
                          h-[2px]
                          w-full
                          bg-[#FF6B00]
                        "
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Resume Button */}

            <div className="hidden md:block">
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-premium
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#FF6B00]/30
                  bg-[#FF6B00]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                "
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Button */}

            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="
                md:hidden
                text-white
              "
            >
              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="
              fixed
              top-20
              left-0
              z-40
              w-full
              border-b
              border-white/10
              bg-black/95
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-6">
                {NAVIGATION_LINKS.map(
                  (item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="
                        text-lg
                        text-white/90
                        transition
                        hover:text-[#FF6B00]
                      "
                    >
                      {item.name}
                    </a>
                  )
                )}

                <a
                  href={SITE_CONFIG.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-2
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#FF6B00]
                    px-5
                    py-3
                    font-semibold
                    text-white
                  "
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}