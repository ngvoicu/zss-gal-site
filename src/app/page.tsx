import Image from "next/image";
import Link from "next/link";
import newLogo from "../../public/helper/gal-logo-new.png"
import leader from "../../public/helper/leader.png"
import leaderOld from "../../public/helper/leader-old.png"
import heroBackground from "../../public/helper/IMG_20200920_125334.jpg"
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <main>
        {/* Wrapper pentru întreaga pagină */}
        <div
          className="w-full md:h-[90vh] flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground.src})` }}
        >
          {/* Logoul centrat, poziționat mai sus pe ecranele mari */}
          <div className="flex items-center justify-center w-full z-10 mt-10">
            <Link className="text-sky-600 hover:text-sky-400" href="/">
              <Image src={newLogo} alt="gal logo" width={300} height={166} />
            </Link>
          </div>

          {/* Container Flex pentru coloane */}
          <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between px-6 sm:px-12 gap-y-8 md:gap-x-8 mt-10 md:mt-20 mb-20">
            {/* Coloană Stânga */}
            <div className="w-full md:w-1/2 flex flex-col items-center text-white text-center px-6 py-6 bg-white/80 rounded-xl shadow-lg">
              <Image src={leader} alt="leader 2023-2027 logo" width={293} height={83} />
              <br /> <br />
              <Link className="text-sky-600 hover:text-sky-400 w-full" href="/acasa">
                <h1 className="text-2xl font-bold mt-4">LEADER 2023-2027</h1>
              </Link>
              <p className="mt-4 mb-6 text-gray-800">
                Strategia de dezvoltare locala a teritoriului GAL Valea Racovei aferenta perioadei 2023 – 2027
              </p>
              <Link className="w-full" href="/acasa">
                <button className="w-full max-w-xs btn bg-blue-600 text-white hover:bg-blue-500 rounded-full">
                  Viziteaza pagina proiectului
                </button>
              </Link>
            </div>

            {/* Coloană Dreapta */}
            <div className="w-full md:w-1/2 flex flex-col items-center text-white text-center px-6 py-6 bg-white/80 rounded-xl shadow-lg">
              <Image src={leaderOld} alt="leader 2014-2020" width={150} height={150} />
              <Link className="text-sky-600 hover:text-sky-400 w-full" href="https://old.galdc.ro">
                <h1 className="text-2xl font-bold mt-4">LEADER 2014-2020</h1>
              </Link>
              <p className="mt-4 mb-6 text-gray-800">
                Strategia de dezvoltare locala a teritoriului GAL Valea Racovei aferenta perioadei 2014 – 2020
              </p>
              <Link className="w-full" href="https://old.galdc.ro">
                <button className="w-full max-w-xs btn bg-green-600 text-white hover:bg-green-500 rounded-full">
                  Viziteaza pagina proiectului
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}