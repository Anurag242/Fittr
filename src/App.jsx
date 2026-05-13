import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Bell, MessageCircle, ChevronDown, 
  ChevronRight, Lock, Plus, Home, 
  Activity, Star, Heart, User, ArrowRight,
  Flame, Droplets, Clock, Zap,
  MoreHorizontal, Share2, Bookmark
} from 'lucide-react';
import './index.css';
import IPhoneMockup from './components/IPhoneMockup.jsx';

// ─── Header ──────────────────────────────────────────
function TopHeader() {
  return (
    <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFF' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '56px', height: '36px', borderRadius: '18px', border: '1.5px solid #E5E5EA',
          display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
          background: 'linear-gradient(135deg, #FFF 0%, #F9F9F9 100%)'
        }}>
          <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=64&q=80" alt="F" style={{ width: '22px', borderRadius: '4px' }} />
        </div>
        <span style={{ fontSize: '13px', fontWeight: '800', color: '#000' }}>0</span>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Search size={22} color="#000" strokeWidth={1.5} />
        </div>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <Bell size={22} color="#000" strokeWidth={1.5} />
          <div style={{ position: 'absolute', top: '8px', right: '8px', width: '18px', height: '18px', background: '#FF3B30', borderRadius: '50%', border: '2px solid #FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#FFF', fontWeight: '800' }}>1</div>
        </div>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <MessageCircle size={22} color="#000" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

// ─── Greeting ──────────────────────────────────────────
function GreetingSection() {
  return (
    <div style={{ padding: '20px 20px 0' }}>
      <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#1A1A1A', letterSpacing: '-0.02em' }}>Good Morning, Anurag!</h1>
      <p style={{ fontSize: '15px', color: '#86868B', marginTop: '4px', fontWeight: '500' }}>Ready to crush your goals today? 🔥</p>
    </div>
  );
}

