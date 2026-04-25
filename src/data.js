export const personal = {
  name: 'Sri Charan Rachakonda',
  title: 'AI/ML Engineer & Data Scientist',
  tagline: 'Building production-grade AI & ML systems across Banking, Healthcare, and Insurance.',
  summary:
    '4+ years of enterprise experience designing and deploying GenAI, LLM, and ML systems end-to-end — from model development to cloud deployment on AWS and Azure. Proven track record of reducing manual effort, improving model accuracy, and delivering measurable operational outcomes.',
  email: 'rachakondasricharan@gmail.com',
  phone: '+1 (940) 594-5515',
  location: 'United States',
  github: 'https://github.com/charan1395',
  linkedin: 'https://www.linkedin.com/in/sricharanrachakonda/',
  resume: '/SriCharan_Resume.pdf',
}

export const journey = [
  {
    year: '2021',
    title: 'Started in Data Science',
    description:
      'Joined SBI Life Insurance as a Data Scientist — built churn prediction and customer segmentation models on 3M+ policyholders.',
  },
  {
    year: '2022',
    title: 'Production ML at Scale',
    description:
      'Moved to Max Healthcare; led a fraud detection platform serving 200+ hospitals using ensemble ML, BERT, and LSTM temporal models.',
  },
  {
    year: '2023',
    title: 'Masters at UNT',
    description:
      'Pursued Masters in Advanced Data Analytics at the University of North Texas — deep dive into statistical learning, deep learning, and applied ML research.',
  },
  {
    year: '2024',
    title: 'Generative AI Engineering',
    description:
      'Joined Wells Fargo as a GenAI Engineer — building LLM-driven document intelligence, Graph-RAG, and agentic workflows for regulated reporting.',
  },
]

export const experiences = [
  {
    company: 'Wells Fargo',
    role: 'Gen AI Engineer / Data Scientist',
    period: 'May 2024 – Present',
    location: 'United States',
    project:
      'Intelligent Financial Document Intelligence & Automated Regulatory Reporting Platform',
    summary:
      'End-to-end GenAI platform for corporate banking — automating extraction, structuring, and narrative generation across 50,000+ financial documents annually.',
    bullets: [
      'Engineered enterprise document intelligence pipeline using AWS Textract on 50,000+ unstructured financial reports — reduced manual data prep effort by 40%.',
      'Implemented Graph-RAG architecture with Neo4j as the knowledge store — increased factual accuracy of LLM-generated reports by 35% over dense retrieval baselines.',
      'Cut analyst report turnaround from 2 days to under 4 hours with LangChain-based automated report generation across 8+ report types.',
      'Architected multi-step agentic workflows using Microsoft AutoGen with human-in-the-loop validation checkpoints for all regulated outputs.',
      'Applied LoRA / QLoRA fine-tuning for Wells Fargo financial vocabulary — reduced domain terminology errors by 28%.',
      'Deployed GenAI workloads on AWS SageMaker and Bedrock with autoscaling endpoints — sub-5s latency at 500+ concurrent queries.',
      'Defined evaluation criteria across accuracy, factual consistency, and latency SLAs — reduced post-deployment rework by 60%.',
    ],
  },
  {
    company: 'Max Healthcare',
    role: 'Data Scientist (ML)',
    period: 'Jul 2022 – Jul 2023',
    location: 'Hyderabad, India',
    project: 'Healthcare Claims Fraud Detection & Clinical NLP Analytics System',
    summary:
      'Production ML fraud detection system combining ensemble models, LSTM temporal analysis, and BERT-based clinical NLP across 200+ hospitals.',
    bullets: [
      'Designed healthcare fraud detection using XGBoost, Isolation Forest, and one-class SVM — AUC-ROC of 0.88 on validation sets.',
      'Engineered 120+ variable feature matrix from ICD-10, CPT codes, and billing patterns — lifted AUC by 0.06 over baseline.',
      'Built BERT-based NLP pipeline mining clinical notes and provider narratives — improved precision by 30% over keyword baselines.',
      'Applied LSTM temporal sequence model on provider-patient histories — improved fraud recall by 18%.',
      'Resolved class imbalance (4% positive rate) with SMOTE and cost-sensitive learning — improved minority-class recall by 22%.',
      'Deployed on Azure ML and AKS with real-time fraud scoring via Flask APIs across 200+ hospitals.',
      'Delivered SHAP and LIME interpretability reports — accepted by internal audit with minimal follow-up.',
    ],
  },
  {
    company: 'SBI Life Insurance',
    role: 'Data Scientist',
    period: 'Jul 2021 – May 2022',
    location: 'Hyderabad, India',
    project:
      'Customer Churn Prediction, Policyholder Segmentation & Targeted Marketing Analytics Platform',
    summary:
      'End-to-end churn and segmentation platform for 3M+ policyholders driving targeted marketing with measurable conversion uplift.',
    bullets: [
      'Random Forest and Gradient Boosting churn models — 82% accuracy, 19% improvement over rules-based baseline.',
      'k-means segmentation into 6 behavioural cohorts — 23% conversion uplift versus broadcast campaigns.',
      'Engineered 80+ features from policy tenure, premium patterns, and product interactions — F1 +11%, false-negatives -16%.',
      'AWS Glue ETL pipelines processing 10M+ records monthly — 30% faster, enabled weekly model refresh.',
      'SageMaker Bayesian hyperparameter optimization — 15% accuracy improvement over default configs.',
      'A/B tests vs. rule-based campaigns — 17% campaign ROI improvement, statistically significant uplift.',
      'Power BI dashboards on churn risk, segments, and campaign performance — used for quarterly leadership planning.',
    ],
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'SQL'],
  },
  {
    category: 'Generative AI',
    items: [
      'LLMs',
      'RAG',
      'Graph-RAG',
      'LangChain',
      'Microsoft AutoGen',
      'LoRA / QLoRA',
      'Prompt Engineering',
    ],
  },
  {
    category: 'Machine Learning',
    items: [
      'Scikit-learn',
      'XGBoost',
      'Random Forest',
      'Gradient Boosting',
      'Clustering',
      'Anomaly Detection',
    ],
  },
  {
    category: 'Deep Learning & NLP',
    items: ['PyTorch', 'TensorFlow', 'Transformers', 'BERT', 'NER', 'Sentiment Analysis'],
  },
  {
    category: 'Vector Databases',
    items: ['FAISS', 'Neo4j'],
  },
  {
    category: 'Data & Visualization',
    items: ['NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Tableau'],
  },
  {
    category: 'Cloud',
    items: [
      'AWS S3',
      'AWS SageMaker',
      'AWS Bedrock',
      'AWS Textract',
      'AWS Glue',
      'Azure ML',
      'AKS',
      'Azure OpenAI',
    ],
  },
  {
    category: 'MLOps & Automation',
    items: [
      'MLflow',
      'Airflow',
      'Kubernetes',
      'Docker',
      'FastAPI',
      'Flask',
      'GitHub Actions',
      'n8n',
    ],
  },
  {
    category: 'Evaluation & Safety',
    items: ['SHAP', 'LIME', 'RAGAS', 'BLEU/ROUGE', 'ROC-AUC', 'Bias Analysis'],
  },
  {
    category: 'Compliance',
    items: ['HIPAA', 'PII / PHI Redaction', 'HITL Review Loops'],
  },
]

