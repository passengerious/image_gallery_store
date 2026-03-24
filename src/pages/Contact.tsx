import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-24 px-8 max-w-[1200px] mx-auto flex flex-col md:flex-row gap-24">
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-12">
            Connect
          </h1>
          
          <div className="space-y-12 text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
            <div>
              <p className="text-[var(--color-foreground)] mb-2">Studio</p>
              <p>124 Industrial Ave.</p>
              <p>Brooklyn, NY 11222</p>
            </div>
            
            <div>
              <p className="text-[var(--color-foreground)] mb-2">Inquiries</p>
              <a href="mailto:hello@obscura.com" className="hover:text-[var(--color-accent)] transition-colors">hello@obscura.com</a>
            </div>
            
            <div>
              <p className="text-[var(--color-foreground)] mb-2">Press</p>
              <a href="mailto:press@obscura.com" className="hover:text-[var(--color-accent)] transition-colors">press@obscura.com</a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-16">
              <div className="relative">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="NAME" 
                  required
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-xs uppercase tracking-[0.15em] focus:outline-none focus:border-[var(--color-foreground)] transition-colors placeholder:text-[var(--color-muted)]"
                />
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="EMAIL" 
                  required
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-xs uppercase tracking-[0.15em] focus:outline-none focus:border-[var(--color-foreground)] transition-colors placeholder:text-[var(--color-muted)]"
                />
              </div>
              
              <div className="relative">
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="MESSAGE" 
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-xs uppercase tracking-[0.15em] focus:outline-none focus:border-[var(--color-foreground)] transition-colors placeholder:text-[var(--color-muted)] resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="self-start border border-[var(--color-border)] px-12 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
              >
                Send Message
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 border-t border-[var(--color-border)] text-xs uppercase tracking-[0.1em] text-[var(--color-accent)]"
            >
              Message received. We will respond shortly.
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
