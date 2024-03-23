import { PopularServicesData } from "@/app/utils/data";
import PopularServicePanel from "../../shared/popularServicePanel";
import Container from "../../template/container";

interface IpopularServices {}

const PopularServices: React.FC<IpopularServices> = () => {
  return (
    <div className=" py-[9em] mx-auto mb-10 py-26 bg-accent/5 px-4">
      <Container>
        <div>
          <h3 className="font-bold text-xl md:text-3xl mb-12">
            Explore popular services
          </h3>

          <div className="flex flex-nowrap md:grid md:grid-cols-6 gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-x-visible">
            {PopularServicesData.map((service, key) => (
              <div key={key} className="snap-center md:block">
                <PopularServicePanel data={service} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularServices;
