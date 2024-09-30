import avater from "../../assets/avatar.png";
export default function ClassWithStudent({ allClasses }) {
  console.log("data", allClasses);
  return (
    <>
      {/* class name */}
      {allClasses.map((classData, classIndex) => (
        <tbody key={classIndex} className="w-full">
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              {classData.className}
            </td>
          </tr>

          {classData.students.map((student, studentIndex) => (
            <tr className="border-b border-[#7ECEB529]" key={studentIndex}>
              <td className="p-5 text-sm md:text-xl">{student.ID}</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img className="w-8 h-8" src={avater} width="32" height="32" alt="John Smith" />
                  <span className="whitespace-nowrap">{student.Name}</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">{student.Scores}</td>
              <td className="p-5 text-sm md:text-xl text-center">{student.Percentage}%</td>
            </tr>
          ))}
        </tbody>
      ))}
    </>
  );
}
