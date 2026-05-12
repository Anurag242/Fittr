import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell, Droplets, Flame, Activity,
  Plus, Home, Search, MessageCircle, User,
  Zap, ChevronRight, Camera, Weight, Apple,
  Dumbbell, TrendingUp, Star
} from 'lucide-react';
import './index.css';
import IPhoneMockup from './components/IPhoneMockup.jsx';

// ─── Ring ────────────────────────────────────────────
function Ring({ icon: Icon, progress, stroke, label, value }) {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const [anim, setAnim] = useState(false);
  useEffect(() => { const t = setTimeout(() => setAnim(true), 300); return () => clearTimeout(t); }, []);
  const offset = circ - (anim ? progress / 100 : 0) * circ;

  return (
    <div className="ritual-item">
      <div className="ring-wrap">
        <svg width="68" height="68" viewBox="0 0 68 68">
          <circle className="ring-bg" cx="34" cy="34" r={r} />
          <circle
            className="ring-prog"
            cx="34" cy="34" r={r}
            style={{ stroke, strokeDasharray: circ, strokeDashoffset: offset }}
          />
        </svg>
        <div className="ring-center">
          <Icon size={20} color={stroke} strokeWidth={2} />
        </div>
      </div>
      <div className="ritual-label">
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

// ─── Header ──────────────────────────────────────────
function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          className="avatar"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80"
          alt="User"
        />
        <div className="greeting-text">
          <p>Good Morning ☀️</p>
          <h2>Saumil</h2>
        </div>
      </div>
      <div className="header-icons">
        <button className="icon-btn" style={{ position: 'relative' }}>
          <Bell size={18} strokeWidth={1.8} />
          <span className="notif-dot" />
        </button>
      </div>
    </header>
  );
}

// ─── Streak Banner ────────────────────────────────────
function StreakBanner() {
  return (
    <motion.div
      className="streak-banner"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="streak-left">
        <span className="streak-emoji">🔥</span>
        <div className="streak-text">
          <h4>14-Day Streak!</h4>
          <p>Keep logging to maintain it</p>
        </div>
      </div>
      <span className="streak-badge">Week 2</span>
    </motion.div>
  );
}

// ─── Daily Rituals ────────────────────────────────────
function DailyRituals() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <div className="section-header">
        <h3>Daily Rituals</h3>
        <span className="section-link">Details</span>
      </div>
      <div className="rituals-card">
        <Ring icon={Flame}    progress={65} stroke="#FF3B30" label="Calories" value="1,240" />
        <Ring icon={Droplets} progress={40} stroke="#0A84FF" label="Water"    value="1.2L"  />
        <Ring icon={Activity} progress={80} stroke="#CFFF04" label="Steps"    value="6,420" />
        <Ring icon={Weight}   progress={100} stroke="#FF9F0A" label="Weight"   value="✓"    />
      </div>
    </motion.section>
  );
}

// ─── Quick Log ────────────────────────────────────────
function QuickLog() {
  const cards = [
    { icon: Apple,    color: '#FF3B30', bg: 'rgba(255,59,48,0.12)',  title: 'Log Food',     desc: 'Breakfast, Lunch…',   stat: '3 meals', statColor: '#FF3B30' },
    { icon: Droplets, color: '#0A84FF', bg: 'rgba(10,132,255,0.12)', title: 'Water Intake', desc: 'Stay hydrated',       stat: '1.2 / 3L', statColor: '#0A84FF' },
    { icon: Dumbbell, color: '#CFFF04', bg: 'rgba(207,255,4,0.12)',  title: 'Workout',      desc: 'Push, Pull, Legs…',   stat: 'Not logged', statColor: '#CFFF04' },
    { icon: Weight,   color: '#FF9F0A', bg: 'rgba(255,159,10,0.12)', title: 'Body Weight',  desc: 'Track progress',      stat: '72.4 kg', statColor: '#FF9F0A' },
  ];

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="section-header">
        <h3>Quick Log</h3>
      </div>
      <div className="quick-log-grid">
        {cards.map(({ icon: Icon, color, bg, title, desc, stat, statColor }) => (
          <div key={title} className="log-card">
            <div className="log-card-icon" style={{ background: bg }}>
              <Icon size={20} color={color} strokeWidth={2} />
            </div>
            <div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: statColor }}>{stat}</span>
            <ChevronRight size={14} className="log-card-arrow" />
          </div>
        ))}
      </div>
    </motion.section>
  );
}

