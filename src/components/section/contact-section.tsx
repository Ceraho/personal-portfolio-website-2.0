import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "../ui/button";
import { CardDescription } from "../ui/card";

import { data } from "../../content/contact-me.json";

function ContactSection() {
  return (
    <section
      id="contact"
      className="h-full min-h-screen flex flex-col items-center justify-center gap-14 p-4 md:p-0"
    >
      <h2 className="font-bold text-2xl md:text-4xl">{data.title}</h2>

      <div className="flex flex-col items-center justify-center gap-7">
        <CardDescription className="md:w-1/3 text-center">
          {data.description}
        </CardDescription>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button size={"lg"} variant={"github"} asChild>
            <a href={"https://github.com/Ceraho"} target="_blank">
              <Github />
              <span>GitHub</span>
            </a>
          </Button>

          <Button size={"lg"} variant={"linkedin"} asChild>
            <a
              href={"https://www.linkedin.com/in/erim-cerrahoglu/"}
              target="_blank"
            >
              <Linkedin />
              <span>LinkedIn</span>
            </a>
          </Button>

          <Button size={"lg"} variant={"email"} asChild>
            <a href="mailto:cerrahoglu.erim@gmail.com">
              <Mail />
              <span>Email</span>
            </a>
          </Button>

          <Button size={"lg"} variant={"outline"} asChild>
            <a href={data.cvUrl} download>
              <Download />
              <span>Download my CV</span>
            </a>
          </Button>
        </div>

        <CardDescription>{data.description2}</CardDescription>
      </div>
    </section>
  );
}

export default ContactSection;
