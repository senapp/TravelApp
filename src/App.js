"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const React = require("react");
const react_1 = require("react");
const App = () => {
    const answers = (0, react_1.useState)([]);
    React.useEffect(() => {
        require('./tinder');
    });
    return (React.createElement("div", { className: "tinder" },
        React.createElement("div", { className: "tinder--status" },
            React.createElement("i", { className: "fa fa-remove" }),
            React.createElement("i", { className: "fa fa-heart" })),
        React.createElement("div", { className: "tinder--cards" },
            React.createElement("div", { className: "tinder--card" },
                React.createElement("img", { src: "https://placeimg.com/600/300/people" }),
                React.createElement("h3", null, "Demo card 1"),
                React.createElement("p", null, "This is a demo for Tinder like swipe cards")),
            React.createElement("div", { className: "tinder--card" },
                React.createElement("img", { src: "https://placeimg.com/600/300/animals" }),
                React.createElement("h3", null, "Demo card 2"),
                React.createElement("p", null, "This is a demo for Tinder like swipe cards")),
            React.createElement("div", { className: "tinder--card" },
                React.createElement("img", { src: "https://placeimg.com/600/300/nature" }),
                React.createElement("h3", null, "Demo card 3"),
                React.createElement("p", null, "This is a demo for Tinder like swipe cards")),
            React.createElement("div", { className: "tinder--card" },
                React.createElement("img", { src: "https://placeimg.com/600/300/tech" }),
                React.createElement("h3", null, "Demo card 4"),
                React.createElement("p", null, "This is a demo for Tinder like swipe cards")),
            React.createElement("div", { className: "tinder--card" },
                React.createElement("img", { src: "https://placeimg.com/600/300/arch" }),
                React.createElement("h3", null, "Demo card 5"),
                React.createElement("p", null, "This is a demo for Tinder like swipe cards"))),
        React.createElement("div", { className: "tinder--buttons" },
            React.createElement("button", { id: "nope" },
                React.createElement("i", { className: "fa fa-remove" })),
            React.createElement("button", { id: "love" },
                React.createElement("i", { className: "fa fa-heart" })))));
};
exports.App = App;
//# sourceMappingURL=App.js.map