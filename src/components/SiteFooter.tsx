import { ContentWrapper } from "@src/components/ContentWrapper";
import { config } from "@site.config";

export const SiteFooter: React.FC = () => (
  <footer className="mt-10 text-center">
    <ContentWrapper>
      <p>© {config.siteMeta.teamName}</p>
    </ContentWrapper>
  </footer>
);
