import Navbar from "@/components/ui/Navbar/Navbar";

const PatientHeader = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Appoinment", href: "/my-appointments" },
    { key: "3", label: "Contact", href: "/contact-us" },
  ];
  return <Navbar items={items} />;
};

export default PatientHeader;
