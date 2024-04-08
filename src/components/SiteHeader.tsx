import Link from "next/link";
import { config } from "@site.config";

import { ContentWrapper } from "@src/components/ContentWrapper";

export const SiteHeader = () => (
  <header className="py-20 bg-cover bg-center bg-[url('/acompany-header.svg')] bg-[rgba(255,255,255,.1)] bg-blend-lighten">
    <ContentWrapper>
      <Link
        href="/"
        className="flex items-center justify-between text-4xl md:text-6xl leading-normal font-bold text-primary"
      >
        Xcompany <br />
        Tech Blog Hub
      </Link>
    </ContentWrapper>
  </header>
);
