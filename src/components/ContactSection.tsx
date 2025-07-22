'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './contactForm';
import MailLoader from './MailLoader';
import { ToastContainer } from 'react-toastify';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [mailError, setMailError] =  useState<string>("");

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'gargchitvan378@gmail.com',
      href: 'mailto:gargchitvan378@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-8882331568',
      href: 'tel:+918882331568'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Ghaziabad, Uttar Pradesh',
      href: '#'
    }
  ];

  if (isSubmitting) {
        return <>
            <MailLoader type={mailError === '' ? "error" : "success"} message={mailError === '' ? "Successfully sent" : mailError} position="top-right" />
            <ToastContainer />
        </>
    }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl mb-8">Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-sm"
            >
              <p className="text-muted-foreground">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a friendly chat about technology and development. 
              </p>
              <p className="text-muted-foreground">
                Whether you're a fellow developer, a potential client, or someone looking 
                to get into tech, don't hesitate to reach out!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactForm isLoading={isSubmitting} setLoading={setIsSubmitting} mailError={mailError} setMailError={setMailError}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}