import { motion } from "framer-motion";
import { services } from "../data/Services";
import SectionLayout from "./layout/SectionLayout";

const Service = () => {
  return (
    <SectionLayout
      id="service"
      title="Service"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eaque commodi pariatur atque veniam, nulla in? Facilis cum commodi omnis ea recusandae quas, incidunt tempore veniam sapiente? Dolores, expedita consectetur!"
    >
      {/* service card */}
      {({ isInView }) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 px-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="bg-slate-50 shadow px-6 py-4 rounded-md space-y-3"
            >
              <img
                src={service.url}
                alt="rocket_gif"
                width={120}
                height={100}
                className="mx-auto"
              />
              <span className="font-semibold text-2xl">{service.title}</span>
              <p>{service.content}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </SectionLayout>
  )
};

export default Service