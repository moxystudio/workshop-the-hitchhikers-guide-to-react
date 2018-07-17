// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Deck,
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
import State from "./slides/State";
import Props from "./slides/Props";
import Composing from "./slides/Composing";
import Styling from "./slides/Styling";
import Patterns from "./slides/Patterns";
import Storybook from "./slides/Storybook";
import Testing from "./slides/Testing";
import Coding from "./slides/Coding";

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
                <Slide transition={["slide"]} bgImage={images.guide.replace("/", "")} bgDarken={0.75}>
                    <Cover />
                </Slide>

                { /* Intro */}

                <Slide transition={["zoom"]} bgColor="primary">
                    <Intro.Title />
                </Slide>
                <Slide transition={["slide"]} bgImage={images.timeMachine.replace("/", "")} bgDarken={0.75}>
                    <Intro.TimeTravel />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Intro.Before />
                </Slide>
                <Slide transition={["spin"]} bgImage={images.newPlayers} >
                    <Intro.Now />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Intro.Now2 />
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Intro.Title color="primary" />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.QuickWins0 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.QuickWins />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.QuickWins2 img={images.diff} />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.OtherWins />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.JustFn />
                </Slide>

                { /* Hello world */}

                <Slide transition={["spin"]} bgImage={images.world.replace("/", "")} bgDarken={0.75}>
                    <HelloWorld.Intro />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <HelloWorld.Example01 />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <HelloWorld.Example02 />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <HelloWorld.Example03 />
                </Slide>

                { /* State */}

                <Slide transition={["spin"]} bgColor="primary">
                    <State.Intro />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <State.Example01 />
                </Slide>
                <Slide transition={["fade"]} bgColor="primary">
                    <State.Details />
                </Slide>

                { /* Props */}

                <Slide transition={["slide"]} bgImage={images.power.replace("/", "")} bgDarken={0.75}>
                    <Props.Title />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Props.Api />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Props.Code1 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Props.Code2 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Props.Code3 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Props.Code4 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Props.PropValidation />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Props.PropValidation2 />
                </Slide>

                { /* Composing */}

                <Slide bgColor="spin" bgImage={images.puzzle.replace("/", "")} bgDarken={0.75}>
                    <Composing.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <Composing.Description />
                </Slide>
                <Slide bgColor="primary">
                    <Composing.Example01 />
                </Slide>
                <Slide bgColor="primary">
                    <Composing.Example02 />
                </Slide>

                { /* Styling Options */ }

                <Slide transition={["fade"]} bgColor="primary">
                    <Styling.Title />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Styling.PlainCss />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Styling.CssModules />
                </Slide>

                <Slide bgColor="slide" bgImage={images.pattern.replace("/", "")} bgDarken={0.75}>
                    <Patterns.Title />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Patterns.Patterns1 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Patterns.Patterns2 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Patterns.Patterns3 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Patterns.Patterns4 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Patterns.Patterns5 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Patterns.Patterns6 />
                </Slide>

                { /* Storybook */ }

                <Slide transition={["fade"]} bgColor="primary">
                    <Storybook.Title />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Storybook.Main />
                </Slide>

                { /* Testing */}

                <Slide bgColor="primary">
                    <Testing.Listing />
                </Slide>

                <Slide bgColor="primary">
                    <Coding />
                </Slide>
            </Deck>
        );
    }
}
