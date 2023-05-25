import React from 'react';

const Heading = ({ title, pera, color }) => {
    return (
        <div className="w-96 text-center mx-auto">
            <p className='text-[#D99904] italic font-semibold my-5'>--- {title} ---</p>
            <p className={`text-2xl py-5 border-y-2 uppercase font-bold ${color && "text-white"}`}>{pera}</p>
        </div>
    );
};

export default Heading;