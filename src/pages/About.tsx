import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { Download, Briefcase, Target, Lightbulb } from "lucide-react";

const skills = {
  "Analytics & BI": ["Power BI", "Tableau", "SQL", "Excel", "Data Visualization"],
  "Programming": ["Python", "Pandas", "NumPy", "APIs"],
  "Machine Learning": ["Scikit-Learn", "Classification", "Regression", "Feature Engineering"],
  "Workflow & Tools": ["GitHub", "Jupyter Notebook", "VS Code", "Google Colab"],
};

const journey = [
  {
    year: "Present",
    title: "Applied Analytics & Machine Learning",
    description:
      "Working on end-to-end analytics and ML projects focused on real business and operational use cases, including dashboards, automation, and deployable ML demos.",
    icon: Target,
  },
  {
    year: "2023 – 2024",
    title: "Internships & Freelance Work",
    description:
      "Delivered analytics dashboards, automated reporting workflows, customer segmentation analyses, and ML prototypes across multiple problem domains.",
    icon: Briefcase,
  },
  {
    year: "2021 – 2023",
    title: "Building Strong Foundations",
    description:
      "Strengthened fundamentals in Python, SQL, statistics, and data modeling while working on hands-on academic and personal projects.",
    icon: Lightbulb,
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">
            <p className="text-primary font-medium">About</p>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              How I Approach Data Problems
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I focus on turning unclear data questions into structured analysis,
              dashboards, and machine learning solutions that support real
              decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy / Story */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-foreground">
              My Working Philosophy
            </h2>

            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                I approach data work by first understanding the business or
                operational question behind the data. Before choosing tools or
                models, I focus on defining what decision the analysis needs to
                support.
              </p>

              <p>
                My work typically starts with cleaning and structuring messy
                datasets, followed by exploratory analysis to identify patterns,
                gaps, and opportunities. From there, I build dashboards,
                automated workflows, or machine learning models depending on the
                problem context.
              </p>

              <p>
                I prefer simple, explainable solutions where possible. When
                machine learning is used, it is to enhance decision-making—not
                to add unnecessary complexity.
              </p>

              <p>
                Across internships, freelance projects, and personal work, I’ve
                focused on building solutions that are practical, reusable, and
                easy for non-technical stakeholders to understand and use.
              </p>
            </div>

            <Button asChild variant="outline" size="lg">
              <a href="/Yeswanth_Arasavalli_Data_Analyst_Data_Scientist_Nau.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-10 text-center">
              My Journey So Far
            </h2>

            <div className="space-y-8">
              {journey.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <item.icon className="h-6 w-6" />
                    </div>
                    {index < journey.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>

                  <div className="pb-8">
                    <span className="text-sm text-primary font-medium">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-10 text-center">
              Skills & Tooling
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-card rounded-lg border border-border p-6"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-accent/50 rounded-lg text-center">
              <p className="text-foreground font-medium">
                Currently focused on: applied machine learning, automation, and
                scalable analytics workflows
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s Work Together"
        subtitle="If you have a data problem that needs clarity, I’d be happy to discuss it."
      />
    </Layout>
  );
}
