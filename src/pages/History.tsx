import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const timeline = [
  { year: '2022', title: 'The Concept', text: 'Born from frustration with the rising costs of vintage medium format gear, the idea was simple: democratize large-sensor analog photography through modern manufacturing.' },
  { year: '2023', title: 'Prototyping', text: 'Over 40 iterations of the film advance mechanism were printed, tested, and discarded. We learned that plastic has memory, and precision requires patience.' },
  { year: '2024', title: 'The Mark I', text: 'The first functional prototype emerged. It was ugly, light-leaked, and jammed constantly. But the first negative it produced was magic.' },
  { year: '2026', title: 'Production', text: 'Refined in carbon-infused PETG, the final design achieves tolerances previously thought impossible for FDM printing. The camera is no longer a toy; it is an instrument.' },
];

export default function History() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div ref={containerRef} className="min-h-screen relative bg-black">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1 }}
        className="fixed inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop" 
          alt="History background" 
          className="w-full h-full object-cover filter grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 pt-40 pb-32 px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-40"
        >
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none mb-12">
            The <span className="italic text-[var(--color-muted)]">Origin</span>
          </h1>
          
          <blockquote className="text-3xl md:text-5xl font-serif font-light leading-tight text-[var(--color-accent)] border-l border-[var(--color-accent)] pl-8 py-4 my-24">
            "We didn't want to build a plastic toy. We wanted to build a precision instrument that happened to be printed."
          </blockquote>
        </motion.div>

        <div className="space-y-40">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row gap-8 md:gap-24"
            >
              <div className="md:w-1/3">
                <h2 className="text-6xl font-serif text-[var(--color-muted)]">{item.year}</h2>
                <h3 className="text-sm uppercase tracking-[0.2em] mt-4 text-[var(--color-accent)]">{item.title}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--color-foreground)]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
