// projects.tsx
import React from "react";
import Card from "@/components/Projects/Card";
import Heading from "@/components/Heading";

const Projects: React.FC = (): JSX.Element => {
  return (
    <div id="projects" className=" mt-7">
      <div className="mt-12 ">
        <Heading title="My Projects" />
      </div>
      <div
        className="flex flex-wrap w-full justify-center gap-x-[10rem]
       relative"
      >
        <Card
          title="Food Sprint"
          description="It's a full-stack web application for [Food-related functionality, e.g., food ordering, recipe management, restaurant display] built with a React.js frontend styled with Tailwind CSS, a Node.js and Express.js backend, and a MySQL database."
          imgLink="hehe4.png"
          githubLink="https://github.com/Nikhilhr8/vol1"
          // Removed the commented out 'icons' line - no change here, just noting it's not needed.
        />
        <Card
          title="Portfolio Website"
          description="A sleek and responsive portfolio showcasing projects, skills, and contact information."
          // Changed to absolute path for public folder assets
          imgLink="/hehe1.png"
          //liveLink="https://hima31.vercel.app/"
          githubLink="https://www.github.com/Nikhilhr8/portfolio"
          // Removed the commented out 'icons' line
        />
        <Card
          title="PC Controller with Hand Gesture"
          description="This project involved the development of a computer vision-based system that allows for touch-free control of PC functions using hand gestures, enhancing both accessibility and convenience. Leveraging OpenCV and MediaPipe, the system performs real-time hand detection and tracking, accurately mapping various gestures to specific computer actions such as cursor movement, clicking, and volume adjustments. Furthermore, PyAutoGUI was integrated to seamlessly simulate keyboard and mouse events, ensuring smooth and responsive control over system operations."
          // Changed to absolute path for public folder assets
          imgLink="/hehe.png"
          //liveLink="https://notegenius-hima31.vercel.app"
          githubLink="https://github.com/dudenrb/PC-Controller-with-Hand-Gestures"
          // Removed the commented out 'icons' line
        />
        <Card
          title="Sales Data Analysis and Reporting for a Retail Chain"
          description="This project focused on analyzing sales data for a retail chain using Python, SQL, and Excel to generate insightful reports that enhance decision-making. Python was leveraged for robust data processing, while SQL was utilized for efficient querying of the database. The culmination of this analysis was the creation of visually compelling reports in Excel, ultimately streamlining the entire data analysis and reporting pipeline for the retail chain."
          // Changed to absolute path for public folder assets
          imgLink="/hehe2.png"
          //liveLink="https://agenticmedicalai.streamlit.app/"
          githubLink="https://github.com/dudenrb/dataanalytics/tree/main"
          // Removed the commented out 'icons' line
        />

        <Card
          title="Excel Value Search and Data Extraction Tool"
          description="The Excel Value Search Tool is a web-based application designed to help users quickly find specific values within an uploaded Excel `.xlsx` file. It allows users to upload their spreadsheet, enter a search term, and then efficiently identifies and displays all instances of that value, detailing the sheet name, row number, relevant column, and the complete row data for each match, providing a convenient way to analyze spreadsheet content without needing dedicated software."
          // Changed to absolute path for public folder assets
          imgLink="/hehe3.png"
          liveLink="https://excel-value-search-wf109zrjc-nikhils-projects-343a72f6.vercel.app/"
          githubLink="https://github.com/dudenrb/excel-value-search"
          // Removed the commented out 'icons' line
        />
      </div>
    </div>
  );
};

export default Projects;