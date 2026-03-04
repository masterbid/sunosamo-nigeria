import { ArrowRight, Building2, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const stats = [
    { icon: Building2, value: "100+", label: "Projects Completed" },
    { icon: Award, value: "20+", label: "Years Experience" },
    { icon: Users, value: "50+", label: "Expert Staff" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction site with road paving equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-dark/90 via-construction-dark/70 to-construction-dark/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Award className="w-4 h-4" />
            <span>RC No: 672952 | Registered with CAC Nigeria</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-slide-up">
            Building Nigeria's
            <span className="block text-accent">Infrastructure</span>
            With Excellence
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            A forward-looking construction company with a proven track record of successfully 
            completed projects across Nigeria. Civil Engineering, Building Construction, 
            Road & Bridge Works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6"
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-construction-dark font-bold text-lg px-8 py-6"
            >
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-white/20"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
