import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import IconQuote from '../images/icons/icon_quote.svg';
import IconGlobe from '../images/icons/icon_globe.svg';
import IconGrad from '../images/icons/icon_college.svg';
import IconCard from '../images/icons/icon_card.svg';
import IconTrophy from '../images/icons/icon_trophy.svg';
import IconWindow from '../images/icons/icon_window.svg';
import IconDatabase from '../images/icons/icon_database.svg';
import IconBulb from '../images/icons/icon_bulb.svg';
import IconBranch from '../images/icons/icon_branch.svg';
import IconHtml from '../images/icons/icon_html.svg';
import IconSass from '../images/icons/icon_sass.svg';
import IconHourglass from '../images/icons/icon_hourglass.svg';
import IconUser from '../images/icons/icon_user.svg';
import IconEye from '../images/icons/icon_eye.svg';
import IconMobile from '../images/icons/icon_mobile.svg';
import IconDesktop from '../images/icons/icon_desktop.svg';
import IconRocketship from '../images/icons/icon_rocketship.svg';

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" />

    <div class="main-content__margins">
      <section class="section section__experience" id="section4">
        <h3 class="main-content__headline">Past Experience</h3>
        <ul>
          <li class="main-content__paragraph">
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconGlobe}
              alt="Niko Matses"
            />
            <h3 class="main-content__subhead">2007 - 2011</h3> I got started as a freelance designer and web developer
            in 2007, networking and learning more new skills in the field year after year.
          </li>
          <li class="main-content__paragraph">
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconGrad}
              alt="Niko Matses"
            />
            <h3 class="main-content__subhead">2012</h3> For the Summer I was an ID Tech Camps instructor of Photography
            and Web Development courses to kids and teens on the MIT campus in Cambridge, MA.
          </li>
          <li class="main-content__paragraph">
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconCard}
              alt="Niko Matses"
            />
            <h3 class="main-content__subhead">2013 - 2020</h3>My first agency experience began at Primary Design as a
            Junior Developer. I learned so much while too helping Primary grow over seven years.
          </li>
          <li class="main-content__paragraph">
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconTrophy}
              alt="Niko Matses"
            />
            <h3 class="main-content__subhead">2016</h3>As my expanding role in the planning of Web projects matured, I
            earned an official title of (the agency's first) UX Designer!
          </li>
          <li class="main-content__paragraph">
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconWindow}
              alt="Niko Matses"
            />
            <h3 class="main-content__subhead">2018</h3>I jumped from building single page applications with Meteor to
            pursue the more popular JavaScript framework, React.
          </li>
          <li class="main-content__paragraph">
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconBulb}
              alt="Niko Matses"
            />
            <h3 class="main-content__subhead">2020</h3>Today, I freelance full-time as a UX Designer &amp; Front-End
            Developer, seeking future work with a fun and talented digital product team.
          </li>
        </ul>
      </section>
      <section class="section section__skills" id="section5">
        <h2 class="main-content__headline">Dev Skills</h2>

        <h3 class="main-content__subhead">
          <img
            className="skill__icon"
            style={{ width: '30px', height: '30px' }}
            src={IconDatabase}
            alt="Niko Matses"
          />Full Stack</h3>
        <p class="main-content__paragraph">Handling server-side duties like hosting, DNS, databases, SSL certificates
          and SEO best practices has been my job for over 50 web products.</p>

        <h3 class="main-content__subhead">
          <img
            className="skill__icon"
            style={{ width: '30px', height: '30px' }}
            src={IconBranch}
            alt="Niko Matses"
          />
            GIT &amp; Github</h3>
        <p class="main-content__paragraph">I've pushed over 350 commits in the past year. I know my way around Terminal,
          Bitbucket.com, GitHub.com and Git to collaborate with a team of developers.</p>

        <h3 class="main-content__subhead">
          <img
            className="skill__icon"
            style={{ width: '30px', height: '30px' }}
            src={IconHtml}
            alt="Niko Matses"
          />
            HTML5</h3>
        <p class="main-content__paragraph">I enjoy coding with semantic HTML5 &mdash; it's more meaningful to my fellow
          developers and better-suited for modern devices, browsers and search engines.</p>

        <h3 class="main-content__subhead">
          <img
            className="skill__icon"
            style={{ width: '30px', height: '30px' }}
            src={IconSass}
            alt="Niko Matses"
          />
            SASS</h3>
        <p class="main-content__paragraph">Who knew styling could be so much fun? Not only does SASS make my days coding
          easier, it's helped me improve as a front-end developer.</p>

        <h3 class="main-content__subhead">
          <img
            className="skill__icon"
            style={{ width: '30px', height: '30px' }}
            src={IconHourglass}
            alt="Niko Matses"
          />
            Task Runners</h3>
        <p class="main-content__paragraph">Gulp, Webpack etc. have saved countless hours from my development workflow.
          They can be used to live-update, prefix, preprocess, concatenate, minify, template, theme, and more.</p>
      </section>
      <section class="section section__skills">
        <h2 class="main-content__headline">Design Skills</h2>

        <h3 class="main-content__subhead">
          <img
            className="skill__icon"
            style={{ width: '30px', height: '30px' }}
            src={IconUser}
            alt="Niko Matses"
          />
            User Experience</h3>

        <p class="main-content__paragraph">Learning and applying UXD has transformed my web design workflow. Research
          and planning can align the objectives of a product's stakeholders with its users.</p>

        <h3 class="main-content__subhead">
          <img
            className="skill__icon"
            style={{ width: '30px', height: '30px' }}
            src={IconEye}
            alt="Niko Matses"
          />

            User Interface</h3>

        <p class="main-content__paragraph">A good UI begins with competitive research and plenty of sketching.
        Understand the problem and let usability testing solve the rest. Last but not least, apply strong visual
          design.</p>

        <h3 class="main-content__subhead">
          <img
            className="skill__icon"
            style={{ width: '30px', height: '30px' }}
            src={IconMobile}
            alt="Niko Matses"
          />
            Responsive / Web</h3>

        <p class="main-content__paragraph">Always mobile-first, BrowserSync device testing aids in my quality
          assessments. When I'm crafting web components and design systems, no screen size goes overlooked.</p>

        <h3 class="main-content__subhead">
          <img
            className="skill__icon"
            style={{ width: '30px', height: '30px' }}
            src={IconDesktop}
            alt="Niko Matses"
          />
            Graphic</h3>

        <p class="main-content__paragraph">While majoring in Visual Communications I gained a deeper understanding of
          graphic design and its principles. I'm still learning and use Adobe CC's design apps on a weekly basis.</p>

        <h3 class="main-content__subhead">
          <img
            className="skill__icon"
            style={{ width: '30px', height: '30px' }}
            src={IconRocketship}
            alt="Niko Matses"
          />Motion</h3>


        <p class="main-content__paragraph">Since drawing flipbooks as a kid I've always dabbled in animation. Today my
          motion design chops apply to projects in Adobe Animate, Premiere Pro, CSS3 and JavaScript.</p>
      </section>
      <section class="section section__experience" id="section7">
        <h2 class="main-content__headline">Testimonials</h2>
        <p class="main-content__lead-paragraph">Here are some web apps I helped to design, build, launch and maintain.
        </p>
        <ul class="testimonials">
          <li class="testimonial main-content__paragraph">
            <blockquote class="testimonial__quote" cite="https://www.linkedin.com/in/nikomatses">Niko has a natural
            interest in learning new things and creative problem solving. He is open to new ideas, listens to feedback
            and continuously pushes for a more positive user experience.
            </blockquote>
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconQuote}
              alt="testimonial by"
            />
            <h3 class="testimonial__author-name main-content__subhead">Victoria Tran</h3>
            <p class="testimonial__author-role">Digital Media Marketer <br />International Data Group</p>
          </li>
          <li class="testimonial main-content__paragraph">
            <blockquote class="testimonial__quote" cite="https://www.linkedin.com/in/nikomatses">He is a level head,
            from discussing the rationale behind development standards to providing valued feedback on design
              prototypes.</blockquote>
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconQuote}
              alt="testimonial by"
            />
            <h3 class="testimonial__author-name main-content__subhead">Nelson Lourenço</h3>
            <p class="testimonial__author-role">User Interface Designer <br />TSD Rental</p>
          </li>
          <li class="testimonial main-content__paragraph">
            <blockquote class="testimonial__quote" cite="https://www.linkedin.com/in/nikomatses">Niko opened our eyes to
            the creative possibilites and his up-to-date knowledge excited us. He delivered a great looking site and
            continually offers suggestions for better functionality. He knows his stuff and continues to learn.
            </blockquote>
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconQuote}
              alt="testimonial by"
            />
            <h3 class="testimonial__author-name main-content__subhead">Phillip Dunn</h3>
            <p class="testimonial__author-role">Supervisor <br />Wise Construction</p>
          </li>
          <li class="testimonial main-content__paragraph">
            <blockquote class="testimonial__quote" cite="https://www.linkedin.com/in/nikomatses">He's a very organized,
            determined and intelligent guy who brings a growth mindset to every assignment, and rises to meet new
              challenges.</blockquote>
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconQuote}
              alt="testimonial by"
            />
            <h3 class="testimonial__author-name main-content__subhead">Michael Bourne</h3>
            <p class="testimonial__author-role">Vice President <br />Matter Communications</p>
          </li>
          <li class="testimonial main-content__paragraph">
            <blockquote class="testimonial__quote" cite="https://www.linkedin.com/in/nikomatses">Niko works well
            independently as well as with a group. When a task was delegated to him, he would extend himself further;
            seeing if there was anything else he could do to help out. It's nice to work with someone who genuinely
            cares about what they're doing and the mark they're leaving behind. Simply put, this is a guy you want on
              your team because day in and out, he gives it his all.</blockquote>
            <img
              className="skill__icon"
              style={{ width: '30px', height: '30px' }}
              src={IconQuote}
              alt="testimonial by"
            />
            <h3 class="testimonial__author-name main-content__subhead">Kwadwo Amo-Mensah</h3>
            <p class="testimonial__author-role">Camp Director (Fairfield, CT) <br />ID Tech Camps</p>
          </li>
        </ul>
      </section>
    </div>

  </Layout>
);

export default About;
