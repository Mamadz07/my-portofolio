"use client";

import Link from "next/link";
import {
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

import {
  SOCIAL_LINKS,
} from "@/lib/constants";

const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        border-t
        border-white/10
        py-16
      "
    >
      <div className="container-custom">
        <div
          className="
            grid
            gap-12
            lg:grid-cols-3
          "
        >
          {/* Brand */}

          <div>
            <Link
              href="/"
              className="
                text-3xl
                font-black
                tracking-tight
              "
            >
              <span className="text-white">
                Muhammad
              </span>

              <span
                className="
                  text-[#FF6B00]
                "
              >
                Ilham
              </span>
            </Link>

            <p
              className="
                mt-5
                max-w-sm
                text-white/60
                leading-relaxed
              "
            >
              Full Stack Developer
              focused on building
              modern, scalable,
              and user-friendly
              digital products.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3
              className="
                text-lg
                font-semibold
              "
            >
              Navigation
            </h3>

            <ul
              className="
                mt-5
                space-y-3
              "
            >
              {navigation.map(
                (item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="
                        text-white/60
                        transition
                        hover:text-[#FF6B00]
                      "
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3
              className="
                text-lg
                font-semibold
              "
            >
              Connect
            </h3>

            <div
              className="
                mt-5
                flex
                gap-4
              "
            >
              <a
                href={
                  SOCIAL_LINKS.github
                }
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border
                  border-white/10
                  p-3
                  transition
                  hover:border-[#FF6B00]
                  hover:text-[#FF6B00]
                "
              >
                <Github size={18} />
              </a>

              <a
                href={
                  SOCIAL_LINKS.linkedin
                }
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border
                  border-white/10
                  p-3
                  transition
                  hover:border-[#FF6B00]
                  hover:text-[#FF6B00]
                "
              >
                <Linkedin size={18} />
              </a>

              <a
                href={
                  SOCIAL_LINKS.instagram
                }
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border
                  border-white/10
                  p-3
                  transition
                  hover:border-[#FF6B00]
                  hover:text-[#FF6B00]
                "
              >
                <Instagram size={18} />
              </a>

              <a
                href={
                  SOCIAL_LINKS.email
                }
                className="
                  rounded-xl
                  border
                  border-white/10
                  p-3
                  transition
                  hover:border-[#FF6B00]
                  hover:text-[#FF6B00]
                "
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              text-sm
              text-white/50
            "
          >
            © {new Date().getFullYear()}
            {" "}
            Muhammad Ilham.
            All rights reserved.
          </p>

          <p
            className="
              text-sm
              text-white/50
            "
          >
            Built with Next.js,
            TypeScript &
            Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back To Top */}

      <button
        onClick={scrollToTop}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#FF6B00]
          text-white
          shadow-lg
          transition
          hover:scale-110
        "
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}