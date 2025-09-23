// import images properly
import rachid from "../assets/rachid.png";
import yahya from "../assets/yahya.png";
import abdellatif from "../assets/abdellatif.png";
import said from "../assets/said.png";
import oussama from "../assets/oussama.png";
import fati from "../assets/fati.png";
import unknown from "../assets/unknown.jpg";


// sample members data -- replace pictures/links with real ones
const members = [
  {
    id: 1,
    name: "Rachid",
    role: "President",
    image: rachid, // replace
    linkedin: "https://linkedin.com/in/example1",
    bio: "Rachid is the head chief of our club member."
  },
  {
    id: 2,
    name: "yahya",
    role: "Vice President",
    image: yahya,
    linkedin: "https://linkedin.com/in/example2",
    bio: "Yahya  is the vice president of the club, ready to fill the gaps."
  },
  {
    id: 3,
    name: "Abdellatif",
    role: "Administration",
    image: abdellatif,
    linkedin: "https://linkedin.com/in/example3",
    bio: "Abdellatif orchests the whole team's movement."
  },
  {
    id: 4,
    name: "Said",
    role: "Sponsoring Manager",
    image: said,
    linkedin: "https://linkedin.com/in/example3",
    bio: "He has one job, to find an investor (Someone to pay for us 😏)"
  },
  {
    id: 5,
    name: "Oussama",
    role: "HR Manager",
    image: oussama,
    linkedin: "https://linkedin.com/in/example3",
    bio: "Oussama is the key for good team work and cooperation intenraly."
  },
  {
    id: 6,
    name: "Fatimazohra",
    role: "Communication Manager",
    image: fati,
    linkedin: "https://linkedin.com/in/example3",
    bio: "Fatimazohra is here to speak in behalf of the whole team member in big events and ceremonies and represents the club."
  },
  {
    id: 7,
    name: "Anass",
    role: "Project Manager",
    image: unknown,
    linkedin: "https://linkedin.com/in/example3",
    bio: "We need somebody to deal with Projects palanings and work path, this is Anass "
  },
  {
    id: 8,
    name: "Hafsa",
    role: "Treasurer",
    image: unknown,
    linkedin: "https://linkedin.com/in/example3",
    bio: "The Money keeper of the club. without her we're broke hahaha."
  },
  {
    id: 9,
    name: "Mouhssine",
    role: "Events Manager",
    image: unknown,
    linkedin: "https://linkedin.com/in/example3",
    bio: "He is here to do his job, manage and coordinate work for the good of the club."
  },
  {
    id: 10,
    name: "Walid",
    role: "Media Manager",
    image: unknown,
    linkedin: "https://linkedin.com/in/example3",
    bio: "All his time is on social media _ The media sniffer_ and the one who posts our important tweets."
  }
];

export default members;
