import { IconType } from "react-icons";
import { noto_sans } from "../fonts";

interface SkillProps {
    icon: IconType;
    name: string;
}

const Skill: React.FC<SkillProps> = ({icon: Icon, name}) => {
    return (
        <p className={`${noto_sans.className} py-3 px-4 rounded-lg flex items-center gap-x-2 transition ease-in-out delay-75 duration-300 bg-neutral-900 text-neutral-400 hover:ring-1 hover:ring-teal-400 hover:scale-105 hover:-translate-y-1 active:scale-95`}>
            <Icon size={20} />
            <span className="cursor-default">{name}</span>
        </p>
    );
};

export default Skill;