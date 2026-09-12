import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLoader, FiCheckCircle } from 'react-icons/fi';
import SplitLineReveal from '../animations/SplitLineReveal';

// Ganti email, social link, dan FORMSPREE_ENDPOINT sesuai milik kamu.
// Daftar gratis di https://formspree.io untuk dapat endpoint form sendiri.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpqryzv';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const email = 'ikhwan.romadon@email.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 3500);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Ikhwan-stars' },
    { name: 'Instagram', url: 'https://www.instagram.com/wtf.w4n_/' },
    { name: 'WhatsApp', url: 'https://wa.me/6283138010670' },
  ];

  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-24 md:py-32 lg:py-36 px-4 sm:px-6 md:px-12 lg:px-20 bg-black text-white transition-colors duration-300 relative overflow-hidden border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="flex items-center gap-3 mb-3 sm:mb-5">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-gray-400 uppercase">
              // 06 CONTACT
            </span>
            <span className="h-[1px] w-12 bg-gray-800" />
          </div>

          <SplitLineReveal
            as="h2"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal font-sans tracking-tight text-white leading-[1.05]"
          >
            Say hello.
          </SplitLineReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8 sm:gap-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-gray-400 uppercase block mb-2 sm:mb-3">
                (EMAIL)
              </span>
              <div
                onClick={handleCopy}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
                className="group cursor-pointer inline-block"
              >
                <p className="text-base sm:text-xl md:text-2xl font-medium font-sans text-white group-hover:opacity-60 transition-opacity break-all">
                  {email}
                </p>
                <p className="text-xs font-mono text-gray-400 mt-2 flex items-center gap-1.5 transition-colors group-hover:text-white">
                  {copied ? <span className="text-white font-bold">Copied to clipboard! ✓</span> : <span>Click to copy.</span>}
                </p>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono tracking-widest text-gray-400 uppercase block mb-3 sm:mb-4">
                (ELSEWHERE)
              </span>
              <ul className="space-y-2.5 sm:space-y-3 font-sans text-sm sm:text-base md:text-lg font-medium">
                {socialLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white hover:opacity-60 transition-opacity"
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="relative group">
                <label htmlFor="contact-name" className="block text-[11px] sm:text-xs font-mono tracking-widest uppercase text-gray-400 mb-1.5 sm:mb-2">
                  YOUR NAME
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  className="w-full bg-transparent border-b border-gray-800 text-white pb-2.5 sm:pb-3 pt-1 text-sm sm:text-base md:text-lg focus:outline-none focus:border-white transition-colors duration-200 rounded-none"
                />
              </div>

              <div className="relative group">
                <label htmlFor="contact-email" className="block text-[11px] sm:text-xs font-mono tracking-widest uppercase text-gray-400 mb-1.5 sm:mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  className="w-full bg-transparent border-b border-gray-800 text-white pb-2.5 sm:pb-3 pt-1 text-sm sm:text-base md:text-lg focus:outline-none focus:border-white transition-colors duration-200 rounded-none"
                />
              </div>

              <div className="relative group">
                <label htmlFor="contact-message" className="block text-[11px] sm:text-xs font-mono tracking-widest uppercase text-gray-400 mb-1.5 sm:mb-2">
                  TULIS PESAN KAMU
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-800 text-white pb-2.5 sm:pb-3 pt-1 text-sm sm:text-base md:text-lg focus:outline-none focus:border-white transition-colors duration-200 resize-none rounded-none"
                />
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="group relative inline-flex items-center gap-2 bg-white hover:bg-gray-200 text-black font-mono text-xs sm:text-sm uppercase tracking-widest py-3.5 sm:py-4 px-6 sm:px-8 transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <FiLoader className="w-4 h-4 animate-spin" />
                        <span>SENDING...</span>
                      </motion.div>
                    ) : isSuccess ? (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center gap-2 font-bold">
                        <FiCheckCircle className="w-4 h-4" />
                        <span>MESSAGE SENT!</span>
                      </motion.div>
                    ) : (
                      <span>SEND MESSAGE</span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
