import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold uppercase tracking-widest text-sm mb-4 block">Contato</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Vamos planejar seu próximo click?</h2>
            <p className="text-gray-500 text-lg mb-10">
              Estamos ansiosos para ouvir sua ideia. Preencha o formulário ou entre em contato pelos canais diretos.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail />, label: "E-mail", val: "contato@sunflowerstudio.com" },
                { icon: <Phone />, label: "WhatsApp", val: "+55 (11) 99999-9999" },
                { icon: <MapPin />, label: "Localização", val: "São Paulo, SP - Brasil" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs uppercase text-gray-400 font-bold tracking-widest">{item.label}</span>
                    <p className="font-medium text-lg">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-soft-white p-10 rounded-3xl border border-gray-100 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Nome</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">E-mail</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Serviço de Interesse</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option>Casamentos</option>
                  <option>Eventos Corporativos</option>
                  <option>Ensaios Individuais</option>
                  <option>Filmagens</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Conte-nos um pouco sobre o que você deseja..."></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gold text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gold/90 transition-all shadow-lg shadow-gold/20"
              >
                Enviar Mensagem <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
