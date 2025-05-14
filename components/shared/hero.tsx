"use client";

import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-20 md:pt-36 md:pb-32 container px-4 mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Badge className="mb-5 px-4 py-2 text-sm bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition-colors rounded-full">
            Available for work
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight font-crete bg-gradient-to-r from-purple-700 to-purple-400 dark:from-white dark:to-purple-400 bg-clip-text text-transparent leading-tight mb-3"
        >
          Hi, I am Azizbek Ikromov
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold tracking-tight font-crete text-gray-900 dark:text-white mb-6"
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-base md:text-lg text-muted-foreground dark:text-white/70 max-w-2xl mb-10 leading-relaxed"
        >
          I am a graduate of Najot Talim and a high school student. I bring an
          individual approach to every project — prioritizing clean design,
          smooth functionality, and user-friendly experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="/resume/Azizbek_Ikromov_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="group transition-all duration-200">
              Download Resume
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </a>
          <Link href="#contact">
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
