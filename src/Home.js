import logo from './media/logo.jpeg';
import './App.css';
import main from './media/main_pic.jpg'

function Infrared() {
  return (
    <div className="">
      <div class="grid grid-cols-7">
      <a href="/"><div><img class="h-24 pt-8 pl-8" src={logo}/></div></a>
        <a href="/infrared"><div class="h-20 pt-8 pl-12 font-thin text-xl">Infrared</div></a>
        <a href="/pano"><div class="h-20 pt-8 pl-0 font-thin text-xl">Panorama</div></a>
        <a href="/b&w"><div class="h-20 pt-8 pl-0 font-thin text-xl">Black & White</div></a>
      </div>
      <div class="h-[80vh] flex items-center justify-center solid w-100vw"><img class="h-[70vh]" src={main}/></div>
    </div>
  );
}

export default Infrared;