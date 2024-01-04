const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", {}, "Hello World")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);
