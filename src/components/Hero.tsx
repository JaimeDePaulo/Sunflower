import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
          alt="Momentos felizes"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[0.3em] text-sm font-light mb-4 block">
            Fotografia & Videografia
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6">
            Sun<span className="text-gold">Flower</span>
          </h1>
          <p className="text-xl md:text-2xl font-light italic mb-8 tracking-wide">
            “A um click para a felicidade”
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-white px-10 py-4 rounded-full text-lg font-medium shadow-2xl hover:bg-gold/90 transition-all border border-gold/50"
            >
              Ver Portfólio
            </motion.a>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-medium shadow-2xl hover:bg-white/20 transition-all border border-white/30"
            >
              Agendar Sessão
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
      </motion.div>
    </section>
  );
}
