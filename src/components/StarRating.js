import {FaStar,FaStarHalfAlt,FaRegStar} from "react-icons/fa";
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar  className="text-yellow-400 text-lg" key={i}/>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt className="text-yellow-400 text-lg" key={i}/>);
    } else {
      stars.push(<FaRegStar className="text-yellow-400 text-lg" key={i}/>);
    }
  }
  console.log(stars);
  return <div className="flex gap-0.5">{stars}&nbsp; ({rating}/5)</div>;
};

export default StarRating;
