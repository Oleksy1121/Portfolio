import React from "react"
import { AboutCard, AboutContainer, ContextContainer } from "./styles"
import gallup from "../../assets/gallup.jpg"
import university from "../../assets/university.jpg"
import dataAnalyze from "../../assets/data-analize.jpg"
import mountain from "../../assets/mountain.jpg"

function About() {
  return (
    <AboutContainer id="about">
      <h1 className="section-title">About me</h1>

      <AboutCard className="app-card">
        <ContextContainer>
          <h2>My Journey into AI/ML</h2>
          <p>
            My fascination with AI and machine learning began during my Master's studies in{" "}
            <strong>Automation and Robotics</strong> at <strong>Poznań University of Technology</strong>, where I
            specialized in <strong>Intelligent Systems</strong>. This program placed a strong emphasis on machine
            learning algorithms, artificial intelligence, and computer vision, laying a solid foundation for my further
            development.
          </p>
          <img src={university} alt="university"></img>
        </ContextContainer>

        <ContextContainer $reverse>
          <h2>Practical Experience & Continuous Growth</h2>
          <p>
            I honed my skills working with data as a <strong>Senior Equipment Engineer</strong> at{" "}
            <strong>LG Energy Solution</strong>, where effective data analysis was crucial for making quick and
            well-informed decisions in a dynamic production environment. Building on this foundation, I've developed{" "}
            <strong>end-to-end AI systems</strong> — from model training and evaluation to API deployment on cloud
            infrastructure.
          </p>
          <img src={dataAnalyze} alt="data analyze"></img>
        </ContextContainer>

        <ContextContainer>
          <h2>Technical Approach</h2>
          <p>
            I focus on building AI systems that work in production — with proper error handling, monitoring, and
            deployment pipelines. Each project in my portfolio includes containerization with <strong>Docker</strong>,{" "}
            <strong>CI/CD</strong> automation via GitHub Actions, and cloud deployment on <strong>GCP</strong> or{" "}
            <strong>AWS</strong>.
          </p>
          <img src={gallup} alt="technical approach"></img>
        </ContextContainer>

        <ContextContainer $reverse>
          <h2>Beyond the Code</h2>
          <p>
            Outside of work, I recharge in nature—especially walking through parks and forests—and by staying physically
            active. This helps me maintain a fresh mind and a creative approach to challenges.
          </p>
          <img src={mountain} alt="mountain"></img>
        </ContextContainer>
      </AboutCard>
    </AboutContainer>
  )
}

export default About