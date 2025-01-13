import Image from "next/image";
import Header from "./components/header";
import ImageUploader from "./components/ImageUploader";
import Howitwork from "./components/Howitwork";
import Slider from "./components/slider";
import Footer from "./components/Footer";
import Programs from "./components/Programs";
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <Header />
      <div>
        {/* <Slider/> */}
      </div>
  
      {/* Upload Section */}
      {/* <ImageUploader /> */}
<ImageUploader/>
      {/* how it works */}
      <Howitwork />
      <Programs/>
    {/* footer */}
      <Footer/>
    </div>
  );
}
