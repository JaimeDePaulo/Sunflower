import { motion } from 'motion/react';
import { Heart, Sparkles, Camera } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1554048609-7082a607f9d4?auto=format&fit=crop&q=80" 
              alt="Estúdio SunFlower"
              className="rounded-2xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-yellow z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-yellow z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow font-semibold uppercase tracking-widest text-sm mb-4 block">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">A arte de eternizar sorrisos</h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              No Studio SunFlower, acreditamos que cada momento é uma obra de arte esperando para ser capturada. 
              O que começou como uma paixão por documentar histórias de amor, tornou-se um refúgio para quem busca 
              sensibilidade, profissionalismo e uma visão artística única.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Camera />, title: "Criatividade", desc: "Ângulos únicos e composições inovadoras." },
                { icon: <Heart />, title: "Sensibilidade", desc: "Capturando a emoção por trás do click." },
                { icon: <Sparkles />, title: "Excelência", desc: "Qualidade de cinema em todas as fotos." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-yellow">{item.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
