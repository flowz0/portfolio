import { IconType } from "react-icons";
import { nunito } from "@/app/fonts";

interface ToolProps {
    icon: IconType;
    name: string;
}

const Tool: React.FC<ToolProps> = ({icon: Icon, name}) => {
    return (
        <p className="flex items-center gap-x-2 text-neutral-400">
            <Icon className="w-auto h-8" />
            <span className={`${nunito.className} text-xl`}>{name}</span>
        </p>
    );
};

export default Tool;