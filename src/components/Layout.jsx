import {Link, Outlet } from "react-router"
import Footer from "./Footer"

function Layout() {
  return (
    <>
      <nav className="flex  justify-between bg-blue-800 px-8 py-3">
        <h1 className="text-2xl text-white">
            <Link to="/">Coding<span className="text-gray-200 text-3xl">School</span></Link></h1>
        <div className="flex gap-3 ">
            <Link className="text-white hover:underline text-xl font-semibold" to="/">Home</Link>
            <Link className="text-white hover:underline text-xl font-semibold" to="/projects">Projects</Link>
            <Link className="text-white hover:underline text-xl font-semibold" to="/contact">Contact</Link>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout