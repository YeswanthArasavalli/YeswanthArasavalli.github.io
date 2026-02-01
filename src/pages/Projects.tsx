import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h1 className="mb-4 text-4xl font-bold text-slate-900">
              Project Case Studies
            </h1>
            <p className="text-lg text-slate-600">
              End-to-end analytics and applied machine learning work,
              focused on real problems and measurable outcomes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="group flex flex-col rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {project.images?.length > 0 && (
                  <div className="mb-4 h-48 rounded-md overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                <span className="text-xs font-medium text-primary mb-1">
                  Case Study
                </span>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 flex-grow">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  <Button asChild size="sm">
                    <Link to={`/projects/${project.slug}`}>
                      View Case Study
                    </Link>
                  </Button>

                  {project.demoUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
