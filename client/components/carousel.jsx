import React from 'react';

function Carousel(props) {

  return (
    <div className="container carouselContainer">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item" data-interval="3500">
            <img src="/images/imperial-glasses.jpg" className="d-block w-100 imageRounder "></img>
          </div>
          <div className="carousel-item ">
            <img src="/images/secondary-assortment.jpg" className="d-block w-100 imageRounder" ></img>
          </div>
          <div className="carousel-item active">
            <img src="/images/pitcher-glasses.jpg" className="d-block w-100 imageRounder " ></img>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>
  );
}

export default Carousel;
