import React, { useRef } from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import electricImg from "../Images/electric.jpg";
import mechanicImg from "../Images/mechanic.jpg";
import paintingImg from "../Images/painting.jpg";
import polishingImg from "../Images/polishingf.jpg";

const Services = () => {
  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    cardContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' }); // Adjusted for smaller card width
  };

  const scrollRight = () => {
    cardContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' }); // Adjusted for smaller card width
  };

  return (
    <div style={{ position: 'relative', padding: '100px' }}>
      <Button className="scroll-button" onClick={scrollLeft} style={{ position: 'absolute', left: 0, zIndex: 1 }}>
        <FaArrowCircleLeft size={30} />
      </Button>
      <div ref={cardContainerRef} style={{ overflowX: 'auto', display: 'flex', whiteSpace: 'nowrap' }}>
        <CardGroup style={{ flexWrap: 'nowrap', margin: 0 }}>
          {[electricImg, mechanicImg, paintingImg, polishingImg, polishingImg].map((img, index) => (
            <Card key={index} style={{ width: '500px', margin: '0 10px', flex: '1 0 auto' }}> 
              <CardImg alt={`Service ${index + 1}`} src={img} top style={{ height: '450px' }} /> 
              <CardBody>
                <CardTitle tag="h5">{["Electrical Services", "General Mechanic Work", "Denting and Painting", "Polishing and Nano Ceramic", "Additional Service"][index]}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">{["Diagnostics and Repairs", "Maintenance & Repair", "Body Work", "Detailing Services", "Extra Details"][index]}</CardSubtitle>
                <CardText>
  {[
    <>
      Professional electrical diagnostics, repair and maintenance <br /> for all vehicle types.
    </>,
    <>
      Comprehensive car service from experienced mechanics to keep <br /> your car running smoothly.
    </>,
    <>
      Quality dent repair and precision painting to restore <br /> your vehicle's aesthetic appeal.
    </>,
    <>
      High-quality finishing services to protect your vehicle and, <br /> give it a lasting shine.
    </>,
    <>
      Extra service details here.
    </>
  ][index]}
</CardText>


                <Button>Learn More</Button>
              </CardBody>
            </Card>
          ))}
        </CardGroup>
      </div>
      <Button className="scroll-button" onClick={scrollRight} style={{ position: 'absolute', right: 0, zIndex: 1 }}>
        <FaArrowCircleRight size={30} />
      </Button>
    </div>
  );
}

export default Services;
