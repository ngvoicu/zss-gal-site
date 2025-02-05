import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Acasa() {
    return (
        <div>
            <Header></Header>
            <div className="flex flex-col sm:flex-row bg-white">
                <main className="flex-1 p-6 bg-white border-b sm:border-b-0 sm:border-r">
                    <h1 className="text-2xl font-bold">Acasa</h1>
                    <p>This is the main content area.</p>
                </main>
                <Sidebar />
            </div>
        </div>
    );
}