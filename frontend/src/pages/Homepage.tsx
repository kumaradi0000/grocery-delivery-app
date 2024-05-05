import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600 ">
          Bringing fresh groceries right to your doorstep
        </h1>

        <span className="text-xl">Your grocery store, just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landing image"/>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">Order takeaway even faster!
          </span>
          <span>
            Download the Doorpe App for faster ordering and personalized recommendations
          </span>
            <img src={appDownloadImage} alt="app download image"/>
          <span className="text-sm">*Download the app from the App Store or Google Play</span>
        
        </div>
      </div>
    </div>
  );
}

export default Homepage;
