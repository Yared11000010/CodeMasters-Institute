import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';
export default function About({setPlayState}) {
    return (
        <div className='about' id='about_us'>
            <div className="about-left">
                <img src={about_img} className='about-img' alt="" />
                <img src={play_icon} className='play-icon' onClick={()=>{setPlayState(true)}} alt="" />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow Leaders Today</h2>
                <p>Academic Excellence and Opportunities
                    Universities are institutions dedicated to higher learning, offering a wide array of programs
                    that foster academic excellence and personal growth. They provide students with the
                    opportunity to engage in rigorous coursework, cutting-edge research, and diverse
                    extracurricular activities. Whether it’s through lectures, lab work, or collaborative projects,
                    universities equip students with the knowledge.
                </p>
                <p>The university experience extends beyond academics, encompassing a vibrant campus life that
                    nurtures personal development and community engagement. Students have access to numerous clubs,
                    organizations, and sports teams that cater to a variety of interests and passions.
                   
                </p>
                <p>Universities play a crucial role in preparing students for their future careers and roles
                    in society. They offer career services, including job fairs, resume workshops, and
                    networking events, which help students transition from academic life to the professional world.
                    
                </p>
            </div>
        </div>
    )
}
