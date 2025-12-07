import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-slate-900">
              My Projects
            </h1>
            <p className="text-lg text-slate-600">
              Explore my data analysis, dashboarding, and AI projects
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group block h-full transition-all"
              >
                <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {project.images && project.images.length > 0 && (
                    <div className="mb-4 h-48 w-full overflow-hidden rounded-md bg-slate-200">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-600 flex-grow">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
