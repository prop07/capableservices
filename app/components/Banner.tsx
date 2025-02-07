import React from "react";
import Link from "next/link";
import banner from "../../image/banner.webp";
import bannersm from "../../image/bannersm.webp";



import Image from "next/image";

const Banner = () => {
  return (
  <section className="w-full relative overflow-hidden mb-4">
<div className="relative h-[105vh] w-[100vw]">
  <Image
    fill={true}
    style={{ objectFit: "cover" }}
    src={banner}
    alt="banner"
    className="hidden sm:block"
  />
  <Image
    fill={true}
    style={{ objectFit: "cover" }}
    src={bannersm}
    alt="banner"
    className="block sm:hidden"
  />
  {/* Gradient overlay for fading effect at the bottom 10% */}
  <div className="absolute bottom-0 left-0 right-0 h-[0.5%] bg-gradient-to-b from-transparent to-white"></div>
</div>
  <div className="absolute inset-0 bg-background/50 dark:bg-background/70 flex items-center justify-center p-4 text-center">
    <div className="space-y-3 max-w-3xl bg-white p-6">
    <p className="font-extrabold md:text-4xl text-muted-foreground tracking-widest text-neutral-800">
      CAPABLE
      </p>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight sm:tracking-widest  text-neutral-800">
        HVAC SERVICES
      </h1>
      <p className="text-lg md:text-2xl text-muted-foreground text-read">
      Your Comfort is Our Mission.
      </p>
    </div>
  </div>
</section>
  );
};

export default Banner;
