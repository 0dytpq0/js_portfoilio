interface ServiceListProps {
  services: string[];
}

function ServiceList({ services }: ServiceListProps) {
  return (
    <div>
      <dt className="mt-4 font-semibold text-[#5c4033]">제공 서비스</dt>
      <dd>
        <ul className="list-disc pl-5">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

export default ServiceList;
