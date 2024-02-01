var JSONdata = 
{ 
    "Experience": {
        "Graduate Engineer Trainee - intern": "Bannari Amman Institute Of Technology| Sathyamangalam \n ● Guided and led teams in completing web projects.\n● Taught C programming to first-year students. \n  ● Collaborated on project management and delivery",
        "Associate Technical Consultant - intern": " Acquired proficiency in the Appian platform during the internship.● Developed applications independently on the Appian platform.● Acquired valuable skills in creating intuitive and user-friendly UI/UX designs while developing \napplications independently on the Appian platform. \n ● Collaborated with a team to successfully deliver a comprehensive application project"
    },
    "Projects": {
        "FORM BUILDER APPLICATION": " For Dynamic Form Creation and Response Tracking",
        "SAFE SAFARI": "Online Seat Booking for Daily Commuter ",
        "SENSITIZING TOY": "To Teach good touch and bad Touch"
    },
    "Education": "B.E in Electrical and Electronics Engineering",
    "Skills": {
        "LANGUAGE": "[C, JavaScript, SQL, Python]",
        "WEB_DEVELOPMENT": "[HTML, CSS,JavaScript]",
        "TECHNOLOGY": "[Git, MySQL]",
        "PERSONAL_SKILLS": "[Leadership, Team Worker, Organization, Communication]"
    },
    "Activities": {
        "ONLINE_COURSE": "Coursera -UI/UX (4 weeks), C Fundamentals (4 weeks), Udemy - Web Development with \n JavaScript (72 hours)",
        "PROJECT_PRESENTATION": "Secured top 10 in EnCode: Invent For Life (UDGAM, IIT Guwahati) - Presented \n Safe Safari (2020)",
        "HACKATHON": " Participated in VIT Hackathon - Presented Evaluation of Education(2020)",
        "HOBBIES": " Cycling, Reading Books , Editing (Photo & Video)"
    }
};
var obj = JSON.stringify(JSONdata)
console.log(JSON.parse(obj));

// ******************** object to json**************************
const resume = {
    Experience: {
      "Graduate Engineer Trainee - intern": "Bannari Amman Institute Of Technology | Sathyamangalam\n   ● Guided and led teams in completing web projects.\n   ● Taught C programming to first-year students.\n   ● Collaborated on project management and delivery",
      "Associate Technical Consultant - intern": "Acquired proficiency in the Appian platform during the internship.\n   ● Developed applications independently on the Appian platform.\n   ● Acquired valuable skills in creating intuitive and user-friendly UI/UX designs while developing applications independently on the Appian platform.\n   ● Collaborated with a team to successfully deliver a comprehensive application project"
    },
    Projects: {
      "FORM BUILDER APPLICATION": "For Dynamic Form Creation and Response Tracking",
      "SAFE SAFARI": "Online Seat Booking for Daily Commuter",
      "SENSITIZING TOY": "To Teach good touch and bad Touch"
    },
    Education: "B.E in Electrical and Electronics Engineering",
    Skills: {
      LANGUAGE: ["C", "JavaScript", "SQL", "Python"],
      WEB_DEVELOPMENT: ["HTML", "CSS", "JavaScript"],
      TECHNOLOGY: ["Git", "MySQL"],
      PERSONAL_SKILLS: ["Leadership", "Team Worker", "Organization", "Communication"]
    },
    Activities: {
      ONLINE_COURSE: "Coursera - UI/UX (4 weeks), C Fundamentals (4 weeks), Udemy - Web Development with JavaScript (72 hours)",
      PROJECT_PRESENTATION: "Secured top 10 in EnCode: Invent For Life (UDGAM, IIT Guwahati) - Presented 'Safe Safari' (2020)",
      HACKATHON: "Participated in VIT Hackathon - Presented Evaluation of Education(2020)",
      HOBBIES: "Cycling, Reading Books, Editing (Photo & Video)"
    }
  };
  
  // Accessing values
  console.log(JSON.stringify(resume));
  console.log(resume.Skills.LANGUAGE);
  