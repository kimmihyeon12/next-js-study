import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../src/components/ItemList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  function getData() {
    axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="border">
      <Head>
        <title>gg</title>
      </Head>
      {isLoading && <div>로딩중!</div>}
      {!isLoading && <ItemList list={list} />}
    </div>
  );
}
