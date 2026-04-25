import chart1 from "@/assets/image/54785.png"
import chart2 from "@/assets/image/516165.png"
import chart3 from "@/assets/image/1645665.png"
import chart4 from "@/assets/image/45987.png"
import { useState } from "react";

export default function SharedLayoutAnimation() {
    // css style
    let onButton = "bg-[#282A36] py-4 px-6 text-xl rounded-t-md border-b-2 border-b-pink-400 ";
    let offButton = " py-4 px-6 hover:bg-[#282A36] text-xl rounded-t-md border-b-2 border-b-mauve-700 hover:border-b-blue-500 transition-colors duration-300 ease-in-out ";
    
    // chart 1
    function Chart1() {
        return (
            <div className="flex flex-col items-center">
                <h3 className="text-2xl">Bundling 10,000 React components</h3>
                <p className="mb-4">Build time in milliseconds (Linux x64, Hetzner)</p>
                <div className="bg-[#282A36] p-1 rounded-lg ">
                    <img src={chart1} alt="chart" />
                </div>
            </div>
        )
    }
    
    // chart 2
    function Chart2() {
        return (
            <div className="flex flex-col items-center">
                <h3 className="text-2xl">Express.js 'hello world'</h3>
                <p className="mb-4">HTTP requests per second (Linux x64)</p>
                <div className="bg-[#282A36] p-1 rounded-lg ">
                    <img src={chart2} alt="chart" />
                </div>
            </div>
        )
    }
    
    // chart 3
    function Chart3() {
        return (
            <div className="flex flex-col items-center">
                <h3 className="text-2xl">Load a huge table</h3>
                <p className="mb-4">Queries per second. 100 rows x 100 parallel queries</p>
                <div className="bg-[#282A36] p-1 rounded-lg ">
                    <img src={chart3} alt="chart" />
                </div>
            </div>
        )
    }
    
    // chart 4
    function Chart4() {
        return (
            <div className="flex flex-col items-center">
                <h3 className="text-2xl">WebSocket chat server</h3>
                <p className="mb-4">Messages sent per second (Linux x64, 32 clients)</p>
                <div className="bg-[#282A36] p-1 rounded-lg ">
                    <img src={chart4} alt="chart" />
                </div>
            </div>
        )
    }
    
    // state of button style
    const [button1, setButton1] = useState(onButton);// button 1 style
    const [button2, setButton2] = useState(offButton);// button 2 style
    const [button3, setButton3] = useState(offButton);// button 3 style
    const [button4, setButton4] = useState(offButton);// button 4 style

    // state of element
    const [chart, setChart] = useState(Chart1()) // main chart

    // handel button clike
    const handelShared = (id:number)=> {
        if (id === 1) {
            setChart(Chart1);
            setButton1(onButton);
            setButton2(offButton);
            setButton3(offButton);
            setButton4(offButton);
        }else if (id === 2) {
            setChart(Chart2);
            setButton1(offButton);
            setButton2(onButton);
            setButton3(offButton);
            setButton4(offButton);
        }else if (id === 3) {
            setChart(Chart3);
            setButton1(offButton);
            setButton2(offButton);
            setButton3(onButton);
            setButton4(offButton);
        }else if (id === 4) {
            setChart(Chart4);
            setButton1(offButton);
            setButton2(offButton);
            setButton3(offButton);
            setButton4(onButton);
        }else{
            alert("error is comming")
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <button onClick={()=>handelShared(1)} className={button1}>Bundler</button>
                <button onClick={()=>handelShared(2)} className={button2}>Express</button>
                <button onClick={()=>handelShared(3)} className={button3}>Postgres</button>
                <button onClick={()=>handelShared(4)} className={button4}>WebSockets</button>
            </div>
            <div>
                {chart}
            </div>
        </div>
    )
}