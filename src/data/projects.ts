export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  techStack: string[];
  approach: string[];
  impact: string[];
  result: string;
  codeUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    summary:
      "Interactive Power BI dashboard analyzing multi-year sales performance across regions and product categories.",
    description:
      "Built an interactive Power BI dashboard consolidating sales data from multiple sources to track revenue trends, regional performance, and product-level metrics. The dashboard was designed to support management and sales teams with faster, self-serve access to key KPIs.",
    role:
      "Data Analyst — Designed the data model, built DAX measures, created dashboards, and supported stakeholder adoption.",
    techStack: ["Power BI", "SQL", "Excel", "DAX"],
    approach: [
      "Worked with sales and management stakeholders to define KPIs and reporting requirements",
      "Designed a star-schema data model connecting sales, product, region, and time dimensions",
      "Built DAX measures for YoY growth, trends, and performance comparisons",
      "Designed interactive dashboards with filters for region, product, and time",
      "Set up scheduled data refresh to keep reports up to date",
    ],
    impact: [
      "Consolidated multi-year sales data into a single Power BI dashboard",
      "Tracked regional, product, and time-based KPIs using DAX",
      "Reduced reliance on manual Excel-based reporting",
      "Enabled faster self-serve access to sales performance insights",
    ],
    result:
      "Improved visibility into sales performance and reduced reliance on manual reporting.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },

  {
    slug: "retail-product-image-recognition",
    title: "Retail Product Image Recognition System",
    summary:
      "End-to-end computer vision system for identifying retail products from images, trained on ~200 SKU categories and deployed as a real-time Streamlit demo.",
    description:
      "Built a computer vision–based SKU recognition system capable of classifying retail product images. The model was trained using transfer learning with EfficientNet-B0 and deployed as an interactive Streamlit application to demonstrate real-time predictions.",
    role:
      "Machine Learning Engineer — Handled data preprocessing, model training, evaluation, and demo deployment.",
    techStack: ["PyTorch", "EfficientNet-B0", "Streamlit", "Python", "NumPy"],
    approach: [
      "Preprocessed and organized retail product image datasets across multiple SKU categories",
      "Fine-tuned EfficientNet-B0 using transfer learning for image classification",
      "Evaluated model performance using accuracy and top-5 prediction metrics",
      "Built a Streamlit-based interface for uploading images and viewing predictions",
    ],
    impact: [
      "Trained on ~200 retail SKU categories using transfer learning with EfficientNet-B0",
      "Achieved ~84.9% validation accuracy and ~94% top-5 accuracy",
      "Supports real-time image inference via Streamlit UI (<1s per image on CPU)",
      "Demonstrated feasibility of automated SKU classification for retail analytics workflows",
    ],
    result:
      "Automated SKU identification from product images, reducing manual tagging effort and enabling faster analytics workflows.",
    codeUrl:
      "https://github.com/YeswanthArasavalli/retail-product-image-recognition",
    images: [
      "/projects/retail_image/r_thumb.png",
      "/projects/retail_image/data.png",
      "/projects/retail_image/confuion_matrix.png",
      "/projects/retail_image/Figure_1.png",
      "/projects/retail_image/img2.png",
    ],
  },

  {
    slug: "amazon-food-reviews-sentiment-analysis",
    title: "Amazon Food Reviews Sentiment Analysis",
    summary:
      "End-to-end NLP pipeline for sentiment classification on 568K+ Amazon food reviews using fine-tuned DistilBERT and Gradio deployment.",
    description:
      "Developed a sentiment analysis pipeline using the Amazon Fine Food Reviews dataset (568K+ reviews). The project includes data preprocessing, baseline machine learning models, fine-tuned transformer models, and an interactive demo using Gradio.",
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
      "Cleaned and preprocessed large-scale text data from customer reviews",
      "Built a baseline sentiment classifier using TF-IDF and Logistic Regression",
      "Fine-tuned DistilBERT using transfer learning and GPU acceleration",
      "Evaluated models using accuracy, F1-score, and confusion matrix",
      "Deployed an interactive Gradio demo for real-time sentiment predictions",
    ],
    impact: [
      "Trained on 568,000+ Amazon food reviews from a public Kaggle dataset",
      "Fine-tuned DistilBERT achieving ~92–94% validation accuracy",
      "Average inference latency under 300ms per review",
      "Deployed interactive sentiment analysis demo using Gradio and Hugging Face Spaces",
    ],
    result:
      "Automated sentiment detection from food reviews, reducing manual analysis effort and enabling faster customer insights.",
    codeUrl:
      "https://github.com/YeswanthArasavalli/amazon-food-review-sentiment-analysis",
    images: [
      "/projects/amazon_food/a_thumb.png",
      "/projects/amazon_food/word.png",
      "/projects/amazon_food/roc.png",
      "/projects/amazon_food/confusion.png",
      "/projects/amazon_food/accuracy.png",
    ],
  },

  {
    slug: "customer-segmentation-analysis",
    title: "Customer Segmentation Analysis",
    summary:
      "Python-based customer segmentation using RFM analysis and K-means clustering.",
    description:
      "Performed customer segmentation analysis using transaction data and RFM metrics to identify distinct customer groups. The segmentation helped illustrate how targeted strategies can be designed for different customer behaviors.",
    role:
      "Data Analyst — Conducted exploratory analysis, built clustering models, and translated findings into recommendations.",
    techStack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
    approach: [
      "Cleaned and prepared historical transaction data",
      "Computed RFM metrics for each customer",
      "Used elbow method and silhouette scores to select optimal cluster count",
      "Applied K-means clustering to segment customers",
      "Analyzed and profiled customer groups based on behavior",
    ],
    impact: [
      "Analyzed multi-year transaction data using RFM metrics",
      "Segmented customers into 4–5 distinct behavioral clusters using K-Means",
      "Evaluated cluster quality using elbow method and silhouette score",
      "Enabled data-driven customer grouping for targeting and retention analysis",
    ],
    result:
      "Improved understanding of customer behavior and supported more targeted marketing strategies.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },

  {
    slug: "automated-reporting-system",
    title: "Automated Reporting System",
    summary:
      "Python-based automation pipeline for generating and distributing recurring analytical reports.",
    description:
      "Built an automated reporting pipeline that extracts data, performs analysis, generates visualizations, and distributes reports to stakeholders on a scheduled basis with minimal manual intervention.",
    role:
      "Automation Developer — Designed the pipeline, implemented automation logic, and handled scheduling and monitoring.",
    techStack: ["Python", "Pandas", "Matplotlib", "SMTP", "Scheduling"],
    approach: [
      "Identified recurring reporting requirements with stakeholders",
      "Built modular Python scripts for data extraction and processing",
      "Generated charts and tables programmatically",
      "Automated report distribution via email",
      "Implemented logging and basic error handling",
    ],
    impact: [
      "Automated recurring analytical report generation using Python",
      "Replaced manual reporting equivalent to ~6–10 hours per week",
      "Generated charts and tables programmatically with scheduled delivery",
      "Improved consistency and reduced human error in reporting workflows",
    ],
    result:
      "Reduced manual reporting effort and improved consistency of scheduled reports.",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
