import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import banner1 from "../../Assets/images/banner_02.jpg"; // banner images
import banner2 from "../../Assets/images/food_03.jpg"; 
import banner3 from "../../Assets/images/import_03.jpg"; 
import banner4 from "../../Assets/images/building-material_03.jpg"; 

import "./Slider.css"; // importing external css file

const Slider = () => {
  const sliderItems = [
    { image: banner1, title: "Building Materials" },
    { image: banner2, title: "Food Stuff Trading" },
    { image: banner3, title: "Import & Export" },
    { image: banner4, title: "General Contracting" },
  ];

  return (
    <section id="home">
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className="swiper-style"
      >
        {sliderItems.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="image-container">
              <img
                src={slide.image}
                alt={slide.title}
                className="img-fluid mx-auto"
              />
              <div className="color-layer">
                <h3>OUR SERVICES</h3>
                <h1 className="text-white">{slide.title}</h1>
                <p>We Distribute & Represent major Brands</p>
                <a href="#Learn More">
                  <button className="btn-style">Learn More</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
