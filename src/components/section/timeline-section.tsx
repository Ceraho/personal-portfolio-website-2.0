import { Timeline } from "../ui/timeline";
import { data } from "../../content/timeline.json";

type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

const timelineData: TimelineEntry[] = [
  {
    title: "2024",
    content: (
      <div>
        <h3 className="font-semibold">{data[2024].title}</h3>
        <p className="text-sm text-foreground/60">{data[2024].content}</p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h3 className="font-semibold">{data[2023].title}</h3>
        <p className="text-sm text-foreground/60">{data[2023].content}</p>
        <p className="mt-2 text-sm text-foreground/60">{data[2023].content2}</p>
      </div>
    ),
  },
  {
    title: "2021 - 2023",
    content: (
      <div>
        <h3 className="font-semibold">{data["2021-2023"].title}</h3>
        <p className="text-sm text-foreground/60">
          {data["2021-2023"].content}
        </p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <h3 className="font-semibold">{data["2021"].title}</h3>
        <p className="text-sm text-foreground/60">{data["2021"].content}</p>
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div>
        <h3 className="font-semibold">{data["2018"].title}</h3>
        <p className="text-sm text-foreground/60">{data["2018"].content}</p>
      </div>
    ),
  },
];

function TimelineSection() {
  return (
    <section
      id="timeline"
      className="h-full md:min-h-screen w-full mx-auto pt-40 p-2"
    >
      <div className="flex flex-col w-fit mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Timeline</h2>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
}

export default TimelineSection;
