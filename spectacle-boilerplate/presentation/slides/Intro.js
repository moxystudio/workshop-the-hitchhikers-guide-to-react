import React from "react";
import {
  Link,
  Code,
  CodePane,
  S,
  Slide,
  Text,
  Image,
  Heading,
  Appear,
} from "spectacle";


const TimeTravel = () => (
    <div>
        <Heading size={4} lineHeight={2} textColor="quarternary" style={{ textAlign: 'left' }}>
            let's
        </Heading>
        <Heading size={2} caps lineHeight={2} textColor="quarternary" style={{ textAlign: 'left' }}>
            Time travel
        </Heading>
        <Heading size={4} lineHeight={2} textColor="quarternary" style={{ textAlign: 'left' }}>
            a bit
        </Heading>
    </div>
);

const Before = () => (
    <div>
        <Heading size={2} lineHeight={1.5} textColor="secondary" >
            📻
        </Heading>
        <Heading size={2} lineHeight={1.5} textColor="secondary" >
           Typical flow:
        </Heading>
        <Appear>
            <Text lineHeight={1.5} textColor="secondary" >
                Browser asks for page
            </Text>
        </Appear>
        <Appear>
            <Text lineHeight={1.5} textColor="secondary" >
                Server fetches data from DB 
            </Text>
        </Appear>
        <Appear>
            <Text lineHeight={1.5} textColor="secondary" >
                Server fills templates with data
            </Text>
        </Appear>
        <Appear>
            <Text lineHeight={1.5} textColor="secondary" >
                Full markup is returned
            </Text>
        </Appear>
        <Appear>
            <Text lineHeight={1} textColor="secondary" >
                Need some UI interactions?
            </Text>
        </Appear>
        <Appear>
            <Text fit lineHeight={1.5} textColor="secondary" >
                Add a bunch of <S type="bold">JavaScript files</S>
            </Text>
        </Appear>
    </div>
);

const Now = () => (
    <div>
        <Heading size={2} caps lineHeight={1} textColor="secondary" margin="40px" bgColor="primary">
            New Players
        </Heading>
    </div>
);

const Now2 = () => (
    <div>
        <Heading size={3} lineHeight={2} textColor="secondary" >
            The flow becomes:
        </Heading>
        <Appear>
            <Text lineHeight={1.5} textColor="secondary" >
                Browser asks for page
            </Text>
        </Appear>
        <Appear>
            <Text lineHeight={1.5} textColor="secondary" >
                Server returns minimal (or full) markup
            </Text>
        </Appear>
        <Appear>
            <Text lineHeight={1.5} textColor="secondary" >
                Client (JS) picks up and does all the templating and additional requests
            </Text>
        </Appear>
        <Appear>
            <Text lineHeight={1.5} textColor="quarternary" bold>
                JS apps become more and more complex
            </Text>
        </Appear>
    </div>
);


class Title extends React.Component {
    render() {
        return (
            <div>
                <Heading size={1} fit caps lineHeight={1} textColor={ this.props.color || "secondary"}>
                    Why React?
                </Heading>
            </div>
        );
    }
}

const QuickWins = () => (
    <div>
        <Heading size={2} lineHeight={2} textColor="secondary" textAlign="center">
            ⚡ Wins
        </Heading>
        <Appear>
            <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                ✔ Great adoption -> Strong dev community
            </Text>
        </Appear>
        <Appear>
            <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                ✔ Great developer tools
            </Text>
        </Appear>
        <Appear>
            <div>
                <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                    ✔  Security features
                </Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                    ✔ Understanding how react works -> React Native becomes a lot easier
                </Text>
            </div>
        </Appear>
    </div>
);

const QuickWins2 = (props) => (
    <div>
        <Heading size={2} lineHeight={2} textColor="secondary" textAlign="center">
            ⚡ Wins
        </Heading>
        <Appear>
            <div style={{padding: '20px'}}>
                <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                    ✔ It's quick, thanks to the virtual DOM and <S type="italic">Tree Reconciliation</S> 
                </Text>
                <Image src={ props.img } width={ '50%' }/>
            </div>
        </Appear>
    </div>
);

const QuickWins0 = () => (
    <div>
        <Heading size={2} lineHeight={2} textColor="secondary" textAlign="center">
            ⚡ Wins
        </Heading>
        <Appear>
            <div>
                <Text lineHeight={1.4} textColor="other">
                    JSX is cool 😎
                </Text>
                <CodePane
                    lang="jsx"
                    source={require("raw-loader!../../assets/map.example")}
                    textSize="22px"
                    margin="20px 0" />
            </div>
        </Appear>
    </div>
);

const OtherWins = () => (
    <div>
        <Heading size={2} lineHeight={2} textColor="secondary" textAlign="center">
            ⚡ Wins
        </Heading>
        <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
            ✔ It's a library for building UI, not a framework
        </Text>
        <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
            ✔ Server Side Rendering
        </Text>
        <Appear>
            <Text textSize={30} textColor="secondary">
                Plus...
            </Text>
        </Appear>
    </div>
)

const JustFn = () => (
    <div>
        <Heading size={1} caps fit lineHeight={2} textColor="secondary">
            It's just functions
        </Heading>
        <Appear>
            <Code>(props) => markup || more functions</Code>
        </Appear>
    </div>
)

export default {
    Title,
    TimeTravel,
    Before,
    Now,
    Now2,
    QuickWins0,
    QuickWins,
    QuickWins2,
    OtherWins,
    JustFn,
};
