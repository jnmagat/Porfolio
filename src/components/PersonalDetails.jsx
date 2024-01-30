import {
  faAddressBook,
  faBriefcase,
  faGraduationCap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faCodepen, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyImage from "../assets/39111879.jpg";
export default function PersonalDetails() {

  const linkStyle = {
    color: "inherit", // Use 'inherit' to inherit the color from the parent, or specify a custom color
    textDecoration: "none", // Remove underline if you want
  };

  return (
    <>
      <div className="m-5">
        <img
          src={MyImage}
          className="rounded-4"
          alt=""
          width={"150px"}
          height={"150px"}
        />
      </div>
      <div >
        <h2 className="text-right">JONATHAN MAGAT</h2>
        <h6 className="fst-italic" style={{ color: "rgba(255,255,255,0.4)" }}>
          Aspiring Software Engineer
        </h6>
        {/* <h2 className="text-right">MAGAT</h2> */}
      </div>
      <div>
        <hr />
        <ul className="text-light custom-list">
          <li>
            Personal Information: <br />
            <div className="d-flex p-2">
              <FontAwesomeIcon icon={faPhone} />
              <p>&nbsp;&nbsp;+639758680388</p>
            </div>
            <div className="d-flex p-2">
              <FontAwesomeIcon icon={faAddressBook} />
              <p>&nbsp;&nbsp;#23 Brgy. Barandal Calamba City, Laguna</p>
            </div>
            <div className="d-flex p-2">
              <FontAwesomeIcon icon={faBriefcase} />
              <p>&nbsp;&nbsp;jonathanmagat96@gmail.com</p>
            </div>
          </li>
          <li>
            Education:
            <div className="d-flex p-2">
              <FontAwesomeIcon icon={faGraduationCap} />
              <p>
                &nbsp;&nbsp;Bachelor of Science in Computer Science at City
                College of Calamba
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="d-flex p-2">
          <a
            href="https://github.com/jnmagat"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          &nbsp; &nbsp; &nbsp;
          <a
            href=" https://codepen.io/jnmagat/"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}
