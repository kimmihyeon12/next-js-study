import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../src/components/ItemList";
import styles from "../styles/Home.module.css";

export default function Home({ list }) {
  return (
    <div className="border">
      <Head>
        <title>gg</title>
      </Head>

      {<ItemList list={list} />}
    </div>
  );
}
export async function getStaticProps(context) {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
