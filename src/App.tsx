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

      {/* Hero Section - Text Based Sales Letter */}
      <section className="pt-12 pb-16 px-6 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
            <AlertTriangle className="w-4 h-4" />
            Waarschuwing: Controversiële Methode
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 text-stone-900">
            Stop met jagen. <br/>
            <span className="text-rose-600">Laat hém zweten.</span>
          </h1>
          
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            De exacte psychologische blauwdruk om onweerstaanbaar te worden. Zelfs als hij nu afstandelijk is.
          </p>

          {/* Scannable Bullet Points instead of Video */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-stone-100 mb-10 text-left max-w-xl mx-auto">
            <h3 className="font-bold text-lg mb-4 text-stone-900 border-b border-stone-100 pb-2">Herken je dit?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-5 min-h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">✕</div>
                <span className="text-stone-700 font-medium">Hij reageert traag (of helemaal niet).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-5 min-h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">✕</div>
                <span className="text-stone-700 font-medium">Jij initieert altijd het contact.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-5 min-h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">✕</div>
                <span className="text-stone-700 font-medium">Hij zegt dat hij "niet klaar is voor een relatie".</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-stone-100 text-center">
              <p className="font-serif italic text-rose-600 text-lg">Het is tijd om de rollen om te draaien.</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md bg-rose-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-rose-700 transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Download de ObsessieCode
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-2 text-xs text-stone-400 font-medium uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Niet goed? Geld terug.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <div className="bg-stone-50 border-y border-stone-100 py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-stone-400 text-xs font-bold uppercase tracking-widest mb-6">Al 2.500+ vrouwen gingen je voor</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Trust Badges / Logos Placeholder */}
             {["Cosmopolitan", "Vogue", "Elle", "Glamour"].map((brand) => (
               <span key={brand} className="font-serif text-2xl font-bold text-stone-800">{brand}</span>
             ))}
          </div>
        </div>
      </div>

      {/* The "Pain" Section - Direct Response Copy */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            Waarom negeert hij je?
          </h2>
          
          <div className="prose prose-lg prose-stone mx-auto space-y-6">
            <p className="font-bold">Lieve vriendin,</p>
            
            <p>Het is frustrerend.</p>
            
            <p>Jullie hadden een geweldige connectie. De chemie was er. En toen... <strong>stilte.</strong></p>
            
            <ul className="list-none pl-0 space-y-2">
              <li>❌ Hij appt minder.</li>
              <li>❌ Hij is "druk".</li>
              <li>❌ Hij twijfelt.</li>
            </ul>

            <p>Je vraagt je af: <em>"Wat heb ik verkeerd gedaan?"</em></p>
            
            <div className="bg-rose-50 border-l-4 border-rose-500 p-4 font-medium text-stone-800">
              Het antwoord: Je hebt zijn <strong>jagersinstinct</strong> uitgezet.
            </div>

            <p>Mannen willen jagen. Als jij te makkelijk bent, verliest hij interesse. Niet omdat hij je niet leuk vindt. Maar omdat de <strong>uitdaging</strong> weg is.</p>
            
            <p className="font-bold">Maar wat als je dit kon omdraaien?</p>
          </div>
        </div>
      </section>

      {/* The Solution - Benefits Stack */}
      <section className="py-20 bg-stone-900 text-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ontdek de <span className="text-rose-500">ObsessieCode</span></h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Dit is geen dating advies. Dit is psychologische oorlogsvoering (maar dan liefdevol).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Het 'Mona Lisa' Effect",
                  desc: "Hoe je mysterieus blijft zodat hij constant aan je moet denken (zelfs als hij met zijn vrienden is)."
                },
                {
                  title: "De 'Pull-Back' Techniek",
                  desc: "Wat je precies moet doen als hij afstand neemt, waardoor hij in paniek raakt en je direct terug wil."
                },
                {
                  title: "Tekstberichten die Verslaven",
                  desc: "3 specifieke appjes die zijn dopamine-receptoren triggeren. Hij zal verslaafd raken aan jouw naam op zijn scherm."
                },
                {
                  title: "Van 'Scharrel' naar 'Soulmate'",
                  desc: "De exacte blauwdruk om hem te laten smeken om een relatie, zonder dat jij er ooit over hoeft te beginnen."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center shrink-0 font-bold text-white shadow-lg shadow-rose-900/50">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-rose-100">{item.title}</h3>
                    <p className="text-stone-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                BESTSELLER
              </div>
              <div className="flex flex-col h-full justify-center items-center text-center">
                <BookOpen className="w-24 h-24 text-rose-500 mb-6 opacity-80" />
                <h3 className="font-serif text-3xl mb-2">Het E-book</h3>
                <p className="text-stone-400 mb-8">Directe download (PDF)</p>
                <div className="w-full bg-stone-800 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2 text-sm text-stone-400">
                    <span>Normale prijs</span>
                    <span className="line-through">€47.00</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold text-white">
                    <span>Vandaag</span>
                    <span className="text-rose-400">€27.00</span>
                  </div>
                </div>
                <a
                  href={PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-rose-600 text-white py-4 rounded-lg font-bold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-900/50"
                >
                  Direct Toegang Krijgen
                </a>
              </div>
            </div>
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
               <span className="text-stone-500 text-lg line-through mr-4">€47.00</span>
               <span className="text-5xl font-bold text-rose-600">€27.00</span>
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


