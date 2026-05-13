import React, { useEffect, useRef, useState } from 'react';

const PHONE_W = 428;
const PHONE_H = 926;

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
          borderRadius: '60px',
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
            inset: '13px',
            borderRadius: '50px',
            background: '#000',
            overflow: 'hidden',
          }}>

            {/* ─── Inner screen ─── */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50px',
              background: '#FFFFFF',
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
                width: '130px',
                height: '38px',
                background: '#000',
                borderRadius: '24px',
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
                fontSize: '15px',
                fontWeight: '600',
                color: '#000',
                letterSpacing: '-0.2px',
                pointerEvents: 'none',
              }}>
                <span>9:41</span>
                <div style={{ display:'flex', gap:'7px', alignItems:'center' }}>
                  {/* Signal bars */}
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
                    <rect x="0" y="7" width="3" height="5" rx="1"/>
                    <rect x="4.5" y="4.5" width="3" height="7.5" rx="1"/>
                    <rect x="9" y="2" width="3" height="10" rx="1"/>
                    <rect x="13.5" y="0" width="3" height="12" rx="1" fillOpacity="0.3"/>
                  </svg>
                  {/* WiFi */}
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
                    <path d="M8.5 12L6.2 9.5C7.4 8.5 9.6 8.5 10.8 9.5L8.5 12Z"/>
                    <path d="M4.5 7.8L3.2 6.5C5.8 4.5 11.2 4.5 13.8 6.5L12.5 7.8C10.8 6.5 6.2 6.5 4.5 7.8Z"/>
                    <path d="M2.2 5.5L0.9 4.2C5.1 0.8 11.9 0.8 16.1 4.2L14.8 5.5C11.5 2.8 5.5 2.8 2.2 5.5Z"/>
                  </svg>
                  {/* Battery */}
                  <div style={{ display:'flex', alignItems:'center', gap:'1.5px' }}>
                    <div style={{ width:'25px', height:'12px', border:'1.5px solid currentColor', borderRadius:'4px', padding:'1.5px', position:'relative' }}>
                      <div style={{ width:'80%', height:'100%', background:'currentColor', borderRadius:'1px' }}/>
                    </div>
                    <div style={{ width:'1.5px', height:'4px', background:'currentColor', borderRadius:'0 1px 1px 0', opacity:0.4 }}/>
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

            {/* Home indicator removed as per user request */}
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
