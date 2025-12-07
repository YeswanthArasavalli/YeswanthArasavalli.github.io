import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

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
            {/* Projects will be displayed here */}
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                Projects Coming Soon
              </h3>
              <p className="text-slate-600">
                Check back soon to see my latest projects showcase
              </p>
            </div>
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
