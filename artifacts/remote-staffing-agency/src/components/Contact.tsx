import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaSpinner, FaPaperPlane } from 'react-icons/fa';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have questions about our courses or need help registering? Our team is here to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mb-4">
                  <FaMapMarkerAlt />
                </div>
                <h4 className="font-bold text-foreground mb-2">Our Office</h4>
                <p className="text-sm text-muted-foreground">15 Digital Hub Street,<br/>Lagos, Nigeria</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mb-4">
                  <FaEnvelope />
                </div>
                <h4 className="font-bold text-foreground mb-2">Email Us</h4>
                <p className="text-sm text-muted-foreground">info@remotestaffingagency.com</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mb-4">
                  <FaPhoneAlt />
                </div>
                <h4 className="font-bold text-foreground mb-2">Call Us</h4>
                <p className="text-sm text-muted-foreground">+234 800 123 4567</p>
              </div>
              <div className="bg-[#25D366] text-white p-6 rounded-2xl shadow-sm border border-[#25D366]/20 flex flex-col items-center text-center hover:bg-[#20b858] transition-colors cursor-pointer" onClick={() => window.open('https://wa.me/2348001234567', '_blank')}>
                <div className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center text-2xl mb-4">
                  <FaWhatsapp />
                </div>
                <h4 className="font-bold mb-2">WhatsApp</h4>
                <p className="text-sm text-white/90">Chat with us instantly</p>
              </div>
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-64 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126839.02701831818!2d3.275005856427499!3d6.556876527581734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2b1e459dbd%3A0x6b77c5c0d540b991!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            {isSuccess ? (
              <div className="py-16 text-center">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaPaperPlane className="text-3xl" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    {...register('name')} 
                    className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    {...register('email')} 
                    className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    {...register('subject')} 
                    className={`w-full p-3 rounded-lg border ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                    placeholder="How can we help?"
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    {...register('message')} 
                    rows={5}
                    className={`w-full p-3 rounded-lg border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <><FaSpinner className="animate-spin" /> Sending...</> : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
