import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  Sparkles, 
  Target, 
  BarChart3, 
  Sliders, 
  FileText, 
  ArrowRight, 
  Users, 
  Award,
  Lightbulb
} from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Prediction Accuracy', value: '98.4%', desc: 'Calibrated Gradient Boosting' },
    { label: 'Core Indicators', value: '6 Key Features', desc: 'Multi-dimensional analysis' },
    { label: 'Explainability', value: '100% SHAP', desc: 'Transparent factor attribution' },
    { label: 'API Response Time', value: '< 100ms', desc: 'Powered by FastAPI backend' },
  ];

  const pillars = [
    {
      icon: Target,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      title: 'AI Grade Forecasting',
      desc: 'Predicts final exam scores accurately using pre-trained machine learning algorithms (Gradient Boosting & Random Forest) trained on student engagement data.'
    },
    {
      icon: BarChart3,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      title: 'Explainable AI (SHAP)',
      desc: 'Eliminates black-box predictions by calculating exact SHAP feature attributions, showing positive and negative influences on student marks.'
    },
    {
      icon: Sliders,
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      title: 'What-If Simulation Engine',
      desc: 'Allows students to interactively adjust study hours, attendance, and assignment scores to simulate potential grade improvements in real-time.'
    },
    {
      icon: Lightbulb,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      title: 'Personalized Interventions',
      desc: 'Generates rule-based, tailored academic recommendations and mentoring advice based on identified performance risk levels (Low, Moderate, High).'
    },
    {
      icon: Users,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      title: 'Faculty Admin Dashboard',
      desc: 'Provides educators with cohort-level statistics, risk distribution charts, and student performance tracking to enable early academic counseling.'
    },
    {
      icon: FileText,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      title: 'Automated PDF Reports',
      desc: 'Produces clean, professional performance summaries and intervention reports ready for download, archiving, or parent-teacher discussions.'
    }
  ];

  return (
    <div className="space-y-16 py-4 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Next-Generation Educational Intelligence</span>
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          Empowering Student Success Through <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">Explainable AI</span>
        </h1>
        
        <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          EduPredict AI bridges the gap between academic analytics and early interventions. By combining predictive machine learning with transparent SHAP explanations, we turn raw student data into actionable guidance.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/predict"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 text-sm transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 active:scale-95"
          >
            <span>Launch Marks Predictor</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/what-if"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3 text-sm transition-all active:scale-95"
          >
            <Sliders className="h-4 w-4 text-violet-400" />
            <span>Try What-If Simulator</span>
          </Link>
        </div>
      </section>

      {/* Stats Counter Banner */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel rounded-2xl p-5 text-center space-y-1 relative overflow-hidden border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs font-bold text-blue-400">{stat.label}</div>
            <div className="text-[11px] text-slate-400">{stat.desc}</div>
          </div>
        ))}
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel rounded-2xl p-7 space-y-4 border border-slate-800/80">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold text-white">Our Mission</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            To move educational systems from reactive grading to proactive mentoring. Traditional exams measure performance when it is too late to make changes. EduPredict AI forecasts outcome risks mid-semester, allowing students and educators to intervene when it matters most.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-7 space-y-4 border border-slate-800/80">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold text-white">Transparent AI Standard</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            We believe machine learning in education must be interpretable, not a mystery. By providing SHAP feature attributions, students understand exactly why a specific score is predicted and how improving study hours or attendance directly boosts their final grade.
          </p>
        </div>
      </section>

      {/* Core Platform Capabilities */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Core System Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Comprehensive tools built to analyze, simulate, and enhance academic performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-panel rounded-2xl p-6 space-y-3 hover:border-slate-700 transition-all group">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${item.color} group-hover:scale-105 transition-transform`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;

