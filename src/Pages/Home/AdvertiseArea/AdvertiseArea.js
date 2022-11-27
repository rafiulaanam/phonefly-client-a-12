import React from "react";
import { useQuery } from "@tanstack/react-query";
import AdsCard from "./AdsCard";

const AdvertiseArea = () => {
  const url = `http://localhost:5000/my-ads?ads=RunAds`;
  const { data: RunAds = [] } = useQuery({
    queryKey: ["RunAds"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });
  console.log(RunAds.length)
  return (
    <div className="mt-10">
      { RunAds.length > 0 &&
        <div className="my-10  container mx-auto">
        <h1 className=" font-semibold text-3xl">
          Our Advertisement
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
       {
        RunAds.map(ads=><AdsCard
        key={ads._id}
        ads={ads}
        ></AdsCard>)
       }
        </div>
      </div>
      }
    </div>
  );
};

export default AdvertiseArea;
