export const profile = {
  name: 'Goutham Gourabathuni',
  role: 'Undergraduate',
  location: 'Hyderabad, Telangana, India',
  phone: '+91 6309971208',
  email: 'gouthamgourabathuni@gmail.com',
  address: '2-2-215/108, Hyderabad, Telangana, 500010',
  links: {
    linkedin: 'https://www.linkedin.com/in/goutham-g-6919a6281/',
    github: 'https://github.com/Goutham-Gourabathuni'
  }
}

export const Work = [
  {
    company: 'Infosys',
    duration: 'Nov 2025 – Jan 2026 | India',
    position: 'Artificial Intelligence and Machine Learning Intern',
    description: 'Built an AI-powered podcast analysis system using Whisper, Sentence-BERT, and HuggingFace BART. Implemented topic segmentation using sentence embeddings and cosine similarity. Developed FastAPI backend and Streamlit/React interface for podcast transcription and summarization.',
    link: 'https://drive.google.com/file/d/1mpzECxF-1DRQ2g7ZWtjCt2GALN208faB/view' 
  },
  {
    company: 'Yuga Yatra',
    duration: 'Oct 2025 – Dec 2025 | India',
    position: 'Software Development Engineering Intern',
    description: 'Contributed to backend development using modern web technologies. Assisted in designing scalable APIs and database structures. Collaborated with developers to implement full-stack features. Participated in brainstorming and product discussions.',
    link: 'https://drive.google.com/file/d/1g9YzPxTgsuk6jAuafXRptnU8zMcyj3wP/view' // Opens the certificate PDF
  }
]

export const projects = [
  {
    title: 'PodC - An Automated Podcast Analyzer',
    description: 'The project PodC has been made to analyze the podcasts and summarize them to a structured transcript. It was made using technologies such as React.js, Streamlit UI, FastAPI for application UI. Models such as Hugging-Face BART is used for summarization, OpenAI Whisper is used for ASR (speech to text), Sentence BERT model (all-MiniLM-L6-v2) is used for sentence embeddings.',
    image: '/images/Podc.png',
    tags: ['Python', 'NLP', 'LLM', 'React.js', 'FastAPI', 'Hugging-Face spaces', 'Vercel', 'OpenAI-Whisper'],
    link:'https://pod-c.vercel.app/'
  },
  {
    title: 'Bonanza - Banana Nutrient Deficiency Detector',
    description: 'A Tensorflow based Backend Model which was made for detecting a major nutrient which is deficient in a banana leaf by analyzing it’s image. It consists of a React front-end hosted on Vercel and a Python (FastAPI) back-end with a TF Lite model hosted on Render. Key project objectives were to provide an easy to-use interface for farmers and researchers and to demonstrate AI-powered plant health monitoring.',
    image: '/images/Bonanza.png',
    tags: ['Tensor-flow', 'FastAPI', 'Render', 'Vercel'],
    link:'https://bonanza-draft1.vercel.app/'
  },
  {
    
    title: 'AI integrated Smart Glasses for Visually Impaired (blind people)',
    description: 'This project is a tool which is designed to support visually impaired individuals in their daily activities through computer vision technology. This tool combines multiple intelligent features into a single, accessible object built using technologies like Raspberry Pi 4, Yolov11n, pyttsx3, TF-Luna LiDAR.',
    image: '/images/Raspberry-pi4.png',
    tags: ['Raspberry Pi 4','Yolov11n', 'pyttsx3', 'TF-Luna LiDAR', 'pi-cam'],
    link:'https://drive.google.com/file/d/1AZjphwKKk8dSkTKzDdWgzzpV56XiJ1T9/view'
  }
]

export const plannedProjects = [
  {
    title: 'TrustLens AI',
    description: ''
  }
]

export const education = [
  {
    school: 'Vellore Institute of Technology',
    duration: '2023 – 2027 | India',
    degree:
      'B.Tech in Computer Science — specialization in Artificial Intelligence and Machine Learning',
    highlights: ['CGPA: 8.77', 'TIC 2025 – semi finalist']
  },
  {
    school: 'Sri Chaitanya Junior College',
    duration: '2021 – 2023 | Hyderabad, India',
    degree: 'Junior College',
    highlights: ['Score: 89.6']
  },
  {
    school: 'Jawahar Navodaya Vidyalaya',
    duration: '2016 – 2021 | Hyderabad, India',
    degree: 'High School',
    highlights: ['Score: 90.8']
  }
]

export const certificates = [
  'Oracle Generative AI professional | 2025 — Oracle University',
  'Oracle AI Foundations Associate | 2025 — Oracle University',
  'Applied Machine Learning in Python | 2025 — University of Michigan (Coursera)',
  //'Artificial Intelligence | 2025 — Infosys Springboard',
  //'Deep Learning | 2025 — Infosys Springboard',
  'Full Stack Web Development | 2025 — Apna College'
]


