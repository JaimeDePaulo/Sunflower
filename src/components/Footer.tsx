import { Camera, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-prestige-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Camera className="text-gold w-8 h-8" />
              <span className="text-2xl font-serif font-bold tracking-tight">
                Sun<span className="text-gold">Flower</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Capturando a beleza dos pequenos grandes momentos desde 2015. 
              Sua felicidade eternizada através da nossa lente.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-gold transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfólio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Serviços</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Casamentos</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Eventos Sociais</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Ensaios Premium</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Vídeo Reels</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-6 text-sm">Receba dicas de fotografia e novidades do estúdio.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-gold text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gold/90 transition-colors">
                Assinar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SunFlower Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
