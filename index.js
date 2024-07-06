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
  const isGreeting = false;
  const userName = "Test";

  return <Greeting isGreeting={isGreeting} userName={userName} />;
}

// додати змінну з іменем користувача і прокинути в компонент
function Greeting(props) {
  const { isGreeting, userName } = props;
  return (
    <div>
      {isGreeting ? "Hello" : "Goodbye"}, {userName}
    </div>
  );
}
