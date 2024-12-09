import React, { PropsWithChildren } from 'react';

const PagePadding = ({ children }: PropsWithChildren) => {
    return (
        <div className="w-full mx-auto px-[10px] py-2 lg:px-[100px]">
            {children}
        </div>
    );
};

export default PagePadding;
