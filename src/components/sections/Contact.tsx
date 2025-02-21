
import { Linkedin } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-12 animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's create something amazing together.
          </p>
          
          <div className="mt-8 p-6 bg-background rounded-lg shadow-sm border animate-fade-up [animation-delay:200ms]">
            <div className="flex items-center gap-4 mb-4">
              <Linkedin className="h-5 w-5 text-[#0077B5]" />
              <p className="font-medium">Recent Endorsement</p>
            </div>
            <blockquote className="text-muted-foreground italic">
              "His genuine passion for Interaction Design and Information Technology set Dorian apart. It was a joy to see him immerse himself in his work, always eager to learn, innovate, and apply his knowledge in ways that benefited our projects and team."
            </blockquote>
            <p className="mt-4 text-sm font-medium">
              - Lars Lindsköld, President at European Federation for Medical Informatics
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
