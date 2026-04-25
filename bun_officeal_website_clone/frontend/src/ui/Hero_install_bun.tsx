import copyI from "@/assets/icon/copy.svg"
import checkI from "@/assets/icon/check.svg"
import { useState } from "react"

export default function Hero_Install_bun() {
    let ButtonOn = "bg-[#F472B6] border-2 border-b-0 border-[#F472B6] text-base py-2 px-4 rounded-t-md"; // on script button style
    let ButtonOff = "bg-[#3b3f4b] border-2 border-b-0 border-[#282A36] text-base py-2 px-4 rounded-t-md"; // off script button style
    let UnixI = "$ curl -fsSL https://bun.sh/install | bash"; // install on unix
    let WinI = `> powershell -c "irm bun.sh/install.ps1 | iex"`; // install on windows

    const [scriptI,setScriptI] = useState(UnixI) 
    const [onButton,setOnButton] = useState(ButtonOn)
    const [offButton,setOffButton] = useState(ButtonOff)
    const [copied, setCopied] = useState(false);

    // install script button
    const handelInstallBun = (id:number) =>{
        if (id === 1) {
            setScriptI(UnixI)
            setOnButton(ButtonOn)
            setOffButton(ButtonOff)
        }else if (id === 2) {
            setScriptI(WinI)
            setOnButton(ButtonOff)
            setOffButton(ButtonOn)
        }else{
            alert("error is comming")
        }
    };

    // copy install script
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(scriptI);
            setCopied(true);
            
            // Reset the "Copied" state after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
    return(
        <div className="flex flex-col items-start mt-3 mb-5">
            {/* button section */}
            <div className="flex flex-row items-center">
                <button 
                onClick={()=> handelInstallBun(1)}
                className={onButton}>Linux & macOS</button>
                <button 
                onClick={()=> handelInstallBun(2)}
                className={offButton}>Windows</button>
                <a className="ml-4 text-[#8a8e9c] " href="https://bun.sh/install" target="_blank" rel="noopener noreferrer">View install script</a>
            </div>
            {/* script section */}
            <div className="flex flex-row items-center justify-between w-full border-2 border-[#F472B6] bg-[#282A36] rounded-sm rounded-tl-none py-5 px-4 ">
                <p>{scriptI}</p>
                <button onClick={handleCopy}>
                    {copied ? <img src={checkI} alt="copy icon" className="invert brightness-0 " /> : <img src={copyI} alt="copy icon" className="invert brightness-0 " /> }                   
                </button>
            </div>

        </div>
    )
}