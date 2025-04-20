import React from 'react';

import udemy from "../../../public/images/udemy_logo.jpg"
import coursera from "../../../public/images/coursera_logo.jpg"
import deepLearning from "../../../public/images/deeplearningai_logo.jpg"
import Image from "next/image";


const Certificate = () => {


    const volunteeringItems=[
        {
            title:'Spark NLP for Data Scientists',
            place:"Udemy",
            date:"Aug 2018 - Mar 2019 · 8 mos",
            image:udemy
        },
        {
            title:'AWS Cloud Technical Essentials',
            place:"Coursera",
            date:"Issued Jan 2024",
            image:coursera
        },
        {
            title:'Writing Production-Ready ETL Pipelines in Python',
            place:"Udemy",
            date:"Issued Jan 2024",
            image:udemy
        },
        {
            title:'Structuring Machine Learning Projects',
            place:"DeepLearning.AI",
            date:"Issued Aug 2023",
            image:deepLearning
        },
        {
            title: 'Machine Learning A-Z: AI, Python & R',
            place:"Udemy",
            date:"Issued Jan 2024",
            image:udemy
        },

    ]

    return (
        <div id={"certificates"} className={"px-6 bg-black center min-h-screen max-md:py-12"}>
            <div className={""}>
                <div className={"text-h3 max-md:text-h4 text-white font-[600] text-center mb-32  max-md:mb-12"}>
                    Certificates
                </div>
                <div className={"grid grid-cols-2 gap-12 max-md:grid-cols-1 w-full max-w-[1800px] mx-auto"}>

                    {
                        volunteeringItems?.map(item=>

                            <div key={item?.title} data-aos={"fade-right"}
                                 className={"   shadow-box shadow-white max-lg:p-8 p-8 rounded-xl flex gap-4 max-md:flex-col max-md:justify-center"}>
                                <Image placeholder={"blur"} src={item?.image} alt={'noImage'} className={"size-[80px] "}/>
                                <div>
                                    <div className={"text-h5 text-white max-md:text-h6"}>
                                        {item?.title}
                                    </div>
                                    <div className={"text-h6  max-md:text-captionLg text-gray-1 mt-2 font-[500]"}>
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

            </div>

        </div>
    );
};

export default Certificate;
