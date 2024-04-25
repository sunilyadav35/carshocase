
import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
    <Hero/>
    <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
            <h1> Car catalogue</h1> 
            <p> Explore the car yoou might like</p>
        </div>
        <div className="home_filters">
          {/* <SearchBar/> */}
        </div>
        <div className="home__filter-container">
          {/* <CustomFilter /> */}
        </div>
    </div>
    </main>
  );
}
