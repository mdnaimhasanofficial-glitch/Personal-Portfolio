"use client"
import Image from "next/image"
import { useRef } from "react"

// Image dekhay; video thakle hover korle chole.
export function MediaPreview({ image, video, alt }: { image?: string; video?: string; alt: string }) {
  const v = useRef<HTMLVideoElement>(null)
  return (
    <div
      className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20"
      onPointerEnter={() => v.current?.play().catch(() => {})}
      onPointerLeave={() => v.current?.pause()}
    >
      {image && (
        <Image src={image} alt={alt} fill sizes="(min-width:1024px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105" />
      )}
      {video && (
        <video ref={v} src={video} muted loop playsInline preload="metadata" aria-label={alt}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${image ? "opacity-0 group-hover:opacity-100" : ""}`} />
      )}
    </div>
  )
}
