"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { navLinks, socialLinks } from "@/constants";
import { ILink, ISocial } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Footer() {
  const pathname = usePathname();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-10 border-t border-gray-200 dark:border-white/10 mt-10 bg-background"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-purple-500"
            >
              Azizbek<span className="text-white dark:text-white">.Ikromov</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            {navLinks.map((item: ILink) => (
              <Link
                href={pathname === "/allprojects" ? `/${item.link}` : item.link}
                key={item.title}
                className={cn(
                  "hover:text-purple-500 transition-colors text-sm font-medium"
                )}
              >
                {item.title}
              </Link>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social: ISocial) => (
              <TooltipProvider key={social.link}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.link}
                      aria-label={social.name}
                      target="_blank"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-muted-foreground hover:text-purple-500 hover:bg-purple-500/10 transition"
                      >
                        <social.icon className="h-5 w-5" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{social.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
