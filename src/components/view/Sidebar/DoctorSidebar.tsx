import Sidebar from "@/components/ui/Sidebar/Sidebar";

const DoctorSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Doctors", href: "/doctors" },
    { key: "2", label: "My Profile", href: "/doctors/my-profile" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default DoctorSidebar;
