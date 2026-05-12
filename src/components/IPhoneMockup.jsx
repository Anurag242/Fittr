import React, { useEffect, useRef, useState } from 'react';

const PHONE_W = 393;
const PHONE_H = 852;

export default function IPhoneMockup({ children }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function calcScale() {
      const availH = window.innerHeight * 0.94; // 94vh
      const availW = window.innerWidth * 0.94; // 94vw
      const scaleByH = availH / PHONE_H;
      const scaleByW = availW / PHONE_W;
      // Scale down if either height or width is too small, but never exceed 1x
      setScale(Math.min(scaleByH, scaleByW, 1));
    }
    calcScale();
    window.addEventListener('resize', calcScale);
    return () => window.removeEventListener('resize', calcScale);
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `
        radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,122,255,0.04) 0%, transparent 60%),
        radial-gradient(ellipse 50% 40% at 90% 80%, rgba(52,199,89,0.03) 0%, transparent 60%),
        #FBFBFE
      `,
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>

      {/* Ambient glow blob */}
      <div style={{
        position: 'absolute',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,122,255,0.03) 0%, transparent 70%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        filter: 'blur(60px)',
      }} />

      {/* Scaled phone wrapper */}
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        width: `${PHONE_W}px`,
        height: `${PHONE_H}px`,
        flexShrink: 0,
        position: 'relative',
      }}>

        {/* ─── Phone Shell ─── */}
        <div style={{
          width: `${PHONE_W}px`,
          height: `${PHONE_H}px`,
          borderRadius: '54px',
          background: 'linear-gradient(160deg, #E2E2E6 0%, #D1D1D6 45%, #B0B0B8 100%)',
          boxShadow: `
            0 0 0 1px rgba(0,0,0,0.05),
            0 0 0 2.5px rgba(0,0,0,0.1),
            0 60px 120px rgba(0,0,0,0.15),
            0 30px 60px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.8),
            inset 0 -1px 0 rgba(0,0,0,0.05)
          `,
          position: 'relative',
          userSelect: 'none',
        }}>

          {/* Side buttons */}
          {/* Silent switch */}
          <div style={{ position:'absolute', left:'-3.5px', top:'118px', width:'3.5px', height:'34px', background:'linear-gradient(180deg,#B0B0B8,#8E8E93)', borderRadius:'3px 0 0 3px', boxShadow:'-1px 0 4px rgba(0,0,0,0.1)' }} />
          {/* Vol Up */}
          <div style={{ position:'absolute', left:'-3.5px', top:'170px', width:'3.5px', height:'68px', background:'linear-gradient(180deg,#B0B0B8,#8E8E93)', borderRadius:'3px 0 0 3px', boxShadow:'-1px 0 4px rgba(0,0,0,0.1)' }} />
          {/* Vol Down */}
          <div style={{ position:'absolute', left:'-3.5px', top:'252px', width:'3.5px', height:'68px', background:'linear-gradient(180deg,#B0B0B8,#8E8E93)', borderRadius:'3px 0 0 3px', boxShadow:'-1px 0 4px rgba(0,0,0,0.1)' }} />
          {/* Power */}
          <div style={{ position:'absolute', right:'-3.5px', top:'196px', width:'3.5px', height:'88px', background:'linear-gradient(180deg,#B0B0B8,#8E8E93)', borderRadius:'0 3px 3px 0', boxShadow:'1px 0 4px rgba(0,0,0,0.1)' }} />

          {/* ─── Screen bezel ─── */}
          <div style={{
            position: 'absolute',
            inset: '11px',
            borderRadius: '45px',
            background: '#000',
            overflow: 'hidden',
          }}>

            {/* ─── Inner screen ─── */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '45px',
              background: '#0a0a0a',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>

              {/* Dynamic Island */}
              <div style={{
                position: 'absolute',
                top: '13px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 200,
                width: '120px',
                height: '35px',
                background: '#000',
                borderRadius: '20px',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Camera dot */}
                <div style={{
                  width: '11px', height: '11px',
                  borderRadius: '50%',
                  background: '#0c0c0c',
                  border: '1px solid rgba(255,255,255,0.04)',
                  boxShadow: 'inset 0 0 4px rgba(10,132,255,0.25)',
                }} />
              </div>

              {/* Status bar */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '58px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                padding: '0 26px 10px',
                zIndex: 150,
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: '600',
                color: '#fff',
                letterSpacing: '-0.2px',
                pointerEvents: 'none',
              }}>
                <span>9:41</span>
                <div style={{ display:'flex', gap:'6px', alignItems:'center' }}>
                  {/* Signal bars */}
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
                    <rect x="0" y="7" width="3" height="5" rx="1"/>
                    <rect x="4.5" y="4.5" width="3" height="7.5" rx="1"/>
                    <rect x="9" y="2" width="3" height="10" rx="1"/>
                    <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.35"/>
                  </svg>
                  {/* WiFi */}
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <circle cx="8" cy="10.5" r="1.5" fill="white"/>
                    <path d="M4.8 7.2C5.9 6 6.9 5.5 8 5.5s2.1.5 3.2 1.7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M2 4.5C4 2.4 5.9 1.5 8 1.5s4 .9 6 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                  {/* Battery */}
                  <div style={{ display:'flex', alignItems:'center', gap:'1px' }}>
                    <div style={{ width:'24px', height:'11px', border:'1.5px solid rgba(255,255,255,0.75)', borderRadius:'3px', padding:'2px' }}>
                      <div style={{ width:'70%', height:'100%', background:'white', borderRadius:'1px' }}/>
                    </div>
                    <div style={{ width:'2px', height:'5px', background:'rgba(255,255,255,0.5)', borderRadius:'1px' }}/>
                  </div>
                </div>
              </div>

              {/* ─── Scrollable content ─── */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}>
                {children}
              </div>

            </div>

            {/* Home indicator */}
            <div style={{
              position: 'absolute',
              bottom: '9px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '130px',
              height: '5px',
              background: 'rgba(255,255,255,0.28)',
              borderRadius: '3px',
              zIndex: 300,
              pointerEvents: 'none',
            }} />
          </div>

          {/* Glass shine on phone body */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '54px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 45%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* Reflection below phone */}
        <div style={{
          position: 'absolute',
          bottom: '-36px',
          left: '10%',
          right: '10%',
          height: '36px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.04), transparent)',
          filter: 'blur(8px)',
          transform: 'scaleY(-0.3)',
          transformOrigin: 'top',
          opacity: 0.5,
          borderRadius: '0 0 54px 54px',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  );
}
