// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    Deck,
    Heading,
    Layout,
    Text,
    Slide
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import slides
import Cover from "./slides/Cover"
import HelloWorld from "./slides/HelloWorld";
import Coding from "./slides/Coding";


// Require CSS
require("normalize.css");

const theme = createTheme({
    primary: "white",
    secondary: "#2932d3",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Cover />
                </Slide>
                <Slide bgColor="primary">
                    <HelloWorld.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <HelloWorld.Desc />
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Coding />
                </Slide>
            </Deck>
        );
    }
}
