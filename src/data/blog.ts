export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: BlogSection[];
}

interface BlogSection {
  type: "heading" | "paragraph" | "list" | "code" | "quote";
  content: string;
  items?: string[];
  language?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "power-bi-vs-tableau",
    title: "Power BI vs Tableau: Choosing the Right BI Tool",
    excerpt:
      "A practical comparison of Power BI and Tableau, focusing on cost, usability, and real-world business use cases.",
    date: "Dec 2024",
    readTime: "5 min read",
    category: "Business Intelligence",
    content: [
      {
        type: "paragraph",
        content:
          "Choosing the right business intelligence tool is a critical decision for data-driven teams. Power BI and Tableau are both industry leaders, but they serve different organizational needs, budgets, and technical environments. This article breaks down the key trade-offs to help make an informed choice.",
      },
      { type: "heading", content: "Pricing and Licensing" },
      {
        type: "paragraph",
        content:
          "Power BI offers a cost advantage, particularly for organizations already using Microsoft 365. Tableau, while more expensive, provides greater flexibility and advanced visualization capabilities out of the box.",
      },
      { type: "heading", content: "Ease of Use" },
      {
        type: "paragraph",
        content:
          "Power BI has a gentler learning curve for Excel users, while Tableau requires more upfront learning but offers more freedom in visualization design once mastered.",
      },
      { type: "heading", content: "Data Connectivity" },
      {
        type: "paragraph",
        content:
          "Both tools support a wide range of data sources. Power BI integrates tightly with Microsoft products, while Tableau performs well with live connections and large datasets.",
      },
      { type: "heading", content: "Visualization Capabilities" },
      {
        type: "paragraph",
        content:
          "Tableau still leads in advanced visualizations, but Power BI now covers most business use cases effectively.",
      },
      { type: "heading", content: "Recommendation" },
      {
        type: "paragraph",
        content:
          "Power BI is often the better choice for budget-conscious teams and Microsoft-centric environments. Tableau is better suited for teams prioritizing advanced visual design and flexibility.",
      },
      { type: "heading", content: "Conclusion" },
      {
        type: "paragraph",
        content:
          "There is no universal winner — the right tool depends on the problem, team, and constraints.",
      },
    ],
  },

  {
    slug: "how-i-clean-messy-data",
    title: "How I Clean Messy Data: A Practical Workflow",
    excerpt:
      "A repeatable workflow I use to transform messy datasets into reliable, analysis-ready data using Python and SQL.",
    date: "Nov 2024",
    readTime: "7 min read",
    category: "Data Engineering",
    content: [
      {
        type: "paragraph",
        content:
          "Data cleaning often consumes most of the time in analytics projects. Over time, I’ve developed a structured workflow that helps ensure consistency, reliability, and reproducibility when working with messy datasets.",
      },
      { type: "heading", content: "Step 1: Initial Assessment" },
      {
        type: "paragraph",
        content:
          "Before writing code, I explore the dataset to understand its structure, data types, missing values, duplicates, and obvious anomalies.",
      },
      {
        type: "code",
        content:
          "import pandas as pd\n\ndf = pd.read_csv('raw_data.csv')\nprint(df.info())\nprint(df.describe())\nprint(df.isnull().sum())",
        language: "python",
      },
      { type: "heading", content: "Step 2: Handle Missing Values" },
      {
        type: "paragraph",
        content:
          "Missing data is handled based on context and impact, not by blindly dropping or filling values.",
      },
      { type: "heading", content: "Step 3: Standardize Formats" },
      {
        type: "paragraph",
        content:
          "Standardizing dates, text fields, and categories helps ensure consistency across analysis and reporting.",
      },
      {
        type: "code",
        content:
          "df['date'] = pd.to_datetime(df['date'], errors='coerce')\ndf['name'] = df['name'].str.strip().str.title()\ndf['category'] = df['category'].str.lower()",
        language: "python",
      },
      { type: "heading", content: "Step 4: Remove Duplicates" },
      {
        type: "paragraph",
        content:
          "Duplicates are identified using business logic rather than relying solely on exact matches.",
      },
      { type: "heading", content: "Step 5: Validate and Document" },
      {
        type: "paragraph",
        content:
          "Final validation ensures the data meets expectations, and all transformations are documented for reuse.",
      },
      {
        type: "quote",
        content:
          "Good data cleaning is invisible — problems only surface when it’s done poorly.",
      },
      { type: "heading", content: "Tools I Use" },
      {
        type: "paragraph",
        content:
          "Python, SQL, and lightweight validation checks form the backbone of most cleaning workflows.",
      },
    ],
  },

  {
    slug: "analytics-to-applied-machine-learning",
    title: "From Analytics to Applied Machine Learning: How I Decide When ML Is Worth It",
    excerpt:
      "How I approach machine learning from an analytics background — and how I decide whether ML adds real value or unnecessary complexity in real projects.",
    date: "Jan 2025",
    readTime: "7 min read",
    category: "Machine Learning",
    content: [
      {
        type: "heading",
        content: "Problem / Question",
      },
      {
        type: "paragraph",
        content:
          "Many analytics problems can be solved with SQL, dashboards, or simple statistical models. The challenge is knowing when machine learning genuinely improves outcomes — and when it only adds complexity without business impact.",
      },
  
      {
        type: "heading",
        content: "Why It Matters in Real Projects",
      },
      {
        type: "paragraph",
        content:
          "In production environments, machine learning introduces costs: longer development cycles, harder debugging, model monitoring, and stakeholder trust issues. Applying ML too early often leads to fragile solutions that are difficult to explain or maintain.",
      },
      {
        type: "paragraph",
        content:
          "Teams that succeed with ML usually start by exhausting analytical approaches first, then move to predictive models only when clear limitations appear.",
      },
  
      {
        type: "heading",
        content: "My Approach",
      },
      {
        type: "paragraph",
        content:
          "Coming from an analytics background, I treat machine learning as a continuation of decision-making rather than a replacement for analysis. I first ask whether trends, rules, or simple models already answer the business question.",
      },
      {
        type: "paragraph",
        content:
          "In multiple projects, including customer behavior analysis and sentiment classification, I began with exploratory analysis and baseline models before considering more complex approaches.",
      },
  
      {
        type: "heading",
        content: "Trade-offs & Decisions",
      },
      {
        type: "paragraph",
        content:
          "Simple models offer interpretability, faster iteration, and easier stakeholder buy-in. However, they may fail when relationships are non-linear, inputs are unstructured, or prediction accuracy directly affects revenue or risk.",
      },
      {
        type: "paragraph",
        content:
          "Machine learning becomes justified when these limitations are measurable and when the expected performance gain outweighs the added operational cost.",
      },
  
      {
        type: "heading",
        content: "What I Learned",
      },
      {
        type: "paragraph",
        content:
          "Applied machine learning is less about algorithms and more about judgment. The strongest signal of ML readiness is not model complexity, but clarity in problem definition, evaluation metrics, and deployment constraints.",
      },
      {
        type: "paragraph",
        content:
          "In practice, many problems benefit more from better features and cleaner data than from more advanced models.",
      },
  
      {
        type: "heading",
        content: "When I Would Do It Differently",
      },
      {
        type: "paragraph",
        content:
          "If a problem involves large-scale unstructured data, real-time predictions, or clear non-linear behavior from the start, I would move to ML earlier — but still establish a lightweight baseline for comparison.",
      },
      {
        type: "paragraph",
        content:
          "The key lesson is not to avoid machine learning, but to apply it intentionally, with a clear understanding of its cost and value.",
      },
    ],
  }

  {
    slug: "baseline-models-first",
    title: "Baseline Models First: The Most Ignored Rule in Data Science",
    excerpt:
      "Why I always start with simple baseline models before jumping to complex ML — and how this approach saved time, improved decisions, and set realistic expectations in real projects.",
    date: "Jan 2025",
    readTime: "8 min read",
    category: "Data Science",
    content: [
      {
        type: "heading",
        content: "Problem / Question",
      },
      {
        type: "paragraph",
        content:
          "In many machine learning projects, the first instinct is to try complex models — deep learning, transformers, or ensemble methods. The question I now ask instead is: what is the simplest model that solves this problem reasonably well?",
      },
  
      {
        type: "heading",
        content: "Why It Matters in Real Projects",
      },
      {
        type: "paragraph",
        content:
          "In real teams, time, compute, and explainability matter as much as accuracy. Without a baseline, it becomes impossible to judge whether a complex model is truly better or just marginally improved at a much higher cost.",
      },
      {
        type: "paragraph",
        content:
          "Baseline models help set expectations for stakeholders, expose data quality issues early, and often perform well enough to challenge the need for heavier solutions.",
      },
  
      {
        type: "heading",
        content: "My Approach",
      },
      {
        type: "paragraph",
        content:
          "In my Amazon Food Reviews sentiment analysis project, I began with a TF-IDF vectorizer combined with Logistic Regression. The goal was not maximum performance, but to establish a strong reference point using interpretable and fast models.",
      },
      {
        type: "code",
        content:
          "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.pipeline import Pipeline\n\npipeline = Pipeline([\n  ('tfidf', TfidfVectorizer(max_features=50000)),\n  ('clf', LogisticRegression(max_iter=1000))\n])\n\npipeline.fit(X_train, y_train)\n",
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "This baseline achieved close to 89% accuracy, which immediately raised an important question: how much better does a more complex model really need to be to justify its cost?",
      },
  
      {
        type: "heading",
        content: "Trade-offs & Decisions",
      },
      {
        type: "paragraph",
        content:
          "Starting with a baseline allowed me to quantify trade-offs clearly. While fine-tuning DistilBERT improved performance to around 94%, it also introduced longer training times, higher inference latency, and deployment complexity.",
      },
      {
        type: "paragraph",
        content:
          "Because I had a baseline, I could justify the upgrade based on measurable gains rather than intuition or hype.",
      },
  
      {
        type: "heading",
        content: "What I Learned",
      },
      {
        type: "paragraph",
        content:
          "Baseline models are not a shortcut — they are a diagnostic tool. They reveal data leakage, weak labels, feature issues, and unrealistic expectations before expensive modeling decisions are made.",
      },
      {
        type: "paragraph",
        content:
          "In several cases, the baseline performed well enough that complex models became optional rather than mandatory.",
      },
  
      {
        type: "heading",
        content: "When I Would Do It Differently",
      },
      {
        type: "paragraph",
        content:
          "If the problem involved highly unstructured inputs, real-time constraints, or clear non-linear relationships from the start, I would still build a baseline — but much faster and with fewer iterations — before moving on.",
      },
      {
        type: "paragraph",
        content:
          "The key lesson is not to avoid complex models, but to earn the right to use them.",
      },
    ],
  },

];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
