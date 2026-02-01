import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { getProjectBySlug } from "@/data/projects";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle,
  Target,
  Database,
  Quote,
} from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <Link
            to="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="max-w-4xl space-y-6">
            <span className="inline-block text-sm font-medium text-primary">
              Case Study
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {project.demoUrl && (
                <Button asChild size="lg">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Try Live Demo
                  </a>
                </Button>
              )}

              {project.codeUrl && (
                <Button asChild variant="outline" size="lg">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Context */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Problem Context</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Goals */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Project Goals
          </h2>

          <ul className="space-y-3 text-muted-foreground">
            <li>• Handle real-world, large-scale data reliably</li>
            <li>• Establish a strong analytical or ML baseline</li>
            <li>• Improve performance using appropriate techniques</li>
            <li>• Deliver results through a usable, deployable interface</li>
          </ul>
        </div>
      </section>

      {/* Dataset Overview */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="h-6 w-6 text-primary" />
            Dataset Overview
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
            <p><strong>Source:</strong> Public dataset (e.g. Kaggle)</p>
            <p><strong>Scale:</strong> Large, real-world dataset</p>
            <p><strong>Type:</strong> Structured / Unstructured</p>
            <p><strong>Preprocessing:</strong> Cleaning, filtering, labeling</p>
          </div>
        </div>
      </section>

      {/* Role & Tech Stack */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">My Role</h2>
            <p className="text-muted-foreground">{project.role}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Key Decisions & Approach</h2>

          <div className="space-y-4">
            {project.approach.map((step, index) => (
              <div key={index} className="flex gap-4 p-4 bg-card border rounded-lg">
                <div className="w-8 h-8 bg-primary rounded-full text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Evidence */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Visual Evidence
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <figure key={index} className="bg-card border rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <figcaption className="p-3 text-sm text-muted-foreground">
                  Figure {index + 1}: Output or analysis snapshot
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Example Prediction (Optional but strong) */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Quote className="h-6 w-6 text-primary" />
            Example Prediction
          </h2>

          <div className="bg-card border rounded-lg p-6">
            <p className="italic text-muted-foreground mb-3">
              “The product arrived stale and tasted terrible.”
            </p>
            <p className="font-medium text-foreground">
              → Prediction: <span className="text-primary">Negative (0.96)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Impact & Outcomes</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {project.impact.map((item, index) => (
              <div key={index} className="flex gap-3 p-4 bg-accent/50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
