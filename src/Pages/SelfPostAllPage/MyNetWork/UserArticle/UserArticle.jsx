import React from "react";
import useAxioSequre from "../../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import ArticleCard from "./ArticleCard";

const UserArticle = () => {
  const [axiosSequre] = useAxioSequre();
  const { data: articles = [], refetch } = useQuery(["articles"], async () => {
    const res = await axiosSequre.get(`/user-article`);
    return res.data;
  });
  return (
    <div>
      <div className="grid md:grid-cols-2 mt-10 gap-8 dark:text-black">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default UserArticle;
