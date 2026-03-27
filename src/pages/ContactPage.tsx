import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6 animate-in fade-in duration-700">
      
    
      <div className="text-center mb-24">
        <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-none">
          Get in <span className="text-blue-600">Touch</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Have a question about a product, shipping, or partnerships? Our team is here to help you. Reach out via form, email, or visit our office.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
            <Mail className="text-blue-600 w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Email Us</h3>
          <p className="text-gray-500 mb-6 text-sm">For general inquiries and support.</p>
          <a href="mailto:support@premiumstore.io" className="font-bold text-blue-600 hover:text-blue-700 text-lg">
            support@premiumstore.io
          </a>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
            <Phone className="text-green-600 w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Call Us</h3>
          <p className="text-gray-500 mb-6 text-sm">Mon-Fri, 9am-6pm (GMT+2).</p>
          <a href="tel:+1234567890" className="font-bold text-gray-900 hover:text-blue-600 text-lg">
            +1 (234) 567-890
          </a>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
            <MapPin className="text-purple-600 w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Visit Us</h3>
          <p className="text-gray-500 mb-6 text-sm">Our main office location.</p>
          <p className="font-bold text-gray-900 text-lg">
            123 Innovation Drive, Silicon Valley, CA 94025
          </p>
        </div>
      </div>

      {/* 3. Form & Map Section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start">
        {/* Contact Form  */}
        <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-black mb-10 text-gray-900">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all" />
              <input type="email" placeholder="Your Email" className="p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all" />
            </div>
            <textarea placeholder="Your Message..." rows={6} className="w-full p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all"></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-3">
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Map Placeholder  */}
        <div className="w-full aspect-square bg-gray-50 rounded-[3rem] border border-gray-200 shadow-inner flex flex-col items-center justify-center group overflow-hidden relative">
          <MapPin className="text-gray-200 w-32 h-32 group-hover:scale-110 group-hover:text-blue-100 transition-all duration-500" />
          <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
            <p className="font-bold text-gray-900">Premium Store HQ</p>
            <p className="text-sm text-gray-500">123 Innovation Drive, CA</p>
          </div>
        </div>
      </div>

    </div>
  );
};