import React from 'react';
import Heading from '../../../components/heading/Heading';
import sweetImg from "../../../../assets/home/featured.jpg"
const Feature = () => {
    return (
        <div className="relative overflow-hidden bg-[url(https://i.ibb.co/qnLCjCM/chef-service.jpghttps://i.ibb.co/9ZMbSXK/featured.jpg)] bg-cover bg-top bg-no-repeat my-20">
            <div className="absolute h-full w-full -z-[10] bg-gradient-to-r from-slate-400 to-slate-600"></div>
            <Heading title="Check it out" pera="FROM OUR MENU" color />
            <div className="max-w-screen-xl mx-auto flex items-center justify-between my-9">
                <div className="">
                    <img className="w-10/12" src={sweetImg} alt="" />
                </div>
                <div className="text-white space-y-6">
                    <p className="text-[24px]">March 20, 2023</p>
                    <p className="text-[24px]">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="border-e px-4 py-2 text-sm font-medium text-white rounded bg-purple-600 hover:bg-purple-400 focus:relative">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feature;