import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/zoomies1.JPG'
import IMG4 from '../../assets/portfolio4.png'
import J1 from '../../assets/jimnybits.png'
import J2 from '../../assets/jimnybits2.png'
import J3 from '../../assets/jimnbybits3.png'
// import IMG5 from '../../assets/portfolio5.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <div className="contents">
            <h3>Zoomies</h3>
            <p>An online platform designed to bring together dog owners with the goal of socialising pups from a young age. Similar to the workings of Tinder, users create a profile and swipe left and right depending on the type of dog and owner. </p>
          </div>
          <p><small>Ruby on Rails - JavaScript - Bootstrap - RESTful APIs</small></p>
          <div className="portfolio_item-cta">
            <a href='https://github.com/willjamesrobinson/zoomies_app' className='btn' target='_blank' rel="noreferrer"> Github</a>
            <a href='https://github.com/willjamesrobinson/zoomies_app' className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
            {/* <img src={IMG5} alt="" /> */}
          </div>
          <div className="contents">
            <h3>Spoonies</h3>
            <p>A marketplace website with the aim of locating and booking someone for some cuddles!</p>
          </div>
          <p><small>Ruby on Rails - JavaScript - Bootstrap - Heroku</small></p>
          <div className="portfolio_item-cta">
            <a href='https://github.com/willjamesrobinson/Spoonies' className='btn' target='_blank' rel="noreferrer"> Github</a>
            <a href='https://github.com/willjamesrobinson/Spoonies' className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={J1} alt="" />
              </div>
              <div class="carousel-item">
                <img src={J2} alt="" />
              </div>
              <div class="carousel-item">
                <img src={J3} alt="" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onclick="$('#myCarousel').carousel('prev')">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onclick="$('#myCarousel').carousel('next')">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            </div>
          </div>
          <div className="contents">
            <h3>Jimny Bits</h3>
            <p>A design for an online ecommerce store made for selling specific parts for the Suzuki Jimny.</p> 
          </div>
          <p><small>React - CSS - JavaScript</small></p>
          <div className="portfolio_item-cta">
            <a href='https://github.com/willjamesrobinson/jimny-store' className='btn' target='_blank' rel="noreferrer"> Github</a>
            <a href='https://jimny-bits.vercel.app/' className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio