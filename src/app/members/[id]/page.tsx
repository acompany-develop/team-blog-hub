import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { members } from "@members";
import { PostItem, Member } from "@src/types";
import { PostList } from "@src/components/PostList";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { PageSEO } from "@src/components/PageSEO";
import {
  getMemberById,
  getMemberPostsById,
  getMemberPath,
} from "@src/utils/helper";

export default async function Page({ params }: { params: { id: string } }) {
  const { member, postItems } = await getPosts(params);
  const {
    id,
    name,
    bio,
    avatarSrc,
    twitterUsername,
    githubUsername,
    websiteUrl,
  } = member;

  return (
    <>
      <PageSEO title={name} path={getMemberPath(id)} />
      <section className="member">
        <ContentWrapper>
          <header className="flex flex-col items-center gap-4 max-w-xl mx-auto my-10">
            <div className="member-header__avatar">
              <img
                src={avatarSrc}
                alt={name}
                width={100}
                height={100}
                className="rounded"
              />
            </div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="member-header__bio">{bio}</p>
            <div className="flex gap-2">
              {twitterUsername && (
                <PersonalLink
                  websiteUrl={`https://twitter.com/${twitterUsername}`}
                  icon={
                    <FaXTwitter
                      className="text-2xl"
                      aria-label={`Follow @${twitterUsername} on Twitter`}
                    />
                  }
                />
              )}
              {githubUsername && (
                <PersonalLink
                  websiteUrl={`https://github.com/${githubUsername}`}
                  icon={
                    <FaGithub
                      className="text-2xl"
                      aria-label={`@${githubUsername} on GitHub`}
                    />
                  }
                />
              )}
              {websiteUrl && (
                <PersonalLink
                  websiteUrl={websiteUrl}
                  icon={
                    <AiOutlineLink
                      className="text-2xl"
                      aria-label={`Link to website`}
                    />
                  }
                />
              )}
            </div>
          </header>

          <div className="member-posts-container">
            <PostList items={postItems} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
}

type PersonalLinkProps = {
  websiteUrl: string;
  icon: React.ReactNode;
};
const PersonalLink = ({ websiteUrl, icon }: PersonalLinkProps) => {
  return (
    <a
      href={websiteUrl}
      className="text-primary p-2 rounded hover:bg-slate-300"
    >
      {icon}
    </a>
  );
};

type GetPostsResponse = {
  postItems: PostItem[];
  member: Member;
};
// Define the loader function for data fetching
async function getPosts(params: { id: string }): Promise<GetPostsResponse> {
  const id = params.id;
  const member = getMemberById(id);
  const postItems = getMemberPostsById(id);

  if (!member) throw new Error("User not found");

  return {
    // The key here can be anything, but 'props' aligns with previous patterns
    member,
    postItems,
  };
}

export async function generateStaticParams() {
  return members.map((member) => ({ id: member.id }));
}
