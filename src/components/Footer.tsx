import { Camera, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-black text-text-primary pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Camera className="text-yellow w-8 h-8" />
              <span className="text-2xl font-serif font-bold tracking-tight text-text-primary">
                Sun<span className="text-yellow">Flower</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Capturando a beleza dos pequenos grandes momentos desde 2015. 
              Sua felicidade eternizada através da nossa lente.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow transition-colors group">
                <Instagram className="w-5 h-5 text-text-primary group-hover:text-bg-black transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow transition-colors group">
                <Facebook className="w-5 h-5 text-text-primary group-hover:text-bg-black transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow transition-colors group">
                <Youtube className="w-5 h-5 text-text-primary group-hover:text-bg-black transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-text-primary">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-yellow transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-yellow transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-yellow transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-yellow transition-colors">Portfólio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-text-primary">Serviços</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-yellow transition-colors">Casamentos</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Eventos Sociais</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Ensaios Premium</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Vídeo Reels</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-text-primary">Newsletter</h4>
            <p className="text-gray-400 mb-6 text-sm">Receba dicas de fotografia e novidades do estúdio.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-text-primary focus:outline-none focus:border-yellow transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-yellow text-bg-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-yellow/90 transition-colors">
                Assinar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SunFlower Studio. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-600">Desenvolvido por <span className="text-gray-400 font-medium tracking-wide">Jaime de Paulo</span></p>
        </div>
      </div>
    </footer>
  );
}
