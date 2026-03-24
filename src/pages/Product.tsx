import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';

const productImages = [
  "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502982720700-baf979f710f6?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1447958272669-9c562446304f?q=80&w=1600&auto=format&fit=crop"
];

export default function Product() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Sticky Details */}
      <div className="w-full md:w-[40%] md:h-screen md:sticky top-0 pt-32 pb-16 px-8 flex flex-col justify-between border-r border-[var(--color-border)] bg-black z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8 font-mono">
            Medium Format
          </div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-4 leading-none">
            OBSCURA<br /><span className="italic font-light text-[var(--color-muted)]">MK I</span>
          </h1>
          <p className="text-2xl font-light tracking-wider mb-12">$850</p>

          <div className="space-y-8 text-sm font-light text-[var(--color-muted)] leading-relaxed max-w-md">
            <p>
              A reimagined 6x7 medium format camera, precision-manufactured using advanced 3D printing techniques. 
              Designed for the modern analog purist who demands both aesthetic minimalism and mechanical perfection.
            </p>
            <ul className="space-y-4 text-[11px] uppercase tracking-[0.15em] border-t border-[var(--color-border)] pt-8">
              <li className="flex justify-between"><span>Format</span> <span className="text-[var(--color-foreground)]">6x7cm</span></li>
              <li className="flex justify-between"><span>Material</span> <span className="text-[var(--color-foreground)]">Carbon Fiber PETG</span></li>
              <li className="flex justify-between"><span>Weight</span> <span className="text-[var(--color-foreground)]">640g</span></li>
              <li className="flex justify-between"><span>Lens Mount</span> <span className="text-[var(--color-foreground)]">Copal #0</span></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <button className="w-full border border-[var(--color-foreground)] py-5 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 mb-4">
            Join Waitlist
          </button>
          <p className="text-center text-[10px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
            Estimated delivery: Q3 2026
          </p>
        </motion.div>
      </div>

      {/* Right Side: Scrolling Imagery */}
      <div className="w-full md:w-[60%] flex flex-col">
        {productImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-[70vh] md:h-[120vh] relative border-b border-[var(--color-border)]"
          >
            <img 
              src={src} 
              alt={`Product detail ${index + 1}`} 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
