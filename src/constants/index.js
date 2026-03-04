import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flask,
  fastapi,
  ml,
  dl,
  rl,
  genai,
  pytorch,
  sklearn,
  numpy,
  pandas,
  openai,
  langchain,
  langgraph,
  firebase,
  supabase,
  cloudinary,
  linux,
  qiskit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & Machine Learning Developer",
    icon: web,
  },
  {
    title: "Multi-Agent Systems Developer",
    icon: mobile,
  },
  {
    title: "Backend & Python Developer",
    icon: backend,
  },
  {
    title: "Quantum Computing Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "langgraph",
    icon: langgraph,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "ml",
    icon: ml,
  },
];

const experiences = [
  {
    title: "Digital Twin Evacuation System (MARL)",
    company_name: "Research Project",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2026 - Present",
    points: [
      "Designed a fairness-aware evacuation planning framework using MAPPO-based multi-agent reinforcement learning.",
      "Developed urban flood digital twin simulations integrating GeoPandas and NetworkX.",
      "Implemented large-scale MARL training pipelines using PyTorch.",
      "Analyzed evacuation efficiency, equity constraints, and disaster response optimization.",
    ],
  },
  {
    title: "Multi-Agent AI Traceability Framework",
    company_name: "Research Project",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Built deterministic multi-agent architecture for traceable LLM execution.",
      "Integrated Retrieval-Augmented Generation (RAG) pipelines using LangChain and FAISS.",
      "Implemented structured agent workflows using LangGraph.",
      "Focused on Responsible AI, traceability, and reproducibility of agent decisions.",
    ],
  },
  {
    title: "AI Health Assistant Web Application",
    company_name: "Full Stack Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Developed an AI-powered health assistant integrating multiple AI APIs.",
      "Implemented secure authentication using Firebase and Firestore.",
      "Built scalable backend using Flask.",
      "Designed real-time health query handling system.",
    ],
  },
  {
    title: "Quantum Arithmetic Algorithms",
    company_name: "Quantum Computing Research",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Implemented quantum arithmetic algorithms using Quantum Fourier Transform (QFT).",
      "Performed circuit-level optimization and complexity analysis.",
      "Simulated quantum circuits using Qiskit, Pennylane, and QuTiP.",
      "Analyzed phase encoding and quantum addition/subtraction mechanisms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Completed Machine Learning certification from NPTEL (2025).",
    name: "Machine Learning - NPTEL",
    designation: "Certification",
    company: "NPTEL",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Completed Programming in Java certification from NPTEL (2024).",
    name: "Programming in Java - NPTEL",
    designation: "Certification",
    company: "NPTEL",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "Completed Networking Basics certification from Cisco (2025).",
    name: "Networking Basics - Cisco",
    designation: "Certification",
    company: "Cisco",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    testimonial:
      "Participated in Smart India Hackathon, AgentForce Hackathon, ConsultXpo NIT Trichy, Webathon NEXTGEN AI, and IIT Kharagpur Event.",
    name: "Hackathons & Technical Events",
    designation: "Activities",
    company: "National & Institutional Events",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Attended Quantum Computing Conclave SRMIST, IBM Qiskit Workshop, and IEEE CSIS Conference.",
    name: "Workshops & Conferences",
    designation: "Academic Engagement",
    company: "SRMIST | IBM | IEEE",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Digital Twin Evacuation System",
    description:
      "A fairness-aware multi-agent reinforcement learning system for optimizing urban flood evacuation planning using digital twins and MAPPO.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pytorch", color: "green-text-gradient" },
      { name: "marl", color: "pink-text-gradient" },
      { name: "geopandas", color: "orange-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Multi-Agent AI Traceability Framework",
    description:
      "Deterministic multi-agent architecture enabling traceable LLM execution with RAG pipelines using LangChain and FAISS.",
    tags: [
      { name: "langchain", color: "blue-text-gradient" },
      { name: "langgraph", color: "green-text-gradient" },
      { name: "faiss", color: "pink-text-gradient" },
      { name: "rag", color: "orange-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Health Assistant",
    description:
      "Full-stack AI-powered health assistant web application with secure authentication and multi-model API integration.",
    tags: [
      { name: "flask", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "firestore", color: "pink-text-gradient" },
      { name: "ai-api", color: "orange-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SouptikDSRS/Personalized_MedAI",
  },
];

export { services, technologies, experiences, testimonials, projects };
