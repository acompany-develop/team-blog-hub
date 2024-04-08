import Link from "next/link";
import { members } from "@members";
import { getMemberPath } from "@src/utils/helper";

export const ScrollableMembers: React.FC = () => {
  return (
    <div className="flex items-start overflow-x-scroll snap-mandatory pb-2 first-line:scroll-smooth gap-6">
      {members.map((member, i) => (
        <div
          key={`scrollable-member-${i}`}
          className="flex flex-col shrink-0 text-center snap-center"
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
    </div>
  );
};
