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
 * The parent section must be tall (e.g. h-[400vh]) so scroll has room.
 * Each frame's opacity is driven by the section's own scrollYProgress.
 *
 * Scroll ranges (0–1 within the section):
 *   Frame 1 — fully visible at 0, fades out by 0.28
 *   Frame 2 — fades in 0.18→0.28, holds to 0.48, fades out by 0.58
 *   Frame 3 — fades in 0.42→0.52, holds to 0.67, fades out by 0.76
 *   Frame 4 — fades in 0.64→0.72, holds to 0.84, fades out by 0.92
 *   Frame 5 — fades in 0.82→0.92, stays fully visible to 1.0
 */
export default function ScrollBackground({ sectionRef }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Spring-smooth the raw scroll value for buttery 60fps feel
  const progress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // Subtle parallax Y for Frame 1 threads drifting forward
  const f1Y = useTransform(progress, [0, 0.3], ['0%', '-6%'])

  // Subtle scale zoom for Frame 3 fabric unroll feel
  const f3Scale = useTransform(progress, [0.42, 0.76], [1.04, 1.0])

  // Frame 5 upward float
  const f5Y = useTransform(progress, [0.82, 1], ['4%', '0%'])

  // Stitch line sub-progress: map full scroll 0.64–0.92 → 0–1
  const stitchProgress = useTransform(progress, [0.64, 0.92], [0, 1])

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* ── FRAME 1 — Industrial Thread Spools ────────────────────────────
          IMAGE SWAP: Replace background with photo of large charcoal thread spools
          Recommended shot: Close-up of dark industrial thread spools with
          parallel threads running toward camera, dramatic side lighting */}
      <TextureFrame
        image={frame1}
        scrollProgress={progress}
        inStart={0}   peakStart={0}   peakEnd={0.18}  outEnd={0.28}
        overlayOpacity={0.52}
        vignette
        motionProps={{ y: f1Y }}
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

      {/* ── FRAME 2 — Industrial Loom Machine ─────────────────────────────
          IMAGE SWAP: Replace background with photo of wide industrial loom in motion
          Recommended shot: Loom shuttle crossing horizontally, dark machinery,
          charcoal fabric forming row by row, dramatic factory floor lighting */}
      <TextureFrame
        image={frame2}
        scrollProgress={progress}
        inStart={0.18} peakStart={0.28} peakEnd={0.48} outEnd={0.58}
        overlayOpacity={0.55}
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

      {/* ── FRAME 3 — Fabric on Cutting Table ─────────────────────────────
          IMAGE SWAP: Replace background with photo of dark grey fabric unrolling
          Recommended shot: Wide angle of dark fabric laid flat on a long wooden
          cutting table with dramatic directional lamp from left */}
      <TextureFrame
        image={frame3}
        scrollProgress={progress}
        inStart={0.42} peakStart={0.52} peakEnd={0.67} outEnd={0.76}
        overlayOpacity={0.50}
        vignette
        motionProps={{ scale: f3Scale }}
      />

      {/* ── FRAME 4 — Sewing Machine Needle ───────────────────────────────
          IMAGE SWAP: Replace background with extreme close-up of needle stitching
          Recommended shot: Macro of sewing machine foot pressing dark fabric,
          needle mid-stitch, thread clearly visible, edge blur, sharp center */}
      <TextureFrame
        image={frame4}
        scrollProgress={progress}
        inStart={0.60} peakStart={0.72} peakEnd={0.84} outEnd={0.92}
        overlayOpacity={0.60}
        vignette
      >
        {/* SVG stitch line draws across center as you scroll through this frame */}
        <StitchLineSVG scrollProgress={stitchProgress} />
      </TextureFrame>

      {/* ── FRAME 5 — Final Pressed Trouser ───────────────────────────────
          IMAGE SWAP: Replace background with photo of finished formal trouser hanging
          Recommended shot: Single pressed men's formal trouser on black hanger,
          near-black background, single dramatic top-left light source */}
      <TextureFrame
        image={frame5}
        scrollProgress={progress}
        inStart={0.82} peakStart={0.92} peakEnd={1.0} outEnd={null}
        overlayOpacity={0.45}
        vignette
        motionProps={{ y: f5Y }}
      >
        {/* CSS shimmer overlay for "fabric texture shimmers" payoff moment */}
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
      `}</style>

    </div>
  )
}
