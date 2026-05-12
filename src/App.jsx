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
    <header className="header">
      <div className="header-left">
        <div style={{ position: 'relative' }}>
          <img
            className="avatar"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80"
            alt="User"
            style={{ border: '2px solid #FFF', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <div style={{
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#000',
            borderRadius: '12px',
            padding: '2px 10px',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            height: '22px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            <div style={{ width: '12px', height: '12px', background: 'linear-gradient(135deg, #FFD700, #B8860B)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: '#000', fontWeight: '900' }}>F</div>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#FFF' }}>120</span>
          </div>
        </div>
      </div>
      <div className="header-icons" style={{ gap: '12px' }}>
        <button className="icon-btn" style={{ background: '#FFF' }}><Search size={20} /></button>
        <button className="icon-btn" style={{ position: 'relative', background: '#FFF' }}>
          <Bell size={20} />
          <span className="notif-dot" style={{ background: '#FF3B30' }} />
        </button>
        <button className="icon-btn" style={{ background: '#FFF' }}><MessageCircle size={20} /></button>
      </div>
    </header>
  );
}

// ─── Calendar Overlay (NEW) ──────────────────────────
function CalendarOverlay({ isOpen, onClose, onSelect }) {
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1000, backdropFilter: 'blur(4px)' }}
          />
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              position: 'absolute', bottom: 0, left: 0, right: 0, 
              background: '#FFF', borderRadius: '32px 32px 0 0', 
              padding: '24px', zIndex: 1001,
              boxShadow: '0 -10px 40px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ width: '40px', height: '4px', background: '#DDD', borderRadius: '2px', margin: '0 auto 24px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '900' }}>October 2023</h3>
              <button onClick={onClose} style={{ padding: '8px 16px', borderRadius: '12px', background: '#F0F0F2', border: 'none', fontWeight: '700', fontSize: '13px' }}>Done</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', marginBottom: '16px' }}>
              {days.map(d => (
                <div key={d} style={{ textAlign: 'center', fontSize: '12px', fontWeight: '700', color: '#BBB' }}>{d}</div>
              ))}
              {dates.map(d => (
                <motion.div 
                  key={d} 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => { onSelect(d); onClose(); }}
                  style={{ 
                    height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '12px', fontSize: '14px', fontWeight: '700',
                    background: d === 13 ? '#000' : 'transparent',
                    color: d === 13 ? '#FFF' : '#000',
                    cursor: 'pointer'
                  }}
                >
                  {d}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const PremiumActionBubbles = () => {
  const actions = [
    { label: 'My Plan', sub: 'Active', icon: ClipboardCheck, color: '#FFB800', grad: 'radial-gradient(circle at 30% 30%, #FFF5D1 0%, #FFB800 100%)' },
    { label: 'Smart Scale', sub: 'Syncing', icon: Scale, color: '#AF52DE', grad: 'radial-gradient(circle at 30% 30%, #F3E7FF 0%, #AF52DE 100%)' },
    { label: 'Challenges', sub: '2 New', icon: Target, color: '#FF3B30', grad: 'radial-gradient(circle at 30% 30%, #FFE5E5 0%, #FF3B30 100%)' },
    { label: 'Shop', sub: 'Gear', icon: ShoppingBag, color: '#34C759', grad: 'radial-gradient(circle at 30% 30%, #E8F9EE 0%, #34C759 100%)' },
  ];

  return (
    <section style={{ padding: '28px 0', overflow: 'hidden' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '0 12px',
        gap: '4px'
      }}>
        {actions.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                flex: 1
              }}
            >
              <div style={{ position: 'relative' }}>
                {/* Aura Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '120%',
                    height: '120%',
                    background: item.color,
                    borderRadius: '50%',
                    filter: 'blur(20px)',
                    zIndex: 0
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: item.grad,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxShadow: `inset -4px -4px 12px rgba(0,0,0,0.2), 0 12px 24px ${item.color}30`,
                    border: '3px solid #FFF',
                    cursor: 'pointer',
                    zIndex: 2,
                    overflow: 'hidden'
                  }}
                >
                  {/* Glossy Specular Highlight */}
                  <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '15%',
                    width: '40%',
                    height: '25%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
                    borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%',
                    transform: 'rotate(-25deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <Icon size={28} color="#FFF" strokeWidth={2.5} style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
                </motion.div>
              </div>
              
              <div style={{ textAlign: 'center', zIndex: 2 }}>
                <p style={{ 
                  fontSize: '11px', 
                  fontWeight: '850', 
                  color: '#1A1A1A',
                  letterSpacing: '-0.2px',
                  marginBottom: '2px'
                }}>{item.label}</p>
                <div style={{
                  display: 'inline-block',
                  padding: '2px 6px',
                  background: `${item.color}15`,
                  borderRadius: '6px'
                }}>
                  <span style={{ 
                    fontSize: '8px', 
                    fontWeight: '900', 
                    color: item.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>{item.sub}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// ─── Daily Rituals (IMPROVED) ────────────────────────
function DailyRituals({ onOpenCalendar }) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Rise & Shine, Anurag! ☀️";
    if (hour < 17) return "Keep crushing it, Anurag! ⚡️";
    return "Finishing strong, Anurag? 🔥";
  };

  const rings = [
    { label: 'Cals', val: 1240, max: 2000, color: '#FF3B30', icon: Flame },
    { label: 'Water', val: 1.2, max: 3, color: '#007AFF', icon: Droplets },
    { label: 'Steps', val: 6420, max: 10000, color: '#34C759', icon: Zap },
    { label: 'Sleep', val: 6.5, max: 8, color: '#AF52DE', icon: Clock },
  ];

  return (
    <section className="section" style={{ marginTop: '10px', paddingBottom: '0' }}>
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-0.5px' }}>{getGreeting()}</h2>
        <p style={{ fontSize: '13px', color: '#666' }}>You're at <span style={{ fontWeight: '700', color: '#000' }}>62%</span> of your daily goal!</p>
      </div>

      <PremiumActionBubbles />

      {/* Centered Date Pill on Divider */}
      <div style={{ position: 'relative', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
        <div style={{ 
          position: 'absolute', left: 0, right: 0, height: '1px', 
          background: 'linear-gradient(to right, transparent, #E5E5EA 20%, #E5E5EA 80%, transparent)' 
        }} />
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={onOpenCalendar}
          style={{ 
            position: 'relative',
            background: '#E5E5EA', 
            border: 'none', 
            padding: '6px 16px', 
            borderRadius: '100px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 0 0 4px #F5F5F7' 
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: '800', color: '#000' }}>Today</span>
          <ChevronDown size={14} color="#000" />
        </motion.button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        {rings.map((r) => (
          <div key={r.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ position: 'relative', width: '70px', height: '70px' }}>
               <svg style={{ transform: 'rotate(-90deg)', width: '70px', height: '70px' }}>
                  <circle cx="35" cy="35" r="30" fill="none" stroke="#F0F0F2" strokeWidth="6" />
                  <motion.circle 
                    cx="35" cy="35" r="30" fill="none" stroke={r.color} strokeWidth="6" 
                    strokeDasharray="188.5"
                    initial={{ strokeDashoffset: 188.5 }}
                    animate={{ strokeDashoffset: 188.5 - (r.val / r.max) * 188.5 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
               </svg>
               <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <r.icon size={20} color={r.color} />
               </div>
            </div>
            <p style={{ fontSize: '11px', fontWeight: '700', color: '#333' }}>{r.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Action Cards (IMPROVED - Full Width) ─────────────
function DailyTrackers() {
  return (
    <div className="section" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Nutrition Card */}
      <motion.div className="glass-card" whileTap={{ scale: 0.98 }} style={{ padding: '20px', background: 'linear-gradient(135deg, #FFF 0%, #FFF9F0 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ padding: '6px', borderRadius: '8px', background: '#FF950015' }}>
                <Utensils size={18} color="#FF9500" />
              </div>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#FF9500', letterSpacing: '0.5px' }}>NUTRITION</span>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '4px' }}>1,240 <span style={{ fontSize: '14px', fontWeight: '500', color: '#666' }}>/ 2000 kcal</span></h3>
            <p style={{ fontSize: '12px', color: '#888' }}>You have 760 kcal remaining for today.</p>
          </div>
          <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#000', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Plus size={20} />
          </button>
        </div>
        <div style={{ width: '100%', height: '6px', background: '#F0F0F2', borderRadius: '3px', marginTop: '16px', overflow: 'hidden' }}>
          <div style={{ width: '62%', height: '100%', background: '#FF9500', borderRadius: '3px' }} />
        </div>
      </motion.div>

      {/* Water Card */}
      <motion.div className="glass-card" whileTap={{ scale: 0.98 }} style={{ padding: '20px', background: 'linear-gradient(135deg, #FFF 0%, #F0F7FF 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ padding: '6px', borderRadius: '8px', background: '#007AFF15' }}>
                <Droplets size={18} color="#007AFF" />
              </div>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#007AFF', letterSpacing: '0.5px' }}>HYDRATION</span>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '4px' }}>1.2 <span style={{ fontSize: '14px', fontWeight: '500', color: '#666' }}>/ 3.0 ltr</span></h3>
            <p style={{ fontSize: '12px', color: '#888' }}>Drink 3 more glasses to reach your goal.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{ width: '12px', height: '24px', borderRadius: '4px', background: i <= 2 ? '#007AFF' : '#E5E5EA' }} />
            ))}
            <button style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#007AFF15', color: '#007AFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '4px' }}>
              <Plus size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Workout Card */}
      <motion.div className="glass-card" whileTap={{ scale: 0.98 }} style={{ padding: '20px', background: 'linear-gradient(135deg, #FFF 0%, #FFF0F3 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ padding: '6px', borderRadius: '8px', background: '#FF2D5515' }}>
                <Dumbbell size={18} color="#FF2D55" />
              </div>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#FF2D55', letterSpacing: '0.5px' }}>ACTIVITY</span>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '4px' }}>Abs Workout</h3>
            <p style={{ fontSize: '12px', color: '#888' }}>45 mins • Intermediate • 320 kcal</p>
          </div>
          <button style={{ background: '#000', color: '#FFF', padding: '10px 20px', borderRadius: '12px', fontSize: '13px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Start <Play size={14} fill="#FFF" />
          </button>
        </div>
      </motion.div>

      {/* Sleep Card */}
      <motion.div className="glass-card" whileTap={{ scale: 0.98 }} style={{ padding: '20px', background: 'linear-gradient(135deg, #FFF 0%, #F5F0FF 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ padding: '6px', borderRadius: '8px', background: '#AF52DE15' }}>
                <Clock size={18} color="#AF52DE" />
              </div>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#AF52DE', letterSpacing: '0.5px' }}>RECOVERY</span>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '4px' }}>6h 45m <span style={{ fontSize: '14px', fontWeight: '500', color: '#666' }}>/ 8h 00m</span></h3>
            <p style={{ fontSize: '12px', color: '#888' }}>You slept 1h 15m less than your target.</p>
          </div>
          <button style={{ padding: '10px 16px', borderRadius: '12px', border: '1px solid #EEE', background: '#FFF', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Log Sleep <Plus size={14} />
          </button>
        </div>
        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ flex: 1, height: '6px', background: '#F0F0F2', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '84%', height: '100%', background: '#AF52DE', borderRadius: '3px' }} />
          </div>
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#AF52DE' }}>84%</span>
        </div>
      </motion.div>

    </div>
  );
}

// ─── Service Hub (High-End Action Hub) ───────────────
// ─── Editorial Hub (High-End Product Canvas) ────────
function EditorialHub() {
  const items = [
    { label: 'COACH', title: 'Consult Experts', icon: Star, color: '#FFD700', size: 'hero', grad: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)' },
    { label: 'LABS', title: 'Check Vitals', icon: Activity, color: '#AF52DE', size: 'normal', grad: 'linear-gradient(135deg, #AF52DE 0%, #6A11CB 100%)' },
    { label: 'PLAN', title: 'My Daily Routine', icon: ClipboardList, color: '#34C759', size: 'normal', grad: 'linear-gradient(135deg, #34C759 0%, #11998E 100%)' },
    { label: 'SHOP', title: 'Gear', icon: ShoppingBag, color: '#007AFF', size: 'normal', grad: 'linear-gradient(135deg, #007AFF 0%, #00C6FF 100%)' },
    { label: 'GOALS', title: 'Scale', icon: Weight, color: '#5856D6', size: 'normal', grad: 'linear-gradient(135deg, #5856D6 0%, #21D4FD 100%)' },
  ];

  return (
    <section className="section" style={{ paddingTop: '10px', paddingBottom: '32px' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gridAutoRows: 'minmax(90px, auto)',
        gap: '14px'
      }}>
        {/* HERO CARD */}
        <motion.div
          whileTap={{ scale: 0.97 }}
          style={{
            gridColumn: 'span 2',
            height: '140px',
            background: items[0].grad,
            borderRadius: '32px',
            padding: '24px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(255, 140, 0, 0.2)',
            cursor: 'pointer'
          }}
        >
          {(() => {
            const HeroIcon = items[0].icon;
            return (
              <>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <span style={{ fontSize: '10px', fontWeight: '900', color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', textTransform: 'uppercase' }}>{items[0].label}</span>
                  <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#FFF', letterSpacing: '-0.5px', marginTop: '4px' }}>{items[0].title}</h3>
                </div>
                <div style={{ position: 'absolute', bottom: '20px', right: '24px', opacity: 0.2 }}>
                  <HeroIcon size={64} color="#FFF" />
                </div>
              </>
            );
          })()}
        </motion.div>

        {/* SMALL CARDS */}
        {items.slice(1).map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#FFF',
                borderRadius: '28px',
                padding: '18px',
                border: '1px solid rgba(0,0,0,0.03)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '12px', 
                background: `${item.color}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Icon size={20} color={item.color} strokeWidth={2.5} />
              </div>
              <div>
                <span style={{ fontSize: '9px', fontWeight: '900', color: '#8E8E93', letterSpacing: '1px' }}>{item.label}</span>
                <p style={{ fontSize: '13px', fontWeight: '800', color: '#1A1A1A', marginTop: '2px' }}>{item.title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Live Sessions (NEW) ──────────────────────────────
function LiveSessions() {
  const sessions = [
    { title: 'HIIT Burn', coach: 'Mike Ross', time: 'LIVE NOW', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80', users: '1.2k' },
    { title: 'Zen Yoga', coach: 'Sarah J.', time: '10:30 AM', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80', users: '800' },
  ];

  return (
    <section className="section" style={{ paddingRight: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '900' }}>Live Classes</h3>
        <span style={{ fontSize: '13px', color: '#007AFF', fontWeight: '700' }}>View All</span>
      </div>
      <div className="h-scroll" style={{ gap: '16px' }}>
        {sessions.map((s) => (
          <div key={s.title} style={{ minWidth: '240px', position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
             <img src={s.img} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
             <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '4px 8px', borderRadius: '6px', background: s.time === 'LIVE NOW' ? '#FF3B30' : 'rgba(0,0,0,0.5)', color: '#FFF', fontSize: '10px', fontWeight: '800' }}>
               {s.time}
             </div>
             <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                   <p style={{ color: '#FFF', fontSize: '15px', fontWeight: '800' }}>{s.title}</p>
                   <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>{s.coach}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFF', fontSize: '10px', fontWeight: '700' }}>
                   <Users size={12} /> {s.users}
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Elite Coaching (IMPROVED) ────────────────────────
function EliteCoaching() {
  return (
    <section className="section">
      <div style={{ 
        background: 'linear-gradient(135deg, #111 0%, #333 100%)', 
        borderRadius: '24px', 
        padding: '24px', 
        position: 'relative', 
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(207,255,4,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <div style={{ padding: '4px 10px', borderRadius: '100px', background: '#CFFF04', color: '#000', fontSize: '10px', fontWeight: '900', letterSpacing: '0.5px' }}>ELITE COACHING</div>
          <Star size={14} color="#CFFF04" fill="#CFFF04" />
        </div>

        <h2 style={{ color: '#FFF', fontSize: '26px', fontWeight: '900', lineHeight: '1.1', marginBottom: '12px' }}>Transform with<br/>Expert Guidance.</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '24px', maxWidth: '80%' }}>Get a personalized nutrition & training plan from India's top 1% coaches.</p>
        
        <button style={{ 
          background: '#FFF', 
          color: '#000', 
          width: '100%', 
          padding: '16px', 
          borderRadius: '16px', 
          fontWeight: '900', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '10px',
          boxShadow: '0 4px 0 #CCC'
        }}>
          Match with my Coach <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

// ─── Community Highlights (IMPROVED) ──────────────────
function CommunityHighlights() {
  const stories = [
    {
      id: 1,
      name: 'Rahul Sharma',
      views: '2.4k',
      title: 'Lost 12kg in 3 months!',
      desc: '"Fittr changed my life. The diet plan was so sustainable..."',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=128&q=80',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      accent: '#FF9500'
    },
    {
      id: 2,
      name: 'Anjali Gupta',
      views: '1.8k',
      title: 'PCOS Transformation',
      desc: '"From 85kg to 62kg. FITTR showed me that PCOS isn\'t a dead end."',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=80',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      accent: '#FF2D55'
    },
    {
      id: 3,
      name: 'Vikram Singh',
      views: '3.1k',
      title: 'Muscle Gain Journey',
      desc: '"Consistency is key. Strength is not just physical, it\'s mental balance."',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80',
      img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
      accent: '#007AFF'
    }
  ];

  return (
    <section className="section" style={{ paddingBottom: '60px' }}>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '900' }}>Community Stories</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="icon-btn" style={{ background: '#FFF' }}><Share2 size={16} color="#666" /></button>
          <button className="icon-btn" style={{ background: '#FFF' }}><Users size={16} color="#666" /></button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {stories.map((s) => (
          <motion.div 
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ borderRadius: '24px', background: '#FFF', border: '1px solid #EEE', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}
          >
             <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                   <img src={s.avatar} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} alt={s.name} />
                   <div>
                      <p style={{ fontSize: '14px', fontWeight: '800' }}>{s.name}</p>
                      <p style={{ fontSize: '11px', color: '#888' }}>Transformation • {s.views} views</p>
                   </div>
                </div>
                <Trophy size={18} color={s.accent} />
             </div>
             
             <div style={{ position: 'relative', height: '320px' }}>
                <img src={s.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={s.title} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                   <p style={{ color: '#FFF', fontSize: '18px', fontWeight: '800', marginBottom: '4px' }}>{s.title}</p>
                   <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.4' }}>{s.desc}</p>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Bottom Nav ────────────────────────────────────────
function BottomNav() {
  const [active, setActive] = useState('home');
  const items = [
    { id: 'home',      icon: Home,           label: 'Home' },
    { id: 'lab',       icon: Activity,       label: 'Lab Tests' },
    { id: 'coach',     icon: Star,           label: 'Get a Coach' },
    { id: 'health',    icon: TrendingUp,     label: 'My Health' },
    { id: 'me',        icon: User,           label: 'Me' },
  ];

  return (
    <nav className="bottom-nav">
      {items.map(({ id, icon: Icon, label }) => {
        return (
          <div
            key={id}
            className={`nav-item ${active === id ? 'active' : ''}`}
            onClick={() => setActive(id)}
            style={{ position: 'relative' }}
          >
            {id === 'coach' && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '4px',
                width: '8px',
                height: '8px',
                background: '#FF3B30',
                borderRadius: '50%',
                border: '1.5px solid #FFF',
                zIndex: 10
              }}></span>
            )}
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
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <IPhoneMockup>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '852px', position: 'relative' }}>
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none' }}>
          <div className="app" style={{ paddingBottom: '40px' }}>
            <Header />
            <DailyRituals onOpenCalendar={() => setShowCalendar(true)} />
            <DailyTrackers />
            <EliteCoaching />
            <LiveSessions />
            <CommunityHighlights />
          </div>
        </div>
        <BottomNav />
        
        <CalendarOverlay 
          isOpen={showCalendar} 
          onClose={() => setShowCalendar(false)} 
          onSelect={(d) => console.log('Selected:', d)} 
        />
      </div>
    </IPhoneMockup>
  );
}
