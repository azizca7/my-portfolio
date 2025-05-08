import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import { IProjectCard } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ReadMoreText } from "./readmore";

function ProjectCard(project: IProjectCard) {
  return (
    <div className="group relative max-w-md overflow-hidden rounded-xl bg-gray-700 dark:bg-white/5 border border-gray-400 dark:border-white/10 hover:bg-gray-600 dark:hover:bg-white/10 transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <Image
          width={300}
          height={200}
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium mb-2 text-white dark:text-white">
          {project.title}
        </h3>
        <ReadMoreText text={project.descr} />
        <div className="flex flex-wrap gap-2 mb-16 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 flex gap-4">
          {project.siteLink && (
            <Link
              href={project.siteLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 border border-blue-500 rounded-lg bg-blue-900 text-blue-300 hover:bg-blue-800 hover:text-white transition"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
