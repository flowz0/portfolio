import { IconType } from "react-icons";
import { nunito } from "@/app/fonts";

interface SkillProps {
    icon: IconType;
    name: string;
}

const Skill: React.FC<SkillProps> = ({icon: Icon, name}) => {
    return (
        <p className={`py-3 px-4 rounded-lg flex items-center gap-x-2 transition ease-in-out delay-75 duration-300 bg-neutral-900 text-neutral-500 hover:text-teal-400 hover:ring-2 hover:ring-teal-400 hover:scale-105 active:scale-95`}>
            <Icon size={20} />
            <span className={`${nunito.className} cursor-default`}>{name}</span>
        </p>
    );
};

export default Skill;