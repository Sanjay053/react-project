import { Button } from "react-bootstrap";
import { Services } from "../crud/employee";

function Service() {
  return (
    <div>
      <div className="image-container">
        <img
          src="https://source.unsplash.com/random"
          alt="load_image"
          className="service-main-image"
        />
        <div className="text-overlay">
          <div className="text-content-center">
            <p className="img-name">Akash</p>
            <p className="img-name">Build a Better Cleaning Company</p>
            <p className="sub-heading">
              Welcome to Demo Page of cleanstor is super powerful Cleaning
              Company Template, cleanstor is Modern and Clean HTML5 Template.
              Have a look around and discover its features.
            </p>
          </div>
          <div className="img-bottom">
            <Button className="btn-bottom btn-success">button1</Button>
            <Button className="btn-bottom btn-success">button2</Button>
          </div>
        </div>
      </div>
      
      <div className="all-services">
      {/* <p className="features-container">All Service</p> */}
        {Services.map((service) => (
          <div className="service-container">
            <img
              src={service.Img}
              alt="service-img"
              className="service-img"
              key={service.Id}
            />
            <h3 className="text-center service-name">{service.Name}</h3>
          </div>
        ))}
      </div>

      <p className="features-container">All Features</p>

      <h1 className="text-center p-5">Under construction</h1>
    </div>
  );
}

export default Service;
