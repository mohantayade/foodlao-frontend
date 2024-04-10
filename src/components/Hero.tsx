import heroimg from "@/assets/heroimg.png"

function Hero() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-t from-orange-400 via-white to-white h-full">
        <div className="my-20 max-w-[70%] md:flex flex-row items-center gap-10">
        <h2 className="text-center md:text-5xl lg:text-7xl text-3xl font-extrabold text-orange-600 mb-10 w-full h-full drop-shadow-lg">Order Your Food Now</h2>
        <img src={heroimg} alt="foodlao landing page image" className="w-full  max-h-[350px] object-cover" />
        </div>
    </div>
  )
}

export default Hero