// ─── Coaching Card ────────────────────────────────────
function CoachingCard() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
    >
      <div className="coaching-card">
        <div className="coaching-glow" />
        <div className="coaching-glow2" />

        <div className="coaching-chip">
          <Star size={12} fill="#CFFF04" color="#CFFF04" />
          <span>ELITE COACHING</span>
        </div>

        <h2>Your transformation<br />starts today.</h2>
        <p>Personalized plans from top-ranked certified coaches — nutrition, training & mindset.</p>

        <div className="coaches-row">
          <div className="coach-avatars">
            {[
              'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=64&q=80',
              'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=64&q=80',
              'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=64&q=80',
            ].map((src, i) => (
              <img key={i} className="coach-avatar" src={src} alt="" />
            ))}
          </div>
          <div className="coaches-text">
            <strong>3,400+</strong> members joined this week
          </div>
        </div>

        <button className="btn-primary">
          Match with a Coach <Zap size={16} fill="#000" />
        </button>
      </div>
    </motion.section>
  );
}

// ─── Discover ─────────────────────────────────────────
function Discover() {
  const items = [
    { tag: 'NUTRITION', title: 'High Protein Meal Plans', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80' },
    { tag: 'TRAINING', title: 'HIIT for Fat Loss', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80' },
    { tag: 'WELLNESS', title: 'Sleep & Recovery', img: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&w=400&q=80' },
    { tag: 'STRENGTH', title: 'Beginner Lifting', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="section-header">
        <h3>Discover</h3>
        <span className="section-link">See All</span>
      </div>
      <div className="h-scroll">
        {items.map(({ tag, title, img }) => (
          <div key={title} className="discover-card">
            <img src={img} alt={title} />
            <div className="discover-card-overlay">
              <span className="discover-tag">{tag}</span>
              <h4>{title}</h4>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

// ─── Progress Photo ────────────────────────────────────
function ProgressPhoto() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
    >
      <div className="section-header">
        <h3>Progress</h3>
        <span className="section-link">History</span>
      </div>
      <div className="progress-photo-card">
        <div className="progress-photo-inner">
          <div className="icon-circle">
            <Camera size={22} />
          </div>
          <h4>Log a Progress Photo</h4>
          <p>Visual proof of your hard work</p>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Bottom Nav ────────────────────────────────────────
function BottomNav() {
  const [active, setActive] = useState('home');
  const items = [
    { id: 'home',      icon: Home,           label: 'Home' },
    { id: 'explore',   icon: Search,         label: 'Explore' },
    { id: 'log',       icon: null,           label: null      },
    { id: 'community', icon: MessageCircle,  label: 'Community' },
    { id: 'profile',   icon: User,           label: 'Profile' },
  ];

  return (
    <nav className="bottom-nav">
      {items.map(({ id, icon: Icon, label }) => {
        if (id === 'log') return (
          <div key="log" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.button
              className="fab"
              whileTap={{ scale: 0.88, rotate: 45 }}
              onClick={() => {}}
            >
              <Plus size={26} strokeWidth={2.5} />
            </motion.button>
          </div>
        );
        return (
          <div
            key={id}
            className={`nav-item ${active === id ? 'active' : ''}`}
            onClick={() => setActive(id)}
          >
            <Icon size={22} strokeWidth={1.8} />
            <span>{label}</span>
          </div>
        );
      })}
    </nav>
  );
}

// ─── App ─────────────────────────────────────────────
export default function App() {
  return (
    <IPhoneMockup>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '852px' }}>
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none' }}>
          <div className="app">
            <Header />
            <StreakBanner />
            <DailyRituals />
            <QuickLog />
            <CoachingCard />
            <ProgressPhoto />
            <Discover />
          </div>
        </div>
        <BottomNav />
      </div>
    </IPhoneMockup>
  );
}
