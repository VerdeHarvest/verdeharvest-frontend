import Image from "next/image";
import logo1 from "./assets/logo1.png"

export default function Header () {
    return (
    <header className="bg-white py-4">
    <div className="container mx-auto flex items-center justify-end space-x-4">
            <Image src={logo1} alt="logo" className="mx-auto flex h-18 w-64 ml-8 mt-2"/>
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn m-1 bg-white">Product</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                <li><a>Design</a></li>
                <li><a>Content</a></li>
                <li><a>Publish</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn m-1 bg-white">Resources</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                <li><a>Blog</a></li>
                <li><a>Careers</a></li>
                <li><a>Docs</a></li>
                <li><a>About</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn m-1 bg-white">Community</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                <li><a>Join</a></li>
                <li><a>Events</a></li>
                <li><a>Experts</a></li>
                </ul>
            </div>
            <h1 className="space-x-9">Changelog</h1>
            <span className="text-yellow-400">Pricing</span>
        </div>
  </header>
    )
}