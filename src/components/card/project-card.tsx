import { SquareArrowOutUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";

type project = {
  title: string;
  imageUrl: string;
  projectUrl?: string;
  description: string;
  description2?: string;
  technologies: string[];
};

type ProjectCardProps = {
  project: project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full bg-transparent shadow-lg dark:shadow-2xl transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/30 dark:hover:shadow-white/20 group">
      <CardHeader className="h-14 flex flex-row justify-between items-start">
        <CardTitle className="leading-normal">{project.title}</CardTitle>

        {project.projectUrl && (
          <span>
            <SquareArrowOutUpRight className="stroke-accent-foreground size-5" />
          </span>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-6 h-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full h-40 object-cover rounded-md group-hover:scale-95 transition duration-300 ease-in-out"
        />

        <div className="space-y-2">
          <CardDescription className="text-base">
            {project.description}
          </CardDescription>
          {project.description2 && (
            <CardDescription className="text-base">
              {project.description2}
            </CardDescription>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mt-auto">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx}>{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function LinkedProjectCard({ project }: ProjectCardProps) {
  if (!project.projectUrl) {
    return <ProjectCard project={project} />;
  }

  return (
    <Link href={project.projectUrl} target="_blank" className="h-full w-full">
      <ProjectCard project={project} />
    </Link>
  );
}

export default LinkedProjectCard;
