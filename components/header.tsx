import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-0 z-[50] m-4 flex justify-between">
      {/* Buttons removed */}
    </motion.div>
  );
}
