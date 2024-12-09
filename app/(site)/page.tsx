import PagePadding from '@/components/PagePadding';
import PlayListCarousel from '@/components/PlayListCarousel';
import { dummyPlaylistArray } from '@/lib/mockData';
import { FaUserCircle } from 'react-icons/fa';

const dummyPlaylistArray1 = [...dummyPlaylistArray];
const page = () => {
    return (
        <PagePadding>
            <div>
                <PlayListCarousel
                    playlistArray={[...dummyPlaylistArray1]}
                    Thumbnail={
                        <div className="w-[56px] h-[56px] ">
                            <FaUserCircle size={56} />
                        </div>
                    }
                    title="다시 듣기"
                    subTitle="도도"
                />
            </div>
        </PagePadding>
    );
};
export default page;
