import { useEffect, useRef } from 'react'
import { motion, useTransform } from 'framer-motion'

/**
 * StitchLineSVG
 * Renders an animated running stitch line whose drawing progress
 * is driven directly by a Framer Motion MotionValue (0→1).
 * 
 * The SVG path total length is ~900px. strokeDashoffset goes from 900→0
 * as scrollProgress goes from 0→1, creating the illusion of real-time stitching.
 */
export default function StitchLineSVG({ scrollProgress }) {
  // Total path length — matches the SVG path below
  const TOTAL_LENGTH = 900

  // Map scroll 0→1 to dashoffset 900→0 (draws the line as you scroll)
  const dashOffset = useTransform(scrollProgress, [0, 1], [TOTAL_LENGTH, 0])

  // Also animate a "needle head" dot that rides the stitch line tip
  const needleX = useTransform(scrollProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <svg
        viewBox="0 0 900 80"
        className="w-full h-auto max-w-4xl px-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background guide track — faint dashed */}
        <line
          x1="20" y1="40"
          x2="880" y2="40"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="6 6"
        />

        {/* The animated stitch line — draws left to right as scroll progresses */}
        <motion.path
          d={`
            M 20,40
            C 80,20 120,60 180,40
            C 240,20 280,60 340,40
            C 400,20 440,60 500,40
            C 560,20 600,60 660,40
            C 720,20 760,60 820,40
            L 880,40
          `}
          stroke="#c9a84c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={TOTAL_LENGTH}
          style={{ strokeDashoffset: dashOffset }}
        />

        {/* Stitch tick marks — small perpendicular lines along path */}
        {[80, 180, 280, 380, 480, 580, 680, 780].map((x) => (
          <line
            key={x}
            x1={x} y1="30"
            x2={x} y2="50"
            stroke="rgba(201, 168, 76, 0.25)"
            strokeWidth="1"
          />
        ))}

        {/* Needle head dot that travels with the stitch tip */}
        <motion.circle
          cy="40"
          r="4"
          fill="#c9a84c"
          opacity="0.8"
          style={{ cx: useTransform(scrollProgress, [0, 1], [20, 880]) }}
        />
      </svg>
    </div>
  )
}
