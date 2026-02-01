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

  /** Optional example prediction (strong signal for ML projects) */
  examplePrediction?: {
    input: string;
    output: string;
  };

  /** Reflection section (high-signal for recruiters) */
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
      "Sales teams and management often rely on fragmented Excel reports that make it difficult to track performance trends consistently. This project focused on creating a centralized, self-serve analytics dashboard that enables faster visibility into revenue, regional performance, and product-level KPIs.",

    caseStudy: true,

    goals: [
      "Create a single source of truth for sales performance reporting",
      "Reduce dependency on manual Excel-based reports",
      "Enable stakeholders to explore sales data independently",
    ],

    dataset: {
      source: "Internal sales data (simulated / anonymized)",
      size: "Multi-year transactional sales data",
      notes: "Modeled using a star schema to support efficient BI reporting",
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

    impact: [
      "Consolidated multi-year sales data into a single dashboard",
      "Reduced reliance on manual Excel reporting workflows",
      "Improved visibility into regional and product performance",
      "Enabled faster sales review and planning discussions",
    ],

    result:
      "Improved visibility into sales performance while reducing manual reporting effort.",

    learnings: [
      "Well-designed data models are critical for scalable BI solutions",
      "Stakeholder-defined KPIs drive dashboard adoption",
      "Self-serve analytics reduces repetitive reporting requests",
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
      "End-to-end computer vision system for identifying retail products from images, trained on ~200 SKU categories and deployed as a real-time Streamlit demo.",

    description:
      "Manual product tagging in retail workflows is time-consuming and error-prone. This project explores how computer vision can automate SKU identification from product images, enabling faster product analytics and reducing operational overhead.",

    caseStudy: true,

    goals: [
      "Evaluate feasibility of automated SKU recognition from images",
      "Apply transfer learning to a real-world retail dataset",
      "Demonstrate real-time inference through a usable web interface",
    ],

    dataset: {
      source: "Retail product image dataset (RPC-style)",
      size: "~200 SKU categories with thousands of labeled images",
      notes: "Images resized and normalized for EfficientNet input",
    },

    role:
      "Machine Learning Engineer — Handled data preprocessing, model training, evaluation, and demo deployment.",

    techStack: ["PyTorch", "EfficientNet-B0", "Streamlit", "Python", "NumPy"],

    approach: [
      "Preprocessed and organized product images by SKU category",
      "Fine-tuned EfficientNet-B0 using transfer learning",
      "Evaluated performance using validation and top-5 accuracy",
      "Built a Streamlit UI for image upload and prediction",
    ],

    impact: [
      "Trained on ~200 retail SKU categories",
      "Achieved ~84.9% validation accuracy and ~94% top-5 accuracy",
      "Enabled real-time image inference via web interface",
      "Demonstrated applicability of computer vision in retail analytics workflows",
    ],

    result:
      "Automated SKU identification from product images, reducing manual tagging effort.",

    learnings: [
      "Transfer learning significantly reduces training time for vision tasks",
      "Top-5 accuracy is critical for multi-class retail classification",
      "Inference speed matters for real-world usability",
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
      "Streamlit interface for real-time image upload and prediction",
      "Sample distribution of training images across SKU categories",
      "Confusion matrix on validation dataset",
      "Training accuracy and loss curves",
      "Example predictions on retail product images",
    ],
  },

  /* ================================================================== */
  /* AMAZON FOOD REVIEWS SENTIMENT ANALYSIS */
  /* ================================================================== */
  {
    slug: "amazon-food-reviews-sentiment-analysis",
    title: "Amazon Food Reviews Sentiment Analysis",
    summary:
      "End-to-end NLP pipeline for sentiment classification on 568K+ Amazon food reviews using fine-tuned DistilBERT.",

    description:
      "Large e-commerce platforms receive thousands of customer reviews daily, making manual sentiment analysis slow and inconsistent. This project focuses on automating sentiment detection from customer feedback to enable faster insight generation and more data-driven product and customer experience decisions.",

    caseStudy: true,

    goals: [
      "Reduce manual review analysis by automating sentiment classification",
      "Benchmark classical NLP models against transformer-based approaches",
      "Deploy a real-time sentiment prediction interface",
    ],

    dataset: {
      source: "Amazon Fine Food Reviews (Kaggle)",
      size: "568,000+ customer reviews",
      notes:
        "Ratings 1–2 mapped to negative, 4–5 to positive; neutral reviews removed",
    },

    role:
      "Machine Learning Engineer (NLP) — Managed data processing, model experimentation, evaluation, and deployment.",

    techStack: [
      "PyTorch",
      "DistilBERT",
      "Gradio",
      "Python",
      "Hugging Face Transformers",
      "TF-IDF",
      "Logistic Regression",
    ],

    approach: [
      "Cleaned and preprocessed large-scale review text",
      "Built a TF-IDF + Logistic Regression baseline to establish a benchmark",
      "Fine-tuned DistilBERT for improved contextual understanding",
      "Evaluated models using accuracy, F1-score, and confusion matrix",
      "Deployed an interactive Gradio demo on Hugging Face Spaces",
    ],

    impact: [
      "Trained on 568K+ customer reviews",
      "Improved accuracy from baseline (~89%) to ~92–94%",
      "Achieved average inference latency under ~300ms per review",
      "Enabled real-time sentiment analysis via web interface",
    ],

    result:
      "Automated sentiment detection from large-scale customer feedback, enabling faster customer insight workflows.",

    examplePrediction: {
      input: "The food tasted terrible and was completely stale.",
      output: "Negative (confidence ~0.96)",
    },

    learnings: [
      "Transformer models significantly outperform classical NLP for contextual sentiment",
      "Baseline models are essential for meaningful performance comparison",
      "Deployment considerations (latency, model size) matter as much as accuracy",
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
      "Word cloud showing frequently occurring review terms",
      "ROC curve for model evaluation",
      "Confusion matrix on validation dataset",
      "Accuracy comparison across baseline and transformer models",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
