import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata = {
    title: "Likith D | Full Stack & AI Developer",
    description:
        "Designing and developing intelligent systems by combining AI/ML with modern web technologies to deliver practical, high-impact solutions.",
    keywords: [
        "Likith D",
        "Full Stack Developer",
        "AI Developer",
        "Portfolio",
        "React",
        "Next.js",
        "Python",
        "Django",
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} font-sans`}>{children}</body>
        </html>
    );
}
