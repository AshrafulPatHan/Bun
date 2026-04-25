import copyI from "@/assets/icon/copy.svg"
import { useState } from "react"

export default function Hero_Install_bun() {
    const [scriptI,setScriptI] = useState("curl -fsSL https://bun.sh/install | bash") 

    const handelInstallBun = (id:number) =>{
        if (id === 1) {
            setScriptI("curl -fsSL https://bun.sh/install | bash")
        }else if (id === 2) {
            setScriptI(`powershell -c "irm bun.sh/install.ps1 | iex"`)
        }else{
            alert("error is comming")
        }
    };
    return(
        <div className="flex flex-col items-start mt-3 mb-5">
            {/* button section */}
            <div className="flex flex-row items-center">
                <button 
                onClick={()=> handelInstallBun(1)}
                className="bg-[#F472B6] border-2 border-b-0 border-[#F472B6] text-base py-2 px-4 rounded-t-md ">Linux & macOS</button>
                <button 
                onClick={()=> handelInstallBun(2)}
                className="bg-[#3b3f4b] border-2 border-b-0 border-[#282A36] text-base py-2 px-4 rounded-t-md ">Windows</button>
                <a className="ml-4 text-[#8a8e9c] " href="https://bun.sh/install" target="_blank" rel="noopener noreferrer">View install script</a>
            </div>
            {/* script section */}
            <div className="flex flex-row items-center justify-between w-full border-2 border-[#F472B6] bg-[#282A36] rounded-sm rounded-tl-none py-5 px-4 ">
                <p>{scriptI}</p>
                <button>
                    <img src={copyI} alt="copy icon" className="invert brightness-0" />
                </button>
            </div>
        </div>
    )
}