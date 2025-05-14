"use client";

import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { projects } from "@/constants";
import ProjectCard from "./shared/projectCard";
import Link from "next/link";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="py-10 md:py-15 px-8 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-8 md:mb-14"
      >
        <Badge className="mb-4 bg-pink-400/10 text-pink-400 hover:bg-pink-400/20 transition-colors">
          Featured Work
        </Badge>
        <h2
          className="text-3xl md:text-6xl font-bold pb-6 text-center tracking-tight bg-gradient-to-r  from-purple-700 to-purple-400 font-crete 
        dark:from-white dark:to-purple-400  bg-clip-text text-transparent"
        >
          My Projects
        </h2>
        <p className="text-md md:text-xl text-gray-800 dark:text-white/70">
          Check out my work. It showcases my skills and experience in frontend
          development.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-gray-500 border-gray-500 dark:bg-white/5 border dark:border-white/10">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web Apps</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="design">UI Design</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </TabsContent>

          {["web", "mobile", "design"].map((tab) => (
            <TabsContent value={tab} className="mt-8" key={tab}>
              <h1 className="text-white/70 md:text-2xl text-center">
                Coming soon...
              </h1>
            </TabsContent>
          ))}

          <div className="flex justify-center mt-12">
            <Link href={"/allprojects"}>
              <Button size="lg" variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Tabs>
      </motion.div>
    </section>
  );
}

export default Projects;
