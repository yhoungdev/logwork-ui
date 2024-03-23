import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Inavlink {
  href: string;
  label: string;
  isActive?: boolean;
  isDropdown?: boolean;
  dropDownItems?: { label: string; url: string }[];
}

const Navlink: React.FC<Inavlink> = ({
  href,
  label,
  isDropdown,
  isActive,
  dropDownItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <a
        className={`${
          isActive ? "text-accent" : "text-black"
        } hover:text-accent flex items-center gap-3`}
        href={href}
        onClick={toggleDropdown}
      >
        {label}
        {isDropdown &&
          (isOpen ? (
            <FaChevronUp className="text-[0.5rem]" />
          ) : (
            <FaChevronDown className="text-[0.5rem]" />
          ))}
      </a>
      {isDropdown && isOpen && dropDownItems && dropDownItems.length > 0 && (
        <>
          <div
            className="w-screen h-screen fixed z-10 top-0 left-0"
            onClick={toggleDropdown}
          />
          <div className="absolute top-full left-[70%] z-20 flex flex-col bg-white border rounded border-slate-400/20 shadow-sm w-auto min-w-[200px] p-2">
            {dropDownItems.map((item, key) => (
              <a
                key={key}
                className="text-black hover:bg-accent/10 flex items-center gap-3 whitespace-nowrap border-b py-1 px-5"
                href={item.url}
              >
                {item.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Navlink;
