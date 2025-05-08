import { TicTacToe, ComfyStore, ClothingStore } from "@/assets";
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
  {
    title: "Clothing Store",
    descr:
      "The clothing store is very well designed. If I optimize it, it will be a ready-made website for clothing stores.",
    tags: ["React", "Axios"],
    image: ClothingStore,
    githubLink: "https://github.com/azizca7/online-magazine",
    siteLink: "https://online-magazine-eight.vercel.app/",
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
