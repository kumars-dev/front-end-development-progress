
import { CONTACTS } from "../assets/Content/content";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{opacity:0,x:100}} transition={{duration:1}} className="my-4"><motion.a href="tel:8528129740">{CONTACTS.phoneNo}</motion.a></motion.p>
        <a href="mailto:montukumarpandit19888@gmail.com" className="border-b">
          {CONTACTS.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
