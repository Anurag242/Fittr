import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell, Droplets, Flame, Activity,
  Plus, Home, Search, MessageCircle, User,
  Zap, ChevronRight, Camera, Weight, Apple,
  Dumbbell, TrendingUp, Star, Lock, Info,
  ShoppingBag, Target, Share2, ClipboardList, ClipboardCheck,
  ChevronDown, ArrowRight, Play, Utensils,
  Clock, Heart, Trophy, Users, Scale, Gift
} from 'lucide-react';
import './index.css';
import IPhoneMockup from './components/IPhoneMockup.jsx';

// ─── Header ──────────────────────────────────────────
function Header() {
  return (
    <header className="header" style={{ background: '#F5F5F7', borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
      <div className="header-left">
        <div style={{ position: 'relative' }}>
          <img
            className="avatar"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80"
            alt="User"
            style={{ border: '2px solid #FFF', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
          />
        </div>
      </div>
      <div className="header-icons" style={{ gap: '12px' }}>
        <button className="icon-btn" style={{ background: '#FFF' }}><Search size={20} color="#000" /></button>
        <button className="icon-btn" style={{ position: 'relative', background: '#FFF' }}>
          <Bell size={20} color="#000" />
          <span className="notif-dot" style={{ background: '#FF3B30' }} />
        </button>
      </div>
    </header>
  );
}

// ─── Daily Pulse Dashboard (LIGHT) ────────────────────
function DailyPulseHeader({ onFlip }) {
  const metrics = [
    { label: 'Nutrition', val: 1240, max: 2000, color: '#FF9500', unit: 'kcal' },
    { label: 'Hydration', val: 1.2, max: 3, color: '#007AFF', unit: 'L' },
    { label: 'Activity', val: 6420, max: 10000, color: '#34C759', unit: 'steps' },
    { label: 'Recovery', val: 6.5, max: 8, color: '#AF52DE', unit: 'hrs' },
  ];

  return (
    <section className="section" style={{ marginTop: '20px' }}>
      <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '28px', color: '#000', marginBottom: '4px' }}>Pulse Dashboard</h1>
          <p style={{ fontSize: '14px', color: '#86868B', fontWeight: '400' }}>Your health vitals are looking optimal.</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onFlip}
          style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#FFF', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}
        >
          <Activity size={20} color="#000" />
        </motion.button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {metrics.map((m) => (
          <div key={m.label} className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#86868B', letterSpacing: '0.05em' }}>{m.label.toUpperCase()}</span>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: m.color }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '24px', fontWeight: '700', color: '#000' }}>{m.val}</span>
              <span style={{ fontSize: '12px', color: '#86868B' }}>{m.unit}</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: '#F5F5F7', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(m.val/m.max)*100}%` }}
                style={{ height: '100%', background: m.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Progress Core (Weekly Trends) ───────────────────
function ProgressCore() {
  const weeklyData = [
    { day: 'M', val: 65 }, { day: 'T', val: 80 }, { day: 'W', val: 45 },
    { day: 'T', val: 90 }, { day: 'F', val: 70 }, { day: 'S', val: 100 }, { day: 'S', val: 62 },
  ];

  return (
    <section className="section">
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
           <div>
              <h3 style={{ fontSize: '16px', color: '#000' }}>Performance Matrix</h3>
              <p style={{ fontSize: '11px', color: '#86868B' }}>7-DAY BIO-CONSISTENCY</p>
           </div>
           <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '20px', color: '#34C759', fontWeight: '600' }}>+12%</span>
           </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '60px' }}>
          {weeklyData.map((d, i) => (
            <div key={d.day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: 1 }}>
              <div style={{ width: '100%', maxWidth: '16px', height: '40px', background: '#F5F5F7', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${d.val}%` }}
                  style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: i === 5 ? '#34C759' : '#000' }} 
                />
              </div>
              <span style={{ fontSize: '10px', fontWeight: '600', color: i === 6 ? '#000' : '#86868B' }}>{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Coach Conversion ────────────────────────────────
function CoachConversion() {
  return (
    <section className="section">
      <motion.div 
        whileTap={{ scale: 0.98 }}
        className="glass-card"
        style={{ padding: '32px', position: 'relative', overflow: 'hidden', background: '#000', color: '#FFF' }}
      >
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '70%' }}>
          <h2 style={{ fontSize: '24px', color: '#FFF', marginBottom: '12px' }}>Transform with Expert Guidance</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px', lineHeight: '1.5' }}>Unlock personalized protocols for longevity and peak performance.</p>
          <button style={{ 
            background: '#FFF', color: '#000', padding: '16px 24px', borderRadius: '16px',
            fontSize: '13px', fontWeight: '700', letterSpacing: '0.05em', border: 'none'
          }}>FIND A COACH</button>
        </div>
        <div style={{ 
          position: 'absolute', right: '-40px', bottom: '-20px', width: '200px', height: '200px',
          background: 'radial-gradient(circle, #34C759 0%, transparent 70%)', opacity: 0.3, filter: 'blur(40px)'
        }} />
      </motion.div>
    </section>
  );
}

