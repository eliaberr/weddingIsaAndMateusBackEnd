import { MenuHamburgerProps } from "@/types/menuHamburgerType";
import { motion } from "motion/react";
import { spring } from "motion";

export function MenuHamburger({ onClick, openMenu }: MenuHamburgerProps) {
  const transition = { type: spring, stiffness: 600, damping: 30 };
  return (
    <div className="relative z-20">
      <button
        aria-label="Abrir menu"
        aria-expanded={openMenu}
        onClick={onClick}
        className="grid place-items-center size-12 rounded-xl active:scale-95 transition"
      >
        <div className="relative w-7 h-5">
          <motion.span
            initial={false}
            animate={openMenu ? { y: 10, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={transition}
            className={`absolute left-0 top-0 h-[2px] w-7 rounded-full ${openMenu ? "bg-red-700":"bg-black"}`}
          />
          <motion.span
            initial={false}
            animate={
              openMenu ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
            }
            transition={transition}
            className="absolute left-0 top-1/2 h-[2px] w-7 -translate-y-1/2 rounded-full bg-black"
          />
          <motion.span
            initial={false}
            animate={openMenu ? { y: -10, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={transition}
            className={`absolute left-0 bottom-0 h-[2px] w-7 rounded-full ${openMenu ? "bg-red-700":"bg-black"}`}
          />
        </div>
      </button>
    </div>
  );
}
