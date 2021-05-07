import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import WomanImg from '../images/womanimg.png'
import Shovel from '../images/dig (Stroke).png'
import Tools from '../images/tools.png'
import Cog from '../images/cog.png'
import Arrow from '../images/arrow.png'

const CarouselLFW = () => {
    return(
    <Container fluid>
        <Row className='secondary-content d-flex justify-content-between'>
            <img src={WomanImg} className='image-of-woman d-none d-lg-inline-block col-lg-3 py-2'/> 
            <div className ='secondary-info-box d-inline-block align-self-top col-lg-5 pt-3'>
                <h5 className='secondary-head-text'>The Proforce Advantage</h5>
                <p className ='secondary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Obcaecati, reiciendis nihil suscipit nostrum vel perspiciatis omnis repellat adipisci tempore ad?</p>
                <div className='sub-info-box d-flex'>
                    <img src ={Shovel} className='d-inline-block icon m-2'/>
                    <div>
                        <h6 className='sub-info-head d-inline-block'>Lorem Ipsum</h6>
                        <p className ='sub-info-text d-inline-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Obcaecati, reiciendis nihil suscipit nostrum vel perspiciatis omnis repellat adipisci tempore ad?</p>
                    </div>
                </div>
                <div className='sub-info-box d-flex'>
                    <img src ={Tools} className='d-inline-block icon m-2'/>
                    <div>
                        <h6 className='sub-info-head d-inline-block'>Lorem Ipsum</h6>
                        <p className ='sub-info-text d-inline-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Obcaecati, reiciendis nihil suscipit nostrum vel perspiciatis omnis repellat adipisci tempore ad?</p>
                    </div>
                </div>
                <div className='sub-info-box d-flex'>
                    <img src ={Cog} className='d-inline-block icon m-2'/>
                    <div>
                        <h6 className='sub-info-head d-inline-block'>Lorem Ipsum</h6>
                        <p className ='sub-info-text d-inline-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Obcaecati, reiciendis nihil suscipit nostrum vel perspiciatis omnis repellat adipisci tempore ad?</p>
                    </div>
                </div>
                <Button className='contact-btn p-1 m-2 mx-auto'>Learn More</Button>
            </div>
            <div className='col-lg-2 user-specific-toggle d-flex align-items-center p-5'>
                <h6 className='looking-for-work'>Looking for Work?</h6>
                <img src={Arrow} className='d-block'/> 
            </div>
        </Row>
    </Container>
    )
}

export default CarouselLFW