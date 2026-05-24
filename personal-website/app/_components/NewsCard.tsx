"use client";

import { useState } from "react";
import styles from "../css/NewsCard.module.css";
import news from "../_data/news.json";

type NewsItem = {
  id: number;
  headline: string;
  date: string;
  body: string;
};

export default function NewsList() {
  const [query, setQuery] = useState("");

  const filtered = news.filter((item: NewsItem) =>
    `${item.headline} ${item.body} ${item.date}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className={styles.News}>
      <h2>News</h2>
      <input
        className={styles.search}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.NewsList}>
        {filtered.length > 0 ? (
          filtered.map((item: NewsItem) => (
            <NewsCard key={item.id} {...item} />
          ))
        ) : (
          <p className={styles.empty}>No results found.</p>
        )}
      </div>
    </div>
  );
}

function NewsCard({ headline, date, body }: NewsItem) {
  return (
    <div className={styles.NewsCard}>
      <p className={styles.headline}>{headline}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.body}>{body}</p>
    </div>
  );
}
