import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { socialLinks } from '../../data/social';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Replace with your EmailJS credentials
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: data.name,
      //     from_email: data.email,
      //     subject: data.subject || 'Portfolio Contact',
      //     message: data.message,
      //   },
      //   'YOUR_PUBLIC_KEY'
      // );

      // For now, simulate successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get In Touch</SectionTitle>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Whether you have a question, want to discuss a project, or just want to say hi,
                my inbox is always open.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <HiMail className="text-primary-500 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-white hover:text-primary-500 transition-colors"
                  >
                    {socialLinks.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
                  <HiLocationMarker className="text-accent-cyan text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Your City, Country</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, url: socialLinks.github, label: 'GitHub' },
                  { icon: FaLinkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
                  { icon: FaTwitter, url: socialLinks.twitter, label: 'Twitter' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-dark-secondary border border-dark-accent rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-500 transition-all"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-dark-secondary border border-dark-accent rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 bg-dark-secondary border border-dark-accent rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject')}
                  className="w-full px-4 py-3 bg-dark-secondary border border-dark-accent rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 bg-dark-secondary border border-dark-accent rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" loading={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
                  <p className="text-green-500 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                  <p className="text-red-500 text-center">
                    Failed to send message. Please try again or email me directly.
                  </p>
                </div>
              )}

              {/* Note about EmailJS setup */}
              <p className="text-gray-500 text-sm text-center">
                Note: EmailJS integration needs to be configured with your credentials.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
