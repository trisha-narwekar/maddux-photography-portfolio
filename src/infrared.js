import logo from './media/logo.jpeg';
import './App.css';
import infra1 from './media/Infra1.jpg'
import infra2 from './media/Infra2.jpg'
import infra3 from './media/Infra3.jpg'
import infra4 from './media/Infra4.jpg'
import infra5 from './media/Infra5.jpg'
import infra6 from './media/Infra6.jpg'
import infra7 from './media/Infra7.jpg'
import infra8 from './media/Infra8.jpg'
import infra9 from './media/Infra9.jpg'
import infra10 from './media/Infra10.jpg'
import infra11 from './media/Infra11.jpg'

function Infrared() {
  const infrared_pics = [infra1, infra2, infra3, infra4, infra5, infra6, infra7, infra8, infra9, infra10, infra11]
  return (
    <div className="">
      <div class="grid grid-cols-7">
      <a href="/"><div><img class="h-24 pt-8 pl-8" src={logo}/></div></a>
        <a href="/infrared"><div class="h-20 pt-8 pl-12 font-thin text-xl">Infrared</div></a>
        <a href="/pano"><div class="h-20 pt-8 pl-0 font-thin text-xl">Panorama</div></a>
        <a href="/b&w"><div class="h-20 pt-8 pl-0 font-thin text-xl">Black & White</div></a>
      </div>
      <div class="image-grid">
        {infrared_pics.map((pic) => (
          <img class={"object-center mt-8"} src={pic}/>
        ))}
      </div>
    </div>
  );
}

export default Infrared;