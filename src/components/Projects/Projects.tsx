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
        />
        <Card
          title="Portfolio Website"
          description="A sleek and responsive portfolio showcasing projects, skills, and contact information."
          imgLink="/hehe1.png"
          liveLink="https://nikhilporfolio.vercel.app/"
          githubLink="https://github.com/dudenrb/nikhilporfolio/tree/main"
        />
        <Card
          title="PC Controller with Hand Gesture"
          description="This project involved the development of a computer vision-based system that allows for touch-free control of PC functions using hand gestures, enhancing both accessibility and convenience. Leveraging OpenCV and MediaPipe, the system performs real-time hand detection and tracking, accurately mapping various gestures to specific computer actions such as cursor movement, clicking, and volume adjustments. Furthermore, PyAutoGUI was integrated to seamlessly simulate keyboard and mouse events, ensuring smooth and responsive control over system operations."
          imgLink="/hehe.png"
          githubLink="https://github.com/dudenrb/PC-Controller-with-Hand-Gestures"
        />
        <Card
          title="Sales Data Analysis and Reporting for a Retail Chain"
          description="This project focused on analyzing sales data for a retail chain using Python, SQL, and Excel to generate insightful reports that enhance decision-making. Python was leveraged for robust data processing, while SQL was utilized for efficient querying of the database. The culmination of this analysis was the creation of visually compelling reports in Excel, ultimately streamlining the entire data analysis and reporting pipeline for the retail chain."
          imgLink="/hehe2.png"
          githubLink="https://github.com/dudenrb/dataanalytics/tree/main"
        />

        <Card
          title="Excel Value Search and Data Extraction Tool"
          description="The Excel Value Search Tool is a web-based application designed to help users quickly find specific values within an uploaded Excel `.xlsx` file. It allows users to upload their spreadsheet, enter a search term, and then efficiently identifies and displays all instances of that value, detailing the sheet name, row number, relevant column, and the complete row data for each match, providing a convenient way to analyze spreadsheet content without needing dedicated software."
          imgLink="/hehe3.png"
          liveLink="https://excel-value-search-wf109zrjc-nikhils-projects-343a72f6.vercel.app/"
          githubLink="https://github.com/dudenrb/excel-value-search"
        />
      </div>
    </div>
  );
};

export default Projects;
