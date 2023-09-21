import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import Articles from "./Articles";
import { useState } from "react";
import { useEffect } from "react";

const AllArticles = () => {
  // const [axiosSequre] = useAxioSequre();
  // const { data: articles = [] } = useQuery(["articles"], async () => {
  //   const res = await axiosSequre.get("/news-article");
  //   return res.data;
  // });
  // console.log(articles);

    const [articles, setCollage] = useState([]);

    useEffect(() => {
      fetch("https://jobstack-backend-teal.vercel.app/news-article")
        .then((res) => res.json())
        .then((data) => {
          setCollage(data);
        });
    }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="my-20 mx-3">
        <div className="grid md:grid-cols-3 gap-7">
          {articles.map((article) => (
            <Articles key={article._id} article={article}></Articles>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
