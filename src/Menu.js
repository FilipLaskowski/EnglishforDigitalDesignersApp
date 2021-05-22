import React, { useState } from "react";

function App({ categories, filterCategories, category }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <article>
      <div className="cat-div">
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? "Hide Category" : "Choose Category"}
        </button>
        <h4>{category}</h4>
      </div>
      {!toggleMenu ||
        categories.map((category, index) => {
          return (
            <div
              className="category"
              key={index}
              onClick={() => {
                setToggleMenu(false);
                filterCategories(category);
              }}
            >
              <h5>{`${index}. ${category}`}</h5>
            </div>
          );
        })}
    </article>
  );
}

export default App;
