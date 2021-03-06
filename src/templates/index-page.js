import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import heart from '../img/heart.svg'
import downarrow from '../img/downarrow.svg'
import Layout from '../components/Layout'
import Work from '../components/Work'
import ProjectPreview from '../components/ProjectPreview'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import HomepageGallery from '../components/HomepageGallery'

export const IndexPageTemplate = ({
  subheading,
  aboutme,
  work,
  side,
  intro,
  older,
  index
}) => (
  <div>
    <div
      className="landing-page-container"
    >
    <HomepageGallery></HomepageGallery>

    {/*<section className="main-landing">
      <div className="landing-page-copy-container">
        <h1 className="landing-page-primary-copy">
          <span className="name">Adit Damodaran</span> is a builder at <span className="heart"><img src={heart} alt="heart" /></span>
        </h1>
        <div className="flex-break"></div>
        <h3 className="landing-page-subheading-copy">
          {subheading}
        </h3>
      </div>
    </section>

    <section className="filler" />*/}

    {/* <section id="aboutme">
      <div id="about-me-container">
        <div className="about-me">

          <div className="left-half">
            <div className="about-me-left">
              <h1 className="about-me-title">
                {aboutme.title}
              </h1>
              <h3 className="about-me-description">
                <div className="about-me-description-segment">{aboutme.description1}</div>
                <div className="about-me-description-segment">
                  {aboutme.description2}
                  <br /><br /><a href="/about">Read more about me...</a>
                  <br />
                </div>
              </h3>
            </div>
          </div>

          <div className="right-half">
            <div className="about-me-right about-me-image-container">
              <PreviewCompatibleImage
                imageInfo={{
                  image: aboutme.image,
                  alt: `Adit Damodaran`,
                  className: "about-me-image"
                }}
              />
            </div>
          </div>
        </div>

        <div id="scroll-indicators">
          <img className="scroll-indicator arrow-1" src={downarrow} alt="scroll-down-arrow" />
          <img className="scroll-indicator arrow-2" src={downarrow} alt="scroll-down-arrow" />
        </div>
      </div>
    </section> {/* END - ABOUT ME */}

    {/*<section id="social-icons">
      <div className="social-icons-sidebar">
        <ul>
          <li>
            <a href="https://twitter.com/AditDamodaran" className="" title="Twitter">
            <img className="social-icon" src={twitter} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="work">
      <div className="work-container">
      <h1 className="work-experience-title">
        Work Experience
      </h1>
      <Work></Work>
      </div>
    </section> {/* END - WORK EXPERIENCE */}
    
    {/* <section id="projects">
      <div className="project-previews-container">

      <div className="project-preview-title-container">
        <h1 className="projects-title">
          Side Projects
        </h1>
      </div>
      
      <div className="projects">
        <ProjectPreview
          title={side.projects[0].title}
          image={side.projects[0].image}
          text={side.projects[0].text}
          tech={side.projects[0].tech}
          link={side.projects[0].link}
          pageLink={side.projects[0].pageLink}
          github={side.projects[0].github}
        />
      </div>

      <div className="project-preview-title-container">
        <h1 className="projects-title">
          Work Projects
        </h1>
      </div>
      
      <div className="projects">
        <ProjectPreview
          title={work.projects[0].title}
          image={work.projects[0].image}
          text={work.projects[0].text}
          tech={work.projects[0].tech}
          pageLink={work.projects[0].pageLink}
        />
        <ProjectPreview
          title={work.projects[1].title}
          image={work.projects[1].image}
          text={work.projects[1].text}
          tech={work.projects[1].tech}
          pageLink={work.projects[1].pageLink}
        />
      </div>
      
      <div className="project-preview-title-container">
        <h1 className="projects-title">
          Freelancing
        </h1>
      </div>
      
      <div className="projects">
        <ProjectPreview
          title={intro.blurbs[0].title}
          image={intro.blurbs[0].image}
          text={intro.blurbs[0].text}
          tech={intro.blurbs[0].tech}
          link={intro.blurbs[0].link}
          pageLink={intro.blurbs[0].pageLink}
          github={intro.blurbs[0].github}
        />
        <ProjectPreview
          title={intro.blurbs[1].title}
          image={intro.blurbs[1].image}
          text={intro.blurbs[1].text}
          tech={intro.blurbs[1].tech}
          pageLink={intro.blurbs[1].pageLink}
          link={intro.blurbs[1].link}
        />
       
      </div>

      <div className="project-preview-title-container">
        <h1 className="projects-title">
          Older Projects
        </h1>
      </div>
      
      <div className="projects">
        <ProjectPreview
          title={older.projects[0].title}
          image={older.projects[0].image}
          tech={older.projects[0].tech}
          text={older.projects[0].text}
          github={older.projects[0].github}
          pageLink={older.projects[0].pageLink}
          work={true}
        />
        <ProjectPreview
          title={older.projects[1].title}
          image={older.projects[1].image}
          tech={older.projects[1].tech}
          text={older.projects[1].text}
          github={older.projects[1].github}
          pageLink={older.projects[1].pageLink}
          work={true}
        />
        <ProjectPreview
          title={older.projects[2].title}
          image={older.projects[2].image}
          tech={older.projects[2].tech}
          text={older.projects[2].text}
          github={older.projects[2].github}
          pageLink={older.projects[2].pageLink}
          work={true}
        />
      </div>
      
      </div>
    </section> {/* END - PROJECTS */}
    
    </div>{/* Close LP Container */}
  {/* Root Div */}
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout index={true}>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        aboutme={frontmatter.aboutme}
        work={frontmatter.work}
        side={frontmatter.side}
        intro={frontmatter.intro}
        older={frontmatter.older}
        index={true}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        aboutme {
          title
          description1
          description2
          description3
          description4
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
        }
        work {
          projects {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
            tech
            pageLink
          }
        }
        side {
          projects {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
            tech
            link
            github
            pageLink
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
            tech
            link
            github
            pageLink
          }
        }
        older {
          projects {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
            tech
            github
            pageLink
          }
        }
      }
    }
  }
`
