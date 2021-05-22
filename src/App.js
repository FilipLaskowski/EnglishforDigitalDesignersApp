import React, { useState } from "react";
import data from "./data";
import Questions from "./Questions";
import Answers from "./Answers";
import Menu from "./Menu";

const allCategories = [
  "All Questions",
  ...new Set(data.map((item) => item.category)),
];

function App() {
  const [categories] = useState(allCategories);
  const [index, setIndex] = useState(0);
  const [itemArray, setItemArray] = useState(data);
  const { question, answer } = itemArray[index];
  const [bgColor, setBgColor] = useState("var(--all-color)");
  const [category, setCategory] = useState("All Questions");
  document.documentElement.style.setProperty("--color", bgColor);
  const chooseColor = (category) => {
    if (category === "Digital Product and Design") {
      setBgColor("var(--first-color)");
    }
    if (category === "User-Centered Design") {
      setBgColor("var(--second-color)");
    }
    if (category === "User Experience Design") {
      setBgColor("var(--third-color)");
    }
    if (category === "All Questions") {
      setBgColor("var(--all-color)");
    }
  };

  const filterCategories = (category) => {
    if (category === "All Questions") {
      setItemArray(data);
      chooseColor(category);
      return;
    }
    const newArray = data.filter((item) => item.category === category);
    setItemArray(newArray);
    setIndex(0);
    chooseColor(category);
    setCategory(category);
  };

  const checkNumber = (number) => {
    if (number > itemArray.length - 1) {
      return 0;
    }
    if (number < 0) {
      return itemArray.length - 1;
    }
    return number;
  };

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const random = () => {
    let randomNumber = Math.floor(Math.random() * itemArray.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <React.Fragment>
      <Questions question={question} />
      <section>
        <Answers answer={answer} next={next} prev={prev} random={random} />
        <Menu
          category={category}
          filterCategories={filterCategories}
          categories={categories}
        />
      </section>
      <footer>
        <p>Author: Filip Laskowski</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
