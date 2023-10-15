import Sidebar from "@/components/ui/Sidebar/Sidebar";

const PatientSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Appointments", href: "/my-appointment" },
    { key: "2", label: "My Profile", href: "/my-profile" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default PatientSidebar;
