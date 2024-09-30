import ClassWithStudent from "../ClassWithStudent/ClassWithStudent";
import TableHeader from "../TableHeader/TableHeader";

export default function Table() {
  const allClasses = [
    {
      className: "Class One",
      students: [
        { ID: 1, Name: "Alice", Scores: 420, Percentage: 84 },
        { ID: 2, Name: "Bob", Scores: 380, Percentage: 76 },
        { ID: 3, Name: "Charlie", Scores: 450, Percentage: 90 },
        { ID: 4, Name: "David", Scores: 400, Percentage: 80 },
        { ID: 5, Name: "Eva", Scores: 470, Percentage: 94 },
      ],
    },
    {
      className: "Class Two",
      students: [
        { ID: 1, Name: "Farah", Scores: 430, Percentage: 86 },
        { ID: 2, Name: "George", Scores: 390, Percentage: 78 },
        { ID: 3, Name: "Harry", Scores: 410, Percentage: 82 },
        { ID: 4, Name: "Isla", Scores: 460, Percentage: 92 },
        { ID: 5, Name: "Jake", Scores: 420, Percentage: 84 },
      ],
    },
    {
      className: "Class Three",
      students: [
        { ID: 1, Name: "Katherine", Scores: 450, Percentage: 90 },
        { ID: 2, Name: "Leo", Scores: 400, Percentage: 80 },
        { ID: 3, Name: "Mia", Scores: 470, Percentage: 94 },
        { ID: 4, Name: "Nathan", Scores: 380, Percentage: 76 },
        { ID: 5, Name: "Olivia", Scores: 430, Percentage: 86 },
      ],
    },
    {
      className: "Class Four",
      students: [
        { ID: 1, Name: "Peter", Scores: 390, Percentage: 78 },
        { ID: 2, Name: "Quincy", Scores: 410, Percentage: 82 },
        { ID: 3, Name: "Riley", Scores: 460, Percentage: 92 },
        { ID: 4, Name: "Sophia", Scores: 420, Percentage: 84 },
        { ID: 5, Name: "Thomas", Scores: 440, Percentage: 88 },
      ],
    },
    {
      className: "Class Five",
      students: [
        { ID: 1, Name: "Uma", Scores: 450, Percentage: 90 },
        { ID: 2, Name: "Violet", Scores: 400, Percentage: 80 },
        { ID: 3, Name: "William", Scores: 470, Percentage: 94 },
        { ID: 4, Name: "Xander", Scores: 390, Percentage: 78 },
        { ID: 5, Name: "Yasmine", Scores: 410, Percentage: 82 },
      ],
    },
  ];

  return (
    <div className="max-w-[848px] mx-auto overflow-auto text-white">
      <table className="w-full">
        <thead>
          <TableHeader></TableHeader>
        </thead>
        <ClassWithStudent allClasses={allClasses}></ClassWithStudent>
      </table>
    </div>
  );
}
