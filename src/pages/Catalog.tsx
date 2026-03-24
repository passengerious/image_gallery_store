import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const products = [
  { id: 'mk1-black', name: 'OBSCURA MK I', finish: 'Matte Black', price: '$850', img: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1200&auto=format&fit=crop' },
  { id: 'mk1-steel', name: 'OBSCURA MK I', finish: 'Brushed Steel', price: '$950', img: 'https://images.unsplash.com/photo-1502982720700-baf979f710f6?q=80&w=1200&auto=format&fit=crop' },
  { id: 'mk2-pro', name: 'OBSCURA PRO', finish: 'Carbon Fiber', price: '$1,200', img: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1200&auto=format&fit=crop' },
  { id: 'lens-board', name: 'LENS BOARD', finish: 'Copal #0', price: '$120', img: 'https://images.unsplash.com/photo-1502982720700-baf979f710f6?q=80&w=1200&auto=format&fit=crop' },
];

export default function Catalog() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-24 px-8 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-end mb-24 border-b border-[var(--color-border)] pb-8">
        <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tighter">
          The <span className="italic text-[var(--color-muted)]">Collection</span>
        </h1>
        
        <button 
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="text-[10px] uppercase tracking-[0.2em] hover:text-[var(--color-accent)] transition-colors"
        >
          {filtersOpen ? 'CLOSE FILTERS' : 'FILTERS +'}
        </button>
      </div>

      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-24"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
              <div className="flex flex-col gap-4">
                <span className="text-[var(--color-foreground)] mb-2">Format</span>
                <button className="text-left hover:text-[var(--color-accent)]">6x7 Medium Format</button>
                <button className="text-left hover:text-[var(--color-accent)]">4x5 Large Format</button>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[var(--color-foreground)] mb-2">Material</span>
                <button className="text-left hover:text-[var(--color-accent)]">Carbon Fiber</button>
                <button className="text-left hover:text-[var(--color-accent)]">Matte PLA</button>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[var(--color-foreground)] mb-2">Availability</span>
                <button className="text-left hover:text-[var(--color-accent)]">In Stock</button>
                <button className="text-left hover:text-[var(--color-accent)]">Waitlist</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
        {products.map((product, index) => (
          <Link to={`/product/${product.id}`} key={product.id} className="group block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aspect-[4/5] bg-[var(--color-border)] mb-8 overflow-hidden relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover filter grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-serif tracking-tight mb-2">{product.name}</h2>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)]">{product.finish}</p>
                </div>
                <span className="text-sm font-light tracking-wider">{product.price}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
