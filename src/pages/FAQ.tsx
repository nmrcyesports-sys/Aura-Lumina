import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are your fragrances formulated for men or women?",
      answer: "While we categorize some fragrances to guide our clients, we believe scent is inherently genderless. We encourage you to explore our entire collection and wear the fragrance that resonates most profoundly with your personal chemistry and preference."
    },
    {
      question: "How long do your fragrances last on the skin?",
      answer: "Our fragrances are crafted as pure parfums or high-concentration eau de parfums. Depending on the specific notes and your skin chemistry, you can expect longevity ranging from 8 to 14+ hours. Base notes like oud, vanilla, and musk will linger the longest."
    },
    {
      question: "Do you use natural or synthetic ingredients?",
      answer: "We use a meticulous blend of both. We source the finest rare natural absolutes and essences from around the world. However, we also utilize safe, high-quality synthetic molecules to protect endangered species (like musk deer) and to create innovative, stable accords that cannot be extracted from nature."
    },
    {
      question: "How should I store my perfume?",
      answer: "To preserve the integrity of the fragrance, store your bottle in a cool, dry place away from direct sunlight and extreme temperature fluctuations. A drawer or a cabinet in a temperature-controlled room is ideal. Avoid storing perfume in the bathroom."
    },
    {
      question: "Do you offer samples?",
      answer: "Yes, we offer a Discovery Set which includes five 2ml sample vials of our most iconic scents. This allows you to experience how the fragrances develop on your skin over time before committing to a full-size bottle."
    }
  ];

  return (
    <div className="pt-32 pb-32 min-h-screen bg-zinc-50 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl text-zinc-900 mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-zinc-500 mb-12 text-center">Find answers to common questions about our products and services.</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-zinc-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={cn(
                  "font-medium transition-colors",
                  openIndex === index ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
                )}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-400" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 mt-2">
                      <div className="pt-4">{faq.answer}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
