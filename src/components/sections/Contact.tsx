"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";

import {
  CONTACT_INFO,
  SOCIAL_LINKS,
} from "@/lib/constants";

export default function Contact() {
  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setLoading(false);

    alert(
      "Message sent successfully!"
    );
  };

  return (
    <section
      id="contact"
      className="py-32"
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
            CONTACT
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Let's Work Together
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-white/70
            "
          >
            Interested in working
            together or discussing a
            project? Feel free to
            reach out.
          </p>
        </div>

        {/* Content */}

        <div
          className="
            mt-20
            grid
            gap-10
            lg:grid-cols-2
          "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              glass
              rounded-3xl
              border
              border-white/10
              p-8
            "
          >
            <h3
              className="
                text-2xl
                font-bold
              "
            >
              Contact Information
            </h3>

            <div
              className="
                mt-8
                space-y-6
              "
            >
              <div className="flex gap-4">
                <Mail
                  className="
                    text-[#FF6B00]
                  "
                />

                <div>
                  <p>Email</p>

                  <p
                    className="
                      text-white/60
                    "
                  >
                    {
                      CONTACT_INFO.email
                    }
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone
                  className="
                    text-[#FF6B00]
                  "
                />

                <div>
                  <p>Phone</p>

                  <p
                    className="
                      text-white/60
                    "
                  >
                    {
                      CONTACT_INFO.phone
                    }
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin
                  className="
                    text-[#FF6B00]
                  "
                />

                <div>
                  <p>Location</p>

                  <p
                    className="
                      text-white/60
                    "
                  >
                    {
                      CONTACT_INFO.location
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}

            <div
              className="
                mt-10
                flex
                gap-4
              "
            >
              <a
                href={
                  SOCIAL_LINKS.github
                }
                target="_blank"
              >
                <Github />
              </a>

              <a
                href={
                  SOCIAL_LINKS.linkedin
                }
                target="_blank"
              >
                <Linkedin />
              </a>

              <a
                href={
                  SOCIAL_LINKS.instagram
                }
                target="_blank"
              >
                <Instagram />
              </a>

              <a
                href={
                  SOCIAL_LINKS.whatsapp
                }
                target="_blank"
              >
                <MessageCircle />
              </a>
            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              glass
              rounded-3xl
              border
              border-white/10
              p-8
            "
          >
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  outline-none
                "
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  outline-none
                  resize-none
                "
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                mt-6
                flex
                items-center
                gap-2
                rounded-full
                bg-[#FF6B00]
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              {loading
                ? "Sending..."
                : "Send Message"}

              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}