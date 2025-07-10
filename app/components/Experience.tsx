import React from "react";
import { Timeline } from "./ui/Timeline";

const Experience = () => {
  const data = [
    {
      title: "June 2025 – Present",
      content: (
        <div>
          <div className="flex">
            <img
              src="/veshro.svg"
              className="w-6 lg:w-16 h-full rounded-md bg-white"
              alt="Veshro Logo"
            />
            <p className="lg:mt-5 lg:text-lg ml-4">
              Veshro Technology Solutions Pvt. Ltd.
            </p>
          </div>
          <div className="mt-4 ml-5 text-neutral-800 dark:text-neutral-200 text-sm lg:text-base">
            <ul className="list-disc ml-5">
              <li>
                Developed a real-time waste management system using Next.js,
                Supabase, and PostgreSQL.
              </li>
              <li>
                Built role-based access control for Admin, Supervisor, and
                Staff.
              </li>
              <li>
                Designed responsive UI using Shadcn and implemented Zustand for
                state management.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "March 2025 – May 2025",
      content: (
        <div>
          <div className="flex">
            <img
              src="/valetx.svg"
              className="w-20 lg:w-32 h-full rounded-md mt-5"
              alt="ValetX Logo"
            />
            {/* <p className="lg:mt-5 lg:text-lg ml-4 justify-center">ValetX</p> */}
          </div>
          <div className="mt-4 ml-5 text-neutral-800 dark:text-neutral-200 text-sm lg:text-base">
            <ul className="list-disc ml-5">
              <li>Built RESTful APIs for real-time parking slot assignment.</li>
              <li>
                Developed responsive UI using React.js, Tailwind CSS, and
                Material UI (MUI).
              </li>
              <li>
                Used Axios, React Router, and Redux for state/data handling and
                better routing.
              </li>
              <li>Contributed in Agile stand-ups and peer code reviews.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="experience" className="overflow-hidden mx-auto sm:px-10 px-5">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
