import { useRef } from 'react'
import { useScroll, useTransform, useSpring } from 'framer-motion'
import TextureFrame from './TextureFrame'
import StitchLineSVG from './StitchLineSVG'

// Real factory images
import frame1 from '../assets/frame1-thread-spools.jpg'
import frame2 from '../assets/frame2-loom-machine.jpg'
import frame3 from '../assets/frame3-cutting-table.jpg'
import frame4 from '../assets/frame4-sewing-needle.jpg'
import frame5 from '../assets/frame5-final-trouser.png'

/**
 * ScrollBackground
 * Manages all 5 cinematic background frames.
 * Opacities are driven directly by exact ranges in BUG 3.
 */
export default function ScrollBackground({ scrollYProgress, isMobile }) {
  // Exact opacities driven by BUG 1 STEP 4
  const op1 = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const op2 = useTransform(scrollYProgress, [0.15, 0.28, 0.42], [0, 1, 0])
  const op3 = useTransform(scrollYProgress, [0.35, 0.48, 0.62], [0, 1, 0])
  const op4 = useTransform(scrollYProgress, [0.55, 0.68, 0.82], [0, 1, 0])
  const op5 = useTransform(scrollYProgress, [0.78, 1.0], [0, 1])

  const opacity1 = isMobile ? undefined : op1
  const opacity2 = isMobile ? undefined : op2
  const opacity3 = isMobile ? undefined : op3
  const opacity4 = isMobile ? undefined : op4
  const opacity5 = isMobile ? undefined : op5

  const style1 = isMobile ? { animation: 'frameCycle1 15s infinite' } : {}
  const style2 = isMobile ? { animation: 'frameCycle2 15s infinite' } : {}
  const style3 = isMobile ? { animation: 'frameCycle3 15s infinite' } : {}
  const style4 = isMobile ? { animation: 'frameCycle4 15s infinite' } : {}
  const style5 = isMobile ? { animation: 'frameCycle5 15s infinite' } : {}

  // Subtle parallax Y for Frame 1 threads drifting forward
  const f1Y = useTransform(scrollYProgress, [0, 0.2], ['0%', '-6%'])

  // Subtle scale zoom for Frame 3 fabric unroll feel
  const f3Scale = useTransform(scrollYProgress, [0.35, 0.62], [1.04, 1.0])

  // Frame 5 upward float
  const f5Y = useTransform(scrollYProgress, [0.78, 1], ['4%', '0%'])

  // Stitch line sub-progress: map full scroll 0.55–0.82 → 0–1
  const stitchProgress = useTransform(scrollYProgress, [0.55, 0.82], [0, 1])

  return (
    <div className="absolute inset-0 overflow-hidden z-[1]">

      {/* ── FRAME 1 ── */}
      <TextureFrame
        image={frame1}
        scrollProgress={scrollYProgress}
        opacity={opacity1}
        style={style1}
        overlayOpacity={0.30}
        vignette
        motionProps={isMobile ? {} : { y: f1Y }}
      >
        {/* Subtle animated horizontal thread lines overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-[1px]"
              style={{
                top: `${12 + i * 10}%`,
                background: `rgba(255,255,255,${0.015 + i * 0.005})`,
                animation: `slideThread ${3 + i * 0.4}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </TextureFrame>

      {/* ── FRAME 2 ── */}
      <TextureFrame
        image={frame2}
        scrollProgress={scrollYProgress}
        opacity={opacity2}
        style={style2}
        overlayOpacity={0.32}
        vignette
      >
        {/* Animated horizontal sweep bar — simulates shuttle motion */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 bottom-0 w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.4), transparent)',
              animation: 'shuttleSweep 2.4s ease-in-out infinite',
            }}
          />
        </div>
      </TextureFrame>

      {/* ── FRAME 3 ── */}
      <TextureFrame
        image={frame3}
        scrollProgress={scrollYProgress}
        opacity={opacity3}
        style={style3}
        overlayOpacity={0.30}
        vignette
        motionProps={isMobile ? {} : { scale: f3Scale }}
      />

      {/* ── FRAME 4 ── */}
      <TextureFrame
        image={frame4}
        scrollProgress={scrollYProgress}
        opacity={opacity4}
        style={style4}
        overlayOpacity={0.35}
        vignette
      >
        {/* SVG stitch line draws across center as you scroll through this frame (hidden on mobile) */}
        {!isMobile && <StitchLineSVG scrollProgress={stitchProgress} />}
      </TextureFrame>

      {/* ── FRAME 5 ── */}
      <TextureFrame
        image={frame5}
        scrollProgress={scrollYProgress}
        opacity={opacity5}
        style={style5}
        overlayOpacity={0.28}
        vignette
        motionProps={isMobile ? {} : { y: f5Y }}
      >
        {/* CSS shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)',
            animation: 'shimmerSweep 3s ease-in-out infinite',
          }}
        />
      </TextureFrame>

      {/* Global CSS keyframes injected inline */}
      <style>{`
        @keyframes slideThread {
          0%   { transform: translateX(-5px); }
          50%  { transform: translateX(5px); }
          100% { transform: translateX(-5px); }
        }
        @keyframes shuttleSweep {
          0%   { left: -4px; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { left: calc(100% + 4px); opacity: 0; }
        }
        @keyframes shimmerSweep {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        /* Mobile CSS Automatic Frame Cycling (15s Loop) */
        @keyframes frameCycle1 {
          0%, 15% { opacity: 1; }
          20%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes frameCycle2 {
          0%, 15% { opacity: 0; }
          20%, 35% { opacity: 1; }
          40%, 100% { opacity: 0; }
        }
        @keyframes frameCycle3 {
          0%, 35% { opacity: 0; }
          40%, 55% { opacity: 1; }
          60%, 100% { opacity: 0; }
        }
        @keyframes frameCycle4 {
          0%, 55% { opacity: 0; }
          60%, 75% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }
        @keyframes frameCycle5 {
          0%, 75% { opacity: 0; }
          80%, 95% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

    </div>
  )
}
