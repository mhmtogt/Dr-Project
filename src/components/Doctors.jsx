import React from 'react'
import { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {doctorData} from "../helper/data"
import AddModal from './Add.Modal'


const Doctors = () => {
   const [drname, setDrName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (name) => {setShow(true)
    setDrName(name)
  };


  return (
  <Container className="p-2">
    <h3 className="display-6 mb-3" style={{ color: "rgb(166,18,189)"}}>
        Doctors
    </h3>
    <Row>
        {doctorData.map(({id,img,dep,name})=>(
            <Col key={id}>
            <img src={img} alt={name}
             className="img-thumbnail doctor-img" 
             onClick={()=>handleShow(name)}/>
            <h5>{name}</h5>
            <h6>{dep}</h6>
            </Col>
        ))}
    </Row>
    <AddModal handleClose={handleClose} show={show} drName={drname} />
  </Container>
  )
}
export default Doctors