import Image from "next/image";
import heroBackground from "../../public/helper/juyt_6.jpg"
import landscape from "../../public/helper/bg.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="hero" style={{ backgroundImage: `url(${heroBackground.src})`, backgroundSize: "cover", backgroundPosition: "left", height: "79vh" }} >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex flex-col">
              <Image alt="presentation" src={landscape} />
              <span className="mt-4 text-center">E-mail: galmedg@yahoo.com</span>
            </div>
            <div>
              <h1 className="mb-15 mt-5 text-5xl font-bold ">L E A D E R</h1>
              <p className="py-6">
                DEZVOLTAREA LOCALĂ PLASATĂ SUB RESPONSABILITATEA COMUNITĂTII
              </p>
              <div className="flex flex-col mt-6 mb-6">
                <button className="btn btn-outline  hover:bg-transparent text-sky-600 hover:text-sky-400 mb-6">
                  <Link className="text-sky-600 hover:text-sky-400" href="/acasa"> G.A.L. DOBROGEA CENTRALA 2023-2027</Link>
                </button>
                <button className="btn btn-outline hover:bg-transparent text-sky-600 hover:text-sky-400">
                  <Link className="text-sky-600 hover:text-sky-400" href="https://old.galdc.ro">G.A.L. DOBROGEA CENTRALA 2014-2020</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}