import React from "react";
import {
    List,
    Link,
    ListItem,
    Appear,
    CodePane,
    Heading
} from "spectacle";

const Intro = () => (
    <div>
        <Heading size={2} lineHeight={1} caps fit textColor="secondary">
            Component State
        </Heading>
    </div>
);

const Example01 = () => (
    <div>
        <Appear>
            <div>
                <CodePane
                    textSize="1.2rem"
                    lang="jsx"
                    source={require("raw-loader!../../assets/state-01.example")}
                    overflow="scroll"
                    height="73vh" />
                <Appear>
                    <Link href="https://jsfiddle.net/n5u2wwjg/93041/" target="_blank" margin="20px">Live example</Link>
                </Appear>
            </div>
        </Appear>
    </div>
);

const Details = () => (
    <div>
        <Heading size={4} lineHeight={1} textColor="quarternary" margin="20px 0">
            Lifecycle events triggered by state changes
            </Heading>
        <Appear>
            <List margin="60px 20px">
                <ListItem textSize="24" margin="20px 0">
                    getDerivedStateFromProps(nextProps, prevState)
                    </ListItem>
                <ListItem textSize="24" margin="20px 0">
                    shouldComponentUpdate(nextProps, nextState) {}
                </ListItem>
                <ListItem textSize="24" margin="20px 0">
                    render()
                    </ListItem>
                <ListItem textSize="24" margin="20px 0">
                    componentDidUpdate(prevProps, prevState) {}
                </ListItem>
            </List>
        </Appear>
    </div>
);

export default {
    Intro,
    Example01,
    Details
};
