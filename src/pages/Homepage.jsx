import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Homepage = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="w-fit xl:h-full h-full flex xl:justify-between justify-start items-start flex-col xl:py-8 xl:px-36 sm:p-8 p-6  absolute z-10" {...slideAnimation("left")}>

          <motion.div className="flex-1 xl:justify-center justify-start flex flex-col gap-10" {...headContainerAnimation}>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="sm:max-w-screen-lg max-w-md font-normal text-gray-600 text-3xl m-auto">
<<<<<<< HEAD
<<<<<<< HEAD
                Tea Bag 3D Component <strong>Unleash your imagination</strong>{" "}
                and define your own style. <br/>We will be live soon!
=======
                Tea Bag 3D Component 
>>>>>>> 4b63429ce9384f78d9a19331a363306ac33848a6
=======
                Tea Bag 3D Component <strong>We will be live</strong>
>>>>>>> 1b39151459edf6846b06608cad5b90d586ba143d
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Homepage;