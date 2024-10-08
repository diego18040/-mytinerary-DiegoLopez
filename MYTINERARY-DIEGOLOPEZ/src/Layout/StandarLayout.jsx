
import {Outlet} from "react-router-dom"
import Navbar from "../Components/Navbar"

export default function StandarLayout (){
    return (
        <>
        <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <h2>
          <footer className="flex w-full h-32 items-center justify-center bg-black text-white"></footer>
        </h2>
      </footer>
        
        </>
    )
}