import './HomeUser.css';
import images from '../../images/deadpool.jpg'
import Moviecard from '../../components/MovieCard/MovieCard.js';



const HomeUser = () => {
  return (
    <div>

      <div  id="carouselExampleSlidesOnly" class="carousel slide"   data-bs-ride="carousel" >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={images} class="d-block w-100" alt="images1" />
          </div>
          <div class="carousel-item">
            <img src={images} class="d-block w-100" alt="images2" />
          </div>
          <div class="carousel-item">
            <img src={images} class="d-block w-100" alt="images3" />
          </div>
        </div>
        <Moviecard></Moviecard>


      </div>


    </div>
  );
};

export default HomeUser;
