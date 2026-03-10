"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { HERO_IMAGES } from "@/lib/placeholders";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import {
  galleryImages,
  GALLERY_CATEGORIES,
  type GalleryCategory,
} from "@/data/gallery";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <InteriorHero
        heading="Our *Community* in Pictures"
        backgroundImage={HERO_IMAGES.gallery}
        objectPosition="center 40%"
      />

      {/* Intro + Filters */}
      <section className="bg-surface-page px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel text="PHOTO GALLERY" align="center" />
          <EmphasisHeading
            text="Moments That *Matter*"
            as="h2"
            className="mt-6 text-center text-3xl text-text-primary md:text-4xl"
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-text-body">
            A glimpse into the events, workshops, and gatherings that bring our
            community together. Every photo tells a story of connection,
            creativity, and care.
          </p>

          {/* Filter pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                aria-pressed={activeCategory === cat.value}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 ${
                  activeCategory === cat.value
                    ? "border-accent-500 bg-accent-500 text-white"
                    : "border-divider bg-surface-card text-text-body hover:border-accent-300 hover:text-accent-600"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p
            className="mt-4 text-center text-sm text-text-muted"
            aria-live="polite"
          >
            Showing {filteredImages.length}{" "}
            {filteredImages.length === 1 ? "photo" : "photos"}
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="bg-surface-page px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {filteredImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setLightboxIndex(index)}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={image.portrait ? 800 : 450}
                  className="w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-950/0 transition-colors duration-300 group-hover:bg-primary-950/20" />
                {/* Bottom caption on hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-primary-950/80 to-transparent px-4 pb-4 pt-12 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm leading-snug text-white/90">
                    {image.alt}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-950/95 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightboxIndex(null);
            if (e.key === "ArrowRight")
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filteredImages.length : null
              );
            if (e.key === "ArrowLeft")
              setLightboxIndex((prev) =>
                prev !== null
                  ? (prev - 1 + filteredImages.length) % filteredImages.length
                  : null
              );
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          tabIndex={-1}
          ref={(el) => el?.focus()}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label="Close lightbox"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (prev) =>
                  prev !== null
                    ? (prev - 1 + filteredImages.length) %
                      filteredImages.length
                    : null
              );
            }}
            className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label="Previous photo"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (prev) =>
                  prev !== null
                    ? (prev + 1) % filteredImages.length
                    : null
              );
            }}
            className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label="Next photo"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              sizes="90vw"
              priority
            />
            <p className="mt-3 text-center text-sm text-white/70">
              {filteredImages[lightboxIndex].alt}
            </p>
            <p className="mt-1 text-center text-xs text-white/40">
              {lightboxIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
