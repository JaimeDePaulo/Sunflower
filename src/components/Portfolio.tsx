import { motion } from 'motion/react';
import { useState } from 'react';

const categories = ["Todos", "Casamentos", "Retratos", "Eventos", "Cinema"];

const items = [
  { id: 1, category: "Casamentos", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80", title: "Amor Eterno" },
  { id: 2, category: "Retratos", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80", title: "Essência Urbana" },
  { id: 3, category: "Eventos", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80", title: "Gala Night" },
  { id: 4, category: "Cinema", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80", title: "Curta Metragem" },
  { id: 5, category: "Casamentos", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80", title: "Noiva Radiante" },
  { id: 6, category: "Retratos", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80", title: "Olhar Profundo" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("Todos");

  const filteredItems = filter === "Todos" ? items : items.filter(i => i.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div>
            <span className="text-yellow font-semibold uppercase tracking-widest text-sm mb-4 block">Galeria</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary">Nosso Portfólio</h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-yellow text-bg-black shadow-lg shadow-yellow/20' 
                    : 'bg-surface-black text-gray-400 hover:bg-surface-black/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={item.id}
              className="relative group overflow-hidden rounded-2xl aspect-[4/5] border border-white/5"
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                <span className="text-yellow text-xs uppercase tracking-widest mb-2">{item.category}</span>
                <h4 className="text-2xl font-serif font-bold">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
