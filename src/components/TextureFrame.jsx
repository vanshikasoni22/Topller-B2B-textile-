import { motion, useTransform } from 'framer-motion'

/**
 * TextureFrame
 * A full-screen absolutely-positioned background frame.
 * 
 * Props:
 *  - image: imported asset path
 *  - gradient: CSS gradient string used when image is null
 *  - scrollProgress: MotionValue from parent useScroll
 *  - inStart/peakStart/peakEnd/outEnd: scroll 0–1 breakpoints
 *  - opacity: explicit Framer Motion or string opacity (used for overrides/mobile cycle)
 *  - children: overlay elements
 *  - motionProps: extra motion style overrides (translateY, scale, etc.)
 *  - overlayOpacity: darkness of the dark overlay
 *  - vignette: edge vignette
 *  - style: custom style overrides
 */
export default function TextureFrame({
  image,
  gradient,
  scrollProgress,
  inStart,
  peakStart,
  peakEnd,
  outEnd,
  opacity: customOpacity,
  children,
  motionProps = {},
  overlayOpacity = 0.58,
  vignette = false,
  style = {},
}) {
  // Use scroll-linked opacity transform if no custom opacity or custom style is passed
  const opacity = customOpacity !== undefined ? customOpacity : useTransform(
    scrollProgress,
    [inStart, peakStart, peakEnd, outEnd ?? peakEnd],
    [0, 1, 1, outEnd != null ? 0 : 1]
  )

  const { y, scale } = motionProps

  return (
    <motion.div
      style={{ 
        opacity, 
        y, 
        scale, 
        willChange: 'opacity, transform', 
        zIndex: 1,
        ...style 
      }}
      className="absolute inset-0 w-full h-full"
    >
      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Fallback Gradient */}
      {!image && gradient && (
        <div
          className="absolute inset-0"
          style={{ background: gradient }}
        />
      )}

      {/* Dark overlay for contrast — zIndex: 0 within frame (will remain under text) */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
      />

      {/* Edge Vignette */}
      {vignette && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
          }}
        />
      )}

      {/* Frame-specific overlays */}
      <div className="absolute inset-0 z-10">
        {children}
      </div>
    </motion.div>
  )
}
