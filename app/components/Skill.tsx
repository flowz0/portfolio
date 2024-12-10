import { IconType } from "react-icons";

interface SkillProps {
    icon: IconType;
    name: string;
}

const Skill: React.FC<SkillProps> = ({icon: Icon, name}) => {
    return (
        <div className="py-3 px-4 rounded-lg flex items-center gap-x-2 bg-neutral-800 text-neutral-400 hover:outline-none hover:ring-1 hover:ring-orange-600">
            <Icon size={20} />
            <p>{name}</p>
        </div>
    );
};

export default Skill;