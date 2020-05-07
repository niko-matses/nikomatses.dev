import React from 'react';
import Layout from '../components/layout';
import Projects from '../components/projects';
import SEO from '../components/seo';
import ThumbAcorn from '../images/projects/featured_acorn.jpg';
import ThumbIdealcap from '../images/projects/featured_idealcap.jpg';
import ThumbFlinggolf from '../images/projects/featured_flinggolf.jpg';
import ThumbLongwharf from '../images/projects/featured_long-wharf-capital.jpg';
import ThumbPrimary360 from '../images/projects/featured_primary360.jpg';
import ThumbWoodmont from '../images/projects/featured_woodmont-properties.jpg';
import ThumbMerrimack from '../images/projects/featured_wearemv.jpg';

const Work = ({ location }) => (
    <Layout location={location}>
        <SEO title="Work" />
        <section class="section section__projects" id="section3">

            <h2 class="main-content__headline">Recent Work</h2>
            <p class="main-content__lead-paragraph">Here are some web apps I helped to plan, design, build, and launch.</p>

            <ul class="main-content__unordered-list" style={{ margin: "auto", textAlign: "center" }}>


                <li class="project__card" style={{ background: "#a3c869" }}>
                    <div class="project__background" id="project__acorn"
                        style={{ backgroundImage: "url(/images/projects/featured_acorn.jpg)" }} >

                        <ul class="project__details">
                            <li class="project__title">Acorn Health</li>
                            <li class="project__description">Connecting families with an ABA network to find care for children with
              autism.</li>
                            <li class="project__role"><span class="project__label">Features:</span>Zip & Geolocation Search, State &amp;
              Local Resources</li>
                            <li class="project__role"><span class="project__label">Role:</span>Full-Stack Developer</li>
                            <li class="project__tools"><span class="project__label">Tools:</span> HTML, Gulp, SASS, JS, Timber</li>
                            <ul class="project__cta">
                                <a class="project__link" href="https://acornhealth.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </ul>
                        </ul>
                        <img
                            className="project__thumbnail"
                            style={{ width: "100%", maxWidth: "1600px", maxHeight: "1000px" }}
                            src={ThumbAcorn}
                            alt="Acorn Health mobile design"
                        />
                    </div>
                </li>

                <li class="project__card" style={{ background: "#197ab1" }}>
                    <div class="project__background" id="project__ideal"
                        style={{ backgroundImage: "url(/images/projects/featured_idealcap.jpg)" }}>
                        <ul class="project__details">
                            <li class="project__title">Ideal Cap Group</li>
                            <li class="project__description">A fresh look for a family-owned firm with decades of investment experience.
            </li>
                            <li class="project__role"><span class="project__label">Features:</span>UI Animation, Portfolio, Property Map
            </li>
                            <li class="project__role"><span class="project__label">Role:</span>Front-End Developer</li>
                            <li class="project__tools"><span class="project__label">Tools:</span> React, Gatsby, JSX, SASS, JS</li>
                            <ul class="project__cta">
                                <a class="project__link" href="https://idealcapgroup.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </ul>
                        </ul>
                        <img
                            className="project__thumbnail"
                            style={{ width: "100%", maxWidth: "1600px", maxHeight: "1000px" }}
                            src={ThumbIdealcap}
                            alt="Ideal Capital Group mobile design"
                        />
                    </div >
                </li >
                <li class="project__card" style={{ background: "#ffca00" }}>
                    <div class="project__background" id="project__flinggolf"
                        style={{ backgroundImage: "url(/images/projects/featured_flinggolf.jpg)" }}>
                        <ul class="project__details">
                            <li class="project__title">FlingGolf</li>
                            <li class="project__description">Getting today's generation to try this sport's new spin on traditional
              golf.</li>
                            <li class="project__role"><span class="project__label">Features:</span>Custom eCommerce, Course Locator,
              Event Calendar</li>
                            <li class="project__role"><span class="project__label">Role:</span> UX Designer, Front-End Developer</li>
                            <li class="project__tools"><span class="project__label">Tools:</span> HTML, SASS, Shopify, ThemeKit, Liquid
            </li>
                            <ul class="project__cta">
                                <a class="project__link" href="https://flinggolf.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </ul>
                        </ul>
                        <img
                            className="project__thumbnail"
                            style={{ width: "100%", maxWidth: "1600px", maxHeight: "1000px" }}
                            src={ThumbFlinggolf}
                            alt="FlingGolf mobile design"
                        />
                    </div >
                </li >
                <li class="project__card" style={{ background: "#bbd4f6" }}>
                    <div class="project__background" id="project__lwc"
                        style={{ backgroundImage: "url(/images/projects/featured_long-wharf-capital.jpg)" }}>
                        <ul class="project__details">
                            <li class="project__title">Long Wharf Capital</li>
                            <li class="project__description">Building trust between real estate investors and this Boston-based team.
            </li>
                            <li class="project__role"><span class="project__label">Features:</span>UI Animation, Portfolio, CMS, Site
              Search</li>
                            <li class="project__role"><span class="project__label">Role:</span> Mobile UI Designer, Full-Stack Developer
            </li>
                            <li class="project__tools"><span class="project__label">Tools:</span>HTML, Gulp, SASS, JS, Timber</li>
                            <ul class="project__cta">
                                <a class="project__link" href="http://longwharf.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </ul>
                        </ul>
                        <img
                            className="project__thumbnail"
                            style={{ width: "100%", maxWidth: "1600px", maxHeight: "1000px" }}
                            src={ThumbLongwharf}
                            alt="Long Wharf Captial mobile design"
                        />
                    </div>
                </li >
                <li class="project__card" style={{ background: "#08b5af" }}>
                    <div class="project__background" id="project__360"
                        style={{ backgroundImage: "url(/images/projects/featured_primary360.jpg)" }} >
                        <ul class="project__details">
                            <li class="project__title">Primary360</li>
                            <li class="project__description">Transforming how an integrated marketing agency presents itself online.
            </li>
                            <li class="project__role"><span class="project__label">Features:</span>UI Animation, Portfolio, Blog,
              Bespoke Theme</li>
                            <li class="project__role"><span class="project__label">Role:</span> UX Designer, Full-Stack Developer</li>
                            <li class="project__tools"><span class="project__label">Tools:</span> HTML, Gulp, SASS, JS, Nunjucks</li>
                            <ul class="project__cta">
                                <a class="project__link" href="https://primary360.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </ul>
                        </ul>
                        <img
                            className="project__thumbnail"
                            style={{ width: "100%", maxWidth: "1600px", maxHeight: "1000px" }}
                            src={ThumbPrimary360}
                            alt="Primary360 mobile design"
                        />
                    </div>
                </li >
                <li class="project__card" style={{ background: "#073a55" }}>
                    <div class="project__background" id="project__wmp"
                        style={{ backgroundImage: "url(/images/projects/featured_woodmont-properties.jpg)" }} >
                        <ul class="project__details">
                            <li class="project__title">Woodmont Properties</li>
                            <li class="project__description">Promoting partnership for a real estate company now in business over half a
              century.</li>
                            <li class="project__role"><span class="project__label">Features:</span>Property Filter, CMS, Bespoke Theme
            </li>
                            <li class="project__role"><span class="project__label">Role:</span> Mobile UI Designer, Full Stack Developer
            </li>
                            <li class="project__tools"><span class="project__label">Tools:</span> HTML, Gulp, SASS, JS, Timber</li>
                            <ul class="project__cta">
                                <a class="project__link" href="https://woodmontproperties.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </ul>
                        </ul>
                        <img
                            className="project__thumbnail"
                            style={{ width: "100%", maxWidth: "1600px", maxHeight: "1000px" }}
                            src={ThumbWoodmont}
                            alt="Woodmont Properties mobile design"
                        />
                    </div>
                </li >
                <li class="project__card" style={{ background: "#d3ebf1" }}>
                    <div class="project__background" id="project__gpg"
                        style={{ backgroundImage: "url(/images/projects/featured_wearemv.jpg)" }} >
                        <ul class="project__details">
                            <li class="project__title">We Are Merrimack Valley</li>
                            <li class="project__description">Bringing economic development to the region with real estate listings,
              entrepreneur interviews and other resources.</li>
                            <li class="project__role"><span class="project__label">Features:</span>Property Search/Filter, .CSV Data
              Import, Business Toolkit</li>
                            <li class="project__role"><span class="project__label">Role:</span> Mobile UI Designer, Full Stack Developer
            </li>
                            <li class="project__tools"><span class="project__label">Tools:</span>HTML, Gulp, SASS, JS, Timber, EagleView
              API</li>
                            <ul class="project__cta">
                                <a class="project__link" href="https://wearemv.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </ul>
                        </ul>
                        <img
                            className="project__thumbnail"
                            style={{ width: "100%", maxWidth: "1600px", maxHeight: "1000px" }}
                            src={ThumbMerrimack}
                            alt="We Are Merrimack Valley mobile design"
                        />
                    </div>
                </li >
            </ul >
        </section >
        <Projects />
    </Layout >
);

export default Work;
