import React from 'react';
import Cheif from './cheif';
import Heading from '../../../components/heading/Heading';

const Chiefs = () => {
    return (
        <div className="bg-orange-50 py-7">
            <div className="max-w-screen-xl mx-auto ">
                <Heading title="Should Try" pera="CHEF RECOMMENDS" />
                <div className="grid grid-cols-3 justify-center gap-8 my-9">
                    <Cheif />
                    <Cheif />
                    <Cheif />
                </div>
            </div>
        </div>
    );
};

export default Chiefs;