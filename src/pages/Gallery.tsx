import { motion } from 'motion/react';

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1447958272669-9c562446304f?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 2, src: "https://images.unsplash.com/photo-1506744626753-eba7bc3623ee?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[16/9]" },
  { id: 3, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { id: 4, src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[1/1]" },
  { id: 5, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 6, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[16/9]" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 max-w-[1600px] mx-auto">
      <div className="mb-24 md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tighter mb-8">
          The <span className="italic text-[var(--color-muted)]">Output</span>
        </h1>
        <p className="text-sm text-[var(--color-muted)] font-light leading-relaxed max-w-md">
          A curated selection of medium format film photographs captured exclusively on OBSCURA 3D-printed cameras. 
          The intersection of modern manufacturing and analog soul.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-16 space-y-16">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full overflow-hidden break-inside-avoid group`}
          >
            <div className={`relative w-full ${img.aspect} bg-[var(--color-border)] overflow-hidden`}>
              <img 
                src={img.src} 
                alt={`Gallery image ${img.id}`} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 filter grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 flex justify-between items-center text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
              <span>OBSCURA MK I</span>
              <span>ILFORD HP5</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
