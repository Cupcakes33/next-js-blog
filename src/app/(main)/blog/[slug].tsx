import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params: { slug } }: Props) {
  return <div>blogPage</div>;
}
