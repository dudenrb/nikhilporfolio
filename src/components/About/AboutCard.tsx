import { ImPointRight } from "react-icons/im";

const AboutCard = (): JSX.Element => {
  return (
    <div className="p-4 sm:p-8 w-full max-w-[640px] mx-auto">
      {/* Main Column */}
      <div className="flex flex-col space-y-6">
        {/* First Row: Introduction Text */}
        <div className="text-gray-800 dark:text-gray-200 text-base sm:text-lg md:text-xl">
          <p className="text-justify text-wrap ">
            Hi, Myself{" "}
            <span className="text-purple-500 font-semibold">Nikhil Raj</span>,
            recent B.Tech. graduate in{" "}
            <span className="text-purple-500 font-semibold">
              Computer Science and Engineering
            </span>{" "}
            at JIIT Noida,
            located in{" "}
            <span className="text-purple-500 font-semibold">
              Uttar Pradesh, India
            </span>
            .
          </p>
        </div>

        {/* Second Row: Passion Text */}
        <div className="text-gray-800 dark:text-gray-200 text-base sm:text-lg md:text-xl">
          <p className="text-justify text-wrap ">
            I’m passionate about using technology to solve real-world challenges
            and actively looking for opportunities to contribute to innovative
            projects.
          </p>
        </div>

        {/* Third Row: Snapshot and Skills */}
        <div className="text-gray-800 dark:text-gray-200 text-base sm:text-lg md:text-xl">
          {/* Snapshot Heading */}
          <p className="mb-4 text-justify text-wrap ">
            Here's a snapshot of what I love to do:
          </p>

          {/* Skills List */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-3">
              <ImPointRight className="text-purple-500 mt-1" />
              <span>
                Proficient in{" "}
                <span className="font-semibold">
                  React, Node.js, Express.js, Mysql, MongoDb, JavaScript, Tailwind CSS, Mediapipe
                </span>
                , and <span className="font-semibold">OpenCV</span>.
              </span>
            </div>
            
            <div className="flex items-start space-x-3">
              <ImPointRight className="text-purple-500 mt-1" />
              <span>
                Comfortable with {" "}
                <span className="font-semibold">Frontend and Backend development</span> and{" "}
                <span className="font-semibold">Data Science and Analytics</span>.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <ImPointRight className="text-purple-500 mt-1" />
              <span>
                Proficient in version control using{" "}
                <span className="font-semibold">Git</span> and collaborating on
                projects through <span className="font-semibold">GitHub</span>.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <ImPointRight className="text-purple-500 mt-1" />
              <span>
                Strong background in <span className="font-semibold">C++</span>{" "}
                for competitive programming and problem-solving.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
