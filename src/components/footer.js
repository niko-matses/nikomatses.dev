import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../images/niko-matses_logo.svg';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background: #39af84;
  margin-bottom: 0;
  img {
    margin-bottom: 0;
  }
`;
const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`;

const Footer = ({ siteTitle }) => (
    <FooterWrapper>
        <FooterContainer>
            <footer className="footer" id="section6">
                <section id="contact" name="contact">
                    <a className="cta contact__cta" href="tel:9782890008">Call</a>
                    <a className="cta contact__cta" href="mailto:gigs@nikomatses.com">Email</a>
                    <span className="copyright">&copy;{new Date().getFullYear()} Niko Matses / 978.289.0008 / gigs@nikomatses.com</span>
                </section>
                <ul className="social">
                    <li className="social__icon"><a className="icon-instagram" target="_blank" href="https://www.instagram.com/niko.media">
                        <img src="img/icons/icon-instagram.svg" alt="Instagram" />
                    </a></li>
                    <li className="social__icon"><a className="icon-twitter" target="_blank" href="https://twitter.com/nik0media">
                        <img src="img/icons/icon-twitter.svg" alt="Twitter" />
                    </a></li>
                    <li className="social__icon">
                        <a className="icon-github" target="_blank" href="https://github.com/niko-matses">
                            <img src="img/icons/icon-github.svg" alt="GitHub" />
                        </a></li>
                    <li className="social__icon"><a className="icon-vimeo" target="_blank" href="https://vimeo.com/nikomedia">
                        <img src="img/icons/icon-vimeo.svg" alt="Vimeo" />
                    </a></li>
                    <li className="social__icon"><a className="icon-youtube" target="_blank"
                        href="https://www.youtube.com/channel/UCASgBK81dWMQEzc10iE9eyA">
                        <img src="img/icons/icon-youtube.svg" alt="YouTube" />
                    </a></li>
                </ul>

            </footer>
        </FooterContainer>
    </FooterWrapper>
);

Footer.propTypes = {
    siteTitle: PropTypes.string,
};

Footer.defaultProps = {
    siteTitle: ``,
};

export default Footer;
