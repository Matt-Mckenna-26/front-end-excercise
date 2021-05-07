import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import closeIcon from '../images/close.png'
import divider from '../images/divider.png'

const CovidBar = () => {
    const [active, setActive] = useState(true)

    const hideCovideAlert = () => {
        setActive(false)
    }

    return(
    active === true ? (
    <Container fluid>
        <Row className='covid-alert'>
            <div className='d-flex justify-content-center align-items-center w-100'>
                <h4 className='d-inline covid-update-head col-md-3'>Covid-19 Update</h4>
                <img className ='divider mx-3' src ={divider} /> 
                <p className='d-inline covid-update-text col-md-3'>Hopefully an element like this wont be needed on webpages soon!</p>
                <img className='close-button ml-auto' src={closeIcon} onClick={hideCovideAlert}/> 
            </div>
        </Row>
    </Container>) : null
    )
}

export default CovidBar 