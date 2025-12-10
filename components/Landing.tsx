import React from 'react';
import { Send, ArrowRight, ShieldCheck, Users, Zap } from 'lucide-react';

const Landing: React.FC = () => {
  // Replace this with your actual Telegram link
  const telegramLink = "https://t.me/ninaxxrosinhabot";

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 selection:bg-telegram selection:text-white">
      
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-telegram/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-lg px-4">
        <div className="relative group">
          {/* Card Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-telegram to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-slate-800/80 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-8 sm:p-12 text-center shadow-2xl">
            
            {/* Telegram Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-telegram blur-xl opacity-50 rounded-full animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-telegram to-blue-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-float">
                  <Send className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Entre para o nosso canal
            </h1>
            
            {/* Subtext */}
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Receba conteúdos exclusivos, novidades em primeira mão e faça parte da nossa comunidade VIP.
            </p>

            {/* Benefits Icons (Subtle) */}
            <div className="flex justify-center gap-6 mb-8 text-slate-500">
               <div className="flex flex-col items-center gap-1">
                 <ShieldCheck className="w-5 h-5 text-telegram" />
                 <span className="text-xs font-medium">Seguro</span>
               </div>
               <div className="flex flex-col items-center gap-1">
                 <Users className="w-5 h-5 text-telegram" />
                 <span className="text-xs font-medium">Comunidade</span>
               </div>
               <div className="flex flex-col items-center gap-1">
                 <Zap className="w-5 h-5 text-telegram" />
                 <span className="text-xs font-medium">Rápido</span>
               </div>
            </div>

            {/* CTA Button */}
            <a 
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative w-full inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-telegram font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-telegram focus:ring-offset-slate-900 hover:bg-telegram-hover active:scale-95"
            >
              <span className="mr-2 text-lg">Acessar Telegram Agora</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>

            {/* Footer / Disclaimer */}
            <p className="mt-6 text-xs text-slate-500">
              Ao clicar, você será redirecionado para o aplicativo do Telegram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;