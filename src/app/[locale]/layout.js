import "../globals.css";
import { font_base, poppins } from "@/app/font/font";
import PublicNavbar from "./ui/layouts/public/PublicNavbar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { useLocale, useMessages } from "next-intl";

import Footer from "./ui/layouts/Footer";

export const metadata = {
  title: "Developers Cambodia",
  description: "A new evolution of E-learning in Cambodia."
};

const locales = ["km", "en"];

export default function RootLayout({ children, params }) {
  const messages = useMessages();

  // GET THE CURRENT LOCALE
  const locale = useLocale();

  // SHOW 404 ERROR IF LOCALE DOSE NOT EXIST
  if (!locales.includes(locale)) {
    return notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${
          locale === "en" ? poppins.className : font_base.className
        }`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PublicNavbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
