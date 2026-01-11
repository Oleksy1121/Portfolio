import React, { useEffect, useState } from "react"
import { H1, HomeContainer, ImageContainer, P, TextContainer } from "./styles"
import myImage from "../../assets/logo.jpg"

const roles = [
  "AI Engineer",
  "Python AI Developer",
  "LLM Applications Developer",
  "Machine Learning Engineer",
]

function Home() {

    const [index, setIndex] = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, []);


  return (
    <HomeContainer>
      <TextContainer>
        <P $isInit>Hey, I'm Marcin 👋🏼</P>
        <H1>
          <span className="colorAccent">{roles[index].slice(0, 7)}</span>
          {roles[index].slice(7)}

        </H1>
        <P $isDescribe>
          Building production-ready AI systems — from LLM applications and RAG pipelines
          to computer vision and reinforcement learning.
        </P>
      </TextContainer>

      <ImageContainer>
        <img src={myImage} alt="Portfolio"></img>
      </ImageContainer>
    </HomeContainer>
  )
}

export default Home