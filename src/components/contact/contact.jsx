import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLoader, FiCheckCircle, FiArrowUpRight } from 'react-icons/fi';
import SplitLineReveal from '../animations/SplitLineReveal';
import { useMagnetic } from '../../hooks/useMagnetic';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpqryzv';

const FormField = ({ id, name, label, type = 'text', textarea = false, rows }) => {
  const [focused, setFocused] = useState(false);
  const Component = textarea ? 'textarea' : 'input';
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-[11px] font-mono tracking-widest uppercase text-paper/40 mb-2">
        {label}
      </label>
      <Component
        id={id}
        name={name}
        required
        type={textarea ? undefined : type}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent text-paper pb-3 pt-1 text-base sm:text-lg focus:outline-none resize-none rounded-none border-b"
        style={{ borderColor: focused ? 'var(--color-accent)' : 'rgba(243,240,232,0.15)', transition: 'border-color 0.3s ease' }}
      />
    </div>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const email = 'ikhwan.romadon63@sma.belajar.id';
  const submitRef = useMagnetic(8);

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
      const response = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
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
    <section id="contact" className="w-full py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-16 lg:pl-32 lg:pr-16 relative overflow-hidden border-t" style={{ background: 'var(--color-ink)', borderColor: 'rgba(243,240,232,0.1)' }}>
      <span
        className="absolute -left-16 top-10 font-display text-outline select-none pointer-events-none hidden lg:block"
        style={{ fontSize: '32vw', lineHeight: 0.8 }}
        aria-hidden="true"
      >
        06
      </span>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest block mb-5" style={{ color: 'var(--color-accent)' }}>06 / Contact</span>
          <SplitLineReveal
            as="h2"
            className="font-display font-medium tracking-tight text-paper leading-[0.95]"
            style={{ fontSize: 'clamp(2.75rem, 8vw, 7rem)' }}
          >
            Let's build something.
          </SplitLineReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="text-xs font-mono tracking-widest text-paper/40 uppercase block mb-3">(Email)</span>
              <div onClick={handleCopy} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleCopy()} data-cursor-hover className="group cursor-pointer inline-block">
                <p className="text-base sm:text-xl md:text-2xl font-medium font-sans text-paper group-hover:opacity-70 transition-opacity break-all">{email}</p>
                <p className="text-xs font-mono mt-2 flex items-center gap-1.5 transition-colors" style={{ color: copied ? 'var(--color-accent)' : 'rgba(243,240,232,0.4)' }}>
                  {copied ? <span className="font-bold">Copied to clipboard! &#10003;</span> : <span>Click to copy.</span>}
                </p>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono tracking-widest text-paper/40 uppercase block mb-4">(Elsewhere)</span>
              <ul className="space-y-3 font-sans text-sm sm:text-base md:text-lg font-medium">
                {socialLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" data-cursor-hover className="inline-flex items-center gap-1.5 text-paper hover:opacity-60 transition-opacity">
                      <span>{item.name}</span>
                      <FiArrowUpRight className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-9">
              <FormField id="contact-name" name="name" label="Your Name" />
              <FormField id="contact-email" name="email" label="Email Address" type="email" />
              <FormField id="contact-message" name="message" label="Tulis Pesan Kamu" textarea rows={4} />

              <div className="pt-2">
                <button
                  ref={submitRef}
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  data-cursor-hover
                  className="magnetic group relative inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-widest py-4 px-8 transition-colors duration-300 disabled:cursor-not-allowed cursor-pointer"
                  style={{ background: 'var(--color-accent)', color: 'var(--color-ink)' }}
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
