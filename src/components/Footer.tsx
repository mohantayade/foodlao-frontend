

function Footer() {
  return (
    <div className="bg-orange-500 p-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-2xl md:text-3xl text-white font-bold tracking-tight">Foodlao.Com</span>

            <span className="text-white font-bold tracking-tight flex gap-2 mt-2">
                <span className="w-full">Privacy Policy</span>
                <span className="w-full">Terms of condition</span>
            </span>
        </div>
    </div>
  )
}

export default Footer