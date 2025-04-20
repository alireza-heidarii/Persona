import React from 'react';
import Image from "next/image";
import elmosanat from "../../../public/images/elmosanat.jpg"
import noImage from "../../../public/images/no-image.jpg"
import sadr from "../../../public/images/sadr.jpg"

const Volunteering = () => {


    const volunteeringItems=[
        {
            title:'Python Programming Tutor',
            place:"Sadr High School",
            date:"Sep 2019 - May 2020 · 9 mos",
            image:sadr
        },
        {
            title:'Mentor of ChillinWars 2019',
            place:"Iran University of Science and Technology",
            date:"Aug 2018 - Mar 2019 · 8 mos",
            image:elmosanat
        },
        {
            title:'Member of Computer Engineering Scientific Association',
            place:"Iran University of Science and Technology",
            date:"Sep 2020 - Sep 2021 · 1 yr 1 mo",
            image:elmosanat
        },
    ]

    return (
        <div id={"volunteering"} className={"px-6 bg-black pt-30 center min-h-screen max-md:py-12"}>
            <div className={""}>
                <div className={"text-h3 max-md:text-h4 text-white font-[600] text-center mb-20  max-md:mb-12"}>
                    Volunteering
                </div>
                <div className={"grid grid-cols-2 gap-12 max-md:grid-cols-1 w-full max-w-[1800px] mx-auto"}>

                    {
                        volunteeringItems?.map(item=>

                            <div key={item?.title} data-aos={"fade-right"}
                                 className={" shadow-box shadow-white max-lg:p-8 p-8 rounded-xl flex gap-4 max-md:flex-col max-md:justify-center"}>
                                <Image placeholder={"blur"} src={item?.image} alt={'noImage'} className={"size-[100px] max-md:size-[80px]"}/>
                                <div>
                                    <div className={"text-h5 text-white max-md:text-h6"}>
                                        {item?.title}
                                    </div>
                                    <div className={"text-h6  max-md:text-captionLg text-white mt-2 font-[500]"}>
                                        {item?.place}
                                    </div>
                                    <div className={"text-captionLg  max-md:text-captionMd text-gray-2 mt-2 font-[500]"}>
                                        {item?.date}
                                    </div>
                                </div>

                            </div>
                       )
                    }




                </div>
                {/*            <div className={"text-center text-white text-2xl border-t border-t-gray-600 py-12 max-md:text-xl mt-[20rem] max-md:mt-16"}>
                    ©2019-2025 Alireza Heidari
                    ALL RIGHTS RESERVED
                </div>*/}
            </div>

        </div>
    );
};

export default Volunteering;
