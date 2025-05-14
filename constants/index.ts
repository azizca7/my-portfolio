import { TicTacToe, ComfyStore,  NinthPlanet } from "@/assets";
import { Github, Instagram, Mail, Send } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  {
    icon: SiReact,
    title: "React.js",
    style: "h-12 w-12 text-cyan-400",
    descr:
      "Building interactive UIs with modern React, hooks, and state management",
  },
  {
    icon: SiNextdotjs,
    title: "Next.js",
    style: "h-12 w-12 text-white",
    descr:
      "Creating fast, SEO-friendly applications with server-side rendering",
  },
  {
    icon: SiTypescript,
    title: "Typescript",
    style: "h-12 w-12 text-blue-400",
    descr: "Developing type-safe code for more reliable applications",
  },

  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    style: "h-12 w-12 text-cyan-400",
    descr: "Crafting responsive designs with utility-first CSS framework",
  },
];

export const projects = [
  {
    title: "Ninth Planet",
    descr:
      "A modern and responsive website created for the music project The Ninth Planet (Yamadzhi & Furcade). Developed using Next.js, TypeScript, TailwindCSS, Framer Motion, and EmailJS. Features include animated UI, contact form, and social media integration..",
    tags: ["Next.js", "Typescript", "Framer M", "EmailJS"],
    image: NinthPlanet,
    githubLink: "https://github.com/azizca7/ninthplanet",
    siteLink: "https://ninthplanetuz.vercel.app/",
  },
  {
    title: "Comfy Store",
    descr:
      "Very convenient online store. You can order the product you like in this store. This store is useful for you",
    tags: ["React", "Axios", "MUI"],
    image: ComfyStore,
    githubLink: "https://github.com/azizca7/comfy-store",
    siteLink: "https://comfy-store-ivory.vercel.app/",
  },
  {
    title: "Tic Tac Toe",
    descr:
      "Tic Tac Toe is a very interesting game, this game is played with a bot. You will like this game very much.",
    tags: ["Next.js", "Typecript", "Javascript"],
    image: TicTacToe,
    githubLink: "https://github.com/azizca7/tic-tac-toe",
    siteLink: "https://tic-tac-toe-seven-chi-99.vercel.app/",
  },
];

export const navLinks = [
  {
    link: "#home",
    title: "Home",
  },
  {
    link: "#about",
    title: "About",
  },
  {
    link: "#projects",
    title: "Projects",
  },
  {
    link: "#contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    link: "https://github.com/azizca7",
    icon: Github,
    name: "Github",
  },
  {
    link: "https://instagram.com/ikromovv._7",
    icon: Instagram,
    name: "Instagram",
  },
  {
    link: "https://mail.google.com/mail/?view=cm&to=ikromovazizbek256@gmail.com",
    icon: Mail,
    name: "Mail",
  },
  {
    link: "https://t.me/diplomat_4100",
    icon: Send,
    name: "Telegram",
  },
];
