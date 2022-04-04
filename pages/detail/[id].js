import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Item from "../../src/components/Item";
import Head from "next/head";
import ItemList from "../../src/components/ItemList";
const Post = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>item</title>
          </Head>
          <Item item={item} />
          {name}환경
        </>
      )}{" "}
    </>
  );
};

export default Post;
export async function getStaticPaths() {
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    paths: data.map((item) => ({
      params: {
        id: item.id,
      },
    })),
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
