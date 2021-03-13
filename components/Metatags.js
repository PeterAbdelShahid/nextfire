import Head from "next/head";

export default function Metatags({
  title = "The Full Next.js + Firebase",
  description = "A complete Next.js + Firebase course",
  image = "https://pbs.twimg.com/profile_images/1187817395236286464/5NbrqpLJ_400x400.jpg",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@PeterEssam" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