export const projects = [
  {
    type: 'Gen AI',
    title: 'Advanced RAG — Financial Intelligence',
    description:
      'Production-grade Retrieval-Augmented Generation pipeline for financial document QA. Combines hybrid search, re-ranking, and Graph-RAG over Neo4j to deliver high-fidelity answers grounded in source documents.',
    tech: ['LangChain', 'Neo4j', 'FAISS', 'OpenAI', 'FastAPI', 'Python'],
    github: 'https://github.com/charan1395/Advanced-RAG-Financial-Intelligence',
  },
  {
    type: 'Gen AI',
    title: 'Multi-Agent GenAI Orchestration',
    description:
      'Multi-agent system using Microsoft AutoGen for orchestrated reasoning — agents handle data retrieval, summarization, fact-checking, and report generation with human-in-the-loop checkpoints.',
    tech: ['AutoGen', 'LangChain', 'OpenAI', 'Python', 'Streamlit'],
    github: 'https://github.com/charan1395/Multi-Agent-GenAI-Orchestration',
  },
  {
    type: 'Gen AI',
    title: 'LLM Fine-Tuning Pipeline',
    description:
      'Production-ready LoRA / QLoRA fine-tuning pipeline with domain adaptation, evaluation metrics, and SageMaker deployment. Adapts foundation models for specialized financial and clinical vocabularies.',
    tech: ['PyTorch', 'Transformers', 'PEFT', 'LoRA', 'QLoRA', 'AWS SageMaker', 'MLflow'],
    github: 'https://github.com/charan1395/LLM-FineTuning-Pipeline',
  },
  {
    type: 'Gen AI',
    title: 'Advisor Onboarding Intelligence',
    description:
      '10-agent LangGraph pipeline that automates wealth-advisory client onboarding — produces a fully-sourced advisor brief in under 3 minutes via multi-agent document intelligence.',
    tech: ['LangGraph', 'LangChain', 'GPT-4', 'FastAPI', 'Multi-Agent'],
    github: 'https://github.com/charan1395/advisor-onboarding-intelligence',
  },
  {
    type: 'Gen AI',
    title: 'Pitchbook Automation',
    description:
      'Automated pitchbook generation pipeline — parses financial decks, extracts metrics, and generates analyst-style narratives using GPT-4 and structured prompt templates.',
    tech: ['Python', 'LangChain', 'GPT-4', 'OCR', 'Streamlit'],
    github: 'https://github.com/charan1395/Pitchbook-Automation',
  },
  {
    type: 'Gen AI',
    title: 'Resume Editor',
    description:
      'AI-powered resume assistant — analyzes job descriptions, suggests targeted edits, and rewrites bullet points using LLM-driven keyword optimization.',
    tech: ['OpenAI', 'LangChain', 'Python'],
    github: 'https://github.com/charan1395/resume-editor',
  },
  {
    type: 'Gen AI',
    title: 'RAG App on AWS — Financial Domain',
    description:
      'Customized full-stack RAG application on AWS — adapted retrieval pipelines and prompt templates to operate over financial document corpora. Terraform-managed infrastructure with Bedrock-style inference and authenticated UI.',
    tech: ['AWS', 'Terraform', 'RAG', 'Streamlit', 'Python'],
    github: 'https://github.com/charan1395/rag-app-on-aws',
  },
  {
    type: 'Gen AI',
    title: 'Multi-Agents App on AWS — Financial Reports',
    description:
      'Customized 4-agent collaborative system on AWS Bedrock AgentCore — agents research, analyze, and write financial reports end-to-end. Adapted agent prompts and workflows for financial domain knowledge.',
    tech: ['AWS Bedrock', 'Multi-Agent', 'AgentCore', 'Python'],
    github: 'https://github.com/charan1395/multi-agents-app-on-aws',
  },
  {
    type: 'Gen AI',
    title: 'PDF Parsing Library — Financial Docs',
    description:
      'Customized document parsing toolkit — applied OCR, table extraction, and LLM-based field extraction (Claude, OpenAI, Gemini, LLaMA-Vision) to financial document workflows. Compared parsing strategies across docling, pdfplumber, PyMuPDF, and unstructured-io.',
    tech: ['OCR', 'LLM Vision', 'Docling', 'PyMuPDF', 'Python'],
    github: 'https://github.com/charan1395/parsemypdf',
  },
  {
    type: 'Gen AI',
    title: 'Generative AI — Financial Use Cases',
    description:
      'Comprehensive GenAI knowledge base customized with financial-domain projects, use cases, and interview prep — covers RAG, agents, fine-tuning, evaluation, and production deployment patterns.',
    tech: ['GenAI', 'RAG', 'Agents', 'Fine-Tuning'],
    github: 'https://github.com/charan1395/generative-ai',
  },
  {
    type: 'Data Science',
    title: 'Stock Forecasting & Portfolio Optimization',
    description:
      'LSTM-based RNN forecasts for 5 low-correlation stocks. 62% RMSE reduction and 1.11% MAPE after Optuna tuning. Combines forecasts with Sharpe ratio optimization via SLSQP for risk-adjusted returns.',
    tech: ['PyTorch', 'LSTM', 'Optuna', 'SciPy', 'Python', 'Time Series'],
    github:
      'https://github.com/charan1395/Stock-Price-Forecasting-Portfolio-Optimization-Using-RNNs-and-SLSQP',
  },
  {
    type: 'Data Science',
    title: 'Wage & Unemployment Analysis (CPS)',
    description:
      'Analysis of CPS data (2017–2024) on wage dynamics, gender pay gaps, and COVID-19 unemployment effects. Hypothesis testing, causal inference, clustering, and Random Forest regression for policy insights.',
    tech: ['Python', 'Hypothesis Testing', 'Causal Inference', 'K-Means', 'Random Forest'],
    github: 'https://github.com/charan1395/Wage-Unemployment-Analysis-Using-CPS-Data',
  },
  {
    type: 'Data Science',
    title: 'Walkability Score — Urban Analytics',
    description:
      'Clustering and decision tree analysis on Nashville city data identifying walkability drivers. Surfaced intersection density and transit accessibility as top contributors. Proposed urban planning strategies for 90% emissions reduction in target zones.',
    tech: ['K-Means', 'Decision Trees', 'EDA', 'Geospatial', 'Python'],
    github: 'https://github.com/charan1395/Walkability-Score-Urban-Analytics',
  },
]

export const education = [
  {
    degree: 'Masters in Advanced Data Analytics',
    institution: 'University of North Texas',
    period: '2023',
  },
  {
    degree: 'Bachelors in Computer Science and Engineering',
    institution: 'Bharath Institute of Higher Education and Research',
    period: '',
  },
]

export const certifications = [
  {
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    issuer: 'Microsoft',
  },
  {
    name: 'Generative AI Professional',
    issuer: 'Oracle',
  },
]
