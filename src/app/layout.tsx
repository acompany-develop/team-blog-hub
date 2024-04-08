import { SiteFooter } from "@src/components/SiteFooter";
import { SiteHeader } from "@src/components/SiteHeader";

import "./globals.css";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { Sidebar } from "@src/components/Sidebar";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-[#f6f6f6]">
        <SiteHeader />
        <div className="grid grid-cols-2 lg:grid-cols-3 max-w-4xl gap-5 mx-auto py-5">
          <div className="col-span-2">{children}</div>
          <div className="col-span-2 lg:col-span-1">
            <Sidebar />
          </div>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
