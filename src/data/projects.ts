// src/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  summary: string;

  /** Business-oriented problem framing */
  description: string;

  /** Whether this project is a full case study */
  caseStudy: boolean;

  /** Outcome-oriented goals */
  goals?: string[];

  /** Dataset metadata (short, recruiter-friendly) */
  dataset?: {
    source: string;
    size: string;
    notes?: string;
  };

  role: string;
  techStack: string[];
  approach: string[];

  /** Business + technical outcomes */
  impact: string[];
  result: string;

  /** Key measurable metrics (used for badges + "By the Numbers") */
  metrics?: {
    label: string;
    value: string;
    icon: "accuracy" | "latency" | "scale" | "model";
  }[];

  /** Optional example prediction (ML projects) */
  examplePrediction?: {
    input: string;
    output: string;
  };

  /** Reflection / learnings (rendered outside hero section) */
  learnings?: string[];

  codeUrl?: string;
  demoUrl?: string;

  images: string[];
  imageCaptions?: string[];
}

export const projects: Project[] = [
  /* ================================================================== */
  /* SALES PERFORMANCE DASHBOARD */
  /* ================================================================== */
  {
    slug: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",

    summary:
      "Interactive Power BI dashboard analyzing multi-year sales performance across regions and product categories.",

    description:
      "Sales teams and management often rely on fragmented Excel reports that make it difficult to track performance trends consistently. This project focused on building a centralized, self-serve analytics dashboard to improve visibility into revenue, regional performance, and product-level KPIs.",

    caseStudy: true,

    goals: [
      "Create a single source of truth for sales performance reporting",
      "Reduce dependency on manual Excel-based reports",
      "Enable stakeholders to explore sales data independently",
    ],

    dataset: {
      source: "Internal sales data (simulated / anonymized)",
      size: "Multi-year transactional sales data",
      notes: "Modeled using a star schema for efficient BI reporting",
    },

    role:
      "Data Analyst — Designed the data model, built DAX measures, created dashboards, and supported stakeholder adoption.",

    techStack: ["Power BI", "SQL", "Excel", "DAX"],

    approach: [
      "Collaborated with stakeholders to define business KPIs",
      "Designed a star-schema data model for scalable reporting",
      "Built DAX measures for YoY growth and trend analysis",
      "Created interactive dashboards with slicers and drill-downs",
      "Configured scheduled data refresh for up-to-date insights",
    ],

    metrics: [
      { label: "Dashboards Built", value: "5+", icon: "model" },
      { label: "Years of Data", value: "3+", icon: "scale" },
      { label: "Manual Effort Reduced", value: "~70%", icon: "accuracy" },
    ],

    impact: [
      "Consolidated multi-year sales data into a single dashboard",
      "Reduced reliance on manual Excel reporting workflows",
      "Improved visibility into regional and product performance",
      "Enabled faster sales review and planning discussions",
    ],

    result:
      "Improved visibility into sales performance while significantly reducing manual reporting effort.",

    learnings: [
      "Well-designed data models are critical for scalable BI solutions",
      "Stakeholder-defined KPIs significantly improve dashboard adoption",
      "Self-serve dashboards reduce repetitive ad-hoc reporting",
      "Data freshness matters as much as visual design",
    ],

    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    imageCaptions: [
      "Overall sales performance overview dashboard",
      "Regional sales performance breakdown",
      "Product category trends over time",
    ],
  },

  /* ================================================================== */
  /* RETAIL PRODUCT IMAGE RECOGNITION */
  /* ================================================================== */
  {
    slug: "retail-product-image-recognition",
    title: "Retail Product Image Recognition System",

    summary:
      "End-to-end computer vision system for automated retail SKU recognition, evaluated with analytical dashboards and deployed as a real-time Streamlit application.",

    description:
      "Manual product tagging and SKU classification are time-consuming and error-prone in retail operations, especially at scale. This project explores how deep learning–based computer vision can automate product identification from images, while providing transparency into model performance through analytical evaluation dashboards.",

    caseStudy: true,

    goals: [
      "Assess feasibility of automated SKU recognition from product images",
      "Build a scalable image classification pipeline using transfer learning",
      "Evaluate model behavior using interpretable analytics dashboards",
      "Demonstrate real-time inference through a deployable web interface",
    ],

    dataset: {
      source: "Retail product image dataset (RPC-style)",
      size: "~200 SKU categories with hundreds of thousands of images",
      notes:
        "Images preprocessed, normalized, and structured for EfficientNet input",
    },

    role:
      "Machine Learning Engineer — Owned the full lifecycle including data preparation, model training, evaluation, analytics, and deployment.",

    techStack: [
      "Python",
      "PyTorch",
      "EfficientNet-B0",
      "Streamlit",
      "Tableau",
      "NumPy",
    ],

    approach: [
      "Structured and preprocessed large-scale retail image data by SKU category",
      "Applied data augmentation and transfer learning with EfficientNet-B0",
      "Trained and evaluated the model using Top-1 and Top-5 accuracy metrics",
      "Exported inference results to build Tableau dashboards for performance analysis",
      "Analyzed class-level accuracy, confusion patterns, and prediction confidence",
      "Deployed a Streamlit application for real-time image upload and prediction",
    ],

    metrics: [
      { label: "Top-1 Accuracy", value: "85.4%", icon: "accuracy" },
      { label: "Top-5 Accuracy", value: "94%", icon: "accuracy" },
      { label: "SKU Classes", value: "200+", icon: "scale" },
      { label: "Inference Latency", value: "<1s", icon: "latency" },
    ],

    impact: [
      "Demonstrated automated SKU identification across 200+ retail categories",
      "Reduced reliance on manual product tagging workflows",
      "Identified error patterns and class confusion through Tableau analytics",
      "Validated model reliability and confidence calibration for deployment readiness",
    ],

    result:
      "Delivered an end-to-end retail image recognition system with measurable accuracy, interpretable analytics, and real-time deployment capability.",

    learnings: [
      "Transfer learning significantly improves performance on limited SKU data",
      "Top-5 accuracy is critical for practical retail classification workflows",
      "Analytical dashboards are essential for model trust and validation",
      "Inference speed and usability matter as much as model accuracy",
    ],

    codeUrl:
      "https://github.com/YeswanthArasavalli/retail-product-image-recognition",

    demoUrl: "https://retail-image-recognition.streamlit.app/",

    images: [
      "/projects/retail_image/r_thumb.png",
      "/projects/retail_image/data.png",
      "/projects/retail_image/confuion_matrix.png",
      "/projects/retail_image/Figure_1.png",
      "/projects/retail_image/img2.png",
    ],
    imageCaptions: [
      "Streamlit interface for real-time retail product prediction",
      "Distribution of retail SKU categories used for training and evaluation",
      "Confusion matrix highlighting class-level prediction patterns",
      "Training and validation accuracy and loss trends",
      "Example model predictions with confidence scores",
    ],
  },

  /* ================================================================== */
  /* AMAZON FOOD REVIEWS SENTIMENT ANALYSIS */
  /* ================================================================== */
  {
    slug: "amazon-food-reviews-sentiment-analysis",
    title: "Amazon Food Reviews Sentiment Analysis",

    summary:
      "End-to-end NLP pipeline for sentiment classification on 568K+ Amazon food reviews using a fine-tuned DistilBERT model.",

    description:
      "Large e-commerce platforms receive massive volumes of customer reviews daily, making manual sentiment analysis slow, inconsistent, and unscalable. This project automates sentiment detection from customer feedback to enable faster insight generation and support data-driven product and customer experience decisions.",

    caseStudy: true,

    goals: [
      "Reduce manual review analysis through automated sentiment classification",
      "Benchmark classical NLP techniques against transformer-based models",
      "Deploy a real-time sentiment prediction interface",
    ],

    dataset: {
      source: "Amazon Fine Food Reviews (Kaggle)",
      size: "568,000+ customer reviews",
      notes:
        "Ratings 1–2 mapped to negative, 4–5 to positive; neutral reviews removed",
    },

    role:
      "Machine Learning Engineer (NLP) — Owned the full project lifecycle from data processing to deployment.",

    techStack: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "DistilBERT",
      "TF-IDF",
      "Logistic Regression",
      "Gradio",
    ],

    approach: [
      "Built TF-IDF + Logistic Regression baseline",
      "Fine-tuned DistilBERT using transfer learning",
      "Evaluated using accuracy, F1-score, ROC curve, and confusion matrix",
      "Deployed a real-time Gradio-based demo",
    ],

    metrics: [
      { label: "Accuracy", value: "94%", icon: "accuracy" },
      { label: "Inference Latency", value: "<300ms", icon: "latency" },
      { label: "Reviews Processed", value: "568K+", icon: "scale" },
      { label: "Model", value: "DistilBERT", icon: "model" },
    ],

    impact: [
      "Improved sentiment accuracy from ~89% to ~94%",
      "Enabled real-time sentiment analysis",
      "Reduced manual customer feedback analysis",
    ],

    result:
      "Automated sentiment detection from large-scale customer feedback, enabling faster insight workflows.",

    examplePrediction: {
      input: "The food tasted terrible and was completely stale.",
      output: "Negative (confidence ≈ 0.96)",
    },

    learnings: [
      "Transformer models outperform classical NLP for contextual sentiment",
      "Baselines are essential for meaningful benchmarking",
      "Latency matters as much as accuracy in production systems",
      "Clear business framing improves ML adoption",
    ],

    codeUrl:
      "https://github.com/YeswanthArasavalli/amazon-food-review-sentiment-analysis",

    demoUrl:
      "https://huggingface.co/spaces/YeswanthArasavalli/Amazon_Food_Review_Analysis",

    images: [
      "/projects/amazon_food/a_thumb.png",
      "/projects/amazon_food/word.png",
      "/projects/amazon_food/roc.png",
      "/projects/amazon_food/confusion.png",
      "/projects/amazon_food/accuracy.png",
    ],
    imageCaptions: [
      "Gradio interface for real-time sentiment prediction",
      "Word cloud highlighting frequently occurring terms",
      "ROC curve demonstrating model discrimination performance",
      "Confusion matrix on the validation dataset",
      "Accuracy comparison between baseline and transformer models",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
