import {
  FaRegMoneyBillAlt,
  FaRegBuilding,
  FaRegHandshake,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdSchool, MdLocationOn } from "react-icons/md";
const topicsData = [
  {
    icon: <FaRegMoneyBillAlt className="text-5xl text-green-500" />,
    title: "Application Process & Fee Structure",
    text: "Tips in preparing strong and competitive application forms as well as understanding the cost structure and budgeting for tuition fee and other expenses",
  },
  {
    icon: <FaRegBuilding className="text-5xl text-red-500" />,
    title: "Visa Experience & Interview Tips",
    text: "Sharing experiences on complete procedure of procuring visa successfully as per regulations, right from application process to the effective interview preparation",
  },
  {
    icon: <MdLocationOn className="text-5xl text-yellow-500" />,
    title: "Best Accommodation Options",
    text: "Insights into various accommodation options available and advice on best and safe option as per your financial standards and the location of university",
  },
  {
    icon: <FaRegMoneyBillAlt className="text-5xl text-green-500" />,
    title: "Scholarships and Grants",
    text: "Advice on identifying various eligible university scholarships available and tips on preparation of an impressive profile and application that fetches grants",
  },
  {
    icon: <MdSchool className="text-5xl text-blue-500" />,
    title: "Course Work & Internship Opportunities",
    text: "Guidance on opting academic and non-academic programs that enhance your profile and identifying internship opportunities as per your professional goals",
  },
  {
    icon: <FaChalkboardTeacher className="text-5xl text-blue-500" />,
    title: "RA & TA Opportunities",
    text: "Guidance on meeting the eligibility criteria for Research & Teaching Assistant positions and strategies to achieve through association with potential faculty and research labs ",
  },
  {
    icon: <FaRegHandshake className="text-5xl text-purple-500" />,
    title: "On & Off Campus Job Opportunities",
    text: "Suggestions on acquiring various competitive on-campus jobs through professional networking, as well as, knowledge on possibility of off-campus jobs in city ",
  },
  {
    icon: <FaRegMoneyBillAlt className="text-4xl text-green-500" />,
    title: "Financial Management",
    text: "Insights into better management of tuition fee and living expenses abroad and advice on ways of acquiring additional financial support like educational loans ",
  },
];

export default topicsData;