// ─── Daily Protocol Feed ─────────────────────────────
function DailyLogFeed() {
  const items = [
    { type: 'WORKOUT', title: 'Strength Protocol', meta: '45 mins • Advanced', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80' },
    { type: 'NUTRITION', title: 'Longevity Bowl', meta: 'High Protein • 520 kcal', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <section className="section" style={{ paddingRight: 0 }}>
      <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '16px' }}>Daily Protocol</h3>
      <div className="h-scroll" style={{ gap: '16px', paddingRight: '16px' }}>
        {items.map((item) => (
          <motion.div 
            key={item.title}
            whileTap={{ scale: 0.97 }}
            className="glass-card"
            style={{ minWidth: '280px', height: '180px', position: 'relative', overflow: 'hidden' }}
          >
            <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
            <div style={{ position: 'absolute', inset: 0, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#FFF', opacity: 0.8, marginBottom: '4px', letterSpacing: '0.1em' }}>{item.type}</span>
              <h4 style={{ fontSize: '18px', color: '#FFF', marginBottom: '4px' }}>{item.title}</h4>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{item.meta}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Fitness Wisdom ──────────────────────────────────
function FitnessWisdom() {
  return (
    <section className="section">
      <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '16px' }}>Fitness Wisdom</h3>
      <motion.div 
        whileTap={{ scale: 0.98 }}
        className="glass-card"
        style={{ position: 'relative', height: '240px', overflow: 'hidden' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" 
          alt="Wisdom" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
        <div style={{ position: 'absolute', inset: 0, padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ background: '#FFF', color: '#000', padding: '4px 12px', borderRadius: '8px', width: 'fit-content', fontSize: '10px', fontWeight: '900', marginBottom: '12px' }}>EXPERT INSIGHT</div>
          <h2 style={{ color: '#FFF', fontSize: '22px', fontWeight: '700', lineHeight: '1.2' }}>The Science of Circadian Rhythms & Recovery</h2>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Community Highlights ───────────────────────────
function CommunityHighlights() {
  const stories = [
    { id: 1, name: 'Rahul M.', views: '2.4k', title: 'Lost 12kg in 3 months!', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=128&q=80', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Anjali G.', views: '1.8k', title: 'PCOS Transformation', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=80', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <section className="section" style={{ paddingBottom: '60px' }}>
      <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '20px' }}>Community Stories</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {stories.map((s) => (
          <div key={s.id} className="glass-card" style={{ overflow: 'hidden' }}>
             <div style={{ padding: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <img src={s.avatar} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                   <p style={{ fontSize: '14px', fontWeight: '700', color: '#000' }}>{s.name}</p>
                   <p style={{ fontSize: '11px', color: '#86868B' }}>{s.views} views</p>
                </div>
             </div>
             <div style={{ position: 'relative', height: '300px' }}>
                <img src={s.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                   <p style={{ color: '#FFF', fontSize: '18px', fontWeight: '700' }}>{s.title}</p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Service Hub Back ────────────────────────────────
function ServiceHubBack({ onFlip }) {
  const services = [
    { label: 'COACH', desc: 'Expert Guidance', icon: Star },
    { label: 'LABS', desc: 'Blood & Vitals', icon: Activity },
    { label: 'PLAN', desc: 'Daily Routine', icon: ClipboardCheck },
    { label: 'SCALE', desc: 'Composition', icon: Scale },
    { label: 'EARN', desc: 'Rewards', icon: Gift },
    { label: 'SHOP', desc: 'Premium Gear', icon: ShoppingBag },
  ];

  return (
    <div style={{ width: '100%', height: '100%', background: '#F5F5F7', padding: '40px 16px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '28px', color: '#000', fontWeight: '800' }}>SERVICE HUB</h2>
          <p style={{ fontSize: '13px', color: '#86868B' }}>The power behind your progress</p>
        </div>
        <motion.button whileTap={{ scale: 0.9 }} onClick={onFlip} style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#FFF', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <Plus size={24} color="#000" style={{ transform: 'rotate(45deg)' }} />
        </motion.button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {services.map((s) => (
          <motion.div key={s.label} whileTap={{ scale: 0.95 }} style={{ background: '#FFF', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <s.icon size={32} color="#000" style={{ marginBottom: '16px' }} />
            <h4 style={{ fontSize: '13px', color: '#000', fontWeight: '700' }}>{s.label}</h4>
            <p style={{ fontSize: '10px', color: '#86868B' }}>{s.desc.toUpperCase()}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Bottom Nav ──────────────────────────────────────
function BottomNav() {
  const items = [
    { id: 'home', icon: Home },
    { id: 'search', icon: Search },
    { id: 'plus', icon: Plus, isAction: true },
    { id: 'stats', icon: Activity },
    { id: 'user', icon: User },
  ];

  return (
    <nav className="bottom-nav" style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      {items.map((item) => (
        <div key={item.id} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {item.isAction ? (
            <div style={{ width: '44px', height: '44px', background: '#000', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <Plus size={24} color="#FFF" />
            </div>
          ) : (
            <item.icon size={22} color="#86868B" />
          )}
        </div>
      ))}
    </nav>
  );
}

// ─── Main App ────────────────────────────────────────
export default function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <IPhoneMockup>
      <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative', perspective: '1200px' }}>
        <motion.div
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 80 }}
          style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
        >
          {/* FRONT SIDE */}
          <motion.div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', zIndex: 1, background: '#F5F5F7', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
              <div className="app" style={{ paddingBottom: '80px' }}>
                <Header />
                <DailyPulseHeader onFlip={() => setIsFlipped(true)} />
                <ProgressCore />
                <CoachConversion />
                <DailyLogFeed />
                <FitnessWisdom />
                <CommunityHighlights />
              </div>
            </div>
            <BottomNav />
          </motion.div>

          {/* BACK SIDE */}
          <motion.div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', zIndex: 0, transform: 'rotateY(180deg)', background: '#F5F5F7' }}>
            <ServiceHubBack onFlip={() => setIsFlipped(false)} />
          </motion.div>
        </motion.div>
      </div>
    </IPhoneMockup>
  );
}
