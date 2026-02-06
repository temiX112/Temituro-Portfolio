import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Scriptwriting',
    message: ''
  });

  // State to handle the submission status
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Using FormSubmit.co AJAX API to send email without opening mail client
    try {
      const response = await fetch("https://formsubmit.co/ajax/xtemituro173@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          _subject: `New Portfolio Inquiry: ${formData.projectType} from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: 'Scriptwriting', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Ready to increase your retention and grow your channel? Let's discuss your next project.
            </p>

            <div className="space-y-6">
              <ContactItem 
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="xtemituro173@gmail.com"
                href="mailto:xtemituro173@gmail.com"
              />
              <ContactItem 
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
                value="David Temituro"
                href="https://www.linkedin.com/in/david-temituro-919714387"
              />
              <ContactItem 
                icon={<MapPin className="w-5 h-5" />}
                label="Location"
                value="Lagos, Nigeria"
              />
            </div>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Connect on Platforms</h4>
              <div className="flex flex-wrap gap-3">
                <PlatformButton 
                  name="WhatsApp" 
                  href="https://wa.me/2349033671863"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  }
                  color="bg-[#14a800]/20 hover:bg-[#14a800]/40 border-[#14a800]/30 text-[#14a800]"
                />
                <PlatformButton 
                  name="Upwork" 
                  href="https://www.upwork.com/freelancers/~017ce0a4fefd64b016"
                  icon={
                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-.908c.693.301 4.265 1.836 4.314-1.993.006-.482-.014-.908-.1-1.319-1.028.694-2.583 1.127-3.978 1.127-3.232 0-5.411-2.185-5.411-5.328C10.54 1.487 12.35 0 14.868 0c2.31 0 4.17 1.458 4.675 3.518h2.951v2.36h-1.652c.231 1.492.35 3.016.326 4.542.068 3.559-2.025 5.259-3.784 5.259-.974 0-1.782-.403-1.782-.403s.965 2.162 1.344 2.822c1.374 2.392 3.492 2.686 3.492 2.686v2.545s-3.415.116-5.83-4.084c-1.782-3.099-2.222-6.528-2.222-6.528s-.686.974-1.733 2.112c-.524.569-1.328 1.397-2.316 2.222.868 2.058 1.558 4.137 1.558 4.137h-3.32s-.65-1.96-1.428-3.871c-1.656-.46-3.208-1.558-3.208-4.228 0-4.09 3.868-5.356 3.868-5.356v-.88C5.836 1.838 4.144 1.944 2.502 3.237V.715c2.376-1.036 5.093-1.2 6.551.488 1.353 1.566 1.222 4.102 1.222 4.102v6.234c1.192-1.01 2.301-2.606 2.301-2.606.33-4.51 2.28-6.195 4.515-6.195 1.571 0 2.592.863 2.592 2.527 0 1.918-1.428 3.193-3.256 3.193-.974 0-1.908-.35-2.656-.893.188.75.242 1.482.203 2.019-.045.617-.354 3.567-3.662 3.567zM7.215 9.42s-.089 1.423-1.636 1.761c-.551.12-2.149-.074-2.149-2.102 0-2.35 2.073-2.687 3.785-2.731v3.072z"/>
                     </svg>
                  }
                  color="bg-[#14a800]/20 hover:bg-[#14a800]/40 border-[#14a800]/30 text-[#14a800]"
                />
                <PlatformButton 
                  name="Fiverr" 
                  href="https://www.fiverr.com/s/42ap2BR"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path d="M22.92 6c-.05-.44-.21-.83-.49-1.18-.27-.35-.61-.63-1.01-.84-.4-.2-.84-.31-1.32-.31h-.04c-.67 0-1.24.23-1.72.68-.48.45-.76 1.05-.85 1.8l-1.43 11.83h-3.95l1.01-8.4c.05-.45.21-.85.49-1.21.27-.35.61-.63 1.01-.84.4-.2.84-.31 1.32-.31h.03c.67 0 1.24.23 1.72.68.45.42.74.98.84 1.68l.21-1.71h3.33l-1.57 12.98h-3.94l.99-8.15c.01-.13.02-.26.02-.38 0-.44-.11-.78-.32-1.02-.21-.24-.52-.36-.93-.36-.45 0-.84.14-1.18.42-.34.28-.59.66-.75 1.13l-1.9 8.35h-3.95l2.25-18.66h3.95l-.39 3.25c.61-1.1 1.36-1.93 2.25-2.48.88-.56 1.86-.84 2.92-.84h.06c.92 0 1.77.19 2.53.58.77.38 1.4.92 1.89 1.62.49.7.77 1.51.84 2.43l.01.08.01.09h-3.69zm-13.62 11.97c-.89 0-1.63-.31-2.22-.92-.58-.61-.88-1.36-.88-2.24 0-.89.31-1.64.91-2.25.61-.62 1.37-.92 2.28-.92.83 0 1.51.27 2.05.81.53.54.81 1.21.84 2.02h-5.26c.03.49.23.9.59 1.22.36.33.8.49 1.31.49.4 0 .76-.11 1.08-.34.32-.22.56-.53.72-.93h3.83c-.3 1.38-1.03 2.48-2.19 3.32-1.16.84-2.49 1.26-3.99 1.26l-.42-.01-.65-.03zm2.59-4.82c-.03-.43-.2-.8-.51-1.09-.32-.3-.72-.45-1.22-.45-.53 0-.96.15-1.29.46-.33.3-.53.67-.6 1.08h3.62zM3.46 2.76c.72 0 1.31.24 1.77.72.46.48.69 1.06.69 1.74 0 .68-.23 1.26-.69 1.74-.46.48-1.05.72-1.77.72s-1.31-.24-1.77-.72C1.23 6.48 1 5.9 1 5.22c0-.68.23-1.26.69-1.74.46-.48 1.05-.72 1.77-.72m2 15.22h-4l2.25-11.98h4l-2.25 11.98z"/>
                    </svg>
                  }
                  color="bg-[#1dbf73]/20 hover:bg-[#1dbf73]/40 border-[#1dbf73]/30 text-[#1dbf73]"
                />
                <PlatformButton 
                  name="X (Twitter)" 
                  href="https://x.com/DavidTemi_112"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  }
                  color="bg-white/10 hover:bg-white/20 border-white/10 text-white"
                />
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-charcoal/80 rounded-xl border border-white/10 backdrop-blur-md">
               <h4 className="text-white font-semibold mb-2">Availability</h4>
               <div className="flex items-center gap-2">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 text-sm font-medium">Open for freelance projects</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal/60 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-charcoal/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-charcoal/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-charcoal/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                >
                  <option value="Scriptwriting">Scriptwriting</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Content Strategy">Content Strategy</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-charcoal/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                  placeholder="Tell me about your channel or project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                  status === 'success' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50 cursor-default' 
                    : status === 'error'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30'
                    : 'bg-cyan hover:bg-cyan-600 text-white'
                }`}
              >
                {status === 'sending' ? (
                  <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : status === 'success' ? (
                  <>Message Sent! <CheckCircle2 className="w-5 h-5" /></>
                ) : status === 'error' ? (
                  <>Failed to Send. Try Again <AlertCircle className="w-5 h-5" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="p-3 bg-white/5 rounded-full text-cyan group-hover:bg-cyan group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block w-max hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : content;
};

const PlatformButton: React.FC<{ name: string; href: string; icon: React.ReactNode; color: string }> = ({ name, href, icon, color }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${color}`}
  >
    {icon}
    <span className="font-medium text-sm">{name}</span>
  </a>
);

export default Contact;