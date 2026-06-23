"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail } from "lucide-react";

import {
  HERO_ROLES,
  HERO_STATS,
  SITE_CONFIG,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Background Grid */}

      <div className="grid-background" />

      {/* Glow 1 */}

      <div
        className="
          hero-glow
          top-[-200px]
          left-[-200px]
        "
      />

      {/* Glow 2 */}

      <div
        className="
          hero-glow
          bottom-[-300px]
          right-[-300px]
        "
      />

      <div className="container-custom relative z-10">
        <div
          className="
            max-w-5xl
          "
        >
          {/* Small Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mb-6
              inline-flex
              items-center
              rounded-full
              border
              border-white/10
              px-4
              py-2
              glass
            "
          >
            <span
              className="
                mr-2
                h-2
                w-2
                rounded-full
                bg-[#FF6B00]
              "
            />

            <span className="text-sm text-white/80">
              Available For New Opportunities
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-none
            "
          >
            Muhammad
            <br />

            <span className="orange-gradient">
              Ilham
            </span>
          </motion.h1>

          {/* Role Animation */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              mt-6
              text-xl
              md:text-3xl
              font-semibold
              text-white/90
              min-h-[60px]
            "
          >
            <TypeAnimation
              sequence={[
                HERO_ROLES[0],
                2000,
                HERO_ROLES[1],
                2000,
                HERO_ROLES[2],
                2000,
                HERO_ROLES[3],
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
              mt-8
              max-w-2xl
              text-lg
              md:text-xl
              leading-relaxed
              text-white/70
            "
          >
            I build scalable web applications,
            premium digital experiences,
            and modern software solutions
            that combine performance,
            aesthetics, and business value.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >
            <a
              href="#projects"
              className="
                btn-premium
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#FF6B00]
                px-7
                py-4
                font-semibold
                text-white
              "
            >
              View Portfolio

              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                glass
                px-7
                py-4
                font-semibold
                text-white
              "
            >
              Contact Me

              <Mail size={18} />
            </a>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="
              mt-16
              grid
              grid-cols-3
              gap-8
              max-w-xl
            "
          >
            {HERO_STATS.map((item) => (
              <div key={item.label}>
                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-[#FF6B00]
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-white/60
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
        "
      >
        <div
          className="
            h-12
            w-7
            rounded-full
            border
            border-white/20
            flex
            justify-center
          "
        >
          <span
            className="
              mt-2
              h-2
              w-2
              rounded-full
              bg-[#FF6B00]
            "
          />
        </div>
      </motion.div>
    </section>
  );
}