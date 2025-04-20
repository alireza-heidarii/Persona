'use client'

import {Link} from "react-scroll";

const Header = () => {
    return (
        <>
            <div className={"flex max-lg:hidden justify-center gap-10 bg-black [&>a]:text-white hover:[&>a]:text-blue [&>a]:cursor-pointer py-8 !z-50 fixed top-0 w-full [&>a]:text-captionLg"}>
                <Link
                    to="about"
                    smooth={true} duration={1200}
                >
                    About
                </Link>

                <Link
                    to="workExperience"
                    smooth={true} duration={1200}
                >
                    Work Experience
                </Link>

                <Link
                    to="skills"
                    smooth={true} duration={1200}
                >
                    Skills
                </Link>

                <Link
                    to="education"
                    smooth={true} duration={1200}
                >
                    Education

                </Link>

                <Link
                    to="certificates"
                    smooth={true} duration={1200}
                >
                    Certificates
                </Link>
                <Link
                    to="professionalActivities"
                    smooth={true} duration={1200}
                >
                    Personal Projects
                </Link>


                <Link
                    to="volunteering"
                    smooth={true} duration={1200}
                >
                    Volunteering
                </Link>
                <Link
                    to="teachingExperience"
                    smooth={true} duration={1200}
                >
                    Teaching Experience
                </Link>

            </div>
        </>
    );
};

export default Header;
