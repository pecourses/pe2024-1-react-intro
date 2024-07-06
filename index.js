"use strict";

// const el = document.querySelector("div");
// el.textContent = "content";
// el.style.color = "red";
// const el = createNewElement(type, attrs, content)

// const reactEl = createElement(type, attrs, content)

{
  /* JSX
<type arrts>
  content
</type> */
}

// JSX => JS for browser

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
// root.render(<App></App>);

// <></> - react fragment (для компонування кількох елементів)
// class => className = "class1 class2"
// атрибути іменуються в camelCase
// style - object
//    імена властивослей - в camelCase
//    backgroundColor: 'yellow',
function App() {
  const news = [
    {
      title: "Some news1",
      body: "Something hapenned1",
      isGood: false,
    },
    {
      title: "Some news2",
      body: "Something hapenned2",
      isGood: true,
    },
  ];
  return (
    <>
      <News newsItem={news[0]} />
      <News newsItem={news[1]} />
    </>
  );
}
// News(news[0])
// News(news[1])
// <News newsItem={news[0]} /> => News({newsItem:news[0]})

function News(props) {
  const news = props.newsItem;
  const newsStyle = {
    border: `3px solid ${news.isGood ? "green" : "red"}`,
  };

  return (
    <article style={newsStyle}>
      <h2>{news.title}</h2>
      <p>{news.body}</p>
    </article>
  );
}
