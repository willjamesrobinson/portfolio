import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/zoomies1.JPG'
import IMG4 from '../../assets/portfolio4.png'
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
            <h3>Zoomies</h3>
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
            <h3>Spoonies</h3>
            <div className="portfolio_item-cta">
              <a href='https://github.com/willjamesrobinson/Spoonies' className='btn' target='_blank' rel="noreferrer"> Github</a>
              <a href='https://github.com/willjamesrobinson/Spoonies' className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio