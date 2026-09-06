'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function ProductGallery() {
  return (
    <div className="relative aspect-square">
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-1, 0.5, -1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 overflow-hidden border border-border bg-white shadow-2xl shadow-black/40"
      >
        <Image
          src="/editions/product-001.png"
          alt="Forged JetTags product"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain"
        />
        <span className="absolute bottom-5 left-5 bg-black px-3 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white">
          Product 001
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [3, 4.5, 3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute bottom-[-7%] right-[-4%] z-10 aspect-[447/256] w-[58%] overflow-hidden border-4 border-background bg-white shadow-xl shadow-black/50"
      >
        <Image
          src="/editions/product-001-a.png"
          alt="Forged JetTags dimensions"
          fill
          sizes="(max-width: 1024px) 58vw, 32vw"
          className="object-contain"
        />
      </motion.div>
    </div>
  )
}
