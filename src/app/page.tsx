import Link from 'next/link';
import { Sparkles, BookOpen, Code2, GraduationCap, BarChart2, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  const features = [
    { icon: BookOpen, name: 'Research Assistant', desc: 'Summarize papers & generate citations', color: 'blue' },
    { icon: Code2, name: 'Coding Assistant', desc: 'Code generation & debugging help', color: 'green' },
    { icon: GraduationCap, name: 'Study Assistant', desc: 'Notes, quizzes & exam prep', color: 'purple' },
    { icon: BarChart2, name: 'Data Analysis', desc: 'CSV insights & statistics', color: 'yellow' },
    { icon: FileText, name: 'Document Assistant', desc: 'PDF summarization & Q&A', color: 'red' },
    { icon: Sparkles, name: 'Nexus Chat', desc: 'General AI conversations', color: 'orange' },
  ];

  const pricing = [
    { name: 'Free', price: '₹0', features: ['10 messages/day', 'Gemini Flash model', 'Basic tools'] },
    { name: 'Pro', price: '₹499', period: '/month', features: ['500 messages/day', 'Gemini Pro model', 'All tools', 'Priority support'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited messages', 'All models', 'Custom integrations', 'Dedicated support'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-orange-950/10">
      {/* Header */}
      <header className="fixed top-0 w-full glass-dark border-b border-white/10 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold gradient-text">Nexus AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-orange-400 transition">Features</a>
            <a href="#pricing" className="text-sm hover:text-orange-400 transition">Pricing</a>
            <Link href="/auth/login" className="text-sm hover:text-orange-400 transition">Login</Link>
            <Link href="/auth/login" className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm font-medium transition">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block px-4 py-2 glass-card mb-6 animate-fade-in">
            <span className="text-sm text-orange-400">✨ Powered by Google Gemini AI</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Your Premium <span className="gradient-text">AI Assistant</span> for Everything
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Academic research, coding, studying, data analysis — all in one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link href="/auth/login" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold flex items-center justify-center gap-2 transition orange-glow">
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="#features" className="px-8 py-4 glass-card hover:bg-white/10 rounded-xl font-semibold transition">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">All-in-One <span className="gradient-text">AI Tools</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass-card p-6 hover:bg-white/10 transition group">
                <feature.icon className="h-10 w-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Simple <span className="gradient-text">Pricing</span></h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <div key={i} className={`glass-card p-8 ${plan.popular ? 'border-2 border-orange-500 relative' : ''}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 rounded-full text-sm font-medium">Popular</div>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/auth/login" className={`block w-full py-3 rounded-lg text-center font-medium transition ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'glass hover:bg-white/10'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 Nexus AI. Built with Next.js 15 & Google Gemini.</p>
        </div>
      </footer>
    </div>
  );
}
