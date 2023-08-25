// const heading =  React.createElement("h1", {}, "Welocome React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

// const heading = React.createElement("h1",{id:"heading"}, "Hello guys want to learn React ")
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading); 

const parent = React.createElement("div", {id: "parent"}, [
React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "I'm h1"),
    React.createElement("h2", {}, "I'm in h2")

]),React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "I'm h1"),
    React.createElement("h12", {}, "I'm h2")

])
])