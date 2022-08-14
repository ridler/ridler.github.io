import { Link } from "react-router-dom";

import "./Creative.css";

export default function Creative() {
  return (
    <div className="Creative">
      <nav className="Creative-nav">
        <div className="Creative-nav-content">
          <Link to="/" className="Home-label-link">
            FTJR
          </Link>
          <pre className="Creative-nav-breadcrumb">/</pre>
          <Link to="" className="Creative-nav-breadcrumb">
            creative
          </Link>
          <pre className="Creative-nav-breadcrumb">/</pre>
          <select>
            <option>Short Fiction</option>
            <option>Sacred Path</option>
            <option>YouTube</option>
            <option>Instagram</option>
          </select>
        </div>
      </nav>
      <div className="Creative-outlet">
        <p>
          History The word "résumé" comes from the French word résumer meaning
          'to summarize'.[5] Leonardo da Vinci is credited with the first
          résumé, though his "résumé" takes the form of a letter written about
          1481–1482 to a potential employer, Ludovico Sforza.[6][7] For the next
          450 years, the résumé continued to be a mere description of a person
          and included their abilities and past employment. In the early 1900s,
          résumés listed things like weight, height, marital status, and
          religion. It was not until 1950 that the résumé evolved into something
          more than words written on scraps of paper. By then, résumés were
          considered very much mandatory and started to include information like
          personal interests and hobbies. It was not until the 1970s, the
          beginning of the Digital Age, that résumés took on a more professional
          look in terms of presentation and content.[8] The start of the 21st
          century saw a further evolution for résumés on the internet as social
          media helped people spread résumés faster. In 2003 LinkedIn was
          launched, which allowed users to post their resumes and skills
          online.[9] Other than LinkedIn, several other SaaS companies are now
          helping job seekers with free résumé builders or résumé templates.
          These online résumé builders usually provide templates to insert
          credentials and experience and create a résumé to download or an
          online portfolio link to share via social media.[10] With the launch
          of YouTube in 2006, Video résumés pick up, and more and more high
          school students began to send them to different colleges and
          universities.[11] Description In many contexts, a résumé is typically
          limited to one or two pages of size A4 or letter-size, highlighting
          only those experiences and qualifications that the author considers
          most relevant to the desired position. Many résumés contain keywords
          or skills that potential employers are looking for via applicant
          tracking systems, make heavy use of active verbs, and display content
          in a flattering manner. Acronyms and credentials after the applicant's
          name should be spelled out fully in the appropriate section of the
          résumé to increase the likelihood they are found in a computerized
          keyword scan.[12] A résumé is a marketing document in which the
          content should be adapted to suit each individual job application or
          applications aimed at a particular industry. In late 2002, job seekers
          and students started making interactive résumés such as résumés having
          links, clickable phone numbers and email addresses. With the launch of
          YouTube in 2006, job seekers and students also started to create
          multimedia and video résumés.[13] Job seekers were able to circumvent
          the job application process and reach employers through direct email
          contact and résumé blasting, a term meaning the mass distribution of
          résumés to increase personal visibility within the job market.
          However, the mass distribution of résumés to employers can often have
          a negative effect on the applicant's chances of securing employment as
          the résumés tend not to be tailored for the specific positions the
          applicant is applying for. It is usually, therefore, more sensible to
          optimize the résumé for each position applied for and its keywords. In
          order to keep track of all experiences, keeping a "master résumé"
          document is recommended, providing job seekers with the ability to
          customize a tailored résumé while making sure extraneous information
          is easily accessible for future use if needed. The complexity or
          simplicity of various résumé formats tends to produce results varying
          from person to person, for the occupation, and the industry. Résumés
          or CVs used by medical professionals, professors, artists, and people
          in other specialized fields may be comparatively longer. For example,
          an artist's résumé, typically excluding any non-art-related
          employment, may include extensive lists of solo and group exhibitions.
        </p>
      </div>
    </div>
  );
}
