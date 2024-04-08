import { NextPage } from "next";
import Link from "next/link";

import posts from "@.contents/posts.json";
import { config } from "@site.config";
import { PostItem } from "@src/types";
import { ScrollableMembers } from "@src/components/ScrollableMembers";
import { PostList } from "@src/components/PostList";
import { PageSEO } from "@src/components/PageSEO";
import {
  ContentWrapper,
  UndoWrapForScroll,
} from "@src/components/ContentWrapper";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO
        title={config.siteMeta.title}
        description={config.siteMeta.description}
        path="/"
        removeSiteNameFromTitle={true}
      />
      <section className="flex flex-col gap-8">
        <section className="flex justify-between items-center -mt-16 mb-4">
          <ContentWrapper>
            <PostList items={posts as PostItem[]} />
          </ContentWrapper>
        </section>
      </section>
    </>
  );
};

export default Page;
