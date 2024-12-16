import { Link } from "react-router"
function Projects() {
  return (
    <div className="text-center">
        <h1 className="font-bold text-2xl text-black/80">My project</h1>
        <ul className="flex justify-center gap-4">
            <li className="border border-b-sky-500 px-3 py-1 rounded-md 
            text-xl font-semibold cursor-pointer
             ">Project One</li>
            <li className="border border-b-sky-500 px-3 py-1 rounded-md 
            text-xl font-semibold cursor-pointer
             ">Project Two</li>
            <li className="border border-b-sky-500 px-3 py-1 rounded-md 
            text-xl font-semibold cursor-pointer
             ">Project Three</li>
        </ul>
        <div className="m-3">
          <Link className="bg-sky-700 px-4 py-2 text-white rounded-2xl hover:bg-sky-900" to="/">Go to home</Link>
        </div>
    </div>
  )
}

export default Projects