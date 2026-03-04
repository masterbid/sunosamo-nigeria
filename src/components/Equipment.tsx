import { Truck, Wrench, Cog, HardHat } from "lucide-react";
import SectionHeader from "./SectionHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Equipment = () => {
  const equipmentList = [
    { name: "Pickup Truck", model: "Toyota", quantity: 2, status: "New" },
    { name: "Tipper Lorry", model: "Iveco", quantity: 2, status: "New" },
    { name: "Bulldozer", model: "CAT JCB", quantity: 4, status: "New" },
    { name: "Grader", model: "CAT", quantity: 3, status: "Used" },
    { name: "Mobile Crane", model: "Tierex A350", quantity: 1, status: "New" },
    { name: "Concrete Mixer", model: "CAT 966/Man 36", quantity: 6, status: "New" },
    { name: "Dumper", model: "50 MT", quantity: 4, status: "New" },
    { name: "Welding Machine", model: "Mosa", quantity: 2, status: "New" },
    { name: "Cutting Machine", model: "Hilti", quantity: 3, status: "New" },
    { name: "Drilling Machines", model: "Hilti", quantity: 3, status: "Used" },
    { name: "Pumping Machine", model: "IPC", quantity: 3, status: "New" },
    { name: "Generating Sets", model: "-", quantity: 3, status: "New" },
  ];

  const categories = [
    { icon: Truck, title: "Transport Fleet", count: "15+" },
    { icon: HardHat, title: "Heavy Machinery", count: "25+" },
    { icon: Wrench, title: "Power Tools", count: "50+" },
    { icon: Cog, title: "Specialized Equipment", count: "30+" },
  ];

  return (
    <section id="equipment" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Machinery"
          subtitle="Backed by invaluable resources of manpower, equipment and home-built systems"
        />

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md text-center border border-border hover:border-primary transition-colors"
            >
              <cat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{cat.count}</div>
              <div className="text-sm text-muted-foreground">{cat.title}</div>
            </div>
          ))}
        </div>

        {/* Equipment Description */}
        <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="p-6 bg-secondary text-secondary-foreground">
            <p className="text-lg leading-relaxed">
              Our construction capability is backed by invaluable resources of manpower, equipment 
              and home-built systems and technique. <strong>SUNO-SAMO NIG LTD</strong> is able to offer 
              the successful implementation of projects irrespective of location at minimum budget 
              and in the shortest time.
            </p>
          </div>
        </div>

        {/* Equipment Table */}
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-secondary text-secondary-foreground font-bold">
            Equipment Inventory
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted">
                  <TableHead className="font-bold">Equipment</TableHead>
                  <TableHead className="font-bold">Model / Make</TableHead>
                  <TableHead className="font-bold text-center">Quantity</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipmentList.map((item, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="text-muted-foreground">{item.model}</TableCell>
                    <TableCell className="text-center">{item.quantity}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === "New"
                            ? "bg-secondary/20 text-secondary"
                            : "bg-accent/20 text-accent-foreground"
                        }`}
                      >
                        {item.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
