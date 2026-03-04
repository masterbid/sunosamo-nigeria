import { Building, Construction, Route, BrickWall, Warehouse, HomeIcon, Hammer, Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";
import civilImage from "@/assets/civil-engineering.jpg";
import roadImage from "@/assets/road-construction.jpg";
import buildingImage from "@/assets/building-construction.jpg";
import bridgeImage from "@/assets/bridge-construction.jpg";
import estateImage from "@/assets/estate-development.jpg";
import warehouseImage from "@/assets/warehouse-construction.jpg";
import renovationsImage from "@/assets/renovations.jpg";
import projectManagementImage from "@/assets/project-management.jpg";

const Services = () => {
  const services = [
    {
      icon: Construction,
      title: "Civil Engineering",
      description: "Comprehensive civil engineering solutions for infrastructure development projects.",
      image: civilImage,
    },
    {
      icon: Building,
      title: "Building Construction",
      description: "Residential and commercial building construction from foundation to finishing.",
      image: buildingImage,
    },
    {
      icon: Route,
      title: "Road Construction",
      description: "Modern road construction and rehabilitation with quality asphalt paving.",
      image: roadImage,
    },
    {
      icon: BrickWall,
      title: "Bridges Construction",
      description: "Design and construction of bridges and flyovers for improved connectivity.",
      image: bridgeImage,
    },
    {
      icon: HomeIcon,
      title: "Estate Development",
      description: "Complete estate development including housing units and infrastructure.",
      image: estateImage,
    },
    {
      icon: Warehouse,
      title: "Warehouse Construction",
      description: "Industrial warehouse and storage facility construction.",
      image: warehouseImage,
    },
    {
      icon: Hammer,
      title: "Renovations",
      description: "Building renovations, upgrades, and maintenance services.",
      image: renovationsImage,
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "End-to-end project management and supervision services.",
      image: projectManagementImage,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Services"
          subtitle="We aim to provide quality service with good value for money and continually strive to improve"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-industrial group"
            >
              {/* Image or Icon Header */}
              {service.image ? (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-construction-dark/80 to-transparent" />
                  <service.icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
                </div>
              ) : (
                <div className="h-32 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <service.icon className="w-12 h-12 text-primary-foreground" />
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 bg-muted rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Value Proposition
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At SUNO-SAMO NIG LTD, we aim to provide quality service with good value for money, 
              and the ability to give assured performance and delivery. We continually strive to 
              seek ways of improving our service through programs that monitor and measure our 
              performance and client requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Client satisfaction is the prime goal of all our employees, achieved through their 
              professionalism and dedication. We pursue the maximization of technical and engineering 
              skills of our personnel and utilization of equipment to achieve results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
