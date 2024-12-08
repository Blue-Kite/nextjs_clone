'use client';
import { FaYoutube } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const { push } = useRouter();

    const onClickLogo = () => {
        push('/');
    };

    return (
        <section
            className="flex flex-row items-center cursor-pointer gap-[10px] "
            onClick={onClickLogo}
        >
            <FaYoutube size={30} color="red" />
            <p>YouTube</p>
        </section>
    );
};

export default Logo;
