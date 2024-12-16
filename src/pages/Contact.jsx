
function Contact() {
  return (
    <div>
        <h2 className="text-center text-xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col gap-3 w-1/4 m-auto">
            <input className="p-2 border border-sky-500 rounded-md outline-none"
              type="text" 
              placeholder="Your name"
              />
              <textarea className="p-2 border border-sky-500 rounded-md outline-none" 
              name="" id="" placeholder="Enter your massege">
              </textarea>
              <button 
              className="border border-sky-500 w-1/3 
              rounded-md hover:bg-sky-500 hover:text-white py-1.5">Submit</button>
        </form>
        
    </div>
  )
}

export default Contact