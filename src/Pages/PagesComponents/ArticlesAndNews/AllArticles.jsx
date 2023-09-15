import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import Articles from "./Articles";

const AllArticles = () => {
  const [axiosSequre] = useAxioSequre();
  const { data: articles = [] } = useQuery(["articles"], async () => {
    const res = await axiosSequre.get(`/news-article`);
    return res.data;
  });

  return (
    <div className="my-20 mx-3">
      <div className="grid md:grid-cols-3 gap-7">
        {articles.map((article) => (
          <Articles key={article._id} article={article}></Articles>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
