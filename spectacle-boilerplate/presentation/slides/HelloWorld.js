import React from "react";
import {
    Appear,
    CodePane,
    Heading
} from "spectacle";

const Intro = () => (
    <div>
        <Heading size={2} lineHeight={1} caps fit textColor="quarternary">
            &lt;Hello World /&gt;
        </Heading>
    </div>
);

const Example01 = () => (
    <div>
        <Heading size={4} lineHeight={1} textColor="quarternary" margin="40px 0">
            Functional Component
            </Heading>
        <Appear>
            <div>
                <CodePane
                    lang="jsx"
                    source={require("raw-loader!../../assets/hello-world-01.example")}
                    textSize="1.2rem"
                    margin="20px auto"
                    overflow="overflow" />
            </div>
        </Appear>
    </div>
);

const Example02 = () => (
    <div>
        <Heading size={4} lineHeight={1} textColor="quarternary" margin="40px 0">
            Component (react@16.3.0)
            </Heading>
        <Appear>
            <div>
                <CodePane
                    textSize="1.2rem"
                    lang="jsx"
                    source={require("raw-loader!../../assets/hello-world-02.example")}
                    margin="20px auto"
                    height="65vh"
                    overflow="scroll" />
            </div>
        </Appear>
    </div>
);

const Example03 = () => (
    <div>
        <Appear>
            <div>
                <CodePane
                    textSize="1.2rem"
                    lang="jsx"
                    source={require("raw-loader!../../assets/hello-world-03.example")}
                    margin="20px auto"
                    overflow="overflow" />
            </div>
        </Appear>
    </div>
);

export default {
    Intro,
    Example01,
    Example02,
    Example03
};
