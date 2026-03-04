import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["2, Ojogbo Street", "Okpanam Road, Asaba", "Delta State, Nigeria"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 2PM", "Sunday: Closed"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch for project inquiries, quotes, or general information"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Building Construction, Road Work"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold py-6"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg p-6 flex gap-4"
              >
                <div className="bg-primary rounded-lg p-3 h-fit">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA Box */}
            <div className="bg-primary rounded-lg p-6 text-primary-foreground">
              <h4 className="font-bold text-xl mb-3">Ready to Start Your Project?</h4>
              <p className="opacity-90 mb-4 text-sm">
                Our team of experts is ready to help you bring your construction 
                project to life. Contact us today for a free consultation.
              </p>
              <Button
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-bold"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
