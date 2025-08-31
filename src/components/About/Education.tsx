import { Timeline } from "@/components/ui/timeline";
import { WobbleCard } from "../ui/wobble-card";
import Heading from "@/components/Heading";
export default function TimelineDemo() {
  const data = [
    {
      title: "Oct 2021 - May 2025",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>B.Tech in Computer Science And Engineering</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>Institute:</strong> Jaypee Institute of Information
              Technology, Noida (JIIT)
            </h3>
            <p className="mt-2 text-left text-lg md:text-xl font-semibold text-white">
              <strong>CGPA:</strong> 7.5
            </p>

            <h4 className="mt-4 text-left text-xl font-semibold text-white">
              Responsibilities:
            </h4>
            <ul className="list-inside list-disc text-lg md:text-xl text-white">
              <li>
                <strong>Coordinator of GDSC:</strong> Leading
                and coordinating Google Developer Student Clubs initiatives.
              </li>
              <li>
                <strong>Member of Student Placement Committee (SPC):</strong>Coordinating Student Placement Committee initiatives.
              </li>
              <li>
                <strong>Member, National Service Scheme (NSS):</strong> Engaged in community service initiatives focused on cleanliness drives, blood donation camps, etc.
              </li>

              <li>
                <strong>Member, Jaypee Youth Club (JYC):</strong> Participated actively in various community service projects and events organized by JYC such as College Fest, Raising Funds for 
College Society, etc.
              </li>
            </ul>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2021",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>Class 12th</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>School:</strong> +2 Akhileshwar High School, Ratanpur Jamui
            </h3>

            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Board:</strong> BSEB
            </p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Percentage:</strong> 80.4%
            </p>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2019",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>Class 10th</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>School:</strong> Saint Joseph’s School Jamui
            </h3>

            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Board:</strong> ICSE
            </p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Percentage:</strong> 90%
            </p>
          </div>
        </WobbleCard>
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col items-center space-y-3">
      <div className="mb-0">
        <Heading title="Education" />
      </div>
      <div className="mt-0">
        <Timeline data={data} />
      </div>
    </div>
  );
}
