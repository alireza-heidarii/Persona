'use client';


import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {clsx} from "clsx";
import Lottie from "lottie-react";
import intro from "../../../public/lottie/intro.json"

const SplashScreen: FC<PropsWithChildren> = ({children}) => {
    const [splashScreenVisible, setSplashScreenVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setSplashScreenVisible(false), 2000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {
                <div
                    className={clsx("bg-black fixed z-999 inset-0 w-full h-dvh center !overflow-hidden transition-all duration-1000", {"opacity-0 !z-0": !splashScreenVisible})}>
                    <div data-aos={'fade-up'} className="text-center text-white items-center center text-3xl">
                        <div>
                            <div className={"mb-2 text-center"}>
                                Aiden Heidari
                            </div>
                            <Lottie data-aos={"flip-right"} loop={false} className={" w-full max-w-[300px] "} animationData={intro}/>
                        </div>

                    </div>
                </div>
            }

            <div className={clsx({"invisible [&>div]:h-0": splashScreenVisible})}>
                {children}
            </div>
        </>

    );


};

export default SplashScreen;
