"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

import { SKILL_CATEGORIES } from "@/lib/constants";

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32"
    >
      <div className="container-custom">
        {/* Section Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              text-[#FF6B00]
              font-semibold
              tracking-widest
            "
          >
            SKILLS
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Technologies &
            Tools I Use
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-white/70
            "
          >
            Modern technologies and
            tools that help me build
            fast, scalable, and
            beautiful digital products.
          </p>
        </motion.div>

        {/* Skill Grid */}

        <div
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {SKILL_CATEGORIES.map(
            (category, index) => {
              const Icon =
                icons[
                  category.title as keyof typeof icons
                ];

              return (
                <motion.div
                  key={category.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay:
                      index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    group
                    glass
                    rounded-3xl
                    border
                    border-white/10
                    p-6
                    transition-all
                    duration-500
                    hover:border-[#FF6B00]/40
                    hover:shadow-[0_0_40px_rgba(255,107,0,0.15)]
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#FF6B00]/10
                      text-[#FF6B00]
                    "
                  >
                    <Icon size={28} />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-semibold
                    "
                  >
                    {category.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-white/60
                    "
                  >
                    {category.description}
                  </p>

                  {/* Skills */}

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {category.skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-3
                            py-2
                            text-sm
                            text-white/80
                            transition-all
                            duration-300
                            group-hover:border-[#FF6B00]/30
                          "
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}