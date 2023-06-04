import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import YoutubeIcon from "@material-ui/icons/YouTube";
import GithubIcon from "@material-ui/icons/GitHub";
import ReactRoundedImage from "react-rounded-image";
import Myphoto from "../assets/me.png"
import "./Home.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";



function Home() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


  return (
    <div className="home">
      <div className="about" style={{ position: "relative" }}>
        <div className="rotate">
      <ReactRoundedImage
          image={Myphoto}
          roundedColor="#05386B"
          imageWidth="300"
          imageHeight="300"
          roundedSize="26"
          borderRadius="70"
        />
        </div>
        <h2>
  {['H', 'e', 'l', 'l', 'o', ',', '\u00A0', 'M', 'y', '\u00A0', 'n', 'a', 'm', 'e', '\u00A0', 'i', 's', '\u00A0', 'A', 'n', 'd', 'r', 'e', 'w'].map((letter, index) => (
    <span
      key={index}
      className={`hello-text`}
      style={{ animationDelay: `${index / 10}s` }}
    >
      {letter}
    </span>
  ))}
</h2>
        <div className="prompt">
          <p>I am seeking a position in Software Development that will help further my skills and work towards personal projects of my own.</p>
        <div className="socialMedia">
          <GithubIcon onClick={() => window.open('https://github.com/Drewe4401')} />
          <EmailIcon onClick={() => window.open('mailto:andrewellend@gmail.com')}/>
          <YoutubeIcon onClick={() => window.open('https://www.youtube.com/channel/UCsvDJvZnu0Y-fdPtBp5s28A')} />
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/andrew-e-b87048222')}/>
        </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              React.JS, React Native, HTML, CSS, Flutter, TailwindCSS, Parallax
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET, MySQL, Firebase, Amazon Web Services, Google Cloud
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              Java, Javascript, PHP, Python, C, C#
              </span>
          </li>
          <li className="item">
            <h2>Digital Forensics</h2>
            <span>
              Autopsy, Wireshark, NetworkMiner, John the Ripper, Qemu-tool, TCPdump, VMWare, FTK Imager, Ophcrack
              </span>
          </li>
        </ol>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles"
      options={{
        background: {
            color: {
                value: "#5CDB95",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
    />
      </div>
      <div>
      </div>
      
    </div>
  );
}

export default Home;