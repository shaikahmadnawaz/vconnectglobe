const mentorsData = [
  {
    name: "Mr. SrinivasaReddy",
    university: "University of Houston,MC, (TX)",
    education: "Civil Engineering (Structures)",
    image: "./mentors/srinivasaReddy.jpg",
    studentsCount: 10,
    rating: 5,
    languages: "Telugu/English",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/srinivasa-reddy/",
  },

  {
    name: "Mr.Ajaybhaskar Reddy",
    university: "Sacred Heart University, (CT)",
    education: "Computer Science",
    image: "./mentors/ajaybhaskarreddy.jpg",
    studentsCount: 8,
    rating: 4.7,
    languages: "Telugu/English",
    state: "Connecticut(CT)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/ajaybhaskar-reddy/",
  },

  {
    name: "Mr.Kowshik",
    university: "University of North Texas, (TX)",
    education: "Business Analytics",
    image: "./mentors/kowshik.jpg",
    studentsCount: 9,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/kowshik-gondala/",
  },
  {
    name: "Mr.Balaji Charan",
    university: "University of Alab at Birmingham, (AL)",
    education: "Construction Management",
    image: "./mentors/Balaji.jpg",
    studentsCount: 10,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Alabama(AL)",
    country: "USA",
    appointmentLink:
      "https://vconnectglobe.com/booking/balaji-charan-chadalavada/",
  },

  {
    name: "Ms.Ushash Reddy",
    university: "University of New Haven, (CT)",
    education: "Cell and Molecular Biology",
    image: "./mentors/wcar.jpg",
    studentsCount: 7,
    rating: 4.5,
    languages: "Telugu/English",
    state: "Connecticut(CT)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/ushash-reddy/",
  },

  {
    name: "Mr.SatyaSandeep",
    university: "Wichita State University, (KS)",
    education: "Computing",
    image: "./mentors/SatyaSandeep.jpg",
    studentsCount: 8,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Kansas(KS)",
    country: "USA",
    appointmentLink:
      "https://vconnectglobe.com/booking/satyasandeep-pulletikurthi/",
  },

  {
    name: "Mr.Muneswara Rao",
    university: "Wichita State University, (KS)",
    education: "Supply Chain Management",
    image: "./mentors/MuneswararaoPotti.jpeg",
    studentsCount: 9,
    rating: 4.5,
    languages: "Telugu/English",
    state: "Kansas(KS)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/muneswara-rao-potti/",
  },

  {
    name: "Mr.Karthik Reddy",
    university: "University of New Haven, (CT)",
    education: "Civil Engineering",
    image: "./mentors/karthikReddy.jpeg",
    studentsCount: 7,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Connecticut(CT)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/karthik-reddy-maram/",
  },

  {
    name: "Mr.Avinash Reddy",
    university: "University of New Haven, (CT)",
    education: "Data Science",
    image: "./mentors/avinash.jpg",
    studentsCount: 8,
    rating: 4.5,
    languages: "Telugu/English",
    state: "Connecticut(CT)",
    country: "USA",
    appointmentLink:
      "https://vconnectglobe.com/booking/avinash-reddy-bhavanam/",
  },

  {
    name: "Mr.Dinesh",
    university: "Oklahoma Christian University, (OK)",
    education: "MSE(Computer Engineering)",
    image: "./mentors/dinesh.jpg",
    studentsCount: 9,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Oklahoma(OK)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/dinesh/",
  },

  {
    name: "Mr.Sahith",
    university: "Cleveland State University, (OH)",
    education: "CIS and MIS",
    image: "./mentors/Sahith.jpg",
    studentsCount: 10,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Ohio(OH)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/sahith",
  },

  {
    name: "Mr.Ajendar Kumar",
    university: "California State University,LB, CA)",
    education: "Geographical Information Science",
    image: "./mentors/ajendra.jpg",
    studentsCount: 10,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "California(CA)",
    country: "USA",
    appointmentLink:
      "https://vconnectglobe.com/booking/ajendar-kumar-mamindla/",
  },

  {
    name: "Ms. Bhanurekha",
    university: "University of Houston, (TX)",
    education: "Industrial Engineering",
    image: "./mentors/bhanu.jpg",
    studentsCount: 10,
    rating: 4.8,
    languages: "Telugu/English/Hindi",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/bhanurekha-yarava",
  },

  {
    name: "Mr.Pushyamithra",
    university: "Wichita State University, (KS)",
    education: "Engineering management",
    image: "./mentors/PushyamithraPabbaraju.jpg",
    studentsCount: 8,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Kansas(KS)",
    country: "USA",
    appointmentLink:
      "https://vconnectglobe.com/booking/pushyamithra-pabbaraju/",
  },

  {
    name: "Mr.Nichith",
    university: "Sacred Heart University, (CT)",
    education: "Computer Science",
    image: "./mentors/nichith.jpg",
    studentsCount: 9,
    rating: 4.5,
    languages: "Telugu/English",
    state: "Connecticut(CT)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/nichith-kondepu",
  },

  {
    name: "Mr.Ajay Babu",
    university: "University of North Texas, (TX)",
    education: "Data Science",
    image: "./mentors/ajaybabuparuchuri.jpeg",
    studentsCount: 7,
    rating: 4.7,
    languages: "Telugu/English",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/ajay-babu-paruchuri",
  },

  {
    name: "Mr.Sai Sandeep",
    university: "Texas A&M University, (TX)",
    education: "Computer Science",
    image: "./mentors/cartoon.jpg",
    studentsCount: 9,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/sai-sandeep-koritala",
  },

  {
    name: "Ms. Likhitha",
    university: "University of Houston, (TX)",
    education: "Computer Science",
    image: "./mentors/likithvarma.jpg",
    studentsCount: 10,
    rating: 4.9,
    languages: "Telugu/English/Hindi",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/likhitha-mandapati/",
  },

  {
    name: "Mr.Nikhil Varma",
    university: "Nothwest Missouri St University, (MO)",
    education: "Applied Computer Science",
    image: "./mentors/nikhilvarma.jpg",
    studentsCount: 7,
    rating: 4.7,
    languages: "Telugu/English/Hindi",
    state: "Missouri(MO)",
    country: "USA",
    appointmentLink:
      "https://vconnectglobe.com/booking/nikhil-varma-pakalapati/",
  },

  {
    name: "Mr.Sai Bhaskar",
    university: "Texas A&M University, (TX)",
    education: "Computer Science",
    image: "./mentors/Bhasar.jpg",
    studentsCount: 8,
    rating: 4.5,
    languages: "Telugu/English",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/sai-bhaskar/",
  },

  {
    name: "Mr.Mani Chandu",
    university: "Sacred Heart University, (CT)",
    education: "Computer Science",
    image: "./mentors/manichandu.jpg",
    studentsCount: 9,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Connecticut(CT)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/mani-chandu-sakhamuri/",
  },

  {
    name: "Mr.Sunal Sathvik",
    university: "University of Texas At Dallas, (TX)",
    education: "Business Analytics",
    image: "./mentors/sunalsathvik.jpg",
    studentsCount: 7,
    rating: 4.6,
    languages: "Telugu/English",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/sunal-sathvik-batchu/",
  },

  {
    name: "Mr.Sufiyan",
    university: "University of Texas at Arlington, (TX)",
    education: "Civil Egnieering (Structures)",
    image: "./mentors/sufiyaan.jpg",
    studentsCount: 7,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/sufiyan-mohammed/",
  },

  {
    name: "Mr.Karthikeya",
    university: "Clarkson University, (NY)",
    education: "Construction Management",
    image: "./mentors/karthikeya.jpg",
    studentsCount: 8,
    rating: 4.6,
    languages: "Telugu/English/Hindi",
    state: "New York(NY)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/karthikeya-thota/",
  },
  {
    name: "Mr.Tarun Sai Narayan",
    university: "University of North Carolina, (NC)",
    education: "Engineering Management",
    image: "./mentors/tarun.jpg",
    studentsCount: 9,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "North Carolina(NC)",
    country: "USA",
    appointmentLink:
      "https://vconnectglobe.com/booking/tarun-sai-narayan-gurram",
  },
  {
    name: "Mr.Rushikesh",
    university: "University of Houston, (TX)",
    education: "Computer Systems Engineering",
    image: "./mentors/rushikesh.jpg",
    studentsCount: 9,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/rushikesh-vuppala",
  },
  {
    name: "Mr.Ismail",
    university: "University of South Florida, (FL)",
    education: "Civil Engineering (Structures)",
    image: "./mentors/Ismail.jpg",
    studentsCount: 9,
    rating: 4.5,
    languages: "English/Hindi",
    state: "Florida(FL)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/ismail-mohammed/",
  },
  {
    name: "Mr.Srikanth",
    university: "Trine University, Detroit, (MI)",
    education: "Information Studies",
    image: "./mentors/srikanth.jpg",
    studentsCount: 9,
    rating: 4.5,
    languages: "Telugu/English/Hindi",
    state: "Michigan(MI)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/srikanth-kotapati/",
  },
  {
    name: "Mr.Akheel",
    university: "Illinois Institute of Technology, (IL)",
    education: "Construction Management",
    image: "./mentors/akheel.jpg",
    studentsCount: 10,
    rating: 4.5,
    languages: "English/Hindi",
    state: "IIIinois(IL)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/akheel-abbas/",
  },
  {
    name: "Mr.Sai Satish",
    university: "University of Houston,CL (TX)",
    education: "Management Information Systems",
    image: "./mentors/saisatish.jpg",
    studentsCount: 10,
    rating: 4.5,
    languages: "English/Telugu",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/sai-satish-masina/",
  },





  {
    name: "Mr.Jagadeesh",
    university: "Oklahoma Christian University, (OK)",
    education: "Science in Engineering",
    image: "./mentors/jagadeesh.png",
    studentsCount: 8,
    rating: 4.5,
    languages: "English/Telugu/Hindi",
    state: "Oklahoma(OK)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/jagadeesh-vadlamudi/",
  },

  {
    name: "Mr.Bharath",
    university: "Kent State University,(OH)",
    education: "Construction Management",
    image: "./mentors/bharath.jpg",
    studentsCount: 10,
    rating: 4.5,
    languages: "English/Telugu",
    state: "Ohio(OH)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/bharath-nimmalapudi",
  },

  {
    name: "Ms. Maheshwari",
    university: "University of Houston,MC, (TX)",
    education: "Data Science",
    image: "./mentors/maheswari.jpeg",
    studentsCount: 8,
    rating: 4.6,
    languages: "English/Telugu/Hindi",
    state: "Texas(TX)",
    country: "USA",
    appointmentLink: "https://vconnectglobe.com/booking/maheswari-korra",
  }
];
export default mentorsData;
