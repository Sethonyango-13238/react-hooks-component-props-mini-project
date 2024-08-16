import React from 'react';
import Header from './Header'; // Make sure this path is correct
import About from './About'; // Make sure this path is correct
import ArticleList from './ArticleList'; // Make sure this path is correct

const App = () => {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <aside>
        {/* Content for the aside section */}
        <About />
      </aside>
      <main>
        <ArticleList
          posts={[
            {
              id: 1,
              title: "Components 101",
              date: "December 15, 2020",
              preview: "Setting up the building blocks of your site",
            },
            {
              id: 2,
              title: "React Data Flow",
              date: "December 11, 2020",
              preview: "Passing props is never passé",
            },
            {
              id: 3,
              title: "Function Components vs Class Components",
              date: "December 10, 2020",
              preview: "React, meet OOJS.",
            },
          ]}
        />
      </main>
    </div>
  );
};

export default App;



