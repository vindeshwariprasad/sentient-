import React, { createContext, useState, useContext } from 'react';

// Create Contexts
const JobContext = createContext();
const UserContext = createContext();
const ApplicationContext = createContext();
const initialUserDetails = {
    id:1,
    name: "Orlando Diggs",
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/330px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg"
  };
  const initialApplications = [];
// Sample Job Details Data
const initialJobDetails = [
  {
    jobId: 1,
    companyName: "Google",
    category: "Software_Development",
    location: "Bangalore, India",
    monthlySalary: "₹1,50,000",
    jobName: "Software Engineer",
    designation: "Frontend Developer",
    roleType: "Full-Time",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/36px-Google_%22G%22_logo.svg.png?20230822192911",
    description: "As a Frontend Developer at Google, you will be responsible for designing, developing, and maintaining responsive web applications using React.js. You will collaborate with UI/UX designers and backend developers to ensure seamless user experiences. Your role includes optimizing performance, ensuring cross-browser compatibility, and integrating APIs efficiently. The ideal candidate should have a strong understanding of JavaScript, modern frontend frameworks, and best coding practices. Additionally, you will participate in code reviews, mentor junior developers, and contribute to architectural decisions for scalable applications.",
    requirements: ["Experience with React.js and JavaScript", "Strong problem-solving skills", "Knowledge of RESTful APIs", "Proficiency in HTML, CSS, and TypeScript", "Understanding of state management libraries", "Good communication skills"]
  },
  {
    jobId: 2,
    companyName: "Amazon",
    category: "Software_Development",
    location: "Hyderabad, India",
    monthlySalary: "₹1,80,000",
    jobName: "Backend Engineer",
    designation: "Node.js Developer",
    roleType: "Full-Time",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png",
    description: "Amazon is looking for a skilled Backend Engineer with expertise in Node.js to build and maintain highly scalable applications. You will be responsible for designing API architectures, optimizing database performance, and ensuring security best practices are followed. The role requires experience in cloud-based environments, working with microservices, and handling real-time data processing. You will work closely with frontend developers and DevOps teams to create robust applications that meet business needs and customer demands.",
    requirements: ["Proficiency in Node.js and Express.js", "Experience with SQL and NoSQL databases", "Knowledge of AWS services like Lambda and S3", "Understanding of authentication protocols", "Familiarity with CI/CD pipelines", "Strong debugging and troubleshooting skills"]
  },
  {
    jobId: 3,
    companyName: "Microsoft",
    category: "Business_Consulting",
    location: "Pune, India",
    monthlySalary: "₹2,00,000",
    jobName: "Business Consultant",
    designation: "Strategy Analyst",
    roleType: "Full-Time",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png",
    description: "Microsoft is seeking a Business Consultant to analyze market trends, provide strategic insights, and assist clients in achieving their business goals. The role involves conducting research, preparing reports, and working with stakeholders to design and implement effective business strategies. You will be responsible for identifying opportunities for process improvements, developing financial models, and presenting recommendations to executives. A strong understanding of data analytics, competitive analysis, and industry trends is essential to excel in this role.",
    requirements: ["Experience in business analysis and consulting", "Strong analytical and problem-solving skills", "Proficiency in Excel, SQL, and Power BI", "Excellent communication and presentation skills", "Understanding of financial modeling and risk assessment", "Ability to work with cross-functional teams"]
  },
  {
    jobId: 4,
    companyName: "TCS",
    category: "Business_Consulting",
    location: "Mumbai, India",
    monthlySalary: "₹80,000",
    jobName: "Management Consultant",
    designation: "Process Improvement Specialist",
    roleType: "Full-Time",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/768px-Tata_Consultancy_Services_Logo.svg.png?20210617123944",
    description: "TCS is hiring a Management Consultant to help businesses optimize processes and improve efficiency. The role involves analyzing current workflows, identifying bottlenecks, and recommending solutions to enhance productivity. You will work on large-scale transformation projects, assist in change management, and collaborate with clients to achieve business objectives. A strong understanding of business process modeling, data analysis, and operational strategy is essential to drive impactful changes in organizations.",
    requirements: ["Knowledge of process optimization techniques", "Experience in Lean Six Sigma methodologies", "Strong data-driven decision-making skills", "Proficiency in business intelligence tools", "Excellent stakeholder management skills", "Ability to work in a dynamic environment"]
  },
  {
    jobId: 5,
    companyName: "Infosys",
    category: "Software_Development",
    location: "Chennai, India",
    monthlySalary: "₹90,000",
    jobName: "Full Stack Developer",
    designation: "Software Engineer",
    roleType: "Full-Time",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/600px-Infosys_logo.svg.png",
    description: "Infosys is looking for a Full Stack Developer who can work on end-to-end development of web applications. You will be responsible for developing both frontend and backend components, integrating third-party APIs, and ensuring application security. The role requires a strong grasp of JavaScript frameworks, backend development with Node.js or Java, and experience with cloud platforms. Collaboration with UI/UX designers, DevOps engineers, and business analysts will be an essential part of your day-to-day activities.",
    requirements: ["Experience in frontend and backend development", "Proficiency in React.js, Angular, or Vue.js", "Knowledge of backend technologies like Node.js or Java", "Familiarity with SQL and NoSQL databases", "Understanding of cloud-based deployments", "Ability to write scalable and maintainable code"]
  },
  {
    jobId: 6,
    companyName: "Infosys",
    category: "Consulting",
    location: "Bangalore, India",
    monthlySalary: "₹1,20,000",
    jobName: "IT Consultant",
    designation: "Consultant",
    roleType: "Full-Time",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/600px-Infosys_logo.svg.png",
    description: "Infosys is looking for an experienced IT Consultant to provide strategic guidance to clients on technology adoption, digital transformation, and IT infrastructure optimization. The role involves working closely with stakeholders, analyzing business needs, and recommending cutting-edge IT solutions. You will be responsible for driving technology-driven business growth, ensuring compliance, and assisting in cloud migration initiatives.",
    requirements: ["Experience in IT consulting", "Strong problem-solving skills", "Knowledge of cloud platforms like AWS or Azure", "Familiarity with enterprise IT architecture", "Ability to communicate technical concepts to non-technical stakeholders", "Experience in project management and business analysis"]
  }
];

// Provider Component
export const AppProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState(initialJobDetails);
  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const [applications, setApplications] = useState(initialApplications);

  // Function to Add a New Job Application
  const addApplication = (applicationData) => {
    setApplications((prev) => [...prev, {id:prev.length+1,...applicationData}]);
  };

  return (
    <JobContext.Provider value={{ jobDetails, setJobDetails }}>
      <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <ApplicationContext.Provider value={{ applications, addApplication }}>
          {children}
        </ApplicationContext.Provider>
      </UserContext.Provider>
    </JobContext.Provider>
  );
};

// Custom Hooks for Context Usage
export const useJob = () => useContext(JobContext);
export const useUser = () => useContext(UserContext);
export const useApplication = () => useContext(ApplicationContext);