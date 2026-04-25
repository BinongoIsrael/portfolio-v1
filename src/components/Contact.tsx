import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const lastSubmission = localStorage.getItem('last_submission_time');
    if (lastSubmission) {
      const elapsed = Date.now() - parseInt(lastSubmission);
      const remaining = Math.max(0, Math.ceil((5 * 60 * 1000 - elapsed) / 1000));
      if (remaining > 0) {
        setTimeLeft(remaining);
      }
    }
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timeLeft > 0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name.toLowerCase()]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading' || timeLeft > 0) return;

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Israel',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      localStorage.setItem('last_submission_time', Date.now().toString());
      setTimeLeft(5 * 60);
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
    } catch (error) {
      console.error('Email transmission failed:', error);
      setStatus('error');
    }
  };

  return (
    <section className="px-margin py-xl bg-surface-container" id="contact">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <div>
          <span className="text-label-caps text-primary mb-xs block">ESTABLISH CONNECTION</span>
          <h2 className="font-h2 text-h2 mb-md">Let's Build Something Meaningful</h2>
          <p className="font-body-lg text-on-surface-variant mb-lg">
           Currently seeking collaborations on projects and opportunities. I'm always looking to build cool things and work with others, so if you have an idea or a project in mind, let’s connect.
          </p>
          <div className="space-y-sm">
            <a 
              href="mailto:israelbinongo9@gmail.com" 
              className="flex items-center gap-md p-sm border border-outline-variant hover:bg-surface-container-high transition-colors group"
            >
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" data-icon="alternate_email">alternate_email</span>
              <span className="font-body-md">israelbinongo9@gmail.com</span>
            </a>
             <a 
              href="tel:09306779112"
              className="flex items-center gap-md p-sm border border-outline-variant hover:bg-surface-container-high transition-colors group"
            >
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" data-icon="call">call</span>
              <span className="font-body-md">09306779112</span>
            </a>
            <div className="flex items-center gap-md p-sm border border-outline-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
              <span className="font-body-md">Bontoc, Southern Leyte, Philippines</span>
            </div>
          </div>
        </div>
        {/* Terminal Contact Form */}
        <div className="dark">
          <div className="bg-[#120d0c] rounded-lg overflow-hidden border border-[#3a3332] terminal-shadow font-mono text-sm !text-[#ece0dd]">
            <div className="bg-[#241e1d] px-md py-sm flex items-center justify-between border-b border-[#3a3332]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-[#d7c2bd] opacity-50">contact_me.sh</span>
            </div>
            <form onSubmit={handleSubmit} className="p-md space-y-md">
              <div className="flex gap-md">
                <span className="text-[#afeee0]">$</span>
                <span className="text-[#ece0dd]">whoami</span>
              </div>
              <div className="text-[#d7c2bd]">
                # Initialize contact sequence...
              </div>
              <div className="space-y-sm">
                <div className="flex gap-4 items-center">
                  <label htmlFor="name" className="text-[#ffb4a4] shrink-0">NAME="</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent border-none focus:ring-0 text-[#ece0dd] p-0 w-full placeholder:text-[#ece0dd]/30"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                  <span className="text-[#ffb4a4]">"</span>
                </div>
                <div className="flex gap-4 items-center">
                  <label htmlFor="email" className="text-[#ffb4a4] shrink-0">EMAIL="</label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-none focus:ring-0 text-[#ece0dd] p-0 w-full placeholder:text-[#ece0dd]/30"
                    placeholder="john@domain.com"
                    type="email"
                    required
                  />
                  <span className="text-[#ffb4a4]">"</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <label htmlFor="message" className="text-[#ffb4a4] shrink-0">MESSAGE="</label>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-transparent border-none focus:ring-0 text-[#ece0dd] p-0 w-full placeholder:text-[#ece0dd]/30 resize-none"
                    placeholder="Hello Israel, I would like to discuss..."
                    rows={3}
                    required
                  ></textarea>
                  <span className="text-[#ffb4a4]">"</span>
                </div>
              </div>

              {status === 'success' && (
                <div className="text-[#27c93f]">
                  # Transmission successful. Connection established.
                </div>
              )}
              {status === 'error' && (
                <div className="text-[#ff5f56]">
                  # ERROR: Transmission failed. Please try again or use direct email.
                </div>
              )}
              {timeLeft > 0 && (
                <div className="text-[#ffbd2e]">
                  # RATE_LIMIT: System cooling down. {Math.floor(timeLeft / 60)}m {timeLeft % 60}s remaining.
                </div>
              )}

              <div className="pt-md">
                <button
                  type="submit"
                  disabled={status === 'loading' || timeLeft > 0}
                  className="bg-[#ffb4a4] text-[#360e06] px-md py-xs flex items-center gap-sm hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="animate-spin material-symbols-outlined text-[18px]" data-icon="sync">sync</span>
                      <span>./executing_transmission.sh...</span>
                    </>
                  ) : timeLeft > 0 ? (
                    <>
                      <span className="material-symbols-outlined text-[18px]" data-icon="timer">timer</span>
                      <span>WAIT: {timeLeft}s</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]" data-icon="send">send</span>
                      <span>./execute_send.sh</span>
                    </>
                  )}
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
