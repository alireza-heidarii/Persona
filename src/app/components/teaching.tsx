import React from 'react';
import {TTimeLineItems} from "@/app/components/work-experience";

const Teaching = () => {


    const teachingItems: TTimeLineItems[] = [
        {
            title: "Teaching Assistant of Neural Networks",
            description: "University of Tehran",
            date: "Fall 2022",
        },
        {
            title: "Teaching Assistant of Statistical Inference",
            description: "University of Tehran",
            date: "Spring 2021",
        },
        {
            title: " Teaching Assistant of Network Engineering",
            description: "Iran University of Science and Technology",
            date: " Fall 2018",
        },        {
            title: " Teaching Assistant of DataBase",
            description: "Iran University of Science and Technology",
            date: "Spring 2017, Spring 2018",
        },
        {
            title: " Teaching Assistant of Data Structures",
            description: "Iran University of Science and Technology",
            date: "Fall 2016",
        },


    ]
    return (
        <div id={"teachingExperience"} className={"px-6 bg-white min-h-svh center text-white !pt-10 max-md:py-12 "}>

            <div className={"w-fit mx-auto"}>
                <div className={"text-h3 max-md:text-2xl font-[600] text-center mb-20 text-black"}>
                    Teaching Experience
                </div>
                <ol className="relative border-s border-blue-400 dark:border-white ">
                    {
                        teachingItems.map(item => <div data-aos={"fade-right"} key={item?.title}>
                            <li  className="mb-10 ms-8 flex gap-4">
                                <div className={"space-y-3"}>
                                    <div
                                        className="absolute w-5 h-5 bg-blue-400 rounded-full mt-1.5 -start-2.5 border border-blue-400  "></div>
                                    <div
                                        className="mb-1 text-captionLg font-normal leading-none text-gray-3 ">
                                        {item?.date}
                                    </div>
                                    <div
                                        className="text-h5 max-md:text-h6 text-black">   {item?.title}</div>
                                    <div
                                        className="mb-4 text-buttonLg font-normal text-gray-6">   {item?.description}</div>

                                </div>

                            </li>
                        </div>)
                    }



                </ol>
            </div>
        </div>
    );
};

export default Teaching;
