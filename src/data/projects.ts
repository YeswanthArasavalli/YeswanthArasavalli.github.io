export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;

  caseStudy: boolean;

  goals?: string[];
  dataset?: {
    source: string;
    size: string;
    notes?: string;
  };

  role: string;
  techStack: string[];
  approach: string[];
  impact: string[];
  result: string;

  examplePrediction?: {
    input: string;
    output: string;
  };

  codeUrl?: string;
  demoUrl?: string;

  images: string[];
  imageCaptions?: string[];
}

export const projects: Project[] = [
  /* ------------------------------------------------------------------ */
  /* SALES PERFORMANCE DASHBOARD */
  /* ------------------------------------------------------------------ */
  {
    slug: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    summary:
      "Interactive Power BI dashboard analyzing multi-year sales performance across regions and product categories.",

    description:
      "Built a Power BI dashboard that consolidates sales data from multiple sources to track revenue trends, regional performance, and product-level KPIs. The dashboard was designed for management and sales teams to enable faster, self-serve access to insights.",

    caseStudy: true,

    goals: [
      "Create a single source of truth for sales performance reporting",
      "Reduce dependency on manual Excel-based reports",
      "Enable stakeholders to explore sales data independently",
    ],

    dataset: {
      source: "Internal sales data (simulated / anonymized)",
      size: "Multi-year transactional sales data",
      notes: "Modeled using a star schema to support efficient reporting",
    },

    role:
      "Data Analyst — Designed the data model, built DAX measures, created dashboards, and supported stakeholder adoption.",

    techStack: ["Power BI", "SQL", "Excel", "DAX"],

    approach: [
      "Worked with stakeholders to define KPIs and reporting requirements",
      "Designed a star-schema data model for sales analysis",
      "Built DAX measures for YoY growth and trend analysis",
      "Created interactive dashboards with slicers and drill-downs",
      "Configured scheduled data refresh",
    ],

    impact: [
      "Consolidated multi-year sales data into a single dashboard",
      "Reduced reliance on manual Excel reporting",
      "Improved visibility into regional and product performance",
      "Enabled faster sales review and planning discussions",
    ],

    result:
      "Improved visibility into sales performance and reduced reliance on manual reporting.",

    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    imageCaptions: [
      "Overall sales performance overview dashboard",
      "Regional sales performance breakdown",
      "Product category trends over time",
    ],
  },

  /* ------------------------------------------------------------------ */
  /* RETAIL PRODUCT IMAGE RECOGNITION */
  /* ------------------------------------------------------------------ */
  {
    slug: "retail-product-image-recognition",
    title: "Retail Product Image Recognition System",
    summary:
      "End-to-end computer vision system for identifying retail products from images, trained on ~200 SKU categories and deployed as a real-time Streamlit demo.",

    description:
      "Built a computer vision–based SKU recognition system using transfer learning with EfficientNet-B0. The system classifies retail product images and demonstrates real-time inference through an interactive Streamlit web interface.",

    caseStudy: true,

    goals: [
      "Evaluate feasibility of automated SKU recognition from images",
      "Apply transfer learning to a real-world retail dataset",
      "Demonstrate real-time inference via a simple web interface",
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

    codeUrl:
      "https://github.com/YeswanthArasavalli/retail-product-image-recognition",
    demoUrl:
      "https://retail-image-recognition.streamlit.app/",

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

  /* ------------------------------------------------------------------ */
  /* AMAZON FOOD REVIEWS SENTIMENT ANALYSIS */
  /* ------------------------------------------------------------------ */
  {
    slug: "amazon-food-reviews-sentiment-analysis",
    title: "Amazon Food Reviews Sentiment Analysis",
    summary:
      "End-to-end NLP pipeline for sentiment classification on 568K+ Amazon food reviews using fine-tuned DistilBERT.",

    description:
      "Developed a sentiment analysis pipeline using the Amazon Fine Food Reviews dataset. The project covers data preprocessing, baseline modeling, transformer fine-tuning, evaluation, and interactive deployment using Gradio.",

    caseStudy: true,

    goals: [
      "Automate sentiment classification for large-scale customer reviews",
      "Compare classical NLP models with transformer-based models",
      "Deploy an interactive demo for real-time sentiment prediction",
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
      "Built a TF-IDF + Logistic Regression baseline model",
      "Fine-tuned DistilBERT using transfer learning",
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
      "Automated sentiment detection from large-scale customer feedback.",

    examplePrediction: {
      input: "The food tasted terrible and was completely stale.",
      output: "Negative (confidence ~0.96)",
    },

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
