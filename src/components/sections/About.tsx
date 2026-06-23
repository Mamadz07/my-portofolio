"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Fast Learner",
    description:
      "Cepat beradaptasi dengan teknologi dan kebutuhan proyek baru.",
  },
  {
    title: "Problem Solver",
    description:
      "Berfokus pada solusi yang efisien dan scalable.",
  },
  {
    title: "Creative Thinking",
    description:
      "Menggabungkan logika teknis dengan kreativitas desain.",
  },
  {
    title: "Team Collaboration",
    description:
      "Mampu bekerja secara individu maupun dalam tim.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <div className="container-custom">
        <div
          className="
            grid
            gap-16
            lg:grid-cols-2
            items-center
          "
        >
          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <div
              className="
                absolute
                inset-0
                rounded-[32px]
                bg-[#FF6B00]/20
                blur-3xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                glass
              "
            >
              <Image
                src="/images/profile/profile.jpg"
                alt="Muhammad Ilham"
                width={800}
                height={1000}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span
              className="
                text-[#FF6B00]
                font-semibold
                tracking-wider
              "
            >
              ABOUT ME
            </span>

            <h2
              className="
                mt-4
                text-4xl
                md:text-5xl
                font-bold
              "
            >
              Building Digital
              Experiences That
              Matter.
            </h2>

            <p
              className="
                mt-8
                text-lg
                leading-relaxed
                text-white/70
              "
            >
              Saya adalah seorang Full
              Stack Developer yang
              berfokus pada pengembangan
              aplikasi web modern,
              scalable, dan memiliki
              pengalaman pengguna yang
              luar biasa.
            </p>

            <p
              className="
                mt-4
                text-lg
                leading-relaxed
                text-white/70
              "
            >
              Saya senang memecahkan
              masalah kompleks,
              mempelajari teknologi baru,
              serta menciptakan solusi
              digital yang memberikan
              dampak nyata bagi bisnis
              maupun pengguna.
            </p>

            {/* Highlight Cards */}

            <div
              className="
                mt-10
                grid
                gap-4
                sm:grid-cols-2
              "
            >
              {highlights.map(
                (item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
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
                    className="
                      glass
                      rounded-2xl
                      border
                      border-white/10
                      p-5
                      transition-all
                      duration-300
                      hover:border-[#FF6B00]/40
                      hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]
                    "
                  >
                    <h3
                      className="
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-white/60
                        leading-relaxed
                      "
                    >
                      {item.description}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}