import { aboutData } from "@/app/utils/data";
import AboutCardPanel from "../../shared/aboutCardPanel";
import Container from "../../template/container";

interface IAbout {}

const About: React.FC<IAbout> = () => {
  return (
    <Container>
      <div className=" py-[100px] md:py-[15em]" data-aos='fade-up'>
        <h3 className="font-bold text-2xl md:text-[32px]">
          Secured payment and privacy on Loggworks
        </h3>

        <div className=" flex flex-col md:flex-row gap-[41px] mt-[40px]">
          {aboutData.map((_, key) => (
            <AboutCardPanel data={_} key={key} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
