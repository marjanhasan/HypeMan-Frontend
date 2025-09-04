import { FaBeer } from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    icon: <FaBeer />,
    title: "Cheers to our services!",
    description: "We offer a variety of services to meet your needs.",
  },
  {
    id: 2,
    icon: <FaBeer />,
    title: "Cheers to our services!",
    description: "We offer a variety of services to meet your needs.",
  },
  {
    id: 3,
    icon: <FaBeer />,
    title: "Cheers to our services!",
    description: "We offer a variety of services to meet your needs.",
  },
  {
    id: 4,
    icon: <FaBeer />,
    title: "Cheers to our services!",
    description: "We offer a variety of services to meet your needs.",
  },
];

const ServiceSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] mb-[1px]">
      {serviceData.map((service) => (
        <div
          key={service.id}
          className="flex flex-col items-center text-center py-12 px-4 bg-[#282828]"
        >
          {service.icon}
          <h2 className="text-white text-lg md:text-xl uppercase">
            {service.title}
          </h2>
          <p className="text-white text-xs md:text-sm">{service.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ServiceSection;
