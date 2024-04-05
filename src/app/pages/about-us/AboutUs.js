import { Link } from "react-router-dom";

import ctu_logo from "../../resources/images/ctu-logo.jpg";
import buddy_logo from "../../resources/images/ctu-buddy-logo.png";
import zandre_pic from "../../resources/images/zandre-pic.jpeg";
import mzwakhe_pic from "../../resources/images/mzwakhe-pic.jpg";
import bophelo_pic from "../../resources/images/bophelo-pic.jpg";
import luzuko_pic from "../../resources/images/luzuko-pic.jpg";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="default-box content" id="about-us-container">
      <section>
        <h3>About CTU</h3>
        <a
          href="https://ctutraining.ac.za/"
          className="image-container"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ctu_logo} className="logo-img" alt="" />
        </a>
        <p>
          CTU Training Solutions is an award-winning private tertiary education
          provider and has been developing skilled professionals since 1987. We
          offer training solutions for full time and part time students. Our
          national qualifications and international vendor-related
          certifications are updated regularly according to industry standards
          and pave the road to success for our graduates entering future jobs
          introduced by the 4th Industrial Revolution. We also offer short
          courses that are skills-based and vendor-specific. International
          certifications are available to specific relevant qualifications. CTU
          Training Solutions is a Level 2 B-BBEE contributor and can assist
          companies with learnerships. CTU is also registered with the
          Department of Higher Education as a Private Higher Education
          Institution. We have over 14 registered ICT learnerships up to NQF
          Level 6. Skills shortages are a key threat to the future growth of
          South African businesses. Upskilling the existing workforce is vital
          for securing a business' future and ensuring it remains competitive.
          If you or your employees are well trained, they'll be more productive,
          leading to increased efficiency, and higher profits for your business.
          With faculties in IT, Design, Business & Management, Engineering and
          Humanities, participants have the choice to study full time (1 to
          3-year qualifications and technical and other diplomas) or part time
          (qualifications, short courses and skills development programmes).
        </p>
      </section>
      <hr />
      <section>
        <h3>About The CTU Buddy System</h3>
        <Link to="/" className="image-container">
          <img src={buddy_logo} className="logo-img" alt="" />
        </Link>
        <br />
        <a
          href="https://github.com/zwepener/CTU-Buddy-CWD412-FA1"
          id="git-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          <span>&nbsp;• CTU-Buddy-CWD412-FA1</span>
        </a>
        <p>
          The CTU Buddy System is an innovative website designed to enhance the
          academic journey of CTU Training Solutions' students. With a focus on
          collaboration and resource sharing, our platform offers a suite of
          features tailored to support and enrich the learning experience. The
          CTU Buddy System mirrors the commitment of CTU Training Solutions to
          foster a community of skilled professionals. By providing a platform
          for students to connect, collaborate, and access essential academic
          tools, we empower them to excel in their studies and prepare for the
          challenges of the 4th Industrial Revolution. Join us in shaping a
          future where education is interactive, accessible, and always within
          reach.
        </p>
      </section>
      <hr />
      <section>
        <h3>Meet the Team (Group VRG)</h3>
        <div className="default-box profile">
          <img src={zandre_pic} alt="" />
          <div className="profile-details">
            <span>
              <b>Name:</b> Zandré Wepener
            </span>
            <br />
            <span>
              <b>Role(s):</b>
            </span>
            <br />
            <ul>
              <li>Leader</li>
              <li>Project Manager</li>
            </ul>
          </div>
        </div>
        <div className="default-box profile">
          <img src={mzwakhe_pic} alt="" />
          <div className="profile-details">
            <span>
              <b>Name:</b> Mzwakhe Khumalo
            </span>
            <br />
            <span>
              <b>Role(s):</b>
            </span>
            <br />
            <ul>
              <li>Web Page Designer</li>
              <li>Programmer</li>
            </ul>
          </div>
        </div>
        <div className="default-box profile">
          <img src={bophelo_pic} alt="" />
          <div className="profile-details">
            <span>
              <b>Name:</b> Bophelo Malepu
            </span>
            <br />
            <span>
              <b>Role(s):</b>
            </span>
            <br />
            <ul>
              <li>Web Page Designer</li>
              <li>Programmer</li>
            </ul>
          </div>
        </div>
        <div className="default-box profile">
          <img src={luzuko_pic} alt="" />
          <div className="profile-details">
            <span>
              <b>Name:</b> Luzuko Sinxezi
            </span>
            <br />
            <span>
              <b>Role(s):</b>
            </span>
            <br />
            <ul>
              <li>Web Page Designer</li>
              <li>Programmer</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
