// components/Experience/Experience.tsx
import { Timeline } from "@/components/ui/timeline"; // Adjust path if necessary
import { WobbleCard } from "../ui/wobble-card"; // Adjust path if necessary
import Heading from "@/components/Heading"; // Adjust path if necessary

export default function Experience() {
  const data = [
    {
      title: "Jan 2025 - Present",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>Software Engineer Intern</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>Company:</strong> Flexi Analyst
            </h3>
            <p className="mt-2 text-left text-lg md:text-xl font-semibold text-white">
              <strong>Role Type:</strong> Internship
            </p>
            <p className="mt-2 text-left text-lg md:text-xl font-semibold text-white">
              <strong>Duration:</strong> 6 months
            </p>
            <p className="mt-2 text-left text-lg md:text-xl font-semibold text-white">
              <strong>Location:</strong> Remote
            </p>
            {/* You can add responsibilities or key achievements here */}
            {/*
            <h4 className="mt-4 text-left text-xl font-semibold text-white">
              Responsibilities:
            </h4>
            <ul className="list-inside list-disc text-lg md:text-xl text-white">
              <li>Developed and maintained web applications.</li>
              <li>Contributed to backend API development.</li>
            </ul>
            */}
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "Jun 2023 - Jul 2023",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>C++ & DS Intern</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>Company:</strong> Internship Studio
            </h3>
            <p className="mt-2 text-left text-lg md:text-xl font-semibold text-white">
              <strong>Role Type:</strong> Internship
            </p>
            <p className="mt-2 text-left text-lg md:text-xl font-semibold text-white">
              <strong>Duration:</strong> 2 months
            </p>
            <p className="mt-2 text-left text-lg md:text-xl font-semibold text-white">
              <strong>Location:</strong> India · Remote
            </p>
            {/* You can add responsibilities or key achievements here */}
            {/*
            <h4 className="mt-4 text-left text-xl font-semibold text-white">
              Responsibilities:
            </h4>
            <ul className="list-inside list-disc text-lg md:text-xl text-white">
              <li>Worked on data structures and algorithms in C++.</li>
              <li>Implemented various problem-solving techniques.</li>
            </ul>
            */}
          </div>
        </WobbleCard>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col items-center space-y-3 mt-7">
      <div className="mb-0">
        <Heading title="Experience" />
      </div>
      <div className="mt-0">
        <Timeline data={data} />
      </div>
    </div>
  );
}