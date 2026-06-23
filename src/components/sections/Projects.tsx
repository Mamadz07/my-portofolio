"use client";

import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Github,
} from "lucide-react";

import { projects } from "@/data/projects";

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Fullstack",
  "UI/UX",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category ===
            activeFilter
        );

  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="container-custom">
        {/* Header */}

        <div className="text-center">
          <span
            className="
              font-semibold
              tracking-widest
              text-[#FF6B00]
            "
          >
            PROJECTS
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Selected Works
          </h2>

          <p
            className="
              mt-6
              text-white/70
              max-w-2xl
              mx-auto
            "
          >
            A collection of projects
            demonstrating my skills in
            frontend, backend, and
            full-stack development.
          </p>
        </div>

        {/* Filters */}

        <div
          className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`
                rounded-full
                px-5
                py-2
                transition-all
                ${
                  activeFilter ===
                  filter
                    ? "bg-[#FF6B00] text-white"
                    : "glass text-white/70"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}

        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-2
          "
        >
          {filteredProjects.map(
            (project, index) => (
              <motion.article
                key={project.id}
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
                {/* Image */}

                <div
                  className="
                    overflow-hidden
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="
                      h-[300px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
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
                      {project.title}
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
                      {project.status}
                    </span>
                  </div>

                  <p
                    className="
                      mt-4
                      text-white/70
                    "
                  >
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {project.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-white/10
                            px-3
                            py-1
                            text-sm
                          "
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  {/* Actions */}

                  <div
                    className="
                      mt-6
                      flex
                      gap-4
                    "
                  >
                    {project.liveUrl && (
                      <a
                        href={
                          project.liveUrl
                        }
                        target="_blank"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-[#FF6B00]
                        "
                      >
                        Live Demo

                        <ArrowUpRight
                          size={16}
                        />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={
                          project.githubUrl
                        }
                        target="_blank"
                        className="
                          inline-flex
                          items-center
                          gap-2
                        "
                      >
                        Github

                        <Github
                          size={16}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}