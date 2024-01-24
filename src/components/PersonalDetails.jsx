import { faAddressBook, faBriefcase, faGraduationCap, faPhone } from '@fortawesome/free-solid-svg-icons';
import MyImage from '../assets/39111879.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { CSSTransition } from 'react-transition-group';

export default function PersonalDetails() {
    // const componentShouldRender = true; // Set to false when you want to hide the component
    
    const linkStyle = {
        color: 'inherit', // Use 'inherit' to inherit the color from the parent, or specify a custom color
        textDecoration: 'none', // Remove underline if you want
    };

        return(
            <>
            {/* <CSSTransition
                in={componentShouldRender}
                timeout={1000} // Adjust the duration of the transition in milliseconds
                classNames="fade"
                unmountOnExit
            > */}
                        <div className='m-5'>
                            <img src={MyImage} className='rounded-4' alt="" width={'150px'} height={'150px'}/>
                        </div>
                        <div>
                            <h2 className="text-right">JONATHAN MAGAT</h2>
                            <h6 className='fst-italic' style={{color: 'rgba(255,255,255,0.2)'}}>Aspiring Software Engineer</h6>
                            {/* <h2 className="text-right">MAGAT</h2> */}
                        </div>
                        <div>
                        <hr />
                            <ul className="text-light custom-list">
                                <li>Personal Information: <br/> 
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
                                <li>Education: 
                                    <div className="d-flex p-2">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                        <p>&nbsp;&nbsp;Bachelor of Science in Computer Science at City College of Calamba</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="d-flex p-2">
                                    <a href="https://github.com/jnmagat" style={linkStyle} target="_blank"  rel="noopener noreferrer"> 
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                        &nbsp; &nbsp; &nbsp;
                                    <a href=" https://codepen.io/jnmagat/" style={linkStyle} target="_blank"  rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faCodepen} />
                                    </a>
                            </div>
                        </div>
                {/* </CSSTransition> */}
            </>
        );

}