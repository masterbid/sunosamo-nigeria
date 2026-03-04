import { CheckCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import buildingImage from "@/assets/building-construction.jpg";

const About = () => {
  const highlights = [
    "Incorporated with Corporate Affairs Commission (RC: 672952)",
    "Multi-disciplinary construction approach",
    "Quality delivery within economic cost and time frame",
    "Advanced construction management systems",
    "Over 50 permanent and contract staff",
    "State-of-the-art equipment and facilities",
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="About Us"
          subtitle="A forward-looking construction company delivering excellence across Nigeria"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={buildingImage}
                alt="Construction site with workers"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-construction-dark/60 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-xl max-w-[200px]">
              <div className="text-4xl font-black">20+</div>
              <div className="text-sm opacity-90">Years of Excellence in Construction</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Building Tomorrow's Nigeria, Today
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              In the face of increasing demands for quality infrastructure, <strong className="text-foreground">SUNO-SAMO NIG LTD</strong> stands 
              as a beacon of excellence. We employ pragmatic, result-oriented contracting strategies 
              that ensure transparency, accountability, and the highest quality delivery.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our multi-disciplinary approach harnesses expertise across industries, putting various 
              abilities under efficient management and supervision. This ensures our clients receive 
              quality products delivered within economic cost and project timeframes.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
