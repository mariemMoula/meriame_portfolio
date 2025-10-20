import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mariem Moula | Software Engineer Portfolio",
  description:
    "Software Engineer passionate about building scalable solutions and efficient systems. Skilled in Full Stack Development, DevOps, and Data Science.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "DevOps",
    "Data Science",
    "Mariem Moula",
    "Portfolio",
  ],
  authors: [{ name: "Mariem Moula" }],
  icons: {
    icon: [
      { url: "/proImage.png" },
      { url: "/proImage.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/proImage.png",
    apple: "/proImage.png",
  },
  openGraph: {
    title: "Mariem Moula | Software Engineer Portfolio",
    description:
      "Software Engineer passionate about building scalable solutions and efficient systems.",
    type: "website",
    images: ["/proImage.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
