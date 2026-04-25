import "@/style/home.css";
import logos_ from "@/assets/image/logo-bar.png";
import SharedLayoutAnimation from "@/ui/Shared_layout";
import Hero_Install_bun from "@/ui/Hero_install_bun";

export default function Hero_() {
    return (
        <div className="flex-center mx-auto hero-background  ">
            <div className="flex-row-center justify-center mx-auto max-w-7xl gap-20 mt-24 mb-32   ">
                <div className="w-[700px] ">
                    <button>Bun v1.3.12 is here! →</button>
                    <h1 className="text-5xl font-bold mt-4 mb-8">Bun is a fast JavaScript package manager</h1>
                    <p className="text-xl text-[#D1D5DB] mb-8 ">Bun is a fast, incrementally adoptable all-in-one JavaScript, TypeScript & JSX toolkit. Use individual tools like bun test or bun install in Node.js projects, or adopt the complete stack with a fast JavaScript runtime, bundler, test runner, and package manager built in. Bun aims for 100% Node.js compatibility.</p>
                    <p className="text-xl font-bold">Install Bun v1.3.12</p>
                    <Hero_Install_bun/>
                    <div>
                        <p> USED BY</p>
                        <img src={logos_} alt="company" />
                    </div>
                </div>
                <div className="w-[500px] flex-center gap-4">
                    <div>
                        {/* thear are a window */}
                        <SharedLayoutAnimation/>
                    </div>
                    <a href="https://github.com/rolldown/benchmarks/blob/134f936777397f5d1246b5ef8974f01e2f799690/apps/10000/package.json" target="_blank" rel="noopener noreferrer">View benchmark →</a>
                </div>
            </div></div>
    )
}