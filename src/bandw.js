import logo from './media/logo.jpeg';
import './App.css';
import main_picture from './media/main_pic.jpg'
import lake_pic from './media/lake_pic.png'
import band from './media/bandw.jpg'

function Bandw() {
  const bandw_pics = [lake_pic, band]
  return (
    <div className="">
      <div class="grid grid-cols-7">
      <a href="/"><div><img class="h-24 pt-8 pl-8" src={logo}/></div></a>
        <a href="/infrared"><div class="h-20 pt-8 pl-12 font-thin text-xl">Infrared</div></a>
        <a href="/pano"><div class="h-20 pt-8 pl-0 font-thin text-xl">Panorama</div></a>
        <a href="/b&w"><div class="h-20 pt-8 pl-0 font-thin text-xl">Black & White</div></a>
      </div>
      <div class="image-grid">
        {bandw_pics.map((pic) => (
          <img class={"object-center mt-8"} src={pic}/>
        ))}
      </div>
    </div>
  );
}

export default Bandw;