import "./App.css";
import { MotionConfig } from "motion/react";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <h1>Hello Motion</h1>
      </motion.div>
    </>
  );
}

export default App;
