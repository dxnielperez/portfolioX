import Image from "next/image";
import { useDarkMode } from "../context/useDarkMode";
import { education, Experiences, experiences, monthNames } from "../data";

const calculateDuration = (
  startMonth: number,
  startYear: number,
  endMonth?: number,
  endYear?: number
) => {
  const currentDate = new Date();
  const startDate = new Date(startYear, startMonth - 1);
  const endDate =
    endMonth && endYear ? new Date(endYear, endMonth - 1) : currentDate;

  const differenceInTime = endDate.getTime() - startDate.getTime();
  const months = Math.floor(differenceInTime / (1000 * 3600 * 24 * 29));
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return years > 0
    ? `${years} yr ${remainingMonths} mos`
    : `${remainingMonths} mos`;
};

export function Experience() {
  const { darkMode } = useDarkMode();

  return (
    <div className="h-full">
      {experiences.map((exp: Experiences, index) => {
        if (!exp.start || !exp.start.month || !exp.start.year) {
          return null;
        }

        const startMonth = monthNames[exp.start.month - 1];
        const startYear = exp.start.year;

        const endMonth = exp.end ? monthNames[exp?.end?.month - 1] : undefined;
        const endYear = exp.end ? exp?.end?.year : undefined;

        const duration =
          !exp.end && !exp.duration
            ? calculateDuration(exp.start.month, startYear)
            : calculateDuration(
                exp.start.month,
                startYear,
                exp?.end?.month,
                endYear
              );

        return (
          <div
            key={exp.id + index}
            className={`pb-2 md:p-4 mb-4 mx-2 md:mx-0 rounded-lg ${
              darkMode
                ? "hover:bg-[#37363c] bg-[#303034] duration-300 ease-in-out"
                : "hover:bg-[#e5e5e5] bg-[#ebebeb] duration-300 ease-in-out"
            }`}
          >
            <div className="flex w-11/12 justify-start gap-4 mb-4 pt-4">
              {exp.logo && (
                <div className="pl-3">
                  <Image
                    width={48}
                    height={48}
                    src={exp.logo}
                    alt={exp.name}
                    className="w-12 h-12 min-w-[48px] min-h-[48px] object-cover rounded-lg aspect-square"
                  />
                </div>
              )}

              <div className="flex-1">
                <div className="flex flex-wrap items-center">
                  <div className="font-bold">{exp.role}</div>
                </div>
                <div className="font-medium text-[14px]">{exp.company}</div>
                <div
                  className={`font-light text-sm mt-[1px] ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {`${startMonth} ${startYear} - ${exp.end ? `${endMonth} ${endYear}` : "Present"} • ${exp.duration ?? duration}`}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pb-6 ">
              <div className="flex w-11/12 flex-wrap">
                {exp.description.map((item, index) => (
                  <div key={index + item} className="mr-2">
                    <div className="ml-3 flex">
                      <div className="pt-1">•</div>
                      <div className="ml-2 ">{item}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
      <div
        className={`w-min mx-auto mb-6 mt-6 rounded-md py-2 px-4 ${darkMode ? " bg-[#37363c]" : " bg-lighter"}`}
      >
        Education
      </div>
      <div className="h-full">
        {education.map((edu, index) => (
          <div
            key={edu.id + index}
            className={`pb-2 md:p-4 mb-4 mx-2 md:mx-0 rounded-lg ${
              darkMode
                ? "hover:bg-[#37363c] bg-[#303034] duration-300 ease-in-out"
                : "hover:bg-[#EBEBEB] bg-[#eeeeee] duration-300 ease-in-out"
            }`}
          >
            <div className="w-full flex  pt-4">
              <div className="flex w-11/12 justify-start gap-4 mb-4">
                {edu.logo && (
                  <div className="pl-3">
                    <Image
                      width={48}
                      height={48}
                      src={edu.logo}
                      alt={edu.name}
                      className="min-w-min h-12 object-cover rounded-lg aspect-square"
                    />
                  </div>
                )}

                <div className="flex pl-4 sm:pl-0">
                  <div className="">
                    <div className="font-bold">{edu.program}</div>
                    <div className="font-medium text-[14px]">{edu.name}</div>
                    <div
                      className={`font-light text-sm mt-[1px] ${darkMode ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {edu.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pb-6 ">
              <div className="flex w-11/12 flex-wrap">
                {edu.description.map((item, index) => (
                  <div key={index + item} className="mr-2">
                    <div className="ml-3 flex">
                      <div className="pt-1">•</div>
                      <div className="ml-2 ">{item}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
