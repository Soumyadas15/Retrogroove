'use client'

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModel";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const authModal = useAuthModal();
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        router.refresh();

        if (error) {
            toast.error(error.message);
        }
        else{
            toast.success("Logged out");
        }
    }
    return (  
        <div className={twMerge(`
            h-fit
            
            p-6
            `, className
          )}>

            <div className="
                w-full
                mb-4
                flex
                items-center
                justify-between
            ">
                <div className="
                    hidden
                    md:flex
                    gap-x-2
                    items-center
                    ">
                    <button 
                        onClick={() => router.back()}
                        className="
                            rounded-md
                            flex
                            items-center
                            justify-center
                            bg-[#D8B182] 
                            hover:opacity-75
                            transition
                        "
                    >
                        <RxCaretLeft className='text-[#372133]' size={35}/>
                    </button>
                    <button 
                        onClick={() => router.forward()}
                        className="
                            rounded-md
                            flex
                            items-center
                            justify-center
                            bg-[#D8B182] 
                            hover:bg-[#D8C798] 
                            transition
                        "
                    >
                        <RxCaretRight className='text-[#372133]' size={35}/>
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2">
                    <button
                        className="
                            rounded-md
                            p-2
                            bg-[#D8B182] 
                            hover:bg-[#D8C798] 
                            flex
                            items-center
                            justify-center
                            transition
                        "
                     >
                        <HiHome size={20} className='text-[#372133]' onClick={() => {router.push('/')}}/>
                    </button>
                    <button
                        className="
                            rounded-md
                            p-2
                            bg-[#D8B182] 
                            hover:bg-[#D8C798] 
                            flex
                            items-center
                            justify-center
                            transition
                        "
                     >
                        <BiSearch size={20} className='text-[#372133]' onClick={() => {router.push('/search')}}/>
                    </button>  
                </div>
                <div className="
                    flex
                    justify-between
                    items-center
                    gap-x-4
                ">
                    {user ? (
                        <div className="flex gap-x-4 items-center"> 
                            <Button
                                onClick={handleLogout}
                                className="
                                bg-[#D0C195]
                                    text-[#372133] 
                                    px-6 py-2"
                            >
                                Logout
                            </Button>
                            <Button
                                onClick={() => router.push('/account')}
                                className="bg-[#72C6AA]"
                            >
                                <FaUserAlt />
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div>
                                <Button 
                                    onClick={authModal.onOpen}
                                    className="
                                    bg-[#D0C195]
                                        text-[#372133]
                                        font-medium
                                        px-6
                                        py-2
                                ">
                                    Sign up
                                </Button>
                                
                            </div>
                            <div>
                                <Button 
                                    onClick={authModal.onOpen}
                                    className="
                                    bg-[#72C6AA]
                                        text-[#0f241d]
                                        font-medium
                                        px-6
                                        py-2
                                ">
                                    Log In
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
}
 
export default Header;