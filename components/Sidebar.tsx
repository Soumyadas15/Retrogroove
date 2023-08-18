'use client'

import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from './Box';
import SidebarItem from './SidebarItem';
import Image from 'next/image';
import Library from './Library';
import DescBox from './DescBox';
import { Song } from '@/types';

interface SidebarProps {
    children: React.ReactNode;
    songs: Song[]
}

const Sidebar: React.FC<SidebarProps> = ({
    children,
    songs
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }

    ], [pathname]);

    return (   
        <div className='flex h-full'>
            <div className='
                hidden
                md:flex
                flex-col
                gap-y-2
                bg-[#E0D5B3]
                text-black
                h-full
                w-[300px]
                p-2
            '>
                <div className='
                    flex
                    px-5
                    py-4
                    gap-y-4
                 '>
                    <Box>
                        <Image 
                            onClick={() => router.push('/')}
                            src={'/assets/logo.png'} 
                            alt='logo' 
                            width={200} 
                            height={200} 
                            className='cursor-pointer'
                            />
                    </Box>
                </div>

                <DescBox>
                
                    <div className='
                        flex
                        flex-col
                        gap-y-4
                        px-5
                        py-4
                        font-light
                        group
                    '>
                        <div
                            className="
                                relative 
                                w-full
                                h-full
                                group
                                rounded-md 
                                overflow-hidden
                            "
                        >
                            <Image src={'/assets/popCover.jpg'} alt='cover' className='object-cover group-hover:scale-110 rounded-md transition' width={300} height={200}/>
                        </div>
                        
                        <span className='font-semibold'>Welcome to Retrogroove!</span>
                        Re-live the 90s

                    </div>
                </DescBox>

                <Box>
                    <div className='
                        flex
                        flex-col
                        gap-y-4
                        px-5
                        py-4
                    '>
                        {routes.map((item) => (
                            <SidebarItem 
                                key={item.label}
                                {...item}
                            />
                        ))}

                    </div>
                </Box>
                <Box className='overflow-y-auto h-full'>
                    <Library songs={songs}/>
                </Box>
                </div>
                <main className='h-full flex-1 overflow-y-auto py-2'>
                    {children}
                </main>
        </div>
    );
}
 
export default Sidebar;