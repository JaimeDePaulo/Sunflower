import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Juliana & Marcos",
    text: "O Studio SunFlower transformou nosso casamento em um filme de época. A sensibilidade deles é de outro mundo. Cada vez que revemos as fotos, o sentimento volta.",
    role: "Noivos"
  },
  {
    name: "Roberto Silva",
    text: "Excelente trabalho corporativo. Precisava de fotos que passassem autoridade e o resultado superou todas as expectativas. Recomendo fortemente.",
    role: "CEO na TechUp"
  },
  {
    name: "Ana Oliveira",
    text: "O ensaio de família foi leve e divertido. Nem sentimos que estávamos sendo fotografados. O resultado foram momentos espontâneos e lindos.",
    role: "Mãe e Arquiteta"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-soft-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold uppercase tracking-widest text-sm mb-4 block">Experiências</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">O que dizem sobre nós</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl relative shadow-sm border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 text-gold/20 w-12 h-12" />
              <p className="text-gray-600 italic mb-8 relative z-10 text-lg leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <h5 className="font-bold text-lg">{t.name}</h5>
                <span className="text-gold text-sm uppercase tracking-wider">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
