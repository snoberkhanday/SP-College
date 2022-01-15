import Image from "react-bootstrap/Image";
import "./About.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const About = () => {
  return (
    <div className="Aboutpage_image">
      <div className="Aboutpage_about">
        <div className="about-us-breadcrumb-heading">About Us</div>
        <div className="Aboutpage_links mt-3 mt-md-4">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>About Us</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Image src="/images/banner.jpg" />

      <div className="container my-5">
        <div className="Aboutpage_description">
          <h1>About Us</h1>
          <p>
            S.P College, the oldest and premier institute of higher education in
            Kashmir embodies a history of 107 years of its glorious past. It was
            established in 1905, as an intermediate college by upgrading the
            famous Hindu high school, Srinagar. It was the personal effort of
            notable British social reformer and educationist, Dr. Annie Besant
            who directed the central Hindu college trust, Benares (to which it
            was affiliated) to appoint, Mr. M.u. Moore, a noted Irish scholar as
            the first principal of the institution. Beginning with a modest roll
            of eight students and only six teachers on its staff, in a few
            years’ time, the college rose to the degree level in arts by 1911
            when state government took it over and renamed it Sri Pratap College
            after the name of the then ruler of the state maharaja Pratap Singh.
            In 1912 the college was affiliated to the Punjab University, Lahore
            with state patronage available to it by virtue of which the growth
            of S.P. College received a notable fillip. Ever since, the
            development of the college has been a steady process persisting
            through the entire span of the 20th century.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="Aboutpage_description">
          <p>
            During the tenure of prof. I.K. Sharga (1911-1921) the science
            stream up to the intermediate level was introduced in the college
            curriculum. The dynamic and ablest academics and administrator like
            prof. M. U. Moore, prof. Vinamali Chakarvati, prof. Jia Lal Kaul and
            prof. Saif-ud-din have served the college and contributed to the
            level that the hundreds of the college alumni rose to eminence in
            different fields of human activity in the state, by occupying
            important positions.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="Aboutpage_description">
          <p>
            The history of S.P, college is in fact the history of progress of
            higher education in Kashmir. Almost for the first half of the 20th
            century, S.P. College had the distinction of being the only
            institution to provide facilities for imparting higher education in
            arts and science disciplines in the valley. Despite a good number of
            college coming in to existence in the valley after 1947, this
            college continues to maintain its primacy and academic excellence
            all along. With the delinking of arts faculty from it in 1975. S.P.
            College is now an exclusively science college imparting science
            education at undergraduate level in a broad spectrum of subjects
            like botany, chemistry, bio-chemistry, zoology, information
            technology, electronics, physics, mathematics, statistics with as
            many as 37 subject combination. In a significant stride forward the
            college is running P.G. Level programmes in chemistry and
            environmental science 2003. Five more P.G Level programmes in
            various science subjects as in pipeline.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="Aboutpage_description">
          <p>
            The college is on its way to broaden the entire spectrum of science
            education in the light of modern perspective. Emerging skill based
            courses like B.Sc., forensics and B.Sc., human genetics with due
            support from the industry, stand proposed by the college.
          </p>
        </div>
      </div>

      <div>
        <div className="Aboutpage_aims py-4 container">
          <div className="row">
            <div className="col-12 col-md-4 px-md-4">
              <h1> Our Mission</h1>
              <p>
                "Work towards preparing men and women who are intellectual
                adventurers and not camp followers; who are architects of the
                future and not curators of the past"
              </p>
            </div>

            <div className="col-12 col-md-4 mt-5 mt-md-0 px-md-4">
              <h1> Our Vision</h1>
              <p>
                To Strive, To Seek, To Find Out,Not To Yeild. To Eke out an
                honourable living by honing the potential of the learners in the
                direction of employability. To educate budding scientific-minded
                educands to blend the scientific knowledge with socio-culture
                needs of the society.
              </p>
            </div>

            <div className="col-12 col-md-4 my-5 my-md-0 px-md-4">
              <h1> Our Core Values</h1>
              <p>
                <span>1. Excellence </span> <br />
                <span>2. Social Respopnsibility</span>
                <br />
                <span>3. Inclusivity</span> <br />
                <span>4. Ethics of Service</span>
                <br />
                <span>5. Integrity</span>
                <br />
                <span>6. Accountibility</span>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
