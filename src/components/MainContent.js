import React from 'react' 
import { Container, Row, Button } from 'react-bootstrap'
import imageOfMan from '../images/image.png'

const MainContent = () => {
    return (
        <Container fluid>
            <Row className='main-content d-flex'>
                <img src={imageOfMan} className='image-of-man d-none d-lg-inline-block col-lg-4'/>
                <div className='d-inline-block col-md-10 col-lg-6 p-3 align-self-center mx-auto'>
                    <h6 className='main-content-head d-inline-block'>Explore Your Potential With ProForce.</h6>
                    <p className='main-content-text d-inline-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iusto maiores ducimus modi corporis dignissimos repellat repellendus quis similique at voluptate?</p>
                    <Button className='main-btn m-1'>
                        Search Current Jobs
                    </Button>
                    <Button className ='main-btn m-1'>
                        Hire Workers
                    </Button>
                </div>
            </Row>
        </Container>
    )
}

export default MainContent