// ─── Up Next Contextual Card ─────────────────────────
function UpNextCard({ onOpenWorkout }) {
  return (
    <div style={{ padding: '24px 20px 0' }}>
      <div style={{ 
        background: 'linear-gradient(135deg, #1A1A1A 0%, #333 100%)', 
        borderRadius: '24px', padding: '20px', color: '#FFF',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', right: '-10px', top: '-10px', opacity: 0.1 }}>
          <Activity size={120} />
        </div>
        
        <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em', color: '#FFD60A' }}>UP NEXT</span>
        <h2 style={{ fontSize: '22px', fontWeight: '900', marginTop: '8px', marginBottom: '4px' }}>Upper Body Power</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', color: '#EBEBF5' }}>
          <Clock size={14} />
          <span style={{ fontSize: '13px', fontWeight: '600' }}>45 min</span>
          <span style={{ margin: '0 4px' }}>•</span>
          <Flame size={14} color="#FF3B30" />
          <span style={{ fontSize: '13px', fontWeight: '600' }}>320 kcal</span>
        </div>
        
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={onOpenWorkout}
          style={{ 
            background: '#FFF', color: '#1A1A1A', border: 'none', borderRadius: '100px', cursor: 'pointer',
            padding: '12px 24px', fontSize: '14px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          Start Workout
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </div>
  );
}

// ─── Quick Actions ──────────────────────────────────
function QuickActions() {
  const actions = [
    { label: 'Get A Coach', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=256&q=80', border: '#D4AF37' },
    { label: 'Lab Test', img: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=256&q=80', border: '#AF52DE' },
    { label: 'Refer & Earn', img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=256&q=80', border: '#FF2D55' },
    { label: 'My Plan', img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=256&q=80', border: '#FF9500' },
    { label: 'Smart Scale', img: 'https://images.unsplash.com/photo-1591123120675-6f7f1ad0d707?auto=format&fit=crop&w=256&q=80', border: '#5856D6' },
    { label: 'Retreat', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=256&q=80', border: '#34C759' },
    { label: 'Challenges', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=256&q=80', border: '#FFCC00' },
    { label: 'Shop', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=256&q=80', border: '#007AFF' },
  ];

  return (
    <div style={{ 
      display: 'flex', gap: '20px', padding: '24px 20px', 
      overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none'
    }}>
      {actions.map((act) => (
        <motion.div key={act.label} whileTap={{ scale: 0.92 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '74px', cursor: 'pointer' }}>
          <div style={{ 
            width: '74px', height: '74px', borderRadius: '22px', overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)', background: '#FFF'
          }}>
            <img 
              src={act.label === 'Smart Scale' ? '/smart-scale.svg' : act.img} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              alt={act.label} 
            />
          </div>
          <span style={{ fontSize: '11px', fontWeight: '700', textAlign: 'center', color: '#1A1A1A', whiteSpace: 'nowrap' }}>{act.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Health Summary ──────────────────────────────────
function HealthSummary({ onOpenCalendar }) {
  const [water, setWater] = useState(1.5);
  
  return (
    <div style={{ padding: '0 20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
        <div style={{ flex: 1, height: '1px', background: '#EEE' }} />
        <motion.div 
          whileTap={{ scale: 0.95 }}
          onClick={onOpenCalendar}
          style={{ 
          background: '#F2F2F7', padding: '6px 14px', borderRadius: '100px', 
          display: 'flex', alignItems: 'center', gap: '6px', margin: '0 12px', cursor: 'pointer'
        }}>
          <span style={{ fontSize: '13px', fontWeight: '700' }}>Today</span>
          <ChevronDown size={14} />
        </motion.div>
        <div style={{ flex: 1, height: '1px', background: '#EEE' }} />
      </div>

      {/* Consistency Calendar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', padding: '0 10px' }}>
         {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
               <span style={{ fontSize: '10px', fontWeight: '800', color: i === 3 ? '#1A1A1A' : '#86868B' }}>{day}</span>
               <div style={{ 
                  width: '24px', height: '24px', borderRadius: '50%', 
                  background: i < 3 ? '#1A1A1A' : i === 3 ? '#FFF' : '#F2F2F7',
                  border: i === 3 ? '2px solid #1A1A1A' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
               }}>
                  {i < 3 && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
               </div>
            </div>
         ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
             <span style={{ fontSize: '10px', fontWeight: '800', color: '#86868B', letterSpacing: '0.05em', width: '38px' }}>STEPS</span>
             <span style={{ fontSize: '15px', fontWeight: '900', color: '#1A1A1A' }}>8,432</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
             <span style={{ fontSize: '10px', fontWeight: '800', color: '#86868B', letterSpacing: '0.05em', width: '38px' }}>SLEEP</span>
             <span style={{ fontSize: '14px', fontWeight: '900', color: '#1A1A1A' }}>7<span style={{ fontSize: '10px', color: '#86868B', margin: '0 1px' }}>h</span> 20<span style={{ fontSize: '10px', color: '#86868B', margin: '0 1px' }}>m</span></span>
          </div>
        </div>

        <div style={{ width: '1px', height: '40px', background: '#EEE' }} />

        {/* Frictionless Water Logging */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#86868B', letterSpacing: '0.05em' }}>WATER</span>
            <Droplets size={12} color="#007AFF" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
              <style>{`
                .water-input::-webkit-inner-spin-button,
                .water-input::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
              `}</style>
              <input 
                className="water-input"
                type="number" 
                value={water}
                onChange={(e) => setWater(e.target.value)}
                style={{ 
                  fontSize: '20px', fontWeight: '900', color: '#1A1A1A', 
                  background: '#F2F2F7', border: '1px solid transparent', borderRadius: '4px',
                  outline: 'none', width: '44px', padding: '0 2px', margin: 0, 
                  fontFamily: 'inherit', textAlign: 'center',
                  transition: 'border 0.2s'
                }} 
                onFocus={(e) => e.target.style.border = '1px solid #007AFF'}
                onBlur={(e) => e.target.style.border = '1px solid transparent'}
              />
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#86868B' }}>L</span>
            </div>
            <div style={{ display: 'flex', gap: '4px', background: '#F2F2F7', borderRadius: '8px', padding: '2px' }}>
               <motion.button whileTap={{ scale: 0.8 }} onClick={() => setWater(Math.max(0, parseFloat(water || 0) - 0.25).toFixed(1))} style={{ width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF', border: '1px solid #E5E5EA', borderRadius: '6px', color: '#1A1A1A', cursor: 'pointer', padding: 0 }}>-</motion.button>
               <motion.button whileTap={{ scale: 0.8 }} onClick={() => setWater((parseFloat(water || 0) + 0.25).toFixed(1))} style={{ width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#007AFF', border: 'none', borderRadius: '6px', color: '#FFF', cursor: 'pointer', padding: 0 }}>+</motion.button>
            </div>
          </div>
        </div>

        <div style={{ width: '1px', height: '40px', background: '#EEE' }} />

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <div style={{ opacity: 0.3, filter: 'blur(2px)', textAlign: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#86868B', letterSpacing: '0.05em' }}>HRV</span>
              <p style={{ fontSize: '18px', fontWeight: '800' }}>--</p>
           </div>
           <div style={{ 
             position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
             background: '#F2F2F7', borderRadius: '12px', padding: '6px 10px', display: 'flex', 
             alignItems: 'center', gap: '6px', zIndex: 10, border: '1px solid #E5E5EA', width: 'max-content',
             boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
           }}>
              <div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#1A1A1A' }}>Unlock</span>
                    <Lock size={10} color="#1A1A1A" />
                 </div>
                 <p style={{ fontSize: '9px', color: '#86868B', fontWeight: '600', marginTop: '2px' }}>HRV, RHR & more</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

// ─── Nutrition Card ──────────────────────────────────
function NutritionCard() {
  return (
    <div style={{ padding: '0 20px 24px' }}>
      <div style={{ 
        background: '#FFF', borderRadius: '24px', border: '1.5px solid #F0F0F2', 
        overflow: 'hidden', position: 'relative'
      }}>
        <div style={{ padding: '20px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '11px', fontWeight: '900', color: '#000', letterSpacing: '0.1em' }}>NUTRITION</span>
            <div style={{ width: '40px', height: '32px', background: '#F2F2F7', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRight size={18} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '900' }}>Free</h2>
            <p style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>Diet plan for you</p>
          </div>
        </div>
        <div style={{ background: '#F5F5F7', padding: '16px 24px' }}>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5' }}>You haven't logged any calories yet — start tracking your meals.</p>
        </div>
        {/* Background Pattern Mockup */}
        <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, pointerEvents: 'none' }}>
           <svg width="100" height="100" viewBox="0 0 100 100">
             <path d="M10,10 Q30,50 90,10" fill="none" stroke="#000" strokeWidth="2" />
             <circle cx="50" cy="50" r="30" fill="none" stroke="#000" strokeWidth="1" />
           </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Community Section ──────────────────────────────
function CommunitySection() {
  const [activeTab, setActiveTab] = useState('Highlights');
  const tabs = ['Highlights', 'All', 'Discussions', 'Transformations', 'Recipes'];
  
  return (
    <div style={{ padding: '0 0 100px', background: '#F9F9FB', paddingTop: '24px', borderTop: '1px solid #F0F0F2' }}>
      <div style={{ padding: '0 20px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#1A1A1A' }}>Community</h2>
        <p style={{ fontSize: '15px', color: '#86868B', marginTop: '4px' }}>Learn. Get fit. Share and inspire!</p>
      </div>

      <div style={{ 
        display: 'flex', gap: '8px', padding: '0 20px', overflowX: 'auto', 
        scrollbarWidth: 'none', msOverflowStyle: 'none', marginBottom: '24px' 
      }}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <motion.div 
              key={tab} 
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              style={{ 
                padding: '8px 20px', borderRadius: '20px', 
                border: isActive ? '1px solid #1A1A1A' : '1px solid #E5E5EA',
                background: isActive ? '#1A1A1A' : '#FFF',
                color: isActive ? '#FFF' : '#1A1A1A',
                fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                cursor: 'pointer', transition: 'all 0.2s ease'
              }}>
              {tab}
            </motion.div>
          );
        })}
      </div>

      {/* Post Feed Container */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Post 1: Transformation Gallery */}
        <div style={{ 
          background: '#FFF', borderRadius: '24px', padding: '20px', 
          border: '1px solid #F0F0F2', boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=128&q=80" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} alt="User" />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: '800', fontSize: '15px', color: '#1A1A1A' }}>Suraj Padmakaran</span>
                <span style={{ color: '#86868B', fontSize: '13px', fontWeight: '500' }}>• 1d</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <p style={{ fontSize: '12px', color: '#86868B', fontWeight: '600' }}>Transformation • 642 Views</p>
              </div>
              {/* Coach Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', background: '#FFF8E1', padding: '4px 10px', borderRadius: '100px', width: 'fit-content', border: '1px solid #FFE082' }}>
                 <Star size={12} color="#D4AF37" fill="#D4AF37" />
                 <span style={{ fontSize: '11px', fontWeight: '800', color: '#D4AF37', letterSpacing: '0.02em' }}>COACHED BY ADITYA SHARMA</span>
              </div>
            </div>
            <div style={{ padding: '8px' }}>
               <MoreHorizontal size={20} color="#86868B" />
            </div>
          </div>
          
          <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px', color: '#1A1A1A' }}>Midpoint Transformation Journey</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4A4A4A', marginBottom: '16px' }}>
            In 2023, I walked into FITTR carrying 197 lbs—along with years of binge eating and self-doubt. Today, I'm at 169 lbs... <span style={{ color: '#007AFF', fontWeight: '600', cursor: 'pointer' }}>See More</span>
          </p>
          
          <div style={{ 
            display: 'flex', gap: '12px', overflowX: 'auto', scrollbarWidth: 'none', 
            msOverflowStyle: 'none', scrollSnapType: 'x mandatory', margin: '0 -20px', padding: '0 20px'
          }}>
             <div style={{ minWidth: '85%', height: '340px', borderRadius: '20px', overflow: 'hidden', position: 'relative', scrollSnapAlign: 'center', background: '#EEE' }}>
                <img src="/Before.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} alt="Before" onError={(e) => e.target.style.display = 'none'} />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '6px 12px', borderRadius: '100px', color: '#FFF', fontSize: '11px', fontWeight: '800', letterSpacing: '0.05em' }}>BEFORE</div>
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(255,255,255,0.9)', padding: '6px 14px', borderRadius: '12px', color: '#000', fontSize: '14px', fontWeight: '900' }}>197 lbs</div>
             </div>
             <div style={{ minWidth: '85%', height: '340px', borderRadius: '20px', overflow: 'hidden', position: 'relative', scrollSnapAlign: 'center', background: '#EEE' }}>
                <img src="/After.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} alt="After" onError={(e) => e.target.style.display = 'none'} />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(52,199,89,0.9)', padding: '6px 12px', borderRadius: '100px', color: '#FFF', fontSize: '11px', fontWeight: '800', letterSpacing: '0.05em' }}>CURRENT</div>
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(255,255,255,0.9)', padding: '6px 14px', borderRadius: '12px', color: '#000', fontSize: '14px', fontWeight: '900' }}>169 lbs</div>
             </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #F0F0F2' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Heart size={22} color="#1A1A1A" strokeWidth={2} />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#1A1A1A' }}>1.2k</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MessageCircle size={22} color="#86868B" strokeWidth={2} />
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#86868B' }}>142</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
               <Bookmark size={22} color="#86868B" strokeWidth={2} />
               <Share2 size={22} color="#86868B" strokeWidth={2} />
            </div>
          </div>

          {/* Threaded Comments Section */}
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F2' }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: '#1A1A1A', marginBottom: '16px', display: 'block' }}>Top Comments</span>
            
            {/* Comment 1 */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
              <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', background: '#EEE' }} alt="Commenter" onError={(e) => e.target.style.display = 'none'} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: '#1A1A1A' }}>Rahul Fitness</span>
                  <span style={{ fontSize: '11px', color: '#86868B', fontWeight: '500' }}>2h</span>
                </div>
                <p style={{ fontSize: '13px', color: '#4A4A4A', lineHeight: '1.5', marginTop: '2px' }}>This is insane progress bro! What was your daily calorie intake like during the cut? 🔥</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#86868B', cursor: 'pointer' }}>Reply</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                     <Heart size={14} color="#86868B" />
                     <span style={{ fontSize: '12px', color: '#86868B', fontWeight: '600' }}>12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 (Author Reply Thread) */}
            <div style={{ display: 'flex', gap: '10px', marginLeft: '42px' }}>
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=128&q=80" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', background: '#EEE' }} alt="Suraj" onError={(e) => e.target.style.display = 'none'} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: '#007AFF' }}>Suraj Padmakaran</span>
                  <span style={{ background: '#007AFF15', color: '#007AFF', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.05em' }}>AUTHOR</span>
                </div>
                <p style={{ fontSize: '13px', color: '#4A4A4A', lineHeight: '1.5', marginTop: '2px' }}>Thanks Rahul! I stayed around 1800kcals and hit 140g of protein daily. Consistency was the key! 💪</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#86868B', cursor: 'pointer' }}>Reply</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                     <Heart size={14} color="#FF2D55" fill="#FF2D55" />
                     <span style={{ fontSize: '12px', color: '#1A1A1A', fontWeight: '700' }}>4</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Post 2: Discussion with Comment Thread */}
        <div style={{ 
          background: '#FFF', borderRadius: '24px', padding: '20px', 
          border: '1px solid #F0F0F2', boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=128&q=80" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', background: '#EEE' }} alt="User" />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: '800', fontSize: '15px', color: '#1A1A1A' }}>Alex Chen</span>
                <span style={{ color: '#86868B', fontSize: '13px', fontWeight: '500' }}>• 4h</span>
              </div>
              <p style={{ fontSize: '12px', color: '#86868B', fontWeight: '600' }}>Discussion • 2.4k Views</p>
            </div>
            <div style={{ padding: '8px' }}>
               <MoreHorizontal size={20} color="#86868B" />
            </div>
          </div>
          
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#1A1A1A', marginBottom: '16px' }}>
            Has anyone tried intermittent fasting (16:8) paired with early morning HIIT workouts? I'm really struggling with energy crashes around 10 AM. Would love some advice! 🏃‍♂️⚡️
          </p>

          {/* Top Comment UX Block */}
          <div style={{ background: '#F2F2F7', borderRadius: '16px', padding: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=64&q=80" style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover', background: '#DDD' }} alt="Sarah" />
              <span style={{ fontSize: '14px', fontWeight: '800', color: '#1A1A1A' }}>Sarah Jenkins</span>
              <span style={{ background: '#E5E5EA', color: '#4A4A4A', padding: '3px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: '800', letterSpacing: '0.05em' }}>TOP COMMENT</span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#4A4A4A', paddingLeft: '32px' }}>
              Electrolytes are your best friend! Try adding a pinch of pink Himalayan salt and a squeeze of lemon to your water right after you wake up. Completely fixed my crashes. 💧🍋
            </p>
            <div style={{ display: 'flex', gap: '16px', paddingLeft: '32px', marginTop: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: '#86868B', fontWeight: '700', cursor: 'pointer' }}>Reply</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Heart size={14} color="#FF2D55" fill="#FF2D55" />
                <span style={{ fontSize: '13px', color: '#1A1A1A', fontWeight: '700' }}>245</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', paddingTop: '16px', borderTop: '1px solid #F0F0F2' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Heart size={22} color="#1A1A1A" strokeWidth={2} />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#1A1A1A' }}>458</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MessageCircle size={22} color="#86868B" strokeWidth={2} />
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#86868B' }}>56</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
               <Bookmark size={22} color="#86868B" strokeWidth={2} />
               <Share2 size={22} color="#86868B" strokeWidth={2} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Micro Challenge ────────────────────────────────
function MicroChallengeStrip({ status, onAccept }) {
  return (
    <div style={{ padding: '0 20px 24px' }}>
      <div style={{ 
        background: '#FFF', borderRadius: '16px', border: '1px solid #E5E5EA', 
        padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Flame size={18} color="#1A1A1A" />
          </div>
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#1A1A1A', marginBottom: '2px' }}>Daily Challenge</h4>
            <p style={{ fontSize: '12px', color: '#86868B', fontWeight: '500' }}>Hit 10,000 steps today</p>
          </div>
        </div>
        <motion.button 
          whileTap={{ scale: 0.9 }} 
          onClick={onAccept}
          style={{ 
            background: status === 'Accepted' ? '#34C759' : '#F2F2F7', 
            color: status === 'Accepted' ? '#FFF' : '#1A1A1A', 
            border: 'none', borderRadius: '100px', 
            padding: '8px 16px', fontSize: '12px', fontWeight: '800', cursor: 'pointer'
          }}
        >
          {status === 'Accepted' ? 'Accepted ✓' : 'Accept'}
        </motion.button>
      </div>
    </div>
  );
}

// ─── Coach Dock ─────────────────────────────────────
function CoachDock({ onMessage }) {
  return (
    <div style={{ padding: '0 20px 24px' }}>
      <div style={{ 
        background: '#FFF', borderRadius: '20px', border: '1px solid #E5E5EA', 
        padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative' }}>
             <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=128&q=80" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} alt="Coach" />
             <div style={{ position: 'absolute', bottom: '0px', right: '0px', width: '12px', height: '12px', background: '#34C759', borderRadius: '50%', border: '2px solid #FFF' }} />
          </div>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#1A1A1A', marginBottom: '2px' }}>Coach Aditya</h4>
            <p style={{ fontSize: '12px', color: '#86868B', fontWeight: '500' }}>Replies in ~10 mins</p>
          </div>
        </div>
        <motion.div whileTap={{ scale: 0.9 }} onClick={onMessage} style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
           <MessageCircle size={20} color="#1A1A1A" />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Bottom Navigation ──────────────────────────────
function BottomNav() {
  const items = [
    { label: 'Home', icon: Home, active: true },
    { label: 'Lab Tests', icon: Activity },
    { label: 'Get a Coach', icon: Star, badge: true },
    { label: 'My Health', icon: Heart },
    { label: 'Me', icon: User },
  ];

  return (
    <div style={{ 
      position: 'absolute', bottom: 0, left: 0, right: 0, 
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)',
      borderTop: '1px solid #F0F0F2', padding: '12px 12px 24px',
      display: 'flex', justifyContent: 'space-around', zIndex: 100
    }}>
      {items.map((item) => (
        <motion.div whileTap={{ scale: 0.85 }} key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1, position: 'relative', cursor: 'pointer' }}>
          <item.icon size={24} color={item.active ? '#1A1A1E' : '#86868B'} strokeWidth={item.active ? 2.5 : 1.5} />
          <span style={{ fontSize: '10px', fontWeight: '700', color: item.active ? '#1A1A1E' : '#86868B' }}>{item.label}</span>
          {item.badge && (
            <div style={{ position: 'absolute', top: '-2px', right: '25%', width: '8px', height: '8px', background: '#FF3B30', borderRadius: '50%', border: '1.5px solid #FFF' }} />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ─── Modal Overlay ────────────────────────────────────
function ModalOverlay({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1000, backdropFilter: 'blur(2px)' }}
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              position: 'absolute', bottom: 0, left: 0, right: 0, 
              background: '#FFF', borderTopLeftRadius: '24px', borderTopRightRadius: '24px',
              padding: '24px', zIndex: 1001, boxShadow: '0 -10px 40px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ width: '40px', height: '4px', background: '#E5E5EA', borderRadius: '2px', margin: '0 auto 24px' }} />
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main Application ───────────────────────────────
export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [challengeStatus, setChallengeStatus] = useState('Accept');

  return (
    <IPhoneMockup>
      <div style={{ 
        height: '100%', display: 'flex', flexDirection: 'column', 
        background: '#FFF', position: 'relative', overflow: 'hidden' 
      }}>
        {/* Safe Area Spacer for Status Bar */}
        <div style={{ height: '60px', flexShrink: 0 }} />

        {/* Scrollable Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: '20px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.00, duration: 0.4, ease: "easeOut" }}><TopHeader /></motion.div>
           <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04, duration: 0.4, ease: "easeOut" }}><GreetingSection /></motion.div>
           <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.4, ease: "easeOut" }}><UpNextCard onOpenWorkout={() => setActiveModal('workout')} /></motion.div>
           <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.4, ease: "easeOut" }}><QuickActions /></motion.div>
           <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.4, ease: "easeOut" }}><HealthSummary onOpenCalendar={() => setActiveModal('calendar')} /></motion.div>
           <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.20, duration: 0.4, ease: "easeOut" }}><NutritionCard /></motion.div>
           <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.4, ease: "easeOut" }}><MicroChallengeStrip status={challengeStatus} onAccept={() => { setChallengeStatus('Accepted'); setActiveModal('challenge'); }} /></motion.div>
           <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.4, ease: "easeOut" }}><CoachDock onMessage={() => setActiveModal('coach')} /></motion.div>
           <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.4, ease: "easeOut" }}><CommunitySection /></motion.div>
        </div>

        {/* Floating Action Button (FAB) */}
        <motion.div 
          whileTap={{ scale: 0.9 }}
          style={{ 
            position: 'absolute', bottom: '100px', right: '20px', 
            width: '56px', height: '56px', background: '#1A1A1E', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            zIndex: 150
          }}
        >
          <Plus size={28} color="#FFF" strokeWidth={3} />
        </motion.div>

        <BottomNav />

        {/* Global Modals */}
        <ModalOverlay isOpen={activeModal !== null} onClose={() => setActiveModal(null)}>
           {activeModal === 'calendar' && (
             <div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px' }}>Select Date</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', marginBottom: '24px' }}>
                  {['S','M','T','W','T','F','S'].map(d => <div key={d} style={{ textAlign: 'center', fontSize: '12px', fontWeight: '800', color: '#86868B' }}>{d}</div>)}
                  {Array.from({length: 31}).map((_, i) => (
                     <motion.div whileTap={{ scale: 0.8 }} key={i} style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '600', background: i === 13 ? '#1A1A1A' : 'transparent', color: i === 13 ? '#FFF' : '#1A1A1A', borderRadius: '50%', cursor: 'pointer' }}>{i + 1}</motion.div>
                  ))}
                </div>
             </div>
           )}
           {activeModal === 'workout' && (
             <div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '4px' }}>Upper Body Power</h3>
                <p style={{ color: '#86868B', marginBottom: '24px', fontSize: '14px' }}>45 mins • 320 kcal • Intermediate</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                   {[
                     { name: 'Bench Press', reps: '4 sets x 10 reps', color: '#FF3B30' },
                     { name: 'Shoulder Press', reps: '3 sets x 12 reps', color: '#007AFF' },
                     { name: 'Tricep Dips', reps: '3 sets x 15 reps', color: '#34C759' }
                   ].map((ex) => (
                     <div key={ex.name} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                       <div style={{ width: '48px', height: '48px', background: `${ex.color}15`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <Flame size={20} color={ex.color} />
                       </div>
                       <div><h4 style={{ fontWeight: '700', fontSize: '15px' }}>{ex.name}</h4><p style={{ fontSize: '13px', color: '#86868B' }}>{ex.reps}</p></div>
                     </div>
                   ))}
                </div>
                <motion.button whileTap={{ scale: 0.95 }} onClick={() => setActiveModal(null)} style={{ width: '100%', background: '#1A1A1A', color: '#FFF', padding: '16px', borderRadius: '100px', fontWeight: '800', border: 'none', fontSize: '16px', cursor: 'pointer' }}>Begin Workout</motion.button>
             </div>
           )}
           {activeModal === 'challenge' && (
             <div style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: '#34C759', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px' }}>Challenge Accepted!</h3>
                <p style={{ color: '#86868B', marginBottom: '24px', fontSize: '15px' }}>You have until midnight to hit 10,000 steps. Let's get moving!</p>
                <motion.button whileTap={{ scale: 0.95 }} onClick={() => setActiveModal(null)} style={{ width: '100%', background: '#F2F2F7', color: '#1A1A1A', padding: '16px', borderRadius: '100px', fontWeight: '800', border: 'none', fontSize: '16px', cursor: 'pointer' }}>Got it</motion.button>
             </div>
           )}
           {activeModal === 'coach' && (
             <div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px' }}>Message Coach Aditya</h3>
                <textarea placeholder="Type your message..." style={{ width: '100%', height: '100px', background: '#F2F2F7', border: 'none', borderRadius: '12px', padding: '16px', marginBottom: '16px', outline: 'none', fontFamily: 'inherit', fontSize: '15px', resize: 'none' }} />
                <motion.button whileTap={{ scale: 0.95 }} onClick={() => setActiveModal(null)} style={{ width: '100%', background: '#1A1A1A', color: '#FFF', padding: '16px', borderRadius: '100px', fontWeight: '800', border: 'none', fontSize: '16px', cursor: 'pointer' }}>Send Message</motion.button>
             </div>
           )}
        </ModalOverlay>
      </div>
    </IPhoneMockup>
  );
}
