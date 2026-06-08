import React from 'react';
import { motion } from 'motion/react';
import {
  Zap, Check, X, Smartphone, Search, ShieldCheck, Star, 
  MessageCircle, ArrowRight, CheckCircle2, ChevronDown, Mail, Phone
} from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const HeroFadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 border-b border-slate-800/60 bg-[#0F172A]/80 backdrop-blur-md z-50">
        <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity cursor-pointer">
            <Zap className="h-6 w-6 text-brand" />
            <span>FutureMedia <span className="text-brand">Network</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#vorteile" className="hover:text-white transition-colors">Vorteile</a>
            <a href="#pakete" className="hover:text-white transition-colors">Preise</a>
            <a href="#ablauf" className="hover:text-white transition-colors">Ablauf</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#kontakt" className="bg-gradient-to-r from-brand to-brand-light hover:from-brand-light hover:to-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105 hidden md:block">
            Kostenlose Beratung
          </a>
        </div>
      </nav>

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="mx-auto max-w-6xl px-6 relative z-10 text-center">
            <HeroFadeIn>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto">
                Mehr Kunden für dein Unternehmen durch <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">moderne Webseiten.</span>
              </h1>
            </HeroFadeIn>
            
            <HeroFadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Wir erstellen Webseiten, die Vertrauen aufbauen und Anfragen automatisch generieren.
              </p>
            </HeroFadeIn>
            
            <HeroFadeIn delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#kontakt" className="w-full sm:w-auto font-display bg-gradient-to-r from-brand to-brand-light text-white font-semibold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-[1.03] flex items-center justify-center gap-2">
                Kostenlose Beratung
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="https://wa.me/49123456789" target="_blank" rel="noreferrer" className="w-full sm:w-auto font-display bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/20 font-semibold py-4 px-8 rounded-full transition-all hover:scale-[1.03] flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5 fill-current" />
                WhatsApp schreiben
              </a>
            </HeroFadeIn>

            {/* Laptop Mockup Visual */}
            <HeroFadeIn delay={0.4} className="mt-20 max-w-5xl mx-auto">
              <div className="relative rounded-t-2xl bg-slate-800/40 p-2 sm:p-4 border border-b-0 border-slate-700/50 backdrop-blur-md mx-4 sm:mx-12 shadow-[0_8px_40px_rgb(0,0,0,0.3)]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-2.5 rounded-full bg-[#0F172A]"></div>
                <div className="rounded-lg overflow-hidden border border-slate-700/50 aspect-[16/10] bg-[#0F172A] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-slate-800 flex flex-col">
                     <div className="h-12 border-b border-slate-800 flex items-center px-4 gap-4">
                        <div className="w-8 h-8 rounded bg-brand/20"></div>
                        <div className="h-4 w-24 bg-slate-700 rounded"></div>
                        <div className="ml-auto flex gap-2">
                          <div className="h-4 w-12 bg-slate-800 rounded"></div>
                          <div className="h-4 w-12 bg-slate-800 rounded"></div>
                        </div>
                     </div>
                     <div className="flex-1 p-8 text-left">
                       <div className="h-12 w-3/4 max-w-lg bg-slate-700 rounded mb-6"></div>
                       <div className="h-4 w-2/3 max-w-md bg-slate-800 rounded mb-10"></div>
                       <div className="grid grid-cols-3 gap-6">
                         <div className="h-32 bg-slate-800/50 rounded-xl border border-slate-700/50"></div>
                         <div className="h-32 bg-slate-800/50 rounded-xl border border-slate-700/50"></div>
                         <div className="h-32 bg-slate-800/50 rounded-xl border border-slate-700/50"></div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
              <div className="h-4 bg-slate-700 rounded-b-xl max-w-5xl w-full mx-auto shadow-2xl relative">
                 <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-1 bg-slate-600 rounded-b-md"></div>
              </div>
            </HeroFadeIn>
          </div>
        </section>

        {/* 2. TRUST / SOCIAL PROOF */}
        <section className="py-16 border-y border-slate-800/60 bg-slate-900/30">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-[#FBBF24] text-[#FBBF24]" />)}
                </div>
                <p className="font-display font-bold text-white md:text-lg mb-10 tracking-tight">
                  Bereits zahlreiche Unternehmen digital erfolgreicher gemacht.
                </p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-14">
                   {[
                     { icon: Zap, label: "Schnell umgesetzt" },
                     { icon: Smartphone, label: "Mobil optimiert" },
                     { icon: ShieldCheck, label: "DSGVO-konform" },
                     { icon: Search, label: "SEO vorbereitet" }
                   ].map((Item, i) => (
                     <div key={i} className="flex items-center gap-3 text-slate-300">
                       <Item.icon className="h-6 w-6 text-brand" />
                       <span className="font-medium">{Item.label}</span>
                     </div>
                   ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. PROBLEM SECTION & 4. LÖSUNG SECTION */}
        <section id="vorteile" className="py-24 md:py-32 relative">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* Problem */}
              <FadeIn className="bg-slate-800/20 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 text-red-500">
                  <X className="h-8 w-8" />
                </div>
                <h2 className="font-display text-3xl font-bold text-white mb-6 leading-tight">
                  Warum verlieren viele Unternehmen täglich Kunden?
                </h2>
                <div className="space-y-4 mb-8">
                  {[
                    "Keine professionelle Website",
                    "Veraltetes Design",
                    "Nicht mobil optimiert",
                    "Schlechte Google Auffindbarkeit"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3 text-slate-300">
                      <X className="h-6 w-6 text-red-400 shrink-0" />
                      <span className="font-medium text-lg text-slate-300">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-[#0F172A] rounded-xl border border-slate-700/50">
                  <p className="text-slate-400 font-medium">
                    Die meisten Kunden entscheiden innerhalb weniger Sekunden online, ob sie dir vertrauen.
                  </p>
                </div>
              </FadeIn>

              {/* Solution */}
              <FadeIn delay={0.2} className="relative">
                <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand/20 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-8 text-brand">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                    Wir lösen dieses Problem für dich.
                  </h2>
                  <div className="space-y-5">
                    {[
                      "Moderne Website",
                      "Mobil optimiert",
                      "Schnelle Ladezeiten",
                      "Kontakt & WhatsApp Integration",
                      "SEO Grundlagen"
                    ].map((text, i) => (
                      <div key={i} className="flex gap-4 items-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-4 rounded-2xl hover:scale-[1.02] transition-transform duration-300 shadow-sm">
                        <div className="bg-brand/20 p-2 rounded-lg text-brand shrink-0">
                          <Check className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-lg text-white">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* 5. LEISTUNGEN */}
        <section id="pakete" className="py-24 bg-slate-900/30 border-t border-slate-800/60">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Transparente Pakete
              </h2>
              <p className="text-lg text-slate-400">
                Weniger Technik, mehr Kunden. Wähle das Layout, das am besten zu deinen Zielen passt.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              {/* Starter */}
              <FadeIn delay={0.1} className="bg-slate-800/20 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.03] transition-transform duration-300">
                <h3 className="font-display text-2xl font-bold text-slate-200 mb-2">Starter</h3>
                <div className="flex items-end gap-1 mb-8">
                  <span className="font-display text-4xl font-bold text-white">149€</span>
                </div>
                <ul className="space-y-5 mb-8">
                  {['Firmenwebsite', 'Landingpage', 'Kontaktformular'].map((text, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 font-medium">
                      <Check className="h-6 w-6 text-brand shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              {/* Business (HIGHLIGHT) */}
              <FadeIn delay={0.2} className="relative z-10 bg-slate-800/40 backdrop-blur-md border border-brand rounded-3xl p-8 py-12 shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] hover:scale-[1.03] transition-all duration-300 md:-my-4">
                <div className="absolute top-0 right-8 -translate-y-1/2 font-display bg-gradient-to-r from-brand to-brand-light text-white font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Am beliebtesten
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Business</h3>
                <div className="flex items-end gap-1 mb-8">
                  <span className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">299€</span>
                </div>
                <ul className="space-y-5 mb-8">
                  {['Alles aus Starter', 'Terminbuchung', 'WhatsApp Integration', 'SEO Basics'].map((text, i) => (
                    <li key={i} className="flex gap-3 text-white font-medium">
                      <Check className="h-6 w-6 text-brand-light shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <a href="#kontakt" className="block text-center w-full font-display font-semibold bg-gradient-to-r from-brand to-brand-light text-white py-4 rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-shadow">
                  Jetzt starten
                </a>
              </FadeIn>

              {/* Premium */}
              <FadeIn delay={0.3} className="bg-slate-800/20 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.03] transition-transform duration-300">
                <h3 className="font-display text-2xl font-bold text-slate-200 mb-2">Premium</h3>
                <div className="flex items-end gap-1 mb-8">
                  <span className="font-display text-4xl font-bold text-white">499€</span>
                </div>
                <ul className="space-y-5 mb-8">
                  {['Alles aus Business', 'Online Shop', 'Individuelles Design', 'Erweiterte Funktionen'].map((text, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 font-medium">
                      <Check className="h-6 w-6 text-brand shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* 6. ABLAUF */}
        <section id="ablauf" className="py-24 border-t border-slate-800/60">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                So einfach geht es
              </h2>
              <p className="text-lg text-slate-400">
                Wir nehmen dir die Arbeit ab.
              </p>
            </FadeIn>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 relative">
               <div className="hidden md:block absolute top-[36px] left-[15%] right-[15%] h-0.5 bg-slate-800"></div>
               {[
                 { step: "1", title: "Gespräch", desc: "Kostenloses Erstgespräch" },
                 { step: "2", title: "Planung", desc: "Ziele & Konzept" },
                 { step: "3", title: "Umsetzung", desc: "Design & Code" },
                 { step: "4", title: "Live", desc: "Website online" }
               ].map((item, i) => (
                 <FadeIn key={i} delay={i*0.1} className="relative z-10 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#0F172A] border-2 border-brand rounded-full flex items-center justify-center font-display font-bold text-2xl text-brand mb-6 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      {item.step}
                    </div>
                    <h3 className="font-display font-bold text-white text-xl mb-3">{item.title}</h3>
                    <p className="text-slate-400 font-medium">{item.desc}</p>
                 </FadeIn>
               ))}
            </div>
          </div>
        </section>

        {/* 7. ERGEBNIS / VORHER-NACHHER */}
        <section className="py-24 bg-slate-800/10 border-y border-slate-800/60 overflow-hidden">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <FadeIn>
                 <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                   So kann dein Unternehmen aussehen
                 </h2>
                 <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                    Der erste Eindruck entscheidet. Eine moderne Website verwandelt anonyme Besucher in kaufbereite Kunden.
                 </p>
                 <ul className="space-y-5">
                   {[
                     "Moderner Auftritt, der sich abhebt",
                     "Mehr Vertrauen durch professionelles Design",
                     "Mehr Anfragen & automatisierte Leads"
                   ].map((text, i) => (
                    <li key={i} className="flex gap-4 p-5 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 items-center">
                      <CheckCircle2 className="text-success h-7 w-7 shrink-0" />
                      <span className="font-medium text-lg text-slate-100">{text}</span>
                    </li>
                   ))}
                 </ul>
               </FadeIn>
               
               <FadeIn delay={0.2} className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent blur-3xl -z-10 rounded-full"></div>
                 <div className="relative p-2 rounded-3xl bg-gradient-to-b from-slate-700 to-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="bg-[#0F172A] rounded-2xl overflow-hidden aspect-[4/3] border border-slate-800 relative group">
                       
                       <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-4xl text-slate-800 uppercase tracking-widest z-0 bg-slate-900">
                         Vorher
                       </div>
                       
                       <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-[#0F172A] transition-transform duration-[1.2s] ease-in-out translate-x-full group-hover:translate-x-0 z-10 flex">
                         <div className="flex-1 p-8 flex flex-col relative">
                           <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full"></div>
                           <div className="flex justify-between items-center mb-8">
                             <div className="h-8 w-32 bg-white/20 rounded-md"></div>
                             <div className="flex gap-3">
                               <div className="h-2 w-10 bg-white/10 rounded-full"></div>
                               <div className="h-2 w-10 bg-white/10 rounded-full"></div>
                             </div>
                           </div>
                           <div className="flex-1 flex flex-col justify-center">
                              <div className="h-8 w-3/4 bg-brand-light/20 rounded-md mb-6"></div>
                              <div className="h-4 w-1/2 bg-white/10 rounded-md mb-10"></div>
                              <div className="h-12 w-40 bg-gradient-to-r from-brand to-brand-light rounded-xl opacity-90"></div>
                           </div>
                         </div>
                       </div>
                       <div className="absolute bottom-6 left-6 right-6 flex justify-between z-20 pointer-events-none">
                         <span className="bg-slate-800/90 backdrop-blur-md text-sm font-semibold px-4 py-2 rounded-lg text-red-400 opacity-100 group-hover:opacity-0 transition-opacity border border-slate-700">Vorher: Veraltet</span>
                         <span className="bg-brand/90 backdrop-blur-md text-sm font-semibold px-4 py-2 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity absolute right-0 border border-brand-light/30">Nachher: Modern</span>
                       </div>
                    </div>
                 </div>
               </FadeIn>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                FAQ
              </h2>
            </FadeIn>
            
            <div className="space-y-4">
              {[
                {q: "Wie lange dauert die Erstellung?", a: "In der Regel ist deine neue Website innerhalb von 3–7 Tagen online und einsatzbereit."},
                {q: "Brauche ich eigenes Hosting?", a: "Nein, nicht zwingend. Wir helfen dir gerne beim Setup oder übernehmen das Hosting für dich."},
                {q: "Kann ich später noch Änderungen machen?", a: "Ja, absolut. Du hast Zugriff auf deine Website und kannst Inhalte jederzeit selbst anpassen."},
                {q: "Ist Suchmaschinenoptimierung (SEO) dabei?", a: "Ja, alle unsere Pakete beinhalten eine SEO-Grundoptimierung, damit du bei Google besser gefunden wirst."}
              ].map((faq, i) => (
                <FadeIn key={i} delay={i*0.1}>
                  <details className="group bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-2xl open:bg-slate-800/40 transition-colors">
                    <summary className="flex cursor-pointer list-none items-center justify-between p-6 md:p-8 font-display font-semibold text-lg text-slate-100 outline-none">
                      {faq.q}
                      <span className="transition-transform duration-300 group-open:rotate-180 bg-slate-800 p-2 rounded-full">
                        <ChevronDown className="h-5 w-5 text-slate-300" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-slate-400 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 9. KONTAKT SECTION */}
        <section id="kontakt" className="py-32 bg-[#0F172A] border-t border-slate-800/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/5 pointer-events-none"></div>
          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              
              <FadeIn>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
                  Starte jetzt dein Projekt
                </h2>
                <p className="text-lg text-slate-300 mb-12">
                  Vereinbare ein kostenloses und unverbindliches Gespräch. Wir analysieren dein Potenzial und zeigen dir, wie du mehr Kunden gewinnst.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 text-slate-300 group">
                     <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700 group-hover:scale-105 transition-transform">
                       <Mail className="h-6 w-6 text-brand" />
                     </div>
                     <div>
                       <div className="text-sm text-slate-500 font-medium mb-1">Schreib uns</div>
                       <div className="font-semibold text-lg text-white">hallo@futuremedia.network</div>
                     </div>
                  </div>
                   <div className="flex items-center gap-6 text-slate-300 group">
                     <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700 group-hover:scale-105 transition-transform">
                       <Phone className="h-6 w-6 text-brand" />
                     </div>
                     <div>
                       <div className="text-sm text-slate-500 font-medium mb-1">Ruf uns an</div>
                       <div className="font-semibold text-lg text-white">+49 123 456 789</div>
                     </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-2xl">
                 <form className="space-y-5 text-left">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Name</label>
                      <input type="text" className="w-full bg-[#0F172A]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors" placeholder="Dein Name" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300">Telefon</label>
                        <input type="tel" className="w-full bg-[#0F172A]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors" placeholder="+49 ..." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300">E-Mail</label>
                        <input type="email" className="w-full bg-[#0F172A]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors" placeholder="mail@beispiel.de" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Nachricht (optional)</label>
                      <textarea rows={4} className="w-full bg-[#0F172A]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none" placeholder="Erzähl uns kurz von deinem Projekt..." />
                    </div>
                    <button type="button" className="w-full font-display bg-gradient-to-r from-brand to-brand-light text-white font-semibold py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all hover:scale-[1.02] mt-6 text-lg">
                      Kostenlose Beratung anfragen
                    </button>
                    <p className="text-sm text-center text-slate-500 mt-4 font-medium">
                      Wir melden uns innerhalb von 24 Stunden zurück.
                    </p>
                 </form>
              </FadeIn>

            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <footer className="border-t border-slate-800/60 py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-6xl px-6">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-white mb-4 md:mb-0">
                <Zap className="h-7 w-7 text-brand" />
                <span>FutureMedia <span className="text-brand">Network</span></span>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 font-medium">
                <a href="#" className="hover:text-white transition-colors">Impressum</a>
                <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
                <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
              </div>
           </div>
           <div className="mt-12 pt-8 border-t border-slate-800/60 text-center flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
             <p>© {new Date().getFullYear()} FutureMedia Network. Alle Rechte vorbehalten.</p>
             <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:hallo@futuremedia.network" className="hover:text-slate-300 transition-colors">hallo@futuremedia.network</a>
                <span className="hidden sm:inline">|</span>
                <a href="tel:+49123456789" className="hover:text-slate-300 transition-colors">+49 123 456 789</a>
             </div>
           </div>
        </div>
      </footer>

      {/* FIX: WhatsApp Button */}
      <a href="https://wa.me/49123456789" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group duration-300">
        <MessageCircle className="h-8 w-8 fill-current" />
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl border border-slate-700 translate-x-4 group-hover:translate-x-0">
          Jetzt schreiben
        </span>
      </a>
    </div>
  );
}

