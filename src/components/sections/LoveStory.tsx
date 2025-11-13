  "use client";

  import { motion } from "framer-motion";

  export default function LoveStory() {
    return (
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#7b8994] bg-cover bg-center">
        <div
          className="absolute inset-0 opacity-5 bg-contain"
          style={{ backgroundImage: "url('/ASSET-BG.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-white/20 -z-10"></div>

        <motion.div
          className="relative z-10 w-full max-w-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-6xl md:text-7xl text-white mb-6 mt-10"
            style={{ fontFamily: "Bailenson, sans-serif" }}
          >
            Our Love Story
          </h2>

          <div className="relative rounded-2xl overflow-hidden p-[6px] bg-gray-400/30">
            <img
              src="/loveStory.png"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-8 text-white mt-6">
            <div>
              <h3 className="text-3xl font-serif italic mb-2">First Meeting</h3>
              <p className="text-sm leading-relaxed">
                Our first hello was through a dating app. What started as a simple
                chat slowly grew into something comforting...
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif italic mb-2">Together as One</h3>
              <p className="text-sm leading-relaxed">
                As our hearts grew closer, we introduced each other to our families...
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif italic mb-2">Our Promise</h3>
              <p className="text-sm leading-relaxed mb-10">
                Despite our differences and challenges, we still choose to nurture this love...
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
