'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      role="status"
      aria-label="Accessing Archive"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.82, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{
          duration: 2.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative"
      >
        {/* Slow continuous scale for the premium "breathing" feel */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="relative h-16 w-32 sm:h-20 sm:w-40"
        >
          <Image
            src="/fl-logo.png"
            alt="FORGED.LIMITED"
            fill
            priority
            sizes="160px"
            className="object-contain mix-blend-screen"
          />
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="mt-10 font-mono text-[11px] uppercase tracking-[0.45em] text-muted-foreground"
      >
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
        >
          Accessing Archive...
        </motion.span>
      </motion.p>
    </div>
  )
}
