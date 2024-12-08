'use client';
import { usePathname } from 'next/navigation';
import { GoHome } from 'react-icons/go';
import { MdOutlineSubscriptions } from 'react-icons/md';
import React from 'react';
import Link from 'next/link';

const SideBar = () => {
    const pathname = usePathname();

    const routes = React.useMemo(() => {
        return [
            {
                icon: <GoHome size={24} />,
                label: '홈',
                isActive: pathname === '/',
                href: '/',
            },

            {
                icon: <MdOutlineSubscriptions size={24} />,
                label: '구독',
                isActive: pathname === '/library',
                href: '/library',
            },
        ];
    }, [pathname]);

    return (
        <div
            className={'flex flex-row w-[72px] h-full border-2 border-red-300'}
        >
            <section className="flex flex-col w-full">
                {routes.map((route) => {
                    return (
                        <Link key={route.label} href={route.href}>
                            <div
                                className={
                                    'text-[16px] flex flex-col items-center justify-center w-full h-[74px] '
                                }
                            >
                                {route.icon}
                                <p>{route.label}</p>
                            </div>
                        </Link>
                    );
                })}
            </section>
        </div>
    );
};
export default SideBar;
