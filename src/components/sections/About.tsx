
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 px-4 md:px-6"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Image with Hover Effect */}
          <div 
            className="relative group"
            role="img"
            aria-label="Profile picture of Dorian Tykesson"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 ring-2 ring-neutral-200 dark:ring-neutral-800">
              <img
                src="/lovable-uploads/profile-picture-about-me.png"
                alt="Profile picture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div 
              className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h2 id="about-heading" className="text-2xl md:text-3xl font-bold">About Me</h2>
              <p className="text-muted-foreground">
                I'm a Human-Computer Interaction specialist and Interaction Designer focused on creating intuitive digital experiences. 
                With a background in cognitive science and design, I bridge the gap between human psychology and digital interfaces.
              </p>
              <p className="text-muted-foreground">
                My work combines research-driven insights with creative solutions to build products that truly resonate with users.
              </p>
            </div>

            {/* Social Links with ARIA live region for status updates */}
            <div 
              className="flex gap-4"
              role="list"
              aria-label="Social media links"
            >
              <div aria-live="polite" className="sr-only">
                Social media links available for GitHub, LinkedIn, and Email
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
                asChild
              >
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit my GitHub profile (opens in new tab)"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
                asChild
              >
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit my LinkedIn profile (opens in new tab)"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
                asChild
              >
                <a 
                  href="mailto:contact@example.com" 
                  aria-label="Send me an email"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
