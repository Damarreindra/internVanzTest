import React from 'react'
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
function AboutMe() {
  return (
    <>
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} shadowBias={-0.0001} />
      <Environment preset="warehouse" />

      <ScrollControls pages={2} damping={0.25}>
        <Scroll>
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
           
           
            <Butterfly scale={0.05} position={[10, -4, -10]} />
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
              <Col xs={10}>
                <div>
                  <p style={{ marginTop: "200px" }}>
                  Hi there, I'm Damarreindra Ihya Ullummuddien, a web developer with a passion for building fast, user-friendly websites and web applications. I love using my skills to create innovative and impactful digital experiences that help people achieve their goals. With 2 years of experience in web development, I've worked on a variety of projects ranging from simple landing pages to complex web applications.

                  </p>
                  <p>
                  One of my key strengths is my ability to collaborate with designers, developers, and stakeholders to create solutions that meet business needs and user requirements. I enjoy working in an agile and iterative development environment, where I can use my problem-solving skills to overcome challenges and deliver high-quality results.
When I'm not working on web development projects, you can usually find me exploring new technologies, attending industry events, or contributing to open-source projects. I'm always looking for new opportunities to learn, grow, and make a positive impact in the world of web development.
                  </p>
                  <p>
                  Here are a few technologies I’ve been working with recently:
                  </p>
                  <ul id='list'>
                    <li> React JS</li>
                    <li> JavaScript(ES6+)</li>
                    <li> PHP</li>
                    <li> MySQL</li>
                  </ul>     
                </div>
              </Col>
            </Row>
           
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default AboutMe