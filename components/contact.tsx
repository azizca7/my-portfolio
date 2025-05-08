"use client"
import React, { useRef } from 'react'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const success = (e:string) => toast.success(e);
  const errorAlert = (e:string) => toast.error(e);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!form.current) return;
  
    emailjs
      .sendForm(
        "service_4xan7s7",
        "template_jerbulr",
        form.current,
        "vY89uYzfYbcUPZTGK"
      )
      .then(
        (result) => {
          console.log(result.text);
          success("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          errorAlert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-10 md:py-20 container px-4 mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Badge className="mb-4 bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-colors">
          Get In Touch
        </Badge>
        <h2
          className="text-3xl md:text-6xl font-bold pb-6 text-center tracking-tight bg-gradient-to-r  from-purple-700 to-purple-400 font-crete 
  dark:from-white dark:to-purple-400  bg-clip-text text-transparent"
        >
          {"Contact me"}
        </h2>
        <p className="text-md md:text-xl text-gray-800 dark:text-white/70">
          {
            "Would you like to work with me on a project? I am ready to work with you."
          }
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <form ref={form} onSubmit={sendEmail} className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="title"
                  placeholder="Project inquiry"
                  required
                />
              </div>
              <div className="space-y-2 ">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center text-gray-800 dark:text-white/70">
          <p>I left a link in the footer for you to contact me.</p>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </section>
  );
}

export default Contact