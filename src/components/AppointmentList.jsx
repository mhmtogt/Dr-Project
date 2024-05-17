import React from 'react'
import { Container ,Row,Col } from 'react-bootstrap'
import {TiDelete} from "react-icons/ti";

const AppointmentList = ({appointments}) => {
  return (
    <Container className="p-2" style={{color:"rgb(166,18,189)"}}>
        <h3>
        Appointment List
        </h3>
        {
            appointments.map(({id,patient,consulted,doctor,day})=>(
                <div key={id} className="appointments">
                    <Row>
                        <Col>
                            <h4>{patient}</h4>
                            <h5>{doctor}</h5>
                        </Col>
                        <Col>
                        <h5>Date:{day.toLocaleDateString("tr")}</h5>
                        <h6>Time:{day.toLocaleTimeStrign("tr")}</h6>
                        </Col>
                        <Col>
                        <TiDelete className="text-danger fs-1 " type="button"></TiDelete>
                        </Col>
                    </Row>
                </div>
            ))
        }
    </Container>
  )
}

export default AppointmentList