"use client";
import { useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { PostItem } from "@src/types";
import {
  getFaviconSrcFromOrigin,
  getMemberPath,
  getMemberById,
} from "@src/utils/helper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

dayjs.extend(relativeTime);

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { authorId, title, isoDate, link, dateMiliSeconds } = props.item;
  const member = getMemberById(authorId);
  if (!member) return null;

  const { hostname, origin } = new URL(link);

  return (
    <a href={link} target="_blank" className="flex">
      <Card className="flex flex-col relative flex-auto hover:bg-slate-100 transition-all">
        <CardHeader className="flex-grow">
          <CardTitle className="text-lg">{title}</CardTitle>
          {hostname && (
            <CardDescription className="flex gap-1 items-center justify-end mt-1">
              <img
                src={getFaviconSrcFromOrigin(origin)}
                className="h-4 mt-[1px] w-auto"
                alt={hostname}
              />
              {hostname}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent>
          {dateMiliSeconds && dateMiliSeconds > Date.now() - 86400000 * 3 && (
            <div className="post-link__new-label">NEW</div>
          )}
        </CardContent>

        <CardFooter>
          <div className="grid grid-rows-3 grid-flow-col gap-1">
            <img
              src={member.avatarSrc}
              className="rounded-3xl row-span-3"
              width={44}
              height={44}
              alt={member.name}
            />
            <span className="col-span-2 row-span-3 gap-1">
              <span className="block row-span-2 text-sm">{member.name}</span>
              <time dateTime={isoDate} className="text-xs">
                {dayjs(isoDate).fromNow()}
              </time>
            </span>
          </div>
        </CardFooter>
      </Card>
    </a>
  );
};

export const PostList: React.FC<{ items: PostItem[] }> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(32);
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  if (!totalItemsCount) {
    return (
      <div className="py-20 text-center font-bold text-lg">
        記事が投稿されていません
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">
        {props.items.slice(0, displayItemsCount).map((item, i) => (
          <PostLink key={`post-item-${i}`} item={item} />
        ))}
      </div>
      {canLoadMore && (
        <div className="post-list-load">
          <button
            onClick={() => setDisplayItemsCount(displayItemsCount + 32)}
            className="post-list-load__button"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </>
  );
};
