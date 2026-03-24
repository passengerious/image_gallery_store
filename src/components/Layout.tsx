import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] flex flex-col selection:bg-[var(--color-accent)] selection:text-black">
      <header className="fixed top-0 w-full z-50 mix-blend-difference px-8 py-6 flex justify-between items-center text-[11px] uppercase tracking-[0.15em] font-medium">
        <Link to="/" className="hover:text-[var(--color-accent)] transition-colors">
          OBSCURA
        </Link>
        
        <nav className="hidden md:flex gap-12">
          <Link to="/catalog" className="hover:text-[var(--color-accent)] transition-colors">Catalog</Link>
          <Link to="/gallery" className="hover:text-[var(--color-accent)] transition-colors">Gallery</Link>
          <Link to="/history" className="hover:text-[var(--color-accent)] transition-colors">History</Link>
          <Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link>
        </nav>

        <div className="flex gap-8">
          <button className="hover:text-[var(--color-accent)] transition-colors">CART (0)</button>
          <button className="md:hidden hover:text-[var(--color-accent)] transition-colors">MENU</button>
        </div>
      </header>

      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="border-t border-[var(--color-border)] px-8 py-12 text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p>&copy; {new Date().getFullYear()} OBSCURA. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
