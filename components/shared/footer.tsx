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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 border-t border-gray-200 dark:border-white/10 mt-10 bg-background"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-purple-500"
            >
              Azizbek<span className="text-white dark:text-white">.Ikromov</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-5">
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
          </nav>

          <div className="flex items-center gap-3">
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
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
