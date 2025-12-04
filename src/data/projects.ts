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
    summary: "Comprehensive Power BI dashboard analyzing 2 years of sales data across multiple regions and product categories.",
    description: "Built an interactive Power BI dashboard that consolidates sales data from multiple sources, providing real-time insights into revenue trends, regional performance, and product category analysis. The dashboard serves 50+ stakeholders and has become the primary tool for executive decision-making.",
    role: "Lead Data Analyst - Responsible for data modeling, DAX calculations, visualization design, and stakeholder training.",
    techStack: ["Power BI", "SQL", "Excel", "DAX"],
    approach: [
      "Gathered requirements from sales managers and executives to understand key metrics and KPIs",
      "Designed a star schema data model connecting sales, products, regions, and time dimensions",
      "Created complex DAX measures for YoY comparisons, running totals, and dynamic filtering",
      "Implemented row-level security to ensure data access control across regions",
      "Set up automated data refresh schedules to maintain real-time accuracy"
    ],
    impact: [
      "Reduced manual reporting time by 75%",
      "Improved data visibility for 50+ stakeholders",
      "Enabled faster decision-making with real-time KPIs",
      "Identified $200K+ in revenue opportunities through trend analysis"
    ],
    result: "Reduced reporting time by 75% and improved data visibility for 50+ stakeholders.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    slug: "retail-product-image-recognition",
    title: "Retail Product Image Recognition System",
    summary: "Deep learning-based computer vision system using PyTorch and EfficientNet-B0 to classify retail product images.",
    description: "Developed a production-ready image classification system that automatically identifies retail products from photos. The system uses transfer learning with EfficientNet-B0 architecture and is deployed as a Streamlit web application for real-time predictions.",
    role: "Machine Learning Engineer - Designed model architecture, trained and fine-tuned the model, and built the deployment interface.",
    techStack: ["PyTorch", "EfficientNet-B0", "Streamlit", "Python", "PIL", "NumPy"],
    approach: [
      "Collected and preprocessed 10,000+ product images across multiple SKU categories",
      "Implemented data augmentation techniques to improve model generalization",
      "Used transfer learning with pre-trained EfficientNet-B0 weights from ImageNet",
      "Fine-tuned the model with custom classification head for retail categories",
      "Built interactive Streamlit interface for easy image upload and prediction",
      "Optimized model inference for sub-second response times"
    ],
    impact: [
      "Automated SKU identification from product photos",
      "Reduced manual tagging effort by 80%",
      "Enabled faster retail analytics workflows",
      "Achieved 94% classification accuracy on test dataset"
    ],
    result: "Automated SKU identification from product photos, reducing manual tagging effort and enabling faster retail analytics workflows.",
    codeUrl: "https://github.com/YeswanthArasavalli/retail-product-image-recognition",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    slug: "customer-segmentation-analysis",
    title: "Customer Segmentation Analysis",
    summary: "Advanced Python-based clustering analysis using K-means and RFM methodology to identify distinct customer segments.",
    description: "Performed comprehensive customer segmentation analysis for an e-commerce company using RFM (Recency, Frequency, Monetary) framework combined with K-means clustering. The analysis revealed 5 distinct customer personas that enabled precision-targeted marketing campaigns.",
    role: "Data Analyst - Conducted exploratory analysis, built segmentation model, and created actionable recommendations.",
    techStack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    approach: [
      "Extracted and cleaned 2 years of transaction data from multiple sources",
      "Calculated RFM metrics for each customer based on purchase history",
      "Used elbow method and silhouette scores to determine optimal cluster count",
      "Applied K-means clustering to segment customers into distinct groups",
      "Profiled each segment with demographic and behavioral characteristics",
      "Created visualization dashboards to communicate findings to marketing team"
    ],
    impact: [
      "Enabled 40% improvement in marketing ROI",
      "Identified high-value customers for loyalty programs",
      "Discovered at-risk customers for retention campaigns",
      "Reduced marketing spend waste by 25%"
    ],
    result: "Enabled 40% improvement in marketing ROI through precision-targeted campaigns.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    slug: "automated-reporting-system",
    title: "Automated Reporting System",
    summary: "End-to-end Python automation pipeline that generates and distributes weekly reports with zero manual intervention.",
    description: "Built a fully automated reporting system that extracts data from multiple sources, performs analysis, generates visualizations, and emails comprehensive reports to stakeholders every Monday morning. The system runs on a scheduled basis with error handling and logging.",
    role: "Automation Developer - Designed architecture, wrote Python scripts, and implemented email distribution.",
    techStack: ["Python", "Pandas", "Matplotlib", "SMTP", "Schedule", "Logging"],
    approach: [
      "Mapped out data sources and required report components with stakeholders",
      "Built modular Python scripts for data extraction, transformation, and loading",
      "Created dynamic visualization templates using Matplotlib and Seaborn",
      "Implemented HTML email templates with embedded charts and tables",
      "Set up scheduled task execution with comprehensive error handling",
      "Added logging and alerting for monitoring pipeline health"
    ],
    impact: [
      "Saved 10+ hours per week in manual reporting",
      "Eliminated human errors in report generation",
      "Ensured consistent delivery every Monday at 8 AM",
      "Freed up analyst time for higher-value tasks"
    ],
    result: "Saved 10+ hours per week in manual reporting and eliminated human errors.",
    images: ["/placeholder.svg", "/placeholder.svg"]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
