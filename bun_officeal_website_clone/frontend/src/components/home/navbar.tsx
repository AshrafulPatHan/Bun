import logo from "../../logo.svg"

export default function Navbar() {
    return(
        <div>
            <div>
                <img src="" alt="bun logo"  />
                <p>Bun</p>
            </div>
            <div>
                <button>Build</button>
                <a href="http://#" target="_blank" rel="noopener noreferrer">Docs</a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">Reference</a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">Guides</a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">Blog</a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">
                    <img src="#" alt="Discord" />
                    Discord
                </a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">
                    <img src="#" alt="github" />
                </a>
            </div>
        </div>
    )
}