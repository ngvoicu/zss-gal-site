import Image from "next/image";
import heroBackground from "../../public/helper/juyt_6.jpg"
import landscape from "../../public/helper/bg.jpg"

export default function Home() {
  return (
    <div>
      <main>
        <div className="hero" style={{ backgroundImage: `url(${heroBackground.src})`, backgroundSize: "cover" }} >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image alt="presentation" src={landscape} />
            <div>
              <h1 className="mb-15 mt-5 text-5xl font-bold ">L E A D E R</h1>
              <p className="py-6">
                DEZVOLTAREA LOCALĂ PLASATĂ SUB RESPONSABILITATEA COMUNITĂTII
              </p>
              <div className="flex flex-col mt-6 mb-6">
                <button className="btn btn-outline  hover:bg-transparent text-sky-600 mb-6">
                  G.A.L. DOBROGEA CENTRALA 2023-2027
                </button>
                <button className="btn btn-outline  hover:bg-transparent text-sky-600">
                  G.A.L. DOBROGEA CENTRALA 2014-2020
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



