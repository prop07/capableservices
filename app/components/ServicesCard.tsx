"use client"
import React, { useContext } from 'react'
import { CiTempHigh } from "react-icons/ci";
import { PiThermometerColdLight } from "react-icons/pi";
import { MdSettingsSuggest } from "react-icons/md";
import { GiComputerFan } from "react-icons/gi";
import { GrInstallOption } from "react-icons/gr";
import { ServiceContext } from "../../context/ServiceProvider";
import Image from "next/image";

type Services = {
  [id: string]: {
    image: string;
    serviceDescription: string;
    serviceTitle: string;
    subCatagory: object
  };
};


const ServicesCard = () => {
  const serviceDetails = useContext<Services>(ServiceContext);

  return (
    <div className='my-8'>
      <div className="flex mx-auto justify-center items-center w-1/2">
        <div>
          <p className="lg:text-2xl text-xl text-gray-700 text-center  md:font-bold font-bold mb-0.5 uppercase ">
            Hvac Repair Nyc - Air Conditioner Installation In Brooklyn Ny
          </p>
          <div className="h-1 w-3/12 justify-center m-auto bg-primary mb-2"></div>
        </div>
      </div>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1  w-full justify-around '>
        {/* card  */}
        {Object.keys(serviceDetails).map((key) => (
          <div key={key}
          className="group relative cursor-pointer overflow-hidden bg-white  pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[20]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <div className='flex items-center  '>
              <div className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <Image height={40} width={40} src={serviceDetails[key].image} alt={serviceDetails[key].serviceTitle} />
              </div>
              
              <p className='ml-2 text-lg font-bold text-gray-700  group-hover:text-white/90'>{serviceDetails[key].serviceTitle}</p>
            </div>
              <div
                  className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>{serviceDetails[key].serviceDescription}</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                      <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">View Detail
                          &rarr;
                      </a>
                  </p>
              </div>
      </div>
  </div>


        ))}

   


      </div>
    </div>
  )
}

export default ServicesCard