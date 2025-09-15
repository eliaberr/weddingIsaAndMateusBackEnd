"use client";

import Image from "next/image";
import { OptionNavBar } from "./opitonNavBar";
import { motion } from "motion/react";
import { MenuMobile } from "./menuMobile";

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-20 w-full h-28 flex items-center ">
      <motion.div
        className="flex justify-between items-center desktop"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4, delay: 2, ease: "easeIn" }}
      >
        <Image src="/assets/logo.png" width={90} height={10} alt="logo" />
        <div className="hidden text-white lg:grid">
          <OptionNavBar />
        </div>
        <MenuMobile />
      </motion.div>
    </nav>
  );
}
