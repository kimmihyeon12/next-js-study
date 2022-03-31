import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Item from "../../src/components/Item";
import Head from "next/head";
const Post = ({ item }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>item</title>
          </Head>
          <Item item={item} />
        </>
      )}{" "}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    props: {
      item: data,
    },
  };
}
