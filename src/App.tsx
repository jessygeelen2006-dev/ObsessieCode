import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, Heart, Star, ArrowRight, BookOpen, Lock, 
  ShieldCheck, Clock, AlertTriangle, ChevronDown, ChevronUp,
  Menu, X
} from "lucide-react";

const PAYMENT_LINK = "https://www.paypro.nl/product/ObsessieCode/126692";
const LOGO_URL = "https://i.ibb.co/SD0BsCwc/image-removebg-preview.png";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-serif font-bold text-stone-900 text-lg">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-rose-500" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-stone-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      
      {/* Urgency Bar */}
      <div className="bg-rose-600 text-white text-center py-2 px-4 text-sm font-bold tracking-wide sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-center gap-2 animate-pulse">
          <Clock className="w-4 h-4" />
          <span>TIJDELIJKE AANBIEDING: Korting verloopt in {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-stone-100 py-4 relative">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-center">
          <div className="w-48">
             <img src={LOGO_URL} alt="ObsessieCode" className="w-full h-auto object-contain mx-auto" />
          </div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:block">
            <button 
              onClick={scrollToPricing}
              className="bg-stone-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-stone-800 transition-all shadow-md hover:shadow-lg"
            >
              Direct Toegang
            </button>
          </div>
        </div>
      </nav>

      {/* PAS Framework: PROBLEM (Hero) */}
      <section className="pt-12 pb-12 px-6 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
            <AlertTriangle className="w-4 h-4" />
            Herkenbaar?
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 text-stone-900">
            Eerst appte hij non-stop.<br/>
            <span className="text-rose-600">Nu is het stil.</span>
          </h1>
          
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            Hij zegt dat hij "druk" is. Hij twijfelt. En jij? Jij voelt die knoop in je maag groeien.
          </p>
        </div>
      </section>

      {/* PAS Framework: AGITATION */}
      <section className="pb-16 px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
          <div className="prose prose-lg prose-stone mx-auto space-y-6">
            <p className="font-bold text-lg">Lieve vriendin,</p>
            
            <p>Wees eens eerlijk. Hoe vaak heb je vandaag al op je telefoon gekeken?</p>
            
            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <span>Je ziet hem "Online", maar hij opent je bericht niet.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💭</span>
                <span>Je analyseert elk woord dat hij zegt (of juist niet zegt).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💔</span>
                <span>Je bent bang dat je hem kwijtraakt als je niet <em>nu</em> iets doet.</span>
              </li>
            </ul>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-4 italic text-stone-800">
              "Doe ik te veel mijn best? Is er iemand anders? Ben ik niet goed genoeg?"
            </div>

            <p>
              Je probeert het te fixen. Je stuurt een lief berichtje. Je toont begrip. Je wacht.
              <br/><br/>
              <strong>Maar hoe meer jij naar hem toe beweegt, hoe harder hij wegrent.</strong>
            </p>
            
            <p className="font-bold text-rose-600">Stop. Adem in. Het is niet jouw schuld.</p>
          </div>
        </div>
      </section>

      {/* PAS Framework: SOLUTION */}
      <section className="py-16 px-6 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Draai de rollen om met de <span className="text-rose-500">ObsessieCode</span>
          </h2>
          
          <p className="text-lg text-stone-300 mb-10 leading-relaxed">
            Je hebt geen nieuwe openingszin nodig. Je hebt een <strong>nieuwe dynamiek</strong> nodig.
            <br/><br/>
            De ObsessieCode leert je precies hoe je zijn biologische <strong>jagersinstinct</strong> weer AAN zet. 
            Zodat hij niet meer wegrent, maar bang wordt om <em>jou</em> te verliezen.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="font-bold text-rose-400 mb-2">❌ Oude Jij</div>
              <p className="text-sm text-stone-400">Wacht op zijn berichtjes, twijfelt aan zichzelf, doet al het werk.</p>
            </div>
            <div className="bg-rose-600/20 p-6 rounded-xl border border-rose-500/50">
              <div className="font-bold text-rose-400 mb-2">✅ ObsessieCode Jij</div>
              <p className="text-sm text-stone-200">Is de prijs, straalt rust uit, laat hém moeite doen.</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md bg-rose-600 text-white px-8 py-5 rounded-xl text-xl font-bold hover:bg-rose-700 transition-all shadow-[0_0_30px_-5px_rgba(225,29,72,0.6)] flex items-center justify-center gap-2 animate-pulse"
            >
              Ja, ik wil de controle terug
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Direct toegang • PDF Download</p>
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="py-20 px-6 bg-rose-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Zij pasten de code toe...
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Lisa, 24",
                text: "Ik dacht dat ik hem kwijt was. Na hoofdstuk 3 stuurde ik hem één berichtje. Hij belde me binnen 5 minuten huilend op dat hij me miste.",
                stars: 5
              },
              {
                name: "Michelle, 31",
                text: "Dit is bizar. Mannen kijken anders naar me. Ik word letterlijk op straat aangesproken. Mijn ex smeekt me om hem terug te nemen.",
                stars: 5
              },
              {
                name: "Sanne, 29",
                text: "Geen spelletjes, maar pure psychologie. Ik voel me eindelijk weer krachtig in de liefde. Bedankt ObsessieCode!",
                stars: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <p className="font-bold text-stone-900 text-sm">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto border-2 border-dashed border-stone-200 rounded-3xl p-8 md:p-12 text-center">
          <ShieldCheck className="w-16 h-16 text-stone-900 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">100% Niet-Goed-Geld-Terug Garantie</h2>
          <p className="text-stone-600 mb-8">
            Probeer de ObsessieCode 60 dagen lang uit. Als je niet merkt dat mannen meer aandacht voor je hebben, meer moeite doen en je aantrekkelijker vinden... dan krijg je elke cent terug. Geen vragen.
          </p>
          <div className="font-serif font-bold text-lg text-stone-900">
            Je loopt geen enkel risico.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Veelgestelde Vragen</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 md:p-8">
            <FAQItem 
              question="Is dit een fysiek boek?" 
              answer="Nee, het is een digitaal E-book (PDF). Je ontvangt het direct na betaling in je mailbox, zodat je meteen kunt beginnen met lezen op je telefoon, tablet of laptop."
            />
            <FAQItem 
              question="Werkt dit ook als ik al een relatie heb?" 
              answer="Absoluut. De principes werken om de passie terug te brengen in een lange relatie, of om een nieuwe vlam geobsedeerd te maken. Het gaat om aantrekkingskracht."
            />
            <FAQItem 
              question="Is het veilig om te betalen?" 
              answer="Ja, we gebruiken PayPro, een van de veiligste betaalplatforms van Nederland. Je gegevens zijn 100% veilig."
            />
            <FAQItem 
              question="Wat als het niet werkt voor mij?" 
              answer="Dan stuur je ons een mailtje en krijg je je geld terug. Zo simpel is het."
            />
          </div>
        </div>
      </section>

      {/* Final Sticky CTA Area */}
      <section id="pricing" className="py-24 px-6 text-center bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">Klaar om onweerstaanbaar te worden?</h2>
          
          <div className="bg-white text-stone-900 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl shadow-rose-900/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 via-rose-600 to-rose-400"></div>
             
             <div className="mb-8">
               <span className="text-stone-500 text-lg line-through mr-4">€97.00</span>
               <span className="text-5xl font-bold text-rose-600">€57.00</span>
             </div>

             <ul className="text-left space-y-4 mb-10 max-w-xs mx-auto">
               <li className="flex items-center gap-3">
                 <Check className="w-5 h-5 text-green-500 shrink-0" />
                 <span className="font-medium">ObsessieCode E-book</span>
               </li>
               <li className="flex items-center gap-3">
                 <Check className="w-5 h-5 text-green-500 shrink-0" />
                 <span className="font-medium">Direct toegang</span>
               </li>
               <li className="flex items-center gap-3">
                 <Check className="w-5 h-5 text-green-500 shrink-0" />
                 <span className="font-medium">Levenslange updates</span>
               </li>
               <li className="flex items-center gap-3">
                 <Check className="w-5 h-5 text-green-500 shrink-0" />
                 <span className="font-medium">60 Dagen garantie</span>
               </li>
             </ul>

             <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-rose-600 text-white py-5 rounded-xl text-xl font-bold hover:bg-rose-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Download Nu & Start Direct
            </a>
            <p className="mt-4 text-xs text-stone-400">Beveiligde betaling via iDeal, Bancontact & meer.</p>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-600 py-12 text-center text-sm border-t border-stone-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-32 mx-auto mb-8 opacity-50 grayscale">
             <img src={LOGO_URL} alt="ObsessieCode" />
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-stone-400">Privacybeleid</a>
            <a href="#" className="hover:text-stone-400">Algemene Voorwaarden</a>
            <a href="#" className="hover:text-stone-400">Contact</a>
          </div>
          <p>&copy; {new Date().getFullYear()} ObsessieCode. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}


