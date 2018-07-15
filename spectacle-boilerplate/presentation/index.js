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
import Props from "./slides/Props";
import Styling from "./slides/Styling";
import Patterns from "./slides/Patterns";
import Storybook from "./slides/Storybook";


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
                    <Intro.QuickWins0 />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.QuickWins />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.QuickWins2 img={ images.diff} />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.OtherWins />
                </Slide>
                
                <Slide transition={["fade"]} bgColor="primary">
                    <Intro.JustFn />
                </Slide>

                { /* Props */ }

                <Slide transition={["fade"]} bgColor="primary">
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

                { /* Composing */ }

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

                <Slide transition={["fade"]} bgColor="primary">
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

                { /* Composing */ }

                <Slide transition={["fade"]} bgColor="primary">
                    <Storybook.Title />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Storybook.Main />
                </Slide>

            </Deck>
        );
    }
}
