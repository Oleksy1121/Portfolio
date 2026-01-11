# Portfolio — AI Engineer

Personal portfolio website showcasing AI/ML projects with interactive demos.

🔗 **Live:** [marcin-oleszczyk.pl](https://marcin-oleszczyk.pl)

---

## Overview

A full-stack portfolio application featuring:
- Interactive demos of AI/ML projects (RAG, RL, Computer Vision)
- Real-time API integrations with deployed ML backends
- Dark/light theme support
- Responsive design

---

## Featured Projects

| Project | Description | Tech Stack | Demo |
|---------|-------------|------------|------|
| **AI Research Analyst** | Autonomous research agent with LangGraph workflow, session RAG, and human-in-the-loop checkpoints | LangGraph, ChromaDB, FastAPI, AWS | [Live Demo](https://marcin-oleszczyk.pl/ai-research-analyst) |
| **TechDocs** | RAG system for semantic search over PyTorch & FastAPI documentation | LangChain, ChromaDB, GPT-4o-mini, GCP | [Live Demo](https://marcin-oleszczyk.pl/techdocs) |
| **Video Summarizer** | YouTube video summarization with Whisper transcription + GPT | OpenAI Whisper, GPT-4o-mini, FastAPI | [Live Demo](https://marcin-oleszczyk.pl/video-summarizer) |
| **SnakeAI** | Reinforcement Learning agent (PPO) trained on 50M steps | Stable-Baselines3, Gymnasium, PyGame | [Live Demo](https://marcin-oleszczyk.pl/snake-ai) |
| **Digit Recognizer** | CNN-based handwritten digit recognition with drawable canvas | PyTorch, FastAPI, React | [Live Demo](https://marcin-oleszczyk.pl/handwritten-digit-recognizer) |

---

## Tech Stack

### Frontend
- React 18
- Styled Components
- React Router
- React Bootstrap

### Backend Services
Each project demo connects to its own deployed backend:
- FastAPI (Python)
- Docker containers
- GCP Cloud Run / AWS App Runner

### CI/CD
- GitHub Actions
- Automated deployment pipeline

---

## Project Structure
```
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AIResearchAnalyst/            # LangGraph research agent demo
│   │   │   ├── TechDocs/                     # RAG chatbot interface
│   │   │   ├── VideoSummarizer/              # YouTube summarizer
│   │   │   ├── SnakeAI/                      # RL agent showcase
│   │   │   ├── HandwrittenDigitRecognizer/   # CNN demo with canvas
│   │   │   ├── Portfolio/                    # Main landing page
│   │   │   ├── Projects/                     # Projects listing
│   │   │   ├── Skills/                       # Skills section
│   │   │   └── ...
│   │   ├── data/
│   │   │   ├── projectsData.js      # Project metadata
│   │   │   └── skillsData.js        # Skills configuration
│   │   └── App.js
│   ├── Dockerfile
│   └── nginx.conf
└── README.md
```

---

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Clone repository
git clone https://github.com/Oleksy1121/Portfolio.git
cd Portfolio/frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your API URLs

# Run development server
npm start
```

Access at: http://localhost:3000

### Environment Variables
```env
REACT_APP_API_URL=http://localhost:8000           # Digit Recognizer API
REACT_APP_TECHDOCS_API_URL=http://localhost:8001  # TechDocs API
REACT_APP_RESEARCH_API_URL=http://localhost:8002  # AI Research Analyst API
```

---

## Deployment

### Docker Build
```bash
cd frontend

docker build \
  --build-arg REACT_APP_API_URL=https://your-api.com \
  --build-arg REACT_APP_TECHDOCS_API_URL=https://your-techdocs-api.com \
  --build-arg REACT_APP_RESEARCH_API_URL=https://your-research-api.com \
  -t portfolio-frontend .

docker run -p 80:80 portfolio-frontend
```

### Production
Deployed via GitHub Actions to GCP Cloud Run with nginx serving static build.

---

## Related Repositories

| Repository | Description |
|------------|-------------|
| [ai-research-analyst](https://github.com/Oleksy1121/ai-research-analyst) | LangGraph research agent backend |
| [TechDocs](https://github.com/Oleksy1121/TechDocs) | RAG documentation assistant backend |
| [video-summarizer](https://github.com/Oleksy1121/video-summarizer) | Video summarization backend |
| [SnakeAI](https://github.com/Oleksy1121/SnakeAI) | Reinforcement learning Snake agent |
| [Handwritten-digit-recognizer](https://github.com/Oleksy1121/Handwritten-digit-recognizer) | CNN digit classifier backend |

---

## Author

**Marcin Oleszczyk** — AI Engineer

- Portfolio: [marcin-oleszczyk.pl](https://marcin-oleszczyk.pl)
- GitHub: [@Oleksy1121](https://github.com/Oleksy1121)
- LinkedIn: [Marcin Oleszczyk](https://www.linkedin.com/in/marcin-o-2aaa75208/)

---

## License

MIT