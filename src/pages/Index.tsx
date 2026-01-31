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

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center gradient-bg pt-16"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Data Analytics • Dashboards • Applied ML
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              I build analytics, dashboards, and ML prototypes{" "}
              <span className="gradient-text">that teams actually use.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Internships and freelance experience turning raw data into
              decision-ready insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-medium hover:shadow-lg transition-all"
                asChild
              >
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 border-2 hover:border-primary hover:text-primary transition-all"
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

      {/* What I Do Section */}
      <section className="py-20" id="about">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                What I Work On
              </h2>

              <p className="text-muted-foreground">
                I help startups and teams turn raw, messy data into clear
                insights, dashboards, and deployable machine learning solutions
                that support real business and operational decisions.
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>• Analyzing product, customer, and operational data</li>
                <li>
                  • Building dashboards and reports for non-technical
                  stakeholders
                </li>
                <li>
                  • Automating repetitive analysis and reporting workflows
                </li>
                <li>
                  • Prototyping ML solutions for real-world use cases
                </li>
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
                  className="p-5 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <service.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-secondary/30" id="projects">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
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
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="aspect-video bg-accent/50 relative">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {project.summary}
                    </p>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        {project.result}
                      </p>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button asChild size="sm">
                        <Link to={`/projects/${project.slug}`}>
                          View Case Study
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>

                      {project.codeUrl && (
                        <Button asChild variant="outline" size="sm">
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

      {/* Blog Section (Optional credibility, not primary) */}
      <section className="py-20" id="blog">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Writing & Insights
            </h2>
            <p className="text-muted-foreground">
              Notes on data analysis, dashboards, and applied machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {post.excerpt}
                </p>

                <span className="text-primary text-sm font-medium inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Let’s Work Together
            </h2>
            <p className="text-lg text-muted-foreground">
              If you have a data problem that needs clarity, I’d love to help.
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
