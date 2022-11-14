import React from "react";
import { BsClock, BsCheckCircleFill } from "react-icons/bs";
import { Container, ContainerName, LogInfo } from "./styles";
import Tag from "../Tag";

const UserPhoto = () => {
  const abilities = [
    "HTML",
    "CSS",
    "SASS",
    "JS",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "Flask",
    "Django",
    "NumPy",
    "Pandas",
    "Data Analysis",
    "MySql",
    "GraphQL",
    "D3.js",
    "Gatsby",
    "Docker",
    "Heroku",
    "Git",
  ];

  return (
    <Container>
      <img
        src="https://static8.depositphotos.com/1003410/850/i/950/depositphotos_8501485-stock-photo-portrait-of-young-man-close.jpg"
        alt="men"
      ></img>
      <ContainerName>
        <h2>Asabeneh Yetayeh </h2>
        <BsCheckCircleFill className="iconCheck" />
      </ContainerName>
      <p>Senior Developer, Finland</p>
      <h3>SKILLS</h3>
      {abilities.map((item) => (
        <Tag tagName={item} />
      ))}
      <LogInfo>
        <BsClock />
        <p>Joined on Aug 30, 2020</p>
      </LogInfo>
    </Container>
  );
};

export default UserPhoto;
