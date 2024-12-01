import { IconType } from "react-icons";

interface SkillProps {
    icon: IconType;
    name: string;
}

const Skill: React.FC<SkillProps> = ({icon: Icon, name}) => {
    return (
        <div className="py-3 px-5 rounded-lg flex items-center gap-x-4 bg-neutral-800">
            <Icon size={20} />
            <p>{name}</p>
        </div>
    );
};

export default Skill;