import type {Metadata} from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import SplashScreen from "@/app/providers/splash-screen";
import AosProvider from "@/app/providers/aos";



const poppins = Poppins({subsets: ["latin"], variable: "--poppins", weight: ["300", "400", "500", "700"]});


export const metadata: Metadata = {
    title: "Aiden Heidari",
    description: "Aiden Heidari",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${poppins.className} antialiased`}
        >
        <AosProvider>
            <SplashScreen>
                <div className={"overflow-x-hidden"}>
                    {children}
                </div>
            </SplashScreen>
        </AosProvider>


        </body>
        </html>
    );
}
