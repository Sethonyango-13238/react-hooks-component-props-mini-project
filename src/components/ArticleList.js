import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article'; // Import the Article component

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map(post => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
};

ArticleList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
      preview: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ArticleList;
