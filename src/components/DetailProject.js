import React from "react";
import img1 from './straw.jpg'
import img2 from './tooth.png'
import img3 from './eco.jpg'
import { useParams } from "react-router";
import {
  Environment,
  Float,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import { Col, Container, Row } from "react-bootstrap";
import { Butterfly } from "../models/Butterfly";

function DetailProject() {
  const { id } = useParams();

  const detailProject = [
    {
      id: "straw",
      name: "Bamboo Straw",
      text:'One popular type of eco-friendly straw is made from bamboo. Bamboo is a renewable resource that grows quickly and can be harvested without causing damage to the environment. Bamboo straws are durable and can be used multiple times before being composted at the end of their life cycle. They are also easy to clean and maintain, making them a convenient option for both home and on-the-go use.',
      price: 35000,
      img: img1,
    },
    {
      id: "toothbrush",
      name: "Bambroosh",
      text:'An eco-friendly toothbrush is a sustainable alternative to the traditional plastic toothbrushes that end up in landfills and oceans. It is a toothbrush made from biodegradable or recyclable materials, which reduces waste and pollution.',
      price: 15000,
      img: img2
    },
    {
      id: "eco-package",
      name: "EcoPack",
       text:'We have another type of eco-friendly product that is recyclable packaging. Recyclable packaging is made from materials such as paper, cardboard, glass, and certain types of plastics, which can be recycled and reused to make new products. By using recyclable packaging, we can reduce the amount of waste that ends up in landfills and oceans.',
       price: 15000,
      img: img3
    },
  ];
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
                {detailProject
                  .filter((e) => e.id === id)
                  .map((e) => {
                    return (
                      <div>
                        <h1 style={{ marginBottom: "0px" }}>
                       Introducing  
                        </h1>
                        <h2>{e.name}</h2>
                      </div>
                    );
                  })}
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0 30px",
                top: '100vh'
              }}
            >
              <Col xs={6}>
                {detailProject
                  .filter((e) => e.id === id)
                  .map((e) => {
                    return (
                      <div>
                      <img src={e.img} alt="" />
                      <h3 className="mt-3">Rp.{e.price}</h3>
                      <p className="mt-5">{e.text}</p>
                      </div>
                    );
                  })}
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default DetailProject;
