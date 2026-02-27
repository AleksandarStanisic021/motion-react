import "./App.css";
import { MotionConfig } from "motion/react";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, y: -10, color: "#ff0000" }}
        drag>
        <h1>ZDRAVO ZORICE</h1>
      </motion.div>
      <motion.button
        whileHover={{
          scale: 1.1,
          y: -2,
          backgroundColor: "#ff4545",
          color: "#0c2406",
        }}
        whileTap={{ scale: 0.9, y: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        drag
        dragElastic={0.05}>
        PRITISNI ME
      </motion.button>
    </>
  );
}

export default App;
