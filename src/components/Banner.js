import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = ({banner}) => {
  return (
    <Carousel fade nextLabel='' prevLabel=''>

        {banner.end.map((item,index)=>(
                    <Carousel.Item key={item.image} id='banner' interval={2000} keyboard={true}>
                        <img className='d-block w-100' src={item.image} alt={`${index} banner`} />

                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.source}</p>
                            <u>Read more</u>
                        </Carousel.Caption>
                    </Carousel.Item>
        ))}

    </Carousel>
  )
}

export default Banner