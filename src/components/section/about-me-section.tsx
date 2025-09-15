import Image from "next/image";
import { data } from "../../content/about-me.json";

function AboutMeSection() {
  return (
    <section
      id="about"
      className="h-full min-h-screen w-full flex flex-col justify-center items-center gap-40 pt-36 md:pt-0"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-30 p-8 md:p-0 md:w-3/4 mx-auto">
        <div className="flex flex-col gap-4 md:w-2/5">
          <h2 className="text-2xl font-bold">About Me</h2>

          <p className="dark:text-foreground/60 text-sm md:text-base">
            {data.p1.content}
          </p>

          <div className="space-y-4">
            <p className="dark:text-foreground/60 text-sm md:text-base">
              {data.p2.content}
            </p>

            <ul className="dark:text-foreground/60 text-sm md:text-base list-disc">
              {data.skillsAndTraits.list.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <Image
          src={data.imageUrl}
          alt={"Erim Cerrahoglu"}
          width={1000}
          height={1000}
          className="size-64 md:size-80 rounded-md shadow-lg dark:shadow-2xl"
        />
      </div>
    </section>
  );
}

export default AboutMeSection;
