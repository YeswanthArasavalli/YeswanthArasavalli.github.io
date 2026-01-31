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
    title: "From Analytics to Applied Machine Learning",
    excerpt:
      "How I approach machine learning from an analytics background and decide when ML actually adds value.",
    date: "Nov 2024",
    readTime: "6 min read",
    category: "Machine Learning",
    content: [
      {
        type: "paragraph",
        content:
          "Coming from an analytics background, I approached machine learning as an extension of decision-making rather than a replacement for traditional analysis.",
      },
      { type: "heading", content: "Why Analysts Should Understand ML" },
      {
        type: "paragraph",
        content:
          "Understanding ML helps analysts recognize when predictive techniques are useful and when simpler approaches are sufficient.",
      },
      { type: "heading", content: "My Learning Approach" },
      {
        type: "paragraph",
        content:
          "I focused on fundamentals first — statistics, regression, classification, and clustering — before moving on to more complex models.",
      },
      { type: "heading", content: "Start With Simple Models" },
      {
        type: "paragraph",
        content:
          "Simple models are often more interpretable and easier to explain to stakeholders, making them suitable for many business problems.",
      },
      { type: "heading", content: "Learning Through Projects" },
      {
        type: "paragraph",
        content:
          "Real understanding came from applying ML techniques to real datasets and evaluating their impact on decisions.",
      },
      {
        type: "code",
        content:
          "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import r2_score\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\nprint(r2_score(y_test, model.predict(X_test)))",
        language: "python",
      },
      {
        type: "heading",
        content: "Common Pitfalls",
      },
      {
        type: "paragraph",
        content:
          "Common issues include overfitting, ignoring feature engineering, and optimizing metrics without considering business impact.",
      },
      {
        type: "quote",
        content:
          "Machine learning is most effective when it supports decisions — not when it’s used for complexity’s sake.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
