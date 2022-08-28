import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPostTitles } from "~/models/post.server";

type LoaderData = {
  titles: Awaited<ReturnType<typeof getPostTitles>>;
};

export const loader = async () =>
  json<LoaderData>({
    titles: await getPostTitles(),
  });

export default function Index() {
  const { titles } = useLoaderData<LoaderData>();
  console.log(titles);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="">Welcome to Remix</h1>
      <h2>{titles?.allPost.map((post) => post.title)}</h2>
      {titles?.allPost.map((post, i) => (
        <img
          src={post.mainImage?.asset?.metadata?.lqip}
          key={i}
          width={1000}
        ></img>
      ))}
      {/* <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul> */}
    </div>
  );
}
