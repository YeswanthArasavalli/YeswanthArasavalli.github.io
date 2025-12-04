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
    title: "Power BI vs Tableau: Which is Right for Your Business?",
    excerpt: "A comprehensive comparison of the two leading BI tools, helping you make the right choice for your organization.",
    date: "Dec 2024",
    readTime: "5 min read",
    category: "Business Intelligence",
    content: [
      { type: "paragraph", content: "Choosing the right business intelligence tool is one of the most important decisions for data-driven organizations. Both Power BI and Tableau are industry leaders, but they serve different needs and budgets. In this guide, I'll break down the key differences to help you make an informed decision." },
      { type: "heading", content: "Pricing and Licensing" },
      { type: "paragraph", content: "Power BI offers a significant cost advantage, especially for organizations already using Microsoft 365. The Pro license costs $10/user/month, and many features are included in existing Microsoft subscriptions. Tableau, while more expensive at $70/user/month for Creator licenses, offers a more comprehensive feature set out of the box." },
      { type: "heading", content: "Ease of Use" },
      { type: "paragraph", content: "Power BI has a gentler learning curve, especially for users familiar with Excel. The interface is intuitive, and the DAX language, while powerful, can be learned incrementally. Tableau requires more upfront learning but offers more flexibility in visualization design once mastered." },
      { type: "heading", content: "Data Connectivity" },
      { type: "paragraph", content: "Both tools connect to virtually any data source you might need. Power BI has particularly strong integration with Microsoft products like Azure, SQL Server, and Excel. Tableau shines with its live connection capabilities and handling of large datasets." },
      { type: "heading", content: "Visualization Capabilities" },
      { type: "paragraph", content: "Tableau has historically been the leader in creating beautiful, complex visualizations. However, Power BI has closed the gap significantly. For most business use cases, either tool will serve you well. Tableau still edges ahead for advanced statistical visualizations and geographic mapping." },
      { type: "heading", content: "My Recommendation" },
      { type: "paragraph", content: "Choose Power BI if you're on a budget, already use Microsoft products, or need strong integration with Excel and Azure. Choose Tableau if you need advanced visualization capabilities, work with very large datasets, or require the most flexibility in dashboard design. Consider both if you're a large enterprise that might benefit from using each tool for different purposes." },
      { type: "heading", content: "Conclusion" },
      { type: "paragraph", content: "There's no universally \"better\" tool—the right choice depends on your specific needs, budget, and existing technology stack. Both Power BI and Tableau can deliver excellent business intelligence solutions when implemented correctly." }
    ]
  },
  {
    slug: "how-i-clean-messy-data",
    title: "How I Clean Messy Data: A Step-by-Step Guide",
    excerpt: "My proven workflow for transforming chaotic datasets into analysis-ready data using Python and SQL.",
    date: "Nov 2024",
    readTime: "7 min read",
    category: "Data Engineering",
    content: [
      { type: "paragraph", content: "Data cleaning is where most analysts spend 60-80% of their time. After years of working with messy datasets, I've developed a systematic approach that ensures consistent, reliable results. Here's my complete workflow." },
      { type: "heading", content: "Step 1: Initial Assessment" },
      { type: "paragraph", content: "Before writing any code, I explore the data to understand its structure and quality issues. I look at data types, missing values, duplicates, and obvious outliers." },
      { type: "code", content: "import pandas as pd\n\ndf = pd.read_csv('raw_data.csv')\nprint(df.info())\nprint(df.describe())\nprint(df.isnull().sum())", language: "python" },
      { type: "heading", content: "Step 2: Handle Missing Values" },
      { type: "paragraph", content: "Missing data requires careful consideration. I don't automatically drop or fill—I investigate why data is missing and choose the appropriate strategy based on whether it's MCAR (Missing Completely at Random), MAR (Missing at Random), or MNAR (Missing Not at Random)." },
      { type: "heading", content: "Step 3: Standardize Formats" },
      { type: "paragraph", content: "Inconsistent formats are a common issue, especially in date fields, text columns, and categorical variables. I create standardization functions that can be reused across projects." },
      { type: "code", content: "# Standardize date formats\ndf['date'] = pd.to_datetime(df['date'], errors='coerce')\n\n# Standardize text\ndf['name'] = df['name'].str.strip().str.title()\n\n# Standardize categories\ndf['category'] = df['category'].str.lower().replace({'cat': 'category'})", language: "python" },
      { type: "heading", content: "Step 4: Remove Duplicates" },
      { type: "paragraph", content: "Duplicate records can significantly skew analysis. I identify duplicates based on business logic—sometimes exact matches, sometimes fuzzy matching on key fields." },
      { type: "heading", content: "Step 5: Validate and Document" },
      { type: "paragraph", content: "The final step is validation. I run assertion tests to ensure data meets expected constraints and document all transformations for reproducibility." },
      { type: "quote", content: "Good data cleaning is invisible—stakeholders only notice when it's done poorly. Take the time to do it right." },
      { type: "heading", content: "Tools I Use" },
      { type: "paragraph", content: "My go-to tools include Python (Pandas, NumPy) for complex transformations, SQL for database-level cleaning, Power Query for Excel-based workflows, and Great Expectations for data validation pipelines." }
    ]
  },
  {
    slug: "beginners-path-to-machine-learning",
    title: "A Beginner's Path to Machine Learning",
    excerpt: "My journey from data analyst to exploring ML - lessons learned and resources that helped.",
    date: "Nov 2024",
    readTime: "6 min read",
    category: "Machine Learning",
    content: [
      { type: "paragraph", content: "As a data analyst, I was comfortable with SQL, Excel, and visualization tools. But I kept hearing about machine learning and wanted to expand my skills. Here's the path I followed—and the lessons I wish I'd known from the start." },
      { type: "heading", content: "Why Data Analysts Should Learn ML" },
      { type: "paragraph", content: "Machine learning isn't just for data scientists. Understanding ML basics helps analysts ask better questions, recognize when ML solutions are appropriate, and collaborate more effectively with data science teams." },
      { type: "heading", content: "My Learning Path" },
      { type: "paragraph", content: "I structured my learning over 6 months: Months 1-2 focused on Python fundamentals and Pandas proficiency. Month 3 was a statistics refresher covering probability, distributions, and hypothesis testing. Months 4-5 covered Scikit-learn basics including regression, classification, and clustering. Month 6 was my first real project applying ML to a business problem." },
      { type: "heading", content: "Start With The Fundamentals" },
      { type: "paragraph", content: "Don't jump straight to deep learning and neural networks. Master the basics first: linear regression, logistic regression, decision trees. These simple models are often more interpretable and sufficient for many business problems." },
      { type: "heading", content: "Learn By Doing" },
      { type: "paragraph", content: "Courses are great, but real learning happens when you apply concepts to your own data. Take a dataset from work (anonymized if needed) and try to build a predictive model. You'll learn more from one real project than ten tutorials." },
      { type: "code", content: "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import r2_score\n\n# My first ML model\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\nprint(f'R² Score: {r2_score(y_test, model.predict(X_test)):.3f}')", language: "python" },
      { type: "heading", content: "Resources That Helped Me" },
      { type: "paragraph", content: "Key resources that accelerated my learning: Andrew Ng's Machine Learning course on Coursera, Hands-On Machine Learning with Scikit-Learn by Aurélien Géron, Kaggle Learn's free micro-courses, and StatQuest YouTube channel for visual explanations." },
      { type: "heading", content: "Common Mistakes to Avoid" },
      { type: "paragraph", content: "Watch out for these pitfalls: overfitting your training data (always validate on held-out test sets), ignoring feature engineering (domain knowledge often beats complex algorithms), skipping data cleaning (garbage in, garbage out), and chasing accuracy without considering business impact." },
      { type: "quote", content: "The goal isn't to become a machine learning expert overnight. It's to add another tool to your analytics toolkit that you can apply when the situation calls for it." }
    ]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
