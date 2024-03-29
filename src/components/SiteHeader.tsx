import Link from "next/link";
import { config } from "@site.config";

import { ContentWrapper } from "@src/components/ContentWrapper";

export const SiteHeader = () => (
  <header className="py-1 bg-slate-200">
    <ContentWrapper>
      <div className="flex items-center justify-between">
        <Link href="/" passHref>
          <img
            src="/color_logo.png"
            alt={config.siteMeta.title}
            className="h-14"
          />
        </Link>
        <div className="flex items-center gap-3">
          {config.headerLinks.map((link, i) => {
            const key = `header-link-${i}`;
            if (link.href.startsWith("/")) {
              return (
                <Link key={key} href={link.href} passHref>
                  {link.title}
                </Link>
              );
            }
            return (
              <a key={key} href={link.href} className="ml-2 text-sm">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  </header>
);
