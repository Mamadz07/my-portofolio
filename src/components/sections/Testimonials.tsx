"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 overflow-hidden"
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
            TESTIMONIALS
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            What People Say
          </h2>

          <p
            className="
              mt-6
              mx-auto
              max-w-2xl
              text-white/70
            "
          >
            Feedback from clients,
            collaborators, and partners
            I've worked with.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {testimonials.map(
            (testimonial, index) => (
              <motion.div
                key={testimonial.id}
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
                  y: -8,
                }}
                className="
                  glass
                  rounded-3xl
                  border
                  border-white/10
                  p-6
                  hover:border-[#FF6B00]/40
                  hover:shadow-[0_0_30px_rgba(255,107,0,.15)]
                  transition-all
                "
              >
                {/* Quote */}

                <p
                  className="
                    text-white/70
                    leading-relaxed
                  "
                >
                  "{testimonial.content}"
                </p>

                {/* Profile */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-4
                  "
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="
                      rounded-full
                      object-cover
                    "
                  />

                  <div>
                    <h4
                      className="
                        font-semibold
                      "
                    >
                      {testimonial.name}
                    </h4>

                    <p
                      className="
                        text-sm
                        text-white/60
                      "
                    >
                      {testimonial.position}
                    </p>

                    <p
                      className="
                        text-sm
                        text-[#FF6B00]
                      "
                    >
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}