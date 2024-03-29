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

      <section className="home-hero">
        <ContentWrapper>
          <h1 className="text-3xl my-3">{config.siteMeta.title}</h1>
          {!!config.siteMeta.description && (
            <p className="text-lg font-thin my-2">
              {config.siteMeta.description}
            </p>
          )}
        </ContentWrapper>
      </section>

      <section className="flex flex-col gap-8">
        <section>
          <ContentWrapper>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-4xl">Members</h2>
              <Link href="/members" className="underline text-blue-600">
                See Details →
              </Link>
            </div>

            <div className="mt-6">
              <UndoWrapForScroll>
                <ScrollableMembers />
              </UndoWrapForScroll>
            </div>
          </ContentWrapper>
        </section>

        <section>
          <ContentWrapper>
            <div className="flex justify-between items-center my-4">
              <h2 className="text-4xl">Articles</h2>
            </div>

            <div className="home-posts-container">
              <PostList items={posts as PostItem[]} />
            </div>
          </ContentWrapper>
        </section>
      </section>
    </>
  );
};

export default Page;
