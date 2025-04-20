'use client'

import noImage from "../../../public/images/no-image.jpg"
import farsad from "../../../public/images/farsad.jpg"
import saba from "../../../public/images/saba.jpg"
import mahsan from "../../../public/images/mahsan.jpg"
import tehran from "../../../public/images/tehran.jpg"
import bazar from "../../../public/images/cafebazaar.jpg"
import elmosanat from "../../../public/images/elmosanat.jpg"
import Image, {StaticImageData} from "next/image";
import {useState} from "react";
import Modal from "@/templates/components/modal";

export type TTimeLineItems = {
    title: string,
    description: string,
    date: string,
    image?: StaticImageData | string,
    info?: string[]
}


const WorkExperience = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<TTimeLineItems | null>(null);

    const handleOpenModal = (item: TTimeLineItems) => {
        setSelectedItem(item);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedItem(null);
    };

    const workItems: TTimeLineItems[] = [
        {
            title: "AI/ML Engineer, Data Architect",
            description: "Farsad Sanat Alborz",
            date: "Aug 2024 - Present",
            image: farsad,
            info: ["Designed, developed, and deployed scalable ML solutions in production, solving business-critical challenges using advanced predictive modeling.",
                    "Engineered and optimized RAG pipelines by integrating structured and unstructured data sources, improving response accuracy and system relevance.",
                    "Trained, fine-tuned, and deployed LLMs, implementing backend services and distributed data pipelines for performance-optimized AI system."
                ]
        },
        {
            title: "Data Scientist",
            description: "Saba Tamin Management Services",
            date: "Jun 2022 - Jun 2024",
            image: saba,
            info: ["Developed, maintained, and monitored scalable and optimized ETL pipelines to collect and process large datasets, ensuring data integrity, and quality.",
                    "Conducted in-depth statistical analysis, hypothesis and A/B tests on stock market trends and extracted complex findings into clear insights.",
                    "Led the development and optimization of ML models in the production environment, resulting a 25\% increase in stock price prediction accuracy.",
                    "Led a team of 7, identify and implement cutting-edge analytical techniques, ensuring alignment with best practices in the field of financial."
                ]
        },
        {
            title: "Data Scientist",
            description: "Mahsan",
            date: "Feb 2020 - Apr 2022",
            image: mahsan,
            info: ["Conducted graph-based data analysis, resulting a 20\% improvement in community detection and user segmentation.",
                    "Developed data quality assessments to ensure data pipelines' robustness, accuracy, and completeness.",
                    "Designed machine learning models to analyze user interactions on Telegram, achieving a 15\% improvement in behavioral pattern recognition."
                ]
        },
        {
            title: "Graduate Research Assistant",
            description: "University of Tehran",
            date: "Nov 2019 - Apr 2021",
            image: tehran,
            info: []
        },
        {
            title: "Data Scientist (Co-Op)",
            description: "Cafe Bazaar",
            date: "Nov 2019 - Feb 2020",
            image: bazar,
            info: ["Developed feature engineering and a classification system for search queries in the CafeBazaar application, enhancing search relevance by 27\%.",
                    "Implemented a customer behavior based recommender system for video paid ads, increasing ad engagement by 9\%."
                ]
        },
        {
            title: "Software Engineer",
            description: "IUST Distributed Systems Lab",
            date: "Sep 2016 - Dec 2018",
            image: noImage,
            info: ["Developed database solutions and RESTful APIs, enhancing system efficiency and reliability."]
        },
        {
            title: "Teacher Assistant",
            description: "Iran University of Science and Technology",
            date: "Sep 2015 - Nov 2018",
            image: elmosanat,
            info: []
        },
    ]


    return (
        <div id="workExperience" className={"px-6"}>
            <div className={"text-h3  max-md:text-2xl font-[600] text-black text-center my-16  max-md:my-12"}>
                Work Experience
            </div>
            <div className={"w-fit md:pb-20 mx-auto"}>
                <ol className="relative border-s border-gray-300">
                    {
                        workItems.map(item => <div data-aos={"fade-right"} key={item?.date}>
                            <li className="mb-10 ms-8 flex gap-4">
                                <div>
                                    <div>
                                        {item?.image &&
                                            <Image placeholder={"blur"} src={item?.image} alt={`image=${item?.image}`}
                                                   className={'size-[70px] max-lg:size-[60px]'}/>}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="absolute w-5 h-5 bg-gray-400 rounded-full mt-1.5 -start-2.5 border border-white "></div>
                                    <div
                                        className="md:mb-2 max-lg:text-captionMd text-captionLg font-normal leading-none text-gray-3 ">
                                        {item?.date}
                                    </div>
                                    <div
                                        className="text-h7 max-lg:text-lg font-semibold text-gray-900">{item?.title}</div>
                                    <div
                                        className=" text-captionLg font-normal text-gray-3 ">{item?.description}</div>
                                    <div
                                        onClick={() => handleOpenModal(item)}
                                        className="inline-flex items-center text-blue text-sm font-medium cursor-pointer"
                                    >
                                        Learn more
                                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </div>
                                </div>

                            </li>
                        </div>)
                    }
                </ol>
            </div>


            <Modal isOpen={openModal} onClose={handleCloseModal}>
                {selectedItem && (
                    <div className="p-4">
                        <div className={"flex gap-2 items-start"}>
                            {selectedItem.image && (

                                <Image
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    width={100}
                                    height={100}
                                    className="rounded"
                                />

                            )}
                            <div>
                                <h2 className="text-xl font-bold mb-2">{selectedItem.title}</h2>
                                <p className="text-sm text-gray-600">{selectedItem.date}</p>
                                <p className="mt-2">{selectedItem.description}</p>
                            </div>

                        </div>


                        <div className="mt-4 space-y-2">
                            {selectedItem?.info?.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div
                                        className={`text-bodyMd max-md:text-bodySm pb-1 w-full ${
                                            index !== (selectedItem.info?.length ?? 0) - 1 ? 'border-b border-gray-300' : ''
                                        }`}
                                    >
                                        - {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Modal>



        </div>
    );
};

export default WorkExperience;
