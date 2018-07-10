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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import images from './getImages';
preloader(images);


// Import slides
import Cover from "./slides/Cover"
import HelloWorld from "./slides/HelloWorld";
import Intro from "./slides/Intro";


// Require CSS
require("normalize.css");

const theme = createTheme({
    primary: "white",
    secondary: "#2932d3",
    tertiary: "#03A9FC",
    quarternary: "#f54e50"

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
                    <Intro.Title />
                </Slide>
            <Slide transition={["slide"]} bgImage={images.timeMachine.replace("/", "")} bgDarken={0.75}>
                    <Intro.TimeTravel />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Intro.Before />
                </Slide>
                <Slide transition={["spin"]} bgImage={ images.newPlayers} >
                    <Intro.Now />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Intro.Now2 />
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Intro.Title color="primary"/>
                </Slide>
                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.QuickWins />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.QuickWins2 img={ images.diff} />
                </Slide>

            </Deck>
        );
    }
}
