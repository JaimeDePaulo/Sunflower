import { motion } from 'motion/react';
import { Camera, Video, Users, Building, Music, User } from 'lucide-react';

const services = [
  {
    icon: <Camera className="w-10 h-10" />,
    title: "Fotografia de Eventos",
    desc: "De casamentos a aniversários, capturamos cada detalhe do seu momento especial.",
    color: "bg-gold/10"
  },
  {
    icon: <Video className="w-10 h-10" />,
    title: "Videografia",
    desc: "Storytelling cinematográfico que dá vida às suas memórias mais queridas.",
    color: "bg-gold/10"
  },
  {
    icon: <User className="w-10 h-10" />,
    title: "Retratos",
    desc: "Sessões individuais ou profissionais que destacam a sua melhor versão.",
    color: "bg-gold/10"
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Ensaios de Família",
    desc: "A conexão genuína entre as pessoas que você mais ama.",
    color: "bg-gold/10"
  },
  {
    icon: <Building className="w-10 h-10" />,
    title: "Corporativo",
    desc: "Imagens que transmitem autoridade e profissionalismo para sua marca.",
    color: "bg-gold/10"
  },
  {
    icon: <Music className="w-10 h-10" />,
    title: "Produção Criativa",
    desc: "Vídeos institucionais e editoriais de moda com visão artística.",
    color: "bg-gold/10"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-soft-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold font-semibold uppercase tracking-widest text-sm mb-4 block">Nossa Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Serviços que contam histórias</h2>
          <p className="text-gray-500">Oferecemos soluções completas em imagem, unindo tecnologia de ponta e um olhar poético.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-gold/5 transition-all group"
            >
              <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#contato" className="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Saiba Mais <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
