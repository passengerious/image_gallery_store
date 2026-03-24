import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury 3D Printed Camera" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-center text-center mt-24">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[var(--color-accent)] text-[10px] uppercase tracking-[0.3em] mb-8 font-mono">
            The Future of Analog
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter font-serif mb-12">
            OBSCURA<br /><span className="italic font-light text-[var(--color-muted)]">MARK I</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <p className="text-sm text-[var(--color-muted)] mb-8 font-light leading-relaxed">
            Precision-engineered 3D printed medium format cameras. 
            Join the waitlist for exclusive access to our next production run.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL" 
                  required
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-xs uppercase tracking-[0.15em] focus:outline-none focus:border-[var(--color-foreground)] transition-colors placeholder:text-[var(--color-muted)]"
                />
              </div>
              <button 
                type="submit"
                className="w-full border border-[var(--color-border)] py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
              >
                Request Access
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-8 border border-[var(--color-border)] text-xs uppercase tracking-[0.1em] text-[var(--color-accent)]"
            >
              Access Requested. We will be in touch.
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
