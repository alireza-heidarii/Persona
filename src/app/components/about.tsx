import Image from "next/image";
import alirezaImg from "../../../public/images/alireza.jpg"
import {GmailIcon} from "@/templates/icons/gmail";
import {LocationIcon} from "@/templates/icons/location";
import Link from "next/link";
import {LinkedinIcon} from "@/templates/icons/linkedin";
import {QuoteIcon} from "@/templates/icons/quote";
import {GithubIcon} from "@/templates/icons/github";
import {MailIcon} from "@/templates/icons/mail";
import topImage from "../../../public/images/top-section.jpg"




const AboutMe = () => {
    return (
        <div id="about" className="relative w-full min-h-screen">
            {/*bg-[url(/alireza/images/top-section.jpg)]*/}
            <div className="absolute inset-0  bg-no-repeat bg-cover bg-fixed z-0" style={{backgroundImage: `url('${topImage?.src}')`}}>
                <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center pt-[14vh] max-md:pt-[5vh] px-4 text-center">
                <Image
                    src={alirezaImg}
                    alt="alirezaImg"
                    className="rounded-full size-[260px] max-md:mt-4 max-md:size-[160px] border-4 border-blue-400 mb-4"
                />

                <div className="text-white text-h3  font-[600] mt-4">
                    Aiden Heidari
                </div>

                <div className=" max-md:text-bodySm text-gray-300 text-buttonLg mt-4 flex gap-2 items-center justify-center">
                    <GmailIcon className="text-[24px]" />
                    <div>heidari.ar75@gmail.com</div>
                </div>

                <div className=" text-buttonLg max-md:text-bodySm text-gray-300 flex gap-2 items-center justify-center">
                    <LocationIcon className="text-captionLg" />
                    <div>Canada</div>
                </div>

                <div className="text-white max-md:text-captionLg text-h6 mt-6 ">
                  Machine Learning Engineer | Data Scientist | Data Architect
                </div>

                <div className="!text-gray-200 max-w-[700px] mx-auto text-center mt-4 mb-2">
                    <QuoteIcon className="mx-auto text-[24px] rotate-180 mb-2" />
                    <div className={"text-bodyMd max-md:text-captionMd text-gray-1"}>
                        Results-driven AI/ML Engineer and Data Scientist with a Master’s degree  in Computer Science, proficient in building and deploying machine learning models. Experienced in Python, scalable data pipeline (ETL) design and development, and cloud technologies. Recognized for strong problem-solving abilities, collaborative mindset, and leadership, with a proven track record of delivering impactful solutions in fast-paced, dynamic environments.
                    </div>

                    <QuoteIcon className="mx-auto text-[24px] mt-2" />
                </div>

                <div className="flex gap-4 items-center mt-6 pb-4 max-md:pb-10">
                    <Link href="https://www.linkedin.com/in/alireza-heidarii/" target="_blank"
                          className="size-[2.2rem] rounded-full border border-white flex items-center justify-center group hover:border-blue-400">
                        <LinkedinIcon className="text-white w-[22px] group-hover:text-blue-400" />
                    </Link>

                    <Link href="https://github.com/Alirezahr75" target="_blank"
                          className="size-[2.2rem] rounded-full border border-white flex items-center justify-center group hover:border-blue-400">
                        <GithubIcon className="text-white w-[22px] group-hover:text-blue-400" />
                    </Link>

                    <Link href="mailto:heidari.ar75@gmail.com" target="_blank"
                          className="size-[2.2rem] rounded-full border border-white flex items-center justify-center group hover:border-blue-400">
                        <MailIcon className="text-white w-[22px] group-hover:text-blue-400" />
                    </Link>
                </div>

            </div>


        </div>
    );
};


export default AboutMe;
