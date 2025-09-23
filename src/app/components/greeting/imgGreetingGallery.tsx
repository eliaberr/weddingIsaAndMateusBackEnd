"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function GreetingGallery() {
  const imgsGreetingGallery = [
    {
      src: "/assets/imgGreetingGallery1.jpg",
      position: "pt-10 top-10",
      animationPosition: -60,
    },
    {
      src: "/assets/imgGreetingGallery3.jpg",
      position: "pb-10 top-40",
      animationPosition: 60,
    },
    {
      src: "/assets/imgGreetingGallery2.jpg",
      position: "pt-10 top-80",
      animationPosition: -60,
    },
    {
      src: "/assets/imgGreetingGallery4.jpg",
      position: "pb-10 top-90",
      animationPosition: 60,
    },
  ];
  return (
    <div className=" gap-1 grid-cols-12 mt-20 relative hidden lg:grid">
      {imgsGreetingGallery.map((item, index) => (
        <motion.div
          className={`col-span-3 w-[100px] absolute lg:relative lg:top-0 lg:w-full ${item.position}`}
          key={index}
          initial={{ y: item.animationPosition, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image src={item.src} width={4000} height={6000} alt="img" />
        </motion.div>
      ))}
    </div>
  );
}
