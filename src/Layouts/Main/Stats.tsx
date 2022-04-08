import P from "../../Components/Paragraph";
import SmallDivide from "../../Components/SmallDivide";

let totalRaised = 89914,
  totalGoal = 100000,
  totalBackers = 5007,
  daysLeft = 56;

function strNum(num: number) {
  return num.toLocaleString("en-US");
}

function StatHeading(props: {
  children: React.ReactChild | React.ReactChild[];
}) {
  return (
    <span className="text-3xl font-bold block text-black mb-2">
      {props.children}
    </span>
  );
}

export default function Stats() {
  return (
    <>
      <h2>
        <StatHeading>${strNum(totalRaised)}</StatHeading>
        <P>of ${strNum(totalGoal)} backed</P>
      </h2>
      <SmallDivide />

      <P>
        <StatHeading>${strNum(totalBackers)}</StatHeading> total backers
      </P>
      <SmallDivide />
      <P>
        <StatHeading>{strNum(daysLeft)}</StatHeading> days left
      </P>

      <div className="bg-gray bg-opacity-20 h-3 w-full rounded-full mt-6">
        <div
          className={`bg-cyan h-full rounded-full`}
          style={{ width: `${(totalRaised / totalGoal) * 100}%` }}
        ></div>
      </div>
    </>
  );
}
