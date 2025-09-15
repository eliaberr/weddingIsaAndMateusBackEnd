import { AnimatePresence, motion } from "motion/react";
import { IoIosMenu } from "react-icons/io";
import { OptionNavBar } from "./opitonNavBar";
import { useState } from "react";
import { MenuHamburger } from "./menuHamburger";

export function MenuMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="grid lg:hidden">
      <MenuHamburger
        onClick={() => setOpenMenu(!openMenu)}
        openMenu={openMenu}
      />
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key="menu"
            className="fixed top-0 right-0 bg-white/95 h-screen w-64 ps-3 pt-36 text-black shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <OptionNavBar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
