# Nexus AI - Premium AI SaaS Platform

🚀 **All-in-one AI assistant for academics, research, coding, and productivity** — powered by Google Gemini.

## ✨ Features

- **🤖 Nexus Chat** - General AI conversations
- **📚 Research Assistant** - Paper summarization, literature reviews, citations
- **💻 Coding Assistant** - Code generation, debugging, LeetCode help
- **🎓 Study Assistant** - Notes, quizzes, flashcards, exam prep
- **📊 Data Analysis** - CSV insights, graph generation, statistics
- **📄 Document Assistant** - PDF summarization & Q&A

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **AI**: Google Gemini API
- **Auth**: Supabase Auth
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Supabase account
- Google Gemini API key

### Installation

```bash
# Clone repository
git clone https://github.com/8dbluetick/nexus-ai.git
cd nexus-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase and Gemini API keys to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🗄️ Database Setup

The SQL schema is in `/supabase/schema.sql`. Run it in your Supabase SQL editor.

## 📱 Pages

- `/` - Landing page
- `/auth/login` - Authentication
- `/dashboard` - Main chat dashboard
- `/tools/*` - AI tool pages
- `/profile` - User profile
- `/admin` - Admin portal

## 🎨 Design

- Dark mode by default
- Glassmorphism UI
- Orange accent color
- Premium animations
- Mobile-first responsive

## 📝 License

MIT License - feel free to use for your own projects!

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

---

**Built with ❤️ by [8dbluetick](https://github.com/8dbluetick)**
