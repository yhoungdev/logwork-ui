import { ReactNode } from "react";

interface IaboutCardPanel {
  data: {
    title: string;
    description: string;
    icon: ReactNode;
  };
}

const AboutCardPanel: React.FC<IaboutCardPanel> = ({
  data: { title, description, icon },
}) => {
  return (
    <div className="flex flex-col gap-[12px] p-[16px]">
      {icon}
      <b className="mt-[20px] text-[20px]">{title}</b>
      <p className="text-[#4B4B4B] text-[14px]">{description}</p>
    </div>
  );
};

export default AboutCardPanel;
