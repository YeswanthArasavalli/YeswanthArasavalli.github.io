import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import {
  Database,
  BarChart3,
  PieChart,
  Brain,
  Cog,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Cleaning & Preparation",
    description:
      "Prepare raw, inconsistent data so it can be reliably analyzed and used for reporting or modeling.",
    example:
      "Cleaning customer and transaction data with missing values, duplicates, and inconsistent formats.",
    features: [
      "Missing value handling and deduplication",
      "Standardizing formats and data types",
      "Basic data validation and quality checks",
      "Clear documentation of transformations",
    ],
  },
  {
    icon: BarChart3,
    title: "Exploratory Analysis & Insights",
    description:
      "Analyze data to answer specific business or operational questions and surface actionable insights.",
    example:
      "Identifying revenue drivers, customer behavior patterns, or operational bottlenecks.",
    features: [
      "Exploratory analysis and summary statistics",
      "Trend, distribution, and correlation analysis",
      "Outlier and anomaly detection",
      "Insight-focused summaries (not raw charts)",
    ],
  },
  {
    icon: PieChart,
    title: "Dashboards & Reporting",
    description:
      "Build dashboards and reports that stakeholders can actually use to track performance and make decisions.",
    example:
      "Sales or operations dashboard with KPIs, filters, and trend views.",
    features: [
      "Power BI / Tableau dashboards",
      "KPI tracking and performance monitoring",
      "Automated or scheduled data refresh",
      "Clear documentation for handover",
    ],
  },
  {
    icon: Brain,
    title: "Applied Machine Learning",
    description:
      "Use machine learning where it adds value — forecasting, classification, or segmentation.",
    example:
      "Customer segmentation or demand forecasting using historical data.",
    features: [
      "Regression, classification, and clustering",
      "Feature engineering and model evaluation",
      "Explainable results and limitations",
      "Prototype-ready models (not black boxes)",
    ],
  },
  {
    icon: Cog,
    title: "Automation & Data Workflows",
    description:
      "Automate repetitive analysis and reporting tasks using Python and APIs.",
    example:
      "Automated weekly report generation sent to stakeholders.",
    features: [
      "Python-based automation scripts",
      "Scheduled reporting workflows",
      "API integrations and basic pipelines",
      "Logging and simple error handling",
    ],
  },
];

const process = [
  {
    step: 1,
    title: "Understand the Problem",
    description:
      "We clarify the business question, data availability, and expected outcome.",
  },
  {
    step: 2,
    title: "Define Scope & Plan",
    description:
      "I propose a clear scope, timeline, and deliverables before starting work.",
  },
  {
    step: 3,
    title: "Build & Iterate",
    description:
      "Data cleaning, analysis, dashboards, or models are built with regular check-ins.",
  },
  {
    step: 4,
    title: "Delivery & Handover",
    description:
      "Final outputs are delivered with explanations and documentation.",
  },
  {
    step: 5,
    title: "Optional Support",
    description:
      "Follow-up support for updates, fixes, or next steps if needed.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <p className="text-primary font-medium">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Practical Data & Analytics Support
            </h1>
            <p className="text-lg text-muted-foreground">
              Focused on clarity, execution, and decision-ready outputs — not
              buzzwords.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="p-4 bg-accent/50 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong>Example:</strong> {service.example}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-4">
                      What’s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full mt-6">
                      <Link to="/contact">
                        Start a Conversation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              How I Work
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {process.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unsure CTA */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-card rounded-xl border border-border p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground mb-6">
              Describe your problem, and I’ll help you figure out the right
              approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://wa.me/916303321322"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
