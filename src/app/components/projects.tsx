import React from 'react';

const Projects = () => {

    const ProjectsItems=[
        {
            title:"Real-Time Data Cleaning Pipeline for Medical and Healthcare Data",
            description:"Designed a pipeline to clean medical data using Spark Structured Streaming, Spark NLP, Kafka, and Docker."
        },
        {
            title:"Real-Time System for Instant Analysis of Telegram Data",
            description:"Developed ETL pipelines for Telegram channels data using Telethon, Kafka, Elasticsearch, and Power BI."
        },
        {
            title:"Neo4j Manager",
            description:"Designed and Implemented mechanism to use multi instances of Neo4j on same machines at same time."
        },
        {
            title:"Video Chat",
            description:"P2P Video Chat application using WebRTC"
        },
        {
            title:"IMDB MOVIES DESCRIPTIVE DATA ANALYSIS",
            description:"Explanatory data analysis on IMDB public dataset using R, R-Studio, EDA, Statistical Inference."
        },
    ]
    return (
        <div id={"professionalActivities"} className={"px-6 min-h-screen center py-30  max-md:py-12"}>
            <div className={""}>
                <div>
                    <div className={"text-h3 max-md:text-h4 font-[600] text-center mb-40  max-md:mb-12"}>
                        Personal Projects
                    </div>
                    <div className={"grid grid-cols-2 max-md:grid-cols-1 gap-8 w-full max-w-[1800px] mx-auto"}>

                        {
                            ProjectsItems?.map(item=>

                                <div key={item?.title} data-aos={"fade-right"} className={" border border-gray-200 shadow-box max-lg:p-8 p-16 rounded-xl"}>
                                    <div className={"text-h5  max-md:text-h6"}>
                                        {item?.title}
                                    </div>
                                    <div className={"text-h6  max-md:text-bodyMd text-gray-3 mt-4 font-[500]"}>
                                        {item?.description}
                                    </div>
                                </div>
                           )
                        }




                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;
