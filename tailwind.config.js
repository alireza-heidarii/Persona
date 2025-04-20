/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                primary: {
                    DEFAULT: "#177DFF",
                    tint: {
                        1: "#F4F4F5",
                        2: "#E8F2FF",
                        3: "#D1E5FF",
                        4: "#B9D8FF",
                        5: "#A2CBFF",
                        6: "#74B1FF",
                        7: "#4597FF"
                    },
                    shade: {
                        1: "#1264CC",
                        2: "#0E4B99",
                        3: "#093266",
                        4: "#07264C",
                        5: "#051933",
                        6: "#020C1A",
                        7: "#003880"

                    }
                },
                secondary: {
                    DEFAULT: "#6F2CD4",
                    tint: {

                        2: "#F1EAFB",
                        3: "#E2D5F6",
                        4: "#D4C0F2",
                        5: "#C5ABEE",
                        6: "#A980E5",
                        7: "#8C56DD"
                    },
                    shade: {
                        1: "#5923AA",
                        2: "#431A7F",
                        3: "#2C1255",
                        4: "#210D40",
                        5: "#16092A",
                        6: "#0B0415"
                    }
                },
                gray: {
                    1: "#BAC2CC",
                    2: "#8B9199",
                    3: "#5D6166",
                    4: "#46494C",
                    5: "#2E3033",
                    6: "#17181A",
                    7: "#121212"
                },

                dark: {
                    1: "#121212",
                    2: "#1E1E1E",
                    3: "#27272A",
                },
                error: {
                    DEFAULT: "#C30000",
                    light: "#ED2E2E",
                    extraLight: "#FFE4E4"
                },
                success: {
                    DEFAULT: "#00966D",
                    light: "#00BA88",
                    extraLight: "#DDFFF5"
                },
                warning: {
                    DEFAULT: "#F4B740",
                    light: "#A9791C",
                    extraLight: "#FFF8E1"
                },
                green: {
                    DEFAULT: "#0AB39C",
                    light: "#DAF4F0",
                    extraLight: "#DDFFF5"
                },
                yellow: {
                    DEFAULT: "#FFB300",
                    light: "#EFF4E4"
                },
                blue: {
                    DEFAULT: "#299CDD",
                    light: "#DFF0FA"
                },
                orange: {
                    DEFAULT: "#F06548",
                    light: "#FDE8E4"
                }
            },
            borderRadius: {
                large: "16px",
                "4xl": "32px"
            },
            fontSize: {
                h1: ["2.75rem", {lineHeight: "normal", fontWeight: 700}],
                h2: ["2.5rem", {lineHeight: "normal", fontWeight: 700}],
                h3: ["2rem", {lineHeight: "normal", fontWeight: 700}],
                h4: ["1.5rem", {lineHeight: "normal", fontWeight: 700}],
                h5: ["1.25rem", {lineHeight: "normal", fontWeight: 700}],
                h6: ["1rem", {lineHeight: "normal", fontWeight: 700}],
                h7: ["1.25rem", {lineHeight: "normal", fontWeight: 600}],
                p1: ["1rem", {lineHeight: "normal", fontWeight: 600}],
                p2: [".875rem", {lineHeight: "normal", fontWeight: 400}],
                bodySm: [".875rem", {lineHeight: "normal", fontWeight: 400}],
                bodyMd: ["1rem", {lineHeight: "normal", fontWeight: 500}],
                bodyLg: ["1.125rem", {lineHeight: "normal", fontWeight: 400}],
                bodyXl: ["1.25", {lineHeight: "normal", fontWeight: 400}],
                captionMd: [".75rem", {lineHeight: "180%", fontWeight: 400}],
                captionLg: [".875rem", {lineHeight: "180%", fontWeight: 700}],
                captionSm: [".625rem", {lineHeight: "180%", fontWeight: 700}],
                captionXs: [".625rem", {lineHeight: "180%", fontWeight: 500}],
                buttonLg: ["1rem", {lineHeight: "180%", fontWeight: 500}],
                buttonSm: [".875rem", {lineHeight: "normal", fontWeight: 500}],
                overlineLg: ["1rem", {lineHeight: "normal", fontWeight: 400}],
                overlineSm: [".75em", {lineHeight: "normal", fontWeight: 700}]
            },
            zIndex: {
                60: "60",
                70: "70",
                80: "80",
                90: "90",
                100: "100",
                999: "999"
            },
            boxShadow: {
                icon: "0 4px 12px 0 rgba(51, 138, 243, .50)",
                box: " 0px 0px 12px 0px rgba(0, 0, 0, 0.12)"

            }
        }
    },
    darkMode: "class",

}
