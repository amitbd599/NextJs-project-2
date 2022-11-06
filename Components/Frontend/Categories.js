import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Categories = () => {
  return (
    <>
      <section id="catogory">
        <div className="container">
          <div className="catogory_text">
            <h2>Categories</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div id="slider_carosal">
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="frontend_asset/img/slider/image 3.png"
                          alt=""
                        />
                        <h4>Vegetables</h4>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="frontend_asset/img/slider/image 3.png"
                          alt=""
                        />
                        <h4>Vegetables</h4>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="frontend_asset/img/slider/image 3.png"
                          alt=""
                        />
                        <h4>Vegetables</h4>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="frontend_asset/img/slider/image 3.png"
                          alt=""
                        />
                        <h4>Vegetables</h4>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="frontend_asset/img/slider/image 3.png"
                          alt=""
                        />
                        <h4>Vegetables</h4>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="frontend_asset/img/slider/image 3.png"
                          alt=""
                        />
                        <h4>Vegetables</h4>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="frontend_asset/img/slider/image 3.png"
                          alt=""
                        />
                        <h4>Vegetables</h4>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="frontend_asset/img/slider/image 3.png"
                          alt=""
                        />
                        <h4>Vegetables</h4>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="frontend_asset/img/slider/image 3.png"
                          alt=""
                        />
                        <h4>Vegetables</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="next">
                  <i className="fas fa-chevron-right" />
                </div>
                <div className="prev">
                  <i className="fas fa-chevron-left" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
