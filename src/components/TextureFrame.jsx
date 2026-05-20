import { motion, useTransform } from 'framer-motion'

/**
 * TextureFrame
 * A full-screen absolutely-positioned background frame.
 * Each frame is driven by a shared scrollProgress MotionValue.
 * Opacity is computed from the [inStart, peakStart, peakEnd, outEnd] range.
 * 
 * Props:
 *  - image: imported asset path (or null for CSS-only fallback)
 *  - gradient: CSS gradient string used when image is null
 *  - scrollProgress: MotionValue from parent useScroll
 *  - inStart/peakStart/peakEnd/outEnd: scroll 0–1 breakpoints
 *  - children: any overlay elements (e.g. StitchLineSVG)
 *  - motionProps: extra motion style overrides (translateY, scale, etc.)
 *  - overlayOpacity: darkness of the rgba overlay on top of image (default 0.55)
 */
export default function TextureFrame({
  image,
  gradient,
  scrollProgress,
  inStart,
  peakStart,
  peakEnd,
  outEnd,
  children,
  motionProps = {},
  overlayOpacity = 0.58,
  vignette = false,
}) {
  // Cross-dissolve opacity: 0 → 1 → 1 → 0
  const opacity = useTransform(
    scrollProgress,
    [inStart, peakStart, peakEnd, outEnd ?? peakEnd],
    [0, 1, 1, outEnd != null ? 0 : 1]
  )

  // Subtle parallax scale or Y shift — passed in from parent
  const { y, scale } = motionProps

  return (
    <motion.div
      style={{ opacity, y, scale, willChange: 'opacity, transform' }}
      className="absolute inset-0 w-full h-full"
    >
      {/* Actual background image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* CSS gradient fallback when no image */}
      {!image && gradient && (
        <div
          className="absolute inset-0"
          style={{ background: gradient }}
        />
      )}

      {/* Dark overlay for text contrast — always on top of photo */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
      />

      {/* Edge vignette for cinematic frame feel */}
      {vignette && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
          }}
        />
      )}

      {/* Slot for frame-specific overlays (stitch lines, labels, etc.) */}
      {children}
    </motion.div>
  )
}
