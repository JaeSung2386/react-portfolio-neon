import React from 'react'
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWordpressSimple
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../assets/styles/footer.css';

const index = () => {
  return (
    <footer>
      <div className="footer">
        <div className="copyright">
          <h3>Developed by Kang Jae Seong</h3>
        </div>
        <div className="copyright">
          <h3>Copyright © 2024</h3>
        </div>
        <div className="footer-social-icons">
          <ul className="social-icons">
            <li>
              <a href="mailto:wotjd2386@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="https://github.com/JaeSung2386" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://webveloper.dev/" target="_blank">
                <FontAwesomeIcon icon={faWordpressSimple} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default index
