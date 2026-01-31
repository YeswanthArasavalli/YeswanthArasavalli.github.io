import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Download,
  CheckCircle,
  BarChart3,
  Palette,
  Cog,
  Brain,
  ExternalLink,
  Github,
  Clock,
  Calendar,
} from "lucide-react";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

const services = [
  {
    icon: BarChart3,
    title: "End-to-end data analysis",
    description: "From raw datasets to decision-ready insights",
  },
  {
    icon: Palette,
    title: "Dashboard development",
    description: "Stakeholder-ready dashboards in Power BI and Tableau",
  },
  {
    icon: Cog,
    title: "Automation using Python & APIs",
    description: "Reduce manual reporting and repetitive analysis",
  },
  {
    icon: Brain,
    title: "Applied machine learning",
    description: "Prototyping models for prediction and forecasting",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center gradient-bg pt-16"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Data Analytics • Dashboards • Applied ML
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              I build analytics, dashboards, and ML prototypes{" "}
              <span className="gradient-text">that teams actually use.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Internship and freelance experience turning raw data into
              decision-ready insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-6 text-lg">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg"
              >
                <Link to="/contact">Work With Me</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Open to full-time roles and freelance analytics / ML projects
            </p>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By the Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              A snapshot of scale and outcomes across analytics and applied ML work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              ["5+", "End-to-end projects built"],
              ["568K+", "Records processed & analyzed"],
              ["200+", "Retail SKU categories modeled"],
              ["94%", "Top-5 model accuracy achieved"],
              ["6–10", "Hours saved per week via automation"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <p className="text-4xl font-bold text-primary mb-2">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Work On */}
      <section className="py-20" id="about">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">What I Work On</h2>

              <p className="text-muted-foreground">
                I help startups and teams turn messy data into clear insights,
                dashboards, and deployable machine learning solutions that support
                real business and operational decisions.
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>• Product, customer, and operational analysis</li>
                <li>• Dashboards for non-technical stakeholders</li>
                <li>• Automation of repetitive analysis and reporting</li>
                <li>• Applied ML prototypes for real use cases</li>
              </ul>

              <Button asChild variant="outline">
                <Link to="/about">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-lg border border-border"
                >
                  <service.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-secondary/30" id="projects">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Real-world data problems solved with measurable outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) =>
                [
                  "retail-product-image-recognition",
                  "amazon-food-reviews-sentiment-analysis",
                  "customer-segmentation-analysis",
                ].includes(p.slug)
              )
              .map((project) => (
                <div
                  key={project.slug}
                  className="bg-card rounded-lg border border-border overflow-hidden"
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>

                    <p className="text-sm text-muted-foreground">
                      {project.summary}
                    </p>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-sm">{project.result}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button asChild size="sm">
                        <Link to={`/projects/${project.slug}`}>
                          Case Study
                          <ExternalLink className="ml-1 h-4 w-4" />
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

                      {project.codeUrl && (
                        <Button asChild size="sm" variant="outline">
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-1 h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button size="lg">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="py-20" id="blog">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Writing & Insights</h2>
            <p className="text-muted-foreground">
              Notes on analytics, dashboards, and applied machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold mb-3">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {post.excerpt}
                </p>

                <span className="text-primary text-sm inline-flex items-center">
                  Read Article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let’s Work Together
            </h2>
            <p className="text-lg text-muted-foreground">
              If you’re hiring or exploring a data project, feel free to reach out.
            </p>

            <Button asChild size="lg">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
