import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const creteRound = Crete_Round({
  weight: ["400"],
  variable: "--font-creteRound",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azizbek Ikromov",
  description:
    "I'm Azizbek Ikromov, a Frontend Developer. This is my portfolio website: azizbek.uz",
  metadataBase: new URL("https://azizbek.uz"),
  alternates: {
    canonical: "/",
  },
  authors:[{name:'Azizbek Ikromov', url:'https://azizbek.uz'}],
  keywords:"Azizbek Ikromov, portfolio website for developers, best portfolio websites,frontend portfolio website, frontend ,backed, frontend,",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Azizbek Ikromov",
    description:
      "Frontend Developer portfolio website — projects, skills, and contact information.",
    url: "https://azizbek.uz",
    siteName: "Azizbek Portfolio",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Azizbek Ikromov Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azizbek Ikromov",
    description:
      "This is my portfolio website. I'm a Frontend Developer based in Uzbekistan.",
    images: ["/banner.png"],
  },
  verification: {
    google: "sc8vmfOv46FlwWYTyzq7HaN6PbNnTnhD9xc1HgBo3bU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Azizbek Ikromov",
              url: "https://azizbek.uz",
              sameAs: [
                "https://github.com/azizca7",
                "https://instagram.com/ikromovv._7",
              ],
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
