import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { config } from "@site.config";
import { members } from "@members";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { PageSEO } from "@src/components/PageSEO";
import { getMemberPath } from "@src/utils/helper";
import { Member } from "@src/types";
import { Card, CardContent, CardHeader } from "@src/components/ui/card";

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <Link href={getMemberPath(member.id)}>
      <Card className="border-none shadow-none hover:bg-slate-50 transition-all">
        <CardHeader>
          <img
            src={member.avatarSrc}
            alt={member.name}
            width={80}
            height={80}
            className="member-card__avatar-img"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold"> {member.name}</h2>
          <p className="text-sm">{member.bio}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="Members" path="/members" />
      <ContentWrapper>
        <section className="members">
          <h1 className="text-3xl my-5">
            Members
            <span className="text-base block">
              @ {config.siteMeta.teamName}
            </span>
          </h1>
          <div className="grid grid-cols-4 gap-3">
            {members.map((member, i) => (
              <MemberCard key={`member-card-${i}`} member={member} />
            ))}
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
