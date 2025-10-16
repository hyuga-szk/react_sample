import Lottie from "lottie-react"
import ourmissionAnimation from "../assets/animations/ourmissionAnimation.json";
import { motion } from "framer-motion";
import { missions } from "../data/Missions";
import SectionLayout from "./layout/SectionLayout";

const OurMission = () => {
  return (
    <SectionLayout
      id="ourmission"
      title="Our Mission"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sapiente officia. Maiores quidem libero placeat dignissimos ad blanditiis perferendis eveniet totam officia odit veniam id eius atque, beatae voluptates? Asperiores?"
    >
      {({ isInView }) => (
        <div>
          <div className="lg:flex gap-5">
            {/* left side */}
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }} 
              className="lg:w-1/2"
            >
              <Lottie animationData={ourmissionAnimation} />
            </motion.div>

            {/* right side */}
            <div className="space-y-14 lg:w-1/2">
              {missions.map(( mission, index ) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 150 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 150 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.3,
                  }} 
                  className="text-left border-b-2 border-slate-500 pb-2 px-2"
                >
                  <h4 className="font-medium md:text-2xl text-xl mb-2">{mission.title}</h4>
                  <p className="lg:text-xl text-base">
                    {mission.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionLayout>
  )
}

export default OurMission