import phoneimage from "@/assets/appfood.png";
import appstore from "@/assets/store-removebg-preview.png"

function HomePage() {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className=" text-5xl font-bold tracking-tight text-orange-600">Truck In To TakeWay Today</h1>
            <span className="text-xl">Food is just a click away!!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={phoneimage} alt="foodlao app image" className="rounded-lg" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order Take Away Even Faster!
                </span>
                <span className="">
                    Download the Foodlao App for Faster ordering and personalised recommendation from AppStore and PlayStore
                </span>
                <img src={appstore} alt="Foodlao app avalible on play store" width={200} />
            </div>
        </div>
    </div>
  )
}

export default HomePage