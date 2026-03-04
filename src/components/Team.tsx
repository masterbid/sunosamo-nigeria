import { Users, Award, Briefcase, Shield } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Team = () => {
  const teamStats = [
    { icon: Users, value: "50+", label: "Professional Staff" },
    { icon: Briefcase, value: "4", label: "Directors" },
    { icon: Award, value: "15+", label: "Project Managers" },
    { icon: Shield, value: "100%", label: "Safety Compliance" },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our People"
          subtitle="Supported by state-of-the-art equipment, facilities and modern tools"
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md text-center border-t-4 border-primary"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-black text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              We maintain over 50 permanent/contract staff consisting of project managers, 
              superintendents, field engineers, administrative managers, craft supervisors 
              and other support personnel together with a huge inventory of heavy equipment, 
              and advanced construction management systems and techniques.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              They are supported with state-of-the-art equipment, facilities and modern tools 
              including computer-aided engineering, sophisticated technical and management 
              software, current local and international standards, communication equipment 
              and transportation facilities.
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              These Core Teams are supported by clerical staff as well as a team of masons, 
              foremen, electricians, painters and welders—all of whom are engaged on an 
              on-demand, project by project basis to undertake the hands-on civil works 
              needed to translate the original building plan into a reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
