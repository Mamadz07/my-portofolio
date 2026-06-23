"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { showcaseWebsites } from "@/data/showcase";

export default function LiveShowcase() {
  return (
    <section
      id="showcase"
      className="relative py-32"
    >
      <div className="container-custom">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              text-[#FF6B00]
              font-semibold
              tracking-widest
            "
          >
            LIVE WEBSITE SHOWCASE
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Websites I've Built
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-white/70
            "
          >
            A curated collection of real
            websites and digital products
            that showcase my development
            and design capabilities.
          </p>
        </div>

        {/* Showcase Grid */}

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-2
          "
        >
          {showcaseWebsites.map(
            (website, index) => (
              <motion.article
                key={website.id}
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
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  glass
                "
              >
                {/* Browser Header */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    border-b
                    border-white/10
                    px-4
                    py-3
                  "
                >
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />

                  <div
                    className="
                      ml-4
                      rounded-full
                      bg-white/5
                      px-4
                      py-1
                      text-xs
                      text-white/50
                    "
                  >
                    {website.url}
                  </div>
                </div>

                {/* Website Preview */}

                <div className="overflow-hidden">
                  <Image
                    src={website.image}
                    alt={website.name}
                    width={1400}
                    height={900}
                    className="
                      h-[320px]
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}

                <div className="p-6">
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <h3
                      className="
                        text-2xl
                        font-bold
                      "
                    >
                      {website.name}
                    </h3>

                    <span
                      className="
                        rounded-full
                        bg-[#FF6B00]/10
                        px-3
                        py-1
                        text-xs
                        text-[#FF6B00]
                      "
                    >
                      {website.category}
                    </span>
                  </div>

                  <p
                    className="
                      mt-4
                      text-white/70
                    "
                  >
                    {website.description}
                  </p>

                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-[#FF6B00]
                      font-medium
                    "
                  >
                    Visit Website

                    <ExternalLink
                      size={16}
                    />
                  </a>
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}