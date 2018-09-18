import React, {Component} from 'react';

const About = () => {

  return (
    <div className="about">
    <h1 id="aboutHeader">We Are Party Potensh!</h1>
    <h4 id="aboutSubHeader">Say hello in person or message us...</h4>
<div>
      <iframe title='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8927982927253!2d-97.74535464951542!3d30.26863551481292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b506497312a5%3A0x5391dc72f60b76da!2s600+Congress+Ave%2C+Austin%2C+TX+78701!5e0!3m2!1sen!2sus!4v1533590620639" styles={{width: "600", height: "450", frameborder: "0", style: "border:0"}}></iframe>
    </div>
    <form id="aboutForm">
      <textarea id="contactComment" name="contactUs" placeholder="Tell us what's up!">
      </textarea>
      <input id="contactEmail" type="email" placeholder="Email Address"/>
        <input id="contactSubmit" type="submit"/>

        </form>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

      </div>

      )
};
export default About;
