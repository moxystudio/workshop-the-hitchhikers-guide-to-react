import React from "react";
import {
    List,
    ListItem,
    Appear,
    CodePane,
    Heading
} from "spectacle";

const Intro = () => (
    <div>
        <Heading size={2} lineHeight={1} caps fit textColor="quarternary">
            Composing Components
        </Heading>
    </div>
);

const App = () => (
    <div />
);

const Description = () => (
    <div>
        <Heading size={2} lineHeight={1} caps fit textColor="secondary">
            Restaurant Room Component
        </Heading>
        <Appear>
            <List margin="60px 20px">
                <ListItem textSize="24" margin="20px 0">
                    Should have tables
                        </ListItem>
                <ListItem textSize="24" margin="20px 20px">
                    each one with a set of benchs
                        </ListItem>
                <ListItem textSize="24" margin="20px 0">
                    Should have a kitchen entrance
                        </ListItem>
                <ListItem textSize="24" margin="20px 0">
                    Should have a waiter
                        </ListItem>
            </List>
        </Appear>
    </div>
);

const Example01 = () => (
    <div>
        <Appear>
            <div>
                <CodePane
                    textSize="1.2rem"
                    lang="jsx"
                    source={require("raw-loader!../../assets/composing-01.example")}
                    margin="20px auto"
                    overflow="scroll"
                    height="75vh" />
            </div>
        </Appear>
    </div>
);
 
const Example02 = () => (
    <div>
        <Appear>
            <div>
                <CodePane
                    textSize="1.2rem"
                    lang="jsx"
                    source={require("raw-loader!../../assets/composing-02.example")}
                    margin="20px auto"
                    overflow="scroll"
                    height="75vh"
                />
            </div>
        </Appear>
    </div>
);

export default {
    Intro,
    App,
    Description,
    Example01,
    Example02
};
