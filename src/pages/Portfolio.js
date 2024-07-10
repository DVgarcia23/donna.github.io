import "./Portfolio.css";
import Navbar from "./Navbar";
import andy3Image from "./img/image12345.jpeg"
import andy4Image from "./img/image1234.jpeg"
import andy5Image from "./img/image3456.jpeg"
import aImage from "./img/image789.jpeg"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Portfolio 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            <h3>Projects</h3>
            <hr />
          <div className="col">
          <img className="one" src={andy3Image} />
          <h4 className="mt-5 text-center"></h4>

          <center>
                <a href="https://andymadamecila.github.io/andy123/" className="btn btn-brand shadow">
                  Click Here
                </a>
               </center>
          </div>
          <div className="col">
          <img className="two" src={andy4Image} />
          <h4 className="mt-5 text-center"></h4>
          </div>
          <div className="col">
          <img className="three" src={andy5Image} />
          <h4 className="mt-5 text-center"></h4>

          <center>
                <a href="" className="btn btn-brand shadow">
                  Click Here
                </a>
               </center>
          </div>
          <div className="col">
          <img className="four" src={aImage} />
          <h4 className="mt-5 text-center">Portfolio</h4>

          <center>
                <a href="https://andymadamecila.github.io/andy/" className="btn btn-brand shadow">
                  Click Here
                </a>
               </center>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
