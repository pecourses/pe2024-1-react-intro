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
function App() {
  return (
    <>
      <Header />
      <main>
        <UserCard />
      </main>
      <Footer />
    </>
  );
}

function UserCard() {
  const user = {
    name: "Ivo",
    age: 19,
    isMale: false,
    imgSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    favouriteColor: "orange",
  };

  const nameStyle = {
    color: "red",
    backgroundColor: "green",
    border: "2px solid yellow",
  };

  const imgBorderStyle = {
    border: `2px solid ${user.favouriteColor}`,
  };

  const ageStyle = {
    color: user.age >= 18 ? "blue" : "green",
  };

  return (
    <article className="userCard">
      <h2 className="userName" style={nameStyle}>
        {user.name}
      </h2>
      <img
        className="userImg"
        style={imgBorderStyle}
        src={user.imgSrc}
        alt={user.name}
      />
      <p className="userAge" style={ageStyle}>
        {user.age}
      </p>
    </article>
  );
}

// Реалізувати компонент (розмітка  + інлайн-стилі)
const news = {
  title: "Some news",
  body: "Something hapenned",
  isGood: true,
};
// гарна новина - зелена, не гарна - червона

function Header() {
  return (
    <header className="pageHeader">
      <img
        className="logoImg"
        src="https://cdn-icons-png.flaticon.com/512/5332/5332306.png"
        alt="logo"
      ></img>
      <h1 className="pageTitle">Page Title</h1>
    </header>
  );
}

// Додати та стилізувати Footer (Contacts, About, FAQ)
// (опустити вниз сторінки)

function Footer() {
  return (
    <footer className="pageFooter">
      <a href="#">Contact</a>
      <a href="#">About</a>
    </footer>
  );
}
