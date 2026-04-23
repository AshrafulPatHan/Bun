import logo from "../../logo.svg"
import Bun from "../../assets/icon/bun_text.png"
import Discord from "@/assets/icon/discord.svg"
import Github from "@/assets/icon/icons8-github.svg"

export default function Navbar() {
    return(
        <div className="flex-row-center justify-between px-12 py-4  ">
            <div className="flex-row-center gap-5">
                <img src={logo} alt="bun logo" className="w-14 h-12 "  />
                <img src={Bun} alt="bun logo" className="w-16 h-6 "  />
            </div>
            <div className="flex-row-center gap-6 text-lg">
                <button className="px-4 py-2 bg-[#F472B6] rounded-lg text-black ">Build</button>
                <a href="http://#" target="_blank" rel="noopener noreferrer">Docs</a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">Reference</a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">Guides</a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">Blog</a>
                <a href="http://#" target="_blank" rel="noopener noreferrer" className="flex-row-center gap-4">
                    <img src={Discord} alt="Discord" className="w-7 h-7 invert brightness-0 " />
                    Discord
                </a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="github" className="w-7 h-7 invert brightness-0 " />
                </a>
            </div>
        </div>
    )
}