'use client';
import { IoIosMenu } from 'react-icons/io';
import Logo from './elements/Logo';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
    return (
        <header
            className={
                'relative flex flex-row items-center w-full h-[56px] border-2 border-blue-300'
            }
        >
            <div
                className={'flex flex-col items-center justify-center w-[72px]'}
            >
                <IoIosMenu size={30} />
            </div>
            <Logo />
            <section
                className={
                    'sticky top-0 left-1/2 transform -translate-x-1/2 z-1'
                }
            >
                <article
                    className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center
             rounded-2xl px-[16px] gap-[16px] border border-neutral-500"
                >
                    <div>
                        <FiSearch size={24} />
                    </div>
                    <input
                        className="h-full w-full bg-transparent "
                        placeholder="검색"
                        type="text"
                    />
                </article>
            </section>
        </header>
    );
};
export default Header;
