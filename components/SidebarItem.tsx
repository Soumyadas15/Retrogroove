import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps{
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    active,
    href
}) => {
    return (  
    
    <Link 
        href={href}
        className={twMerge(`
             flex
             flex-row
             bg-[#E0D5B3]
             h-auto
             items-center
             rounded-md
             w-full
             gap-x-2
             text-md
             font-medium
             cursor-pointer
             hover:bg-[#D8C798]
             text-nautral-700
             p-3
             px-2
             py-1
        `,
            active && 'bg-[#D66375]')}>
        <Icon size={26}/>
        <p className="truncate w-full">{label}</p>
    </Link>);
}
 
export default SidebarItem;