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
          {/* Header */}
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h1 className="mb-4 text-4xl font-bold text-slate-900">
              Project Case Studies
            </h1>
            <p className="text-lg text-slate-600">
              A selection of data analytics, dashboarding, and applied ML projects
              focused on real-world problems and practical outcomes.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="group flex h-full flex-col rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Thumbnail */}
                {project.images?.length > 0 && (
                  <div className="mb-4 h-48 w-full overflow-hidden rounded-md bg-slate-200">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="mb-4 text-sm text-slate-600 flex-grow">
                  {project.summary}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap gap-3">
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

          {/* Footer CTA */}
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
