// src/pages/ProjectDetail.tsx

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
  Lightbulb,
  Zap,
  BarChart3,
  Brain,
  Boxes,
} from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  /* ================= METRIC ICON MAP ================= */
  const renderMetricIcon = (
    icon: "accuracy" | "latency" | "scale" | "model"
  ) => {
    switch (icon) {
      case "accuracy":
        return <Brain className="h-5 w-5 text-primary" />;
      case "latency":
        return <Zap className="h-5 w-5 text-primary" />;
      case "scale":
        return <BarChart3 className="h-5 w-5 text-primary" />;
      case "model":
        return <Boxes className="h-5 w-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container max-w-4xl">
          <Link
            to="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="space-y-6">
            {project.caseStudy && (
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary">
                Case Study
              </span>
            )}

            <h1 className="text-4xl md:text-5xl font-bold">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {project.demoUrl && (
                <Button asChild size="lg">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
              )}

              {project.codeUrl && (
                <Button asChild variant="outline" size="lg">
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM CONTEXT ================= */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Problem Context</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* ================= PROJECT GOALS ================= */}
      {project.goals && (
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Project Goals
            </h2>

            <ul className="space-y-3 text-muted-foreground">
              {project.goals.map((goal, i) => (
                <li key={i}>• {goal}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ================= DATASET OVERVIEW ================= */}
      {project.dataset && (
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Database className="h-6 w-6 text-primary" />
              Dataset Overview
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
              <p><strong>Source:</strong> {project.dataset.source}</p>
              <p><strong>Size:</strong> {project.dataset.size}</p>
              {project.dataset.notes && (
                <p className="sm:col-span-2">
                  <strong>Notes:</strong> {project.dataset.notes}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================= BY THE NUMBERS ================= */}
      {project.metrics && (
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-5xl">
            <h2 className="text-2xl font-bold mb-8 text-center">
              By the Numbers
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-card border rounded-lg p-6 text-center space-y-2"
                >
                  <div className="flex justify-center">
                    {renderMetricIcon(metric.icon)}
                  </div>
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= ROLE & STACK ================= */}
      <section className="py-16">
        <div className="container max-w-4xl grid md:grid-cols-2 gap-12">
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

      {/* ================= APPROACH ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">
            Key Decisions & Approach
          </h2>

          <div className="space-y-4">
            {project.approach.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 bg-card border rounded-lg">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISUAL EVIDENCE ================= */}
      {project.images?.length > 0 && (
        <section className="py-16">
          <div className="container max-w-5xl">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Visual Evidence
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((img, i) => (
                <figure
                  key={i}
                  className="bg-card border rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`${project.title} visual ${i + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  {project.imageCaptions?.[i] && (
                    <figcaption className="p-3 text-sm text-muted-foreground">
                      {project.imageCaptions[i]}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= RESULT ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Result</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.result}
          </p>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Impact & Outcomes</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {project.impact.map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-accent/50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEARNINGS ================= */}
      {project.learnings && (
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              Key Learnings
            </h2>

            <ul className="space-y-3 text-muted-foreground">
              {project.learnings.map((l, i) => (
                <li key={i}>• {l}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection />
    </Layout>
  );
}
