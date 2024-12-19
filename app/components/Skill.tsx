import { IconType } from "react-icons";
import { noto_sans } from "../fonts";

interface SkillProps {
    icon: IconType;
    name: string;
}

const Skill: React.FC<SkillProps> = ({icon: Icon, name}) => {
    return (
        <p className={`${noto_sans.className} py-3 px-4 rounded-lg flex items-center gap-x-2 bg-neutral-900 text-neutral-400 hover:-translate-y-1`}>
            <Icon size={20} />
            <span className="cursor-default">{name}</span>
        </p>
    );
};

export default Skill;