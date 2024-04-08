import Link from "next/link";
import { config } from "@site.config";

import { ContentWrapper } from "@src/components/ContentWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { members } from "@members";
import { getMemberPath } from "@src/utils/helper";

export const Sidebar = () => (
  <ContentWrapper>
    <section className="flex flex-col gap-5">
      <Card className="">
        <CardHeader>
          <CardTitle>
            <a
              href="https://recruit.acompany.tech/"
              className="hover:text-red-500"
            >
              RECRUIT
            </a>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          {categories.map((category, i) => (
            <a
              key={category.name}
              href={category.link}
              className={` py-4 flex justify-between items-center hover:bg-slate-100 ${
                i !== categories.length - 1 ? "border-b" : ""
              }`}
            >
              {category.name}
              <span>→</span>
            </a>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Members</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {members.map((member, i) => (
            <div
              key={`scrollable-member-${i}`}
              className="flex flex-col items-center col-span-1 gap-1"
            >
              <Link href={getMemberPath(member.id)} passHref>
                <span className="block">
                  <img
                    src={member.avatarSrc}
                    alt={member.name}
                    className="block rounded-2xl transition-all hover:scale-105"
                    width={80}
                    height={80}
                  />
                </span>
              </Link>
              <span className="text-sm font-bold">{member.name}</span>
              <span className="text-xs">{member.role}</span>
            </div>
          ))}
          <Link
            href="/members"
            className="underline text-blue-600 col-span-2 text-right"
          >
            See Details →
          </Link>
        </CardContent>
      </Card>
    </section>
  </ContentWrapper>
);

const categories = [
  {
    name: "フルスタックエンジニア",
    link: "https://recruit.acompany.tech/5ac263bd33f6460b95fa68853f4aed81",
  },
  {
    name: "バックエンドエンジニア",
    link: "https://recruit.acompany.tech/775ff51442bf44838cf3b19bc334f2c5",
  },
  {
    name: "バックエンドエンジニア (DevOps/SRE)",
    link: "https://recruit.acompany.tech/39d17e3ded3b451481aef7129d8ecb8f",
  },
  {
    name: "プロダクトマネージャー（PdM）",
    link: "https://recruit.acompany.tech/2b254993eb1d4481af749aad47b21d81",
  },
  {
    name: "R&Dエンジニア",
    link: "https://recruit.acompany.tech/9f0d941f2fe8458db9214591ffb6c3ba",
  },
  {
    name: "事業開発（BizDev）",
    link: "https://recruit.acompany.tech/c17645f729684c68b688a6f42f0af960",
  },
];
