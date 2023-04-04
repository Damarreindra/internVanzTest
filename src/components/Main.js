import React from "react";
import "../App.css";
import {
  Environment,
  Float,
  Html,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Butterfly } from "../models/Butterfly";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import img1 from './straw.jpg'
import img2 from './tooth.png'
import img3 from './eco.jpg'

function Main() {
  const navigation = useNavigate();
  const handlePage = (id) =>{
navigation(`/project/${id}`)
}
    let data = [
      {
        name: 'Straw',
        id: 'straw',
        img: img1
      },
      {
        name: 'Toothbrush',
        id: "toothbrush",
        img: img2
      },
      {
        name: 'Eco Package',
        id: "eco-package",
        img: img3
      }
    ]

  
  
  return (
    <>
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} shadowBias={-0.0001} />
      <Environment preset="warehouse" />

      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Butterfly
              rotation-x={Math.PI * 0.05}
              scale={0.05}
              position={[0, -2.5, 0]}
            />
            <Butterfly scale={0.05} position={[-10, -3, -6]} />
            <Butterfly scale={0.05} position={[10, -4, -10]} />
          </Float>

          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Butterfly scale={0.05} position={[-1, -13, 0]} />
            <Butterfly scale={0.05} position={[12, -14.5, -10]} />
          </Float>

          <Sparkles
            noise={0}
            count={500}
            speed={0.01}
            size={0.6}
            color={"#FFD2BE"}
            opacity={10}
            scale={[20, 100, 20]}
          ></Sparkles>
          <Sparkles
            noise={0}
            count={50}
            speed={0.01}
            size={10}
            color={"#FFF"}
            opacity={2}
            scale={[30, 100, 10]}
          ></Sparkles>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <Container style={{ position: "relative" }}>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0 30px",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    <span id="span-blue">R</span>ivule<span id="span-blue">t</span>
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0 30px",
                top: "100vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h2 style={{ marginBottom: "0px" }}>
                   We create product with love touch to environment
                  </h2>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0 30px",
                top: "200vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h2 style={{ marginBottom: "0px" }}>About Us</h2>
                  <p>
                  We create an eco-friendly product would be made from sustainable materials and produced using environmentally responsible practices. This could include using organic or recycled materials, reducing water usage, minimizing waste, and avoiding the use of harmful chemicals.
                  </p>
                  
                   <Button onClick={()=>handlePage("about")} variant="outline-light">Read More</Button>
  
                  
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0 30px",
                top: "300vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h2 style={{ marginBottom: "0px" }}>Products</h2>
                  
                {
                  data.map((e)=>{
                    return(
                      <div onClick={()=>handlePage(e.id)} style={{cursor:'pointer'}} className="mt-5">
                    <h3>{e.name}</h3>
                    <img id="project-img" src={e.img} alt="" />
                  </div>
                    )
                  })
                }
                 
                  
                </div>
              </Col>
            </Row> 

            <Row
              className="text-center  align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0 30px",
                
                top: "500vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h2 style={{ marginBottom: "0px" }}>Get in Touch</h2>
                  <p>We really happy if you want get to know more about us. Whether you have a question or just want to say hi, Our team try my best to get back to you!</p>
                  <a href="mailto:someone@example.com"><button className="btn btn-outline-light">Say Hello</button></a>
                 
                  
                </div>
              </Col>
            </Row> 

          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default Main;
