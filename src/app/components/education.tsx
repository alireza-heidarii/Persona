import tehran from "../../../public/images/tehran.jpg"
import elmosanat from "../../../public/images/elmosanat.jpg"
import Image from "next/image";

const Education = () => {
    return (
        <div id={"education"} className={"pt-20 md:pb-32 center min-h-screen max-md:py-12 px-4 "}>

<div>
    <div className={"text-h3  max-md:text-2xl  text-black text-center mb-36  max-md:mb-12"}>
        Education
    </div>
    <div className={" grid grid-cols-2 max-md:grid-cols-1 gap-8"}>
        <div data-aos={"fade-right"}
             className={"space-y-4 border border-gray-200 !shadow-box  w-full max-w-[1800px] mx-auto rounded-xl text-center p-12 max-md:p-5"}>
            <div className={"text-h5  max-md:text-h6  text-dark-1"}>
                Masters, Computer Science
            </div>
            <Image placeholder={"blur"} src={tehran} alt={'tehran'} className={"mx-auto size-[120px]"}/>
            <div className={"text-h6 max-md:text-h6 "}>
                University of Tehran

            </div>
            <div className={"text-bodyMd text-gray-2 max-md:text-bodySm"}>
                2019 - 2022
            </div>

            <div className={"text-captionLg max-md:text-captionLg "}>
                Supervisor: Dr. Behnam Bahrak
            </div>
            <div className={"text-bodyLg max-md:text-buttonSm  text-gray-4"}>
                Publication: A graph-based deep learning approach for illegal transaction detection in Bitcoin.
            </div>
        </div>


        <div data-aos={"fade-left"}
             className={"space-y-4  border border-gray-200 !shadow-box  w-full max-w-[1800px] mx-auto rounded-xl text-center p-12 max-md:p-5"}>
            <div className={"text-h5  max-md:text-h6  text-dark-1"}>
                Bachelors, Computer Science
            </div>
            <Image placeholder={"blur"} src={elmosanat} alt={'elmosanat'} className={"mx-auto size-[120px]  "}/>
            <div className={"text-h6 max-md:text-h6 "}>
                Iran University of Science and Technology

            </div>
            <div className={"text-bodyMd text-gray-2 max-md:text-bodySm"}>
                2014 - 2018
            </div>

            <div className={"text-captionLg max-md:text-captionLg "}>
                Supervisor: Prof. Mohsen Sharifi
            </div>
            <div className={"text-bodyLg max-md:text-buttonSm  text-gray-4"}>
                Thesis: Design and Implementation of an Execution
                Unit Migration Mechanism In order to
                Dynamic Scheduling
            </div>
        </div>

    </div>
</div>



        </div>
    );
};

export default Education;
