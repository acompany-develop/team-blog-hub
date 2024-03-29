import Link from "next/link";
import { members } from "@members";
import { getMemberPath } from "@src/utils/helper";

export const ScrollableMembers: React.FC = () => {
  return (
    <div className="flex items-start overflow-x-scroll snap-mandatory scroll-smooth gap-6">
      {members.map((member, i) => (
        <Link
          key={`scrollable-member-${i}`}
          href={getMemberPath(member.id)}
          passHref
          className="flex flex-col shrink-0 text-center snap-center"
        >
          <span className="block">
            <img
              src={member.avatarSrc}
              alt={member.name}
              className="block rounded-2xl transition-all hover:scale-105"
              width={80}
              height={80}
            />
          </span>
          <span className="text-sm font-bold">{member.name}</span>
          <span className="text-xs">{member.role}</span>
        </Link>
      ))}
    </div>
  );
};
