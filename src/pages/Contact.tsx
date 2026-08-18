import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-zinc-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl text-zinc-900 mb-4">Contact Us</h1>
          <p className="text-zinc-500 max-w-xl mx-auto">
            We are here to assist you with any inquiries regarding our fragrances, your orders, or general questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white border border-zinc-200 p-8 sm:p-12">
            <h2 className="font-serif text-2xl mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">First Name</label>
                  <input type="text" className="w-full border border-zinc-200 p-4 text-sm focus:outline-none focus:border-zinc-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Last Name</label>
                  <input type="text" className="w-full border border-zinc-200 p-4 text-sm focus:outline-none focus:border-zinc-900 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                <input type="email" className="w-full border border-zinc-200 p-4 text-sm focus:outline-none focus:border-zinc-900 transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Message</label>
                <textarea rows={6} className="w-full border border-zinc-200 p-4 text-sm focus:outline-none focus:border-zinc-900 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center flex-shrink-0 rounded-full">
                <Mail className="w-5 h-5 text-zinc-900" />
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 uppercase tracking-widest text-sm mb-2">Email</h3>
                <p className="text-zinc-500 mb-1">For general inquiries:</p>
                <a href="mailto:concierge@auralumina.com" className="text-zinc-900 border-b border-zinc-900 pb-0.5">concierge@auralumina.com</a>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center flex-shrink-0 rounded-full">
                <Phone className="w-5 h-5 text-zinc-900" />
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 uppercase tracking-widest text-sm mb-2">Phone</h3>
                <p className="text-zinc-500 mb-1">Mon-Fri, 9am - 6pm EST</p>
                <a href="tel:+18005550199" className="text-zinc-900 border-b border-zinc-900 pb-0.5">+1 (800) 555-0199</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center flex-shrink-0 rounded-full">
                <MapPin className="w-5 h-5 text-zinc-900" />
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 uppercase tracking-widest text-sm mb-2">Boutique</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Aura Lumina Flagship<br />
                  123 Luxury Avenue<br />
                  New York, NY 10022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
