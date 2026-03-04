import { Building2, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Clients = () => {
  const clients = [
    "NIC Systems",
    "Consolidated Ventures",
    "Najico Steel",
    "Jotinga Properties",
    "VCN",
    "Secondary School",
    "IBB Golf Club",
    "Jabi Residential Estate",
    "Asokoro Luxury Suites",
    "Yola Luxury Estates",
    "Veterinary Council of Nigeria",
    "Private Estate Owners",
  ];

  const projectTypes = [
    "Residential Buildings",
    "Office Complexes",
    "Shopping Malls & Plazas",
    "Housing Estates (13-36 units)",
    "Industrial Warehouses",
    "Road Infrastructure",
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Clients"
          subtitle="SUNO-SAMO NIG LTD has a reputable standing with a distinguished list of clients"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Client List */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              Notable Clients
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-secondary text-secondary-foreground px-4 py-3 rounded-md font-medium text-sm hover:shadow-md transition-shadow"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>

          {/* Project Types & Description */}
          <div>
            <div className="bg-muted rounded-lg p-6 mb-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                With our commitment to construction and building projects, we work for notable 
                private organizations including NIC Systems, Jotinga Properties, Consolidated 
                Ventures, Najico Iron and Steel Ltd., and the Veterinary Council of Nigeria.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our clients have exposed us to various types of projects which we have always 
                satisfactorily completed. We have built residential buildings, office complexes, 
                malls and plazas. We have also designed and built two housing estates comprising 
                of 13 and 36 house units in Abuja and Yola respectively.
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Project Types
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
