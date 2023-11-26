import logo from "./Logo Tanaman Hias.png";
import "./About.css";

export default function About() {

    return (
        <div className='About'>
            <div className="App-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="descMain">
                <p id="descAbout">
                Tumbuhan adalah organisme multiseluler di kingdom Plantae yang menggunakan fotosintesis untuk membuat makanannya sendiri. Ada lebih dari 300.000 spesies tumbuhan; contoh umum tanaman termasuk rumput, pohon, dan semak. Tumbuhan mempunyai peranan penting dalam ekosistem dunia. Mereka menghasilkan sebagian besar oksigen dunia, dan penting dalam rantai makanan, karena banyak organisme memakan tumbuhan atau memakan organisme yang memakan tumbuhan. Ilmu yang mempelajari tumbuhan disebut botani.
                </p>
            </div>
        </div>
    )
  }