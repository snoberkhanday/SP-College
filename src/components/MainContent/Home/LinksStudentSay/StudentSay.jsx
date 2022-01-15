import {useState} from "react";
import { Carousel } from "react-bootstrap";
const StudentSay = () => {

  const [studentReviews] = useState([
    {
      id: 1,
      student_name: "Asif Ah",
      sub_sem: "MCA (3nd Sem)",
      comment: "I am thankful that I am a part of a campus community where people look after each other. I have been so happy and comfortable from almost the moment I got here. This place is really welcoming and friendly. Teaching faculty is really amazing and experienced and their teaching methods are great."
    },
    {
      id: 2,
      student_name: "Ghulam Raza",
      sub_sem: "MSc IT (3nd Sem)",
      comment: "I am glad to provide you with my feedback about the college. My overall experience to date has been amazing, and the college is having an amazing infrastructure. This college has provided me with a number of opportunities to grow and explore my skills. The emphasis on sports along with education always helped me a lot."
    },
    {
      id: 3,
      student_name: "Ifla Mushtaq",
      sub_sem: "MA (5nd Sem)",
      comment: "I love the family-like atmosphere that surrounds me. It's a lot better than being attacked by a pack of badgers. The College really cares about its members. It is a place of civility, friendship, and good cheer. Everything about this college is great."
    }
  ]);

  return (
    <div className="col-lg-6 row-section">
      <section id="Dean">
        <h3 className="fs-5">
          <span>Students's</span> Say
        </h3>
        <div className="line-bottom"></div>
        <Carousel className="student-say-carousal" controls={false}>

          {studentReviews.map(review => (
            <Carousel.Item key={review.id} interval={1500}>
              <Carousel.Caption>
                <p>
                  {review.comment}
                </p>
                <h4>{review.student_name}</h4>
                <h5>{review.sub_sem}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <p className="mb-2"></p>
      </section>
    </div>
  );
};

export default StudentSay;
