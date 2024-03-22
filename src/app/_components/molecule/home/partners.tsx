import Container from "../../template/container";
import Image from "next/image";
const PARTNERSIMAGE = [
  "PARTNERS.svg",
  ,
  "standard.svg",
  "telegraph.svg",
  "london.svg",
  "fast-company.svg",
];

const Partners = () => {
  return (
    <div
      className="py-5"
      style={{
        background: ` #F9F8FB`,
      }}
    >
      <Container>
        <div className="flex flex-wrap gap-[1em]  justify-between">
          {PARTNERSIMAGE.map((image) => (
            <Image
              src={`/assets/partners/${image}`}
              width={100}
              height={100}
              alt="Partner Logo"
              key={image}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Partners;
