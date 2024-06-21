import React from 'react';

const formatDate = (publishedAt) => {
  const date = new Date(publishedAt);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
  return formattedDate;
}

const ArticleDate = ({ publishedAt }) => {
  const formattedDate = formatDate(publishedAt);

  return (
    <span>{formattedDate}</span>
  );
}

export default ArticleDate;
