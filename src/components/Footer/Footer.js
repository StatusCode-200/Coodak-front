/*eslint-disable*/

import React from "react";
import './Footer.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/Code';

function Footer() {
  return (

    <footer className="site-footer">

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify"> start bulding a web site using HTML CSS JAVASCRIPT throgh an online code editor that provide you the result of your code , also you can work with your partner in the same challenge to adjust the same file with real time connection .</p>
          </div>

          <div className="col-xs-6 col-md-3">

            <div className="footer-center">
              <h6>Contact</h6>
              <div>
                <i className="fa fa-map-marker"></i>
                <p> Amman, Jordan</p>
                <p> Ghaza, Palestine</p>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <p>+1 555 123456</p>
              </div>
            </div>

          </div>



          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/contact/">Home</a></li>
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Editor</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Regesteration</a></li>
            </ul>
          </div>
        </div>

        <hr />

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <a href="#"> {"< COODAK >"} </a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              
          

              <li><a className="facebook" href="coodak.herokuapp.com/">
              <CodeIcon /></a></li>
              <li><a className="twitter" href="www.twitter.com">
              <TwitterIcon /></a></li>
              <li><a className="dribbble" href="https://github.com/StatusCode-200/Coodak-front">
              <GitHubIcon /> </a></li>
             
            </ul>
          </div>
        </div>
      </div>

    </footer>

  );
}

export default Footer;
