import Header from "@/app/components/header";
import AboutMe from "@/app/components/about";
import WorkExperience from "@/app/components/work-experience";
import Skills from "@/app/components/skills";
import Education from "@/app/components/education";
import Teaching from "@/app/components/teaching";
import Projects from "@/app/components/projects";
import Certificates from "@/app/components/certificates";
import Volunteering from "@/app/components/Volunteering";
import Footer from "@/app/components/footer";


export default function Home() {
    return (
        <div className="">
            <Header/>
            <AboutMe/>
            <WorkExperience/>
            <Skills/>
            <Education/>
            <Certificates/>
            <Projects/>
            <Volunteering/>
            <Teaching/>
            <Footer/>
        </div>
    );
}
