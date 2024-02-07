import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import food from "../assets/img/Food.jpg";
import chatcord from "../assets/img/chat-cord.jpg";
import eccomerce from "../assets/img/ecomerce.jpg";
import realestate from "../assets/img/real-estate.jpg";
import finances from "../assets/img/financial.jpg";
import music from "../assets/img/Music.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Food App",
      description: "Developed this app to adept in crafting sophisticated food applications, leveraging MongoDB, Express.js, React, and Node.js. Expertise includes seamless UI design, robust payment integration, and performance optimization for an elevated user experience.",
      imgUrl: food,
    },
    {
      title: "Real-Estate Site",
      description: "Seasoned React Developer specializing in the creation of polished real estate websites, proficient in delivering intuitive user interfaces, advanced property search features, and for an optimal online property exploration experience.",
      imgUrl: realestate,
    },
    {
      title: "Ecommerce Api",
      description: "Expert Node.js Developer specializing in E-commerce APIs, proficient in designing and implementing robust backend solutions. Skilled in building scalable and secure RESTful APIs,efficient E-commerce platform.",
      imgUrl: eccomerce,
    },
    {
      title: "Chart-Cord",
      description: "Chart-cord Developer proficient in Socket.IO, adept at architecting real-time communication solutions for dynamic and interactive charting applications. Skilled in creating seamless, data-driven experiences with efficient socket connections for enhanced collaboration and visualization.",
      imgUrl: chatcord,
    },
    {
      title: "Finances",
      description: "Innovative Financial Literacy App Developer leveraging TOPSIS model for precise decision-making. Proficient in crafting intuitive interfaces and implementing personalized learning paths to empower users with comprehensive financial knowledge.",
      imgUrl: finances,
    },
    {
      title: "Music App",
      description: "Creative HTML/CSS Developer specializing in sleek and responsive music applications. Proficient in designing visually captivating interfaces with seamless navigation, enhancing user experiences in the world of music exploration.",
      imgUrl: music,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Built a dynamic applications using MERN stack, featuring seamless MongoDB data storage, an Express.js RESTful API, and a React-based intuitive user interface. Overcame challenges, delivering a scalable solution with potential for future enhancements.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
