"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Award,
  Laptop,
} from "lucide-react";

import { timelineItems } from "@/data/timeline";

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  freelance: Laptop,
  certification: Award,
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32"
    >
      <div className="container-custom">
        {/* Header */}

        <div className="text-center">
          <span
            className="
              text-[#FF6B00]
              font-semibold
              tracking-widest
            "
          >
            EXPERIENCE
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Professional Journey
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-white/70
            "
          >
            My learning journey,
            professional experiences,
            certifications, and projects
            that have shaped my career.
          </p>
        </div>

        {/* Timeline */}

        <div
          className="
            relative
            mt-20
            max-w-4xl
            mx-auto
          "
        >
          {/* Center Line */}

          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-[2px]
              bg-white/10
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {timelineItems.map(
            (item, index) => {
              const Icon =
                iconMap[item.type];

              const isLeft =
                index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay:
                      index * 0.1,
                  }}
                  className={`
                    relative
                    mb-12
                    flex
                    w-full
                    ${
                      isLeft
                        ? "md:justify-start"
                        : "md:justify-end"
                    }
                  `}
                >
                  {/* Icon */}

                  <div
                    className="
                      absolute
                      left-5
                      top-6
                      z-10
                      flex
                      h-10
                      w-10
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FF6B00]
                      text-white
                      md:left-1/2
                    "
                  >
                    <Icon size={18} />
                  </div>

                  {/* Card */}

                  <div
                    className="
                      ml-14
                      w-full
                      rounded-3xl
                      border
                      border-white/10
                      glass
                      p-6
                      md:ml-0
                      md:w-[45%]
                    "
                  >
                    <span
                      className="
                        text-sm
                        text-[#FF6B00]
                      "
                    >
                      {item.date}
                    </span>

                    <h3
                      className="
                        mt-2
                        text-xl
                        font-bold
                      "
                    >
                      {item.title}
                    </h3>

                    <h4
                      className="
                        mt-1
                        text-white/60
                      "
                    >
                      {item.company}
                    </h4>

                    <p
                      className="
                        mt-4
                        text-white/70
                        leading-relaxed
                      "
                    >
                      {item.description}
                    </p>
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