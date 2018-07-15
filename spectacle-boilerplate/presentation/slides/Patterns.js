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


const Title = () => (
    <div>
        <Heading size={1} caps fit lineHeight={2} textColor="secondary">
            React Patterns
        </Heading>
    </div>
);

const Patterns1 = () => (
    <div>
        <Heading size={2} textColor="secondary">
            Higher-Order-Component (HOC)
        </Heading>
        <Appear>
            <Text margin="40">
                Function that receives a component as an argument and returns it with some extended behavior
            </Text>
        </Appear>
    </div>
);
    
const Patterns2 = () => (
    <div>
        <Appear>
            <Text margin="40">
                Let's consider a component that needs to know if the current device is mobile or not. 
            </Text>
        </Appear>
        <Appear>
            <Text margin="40">
                We could implement that detection on the component code.
            </Text>
        </Appear>
        <Appear>
            <Text margin="40">
                Instead, we can implement an HOC that does that detection logic, so that we can reuse it on other components
            </Text>
        </Appear>
    </div>
);

const Patterns3 = () => (
    <div>
        <Appear>
        <CodePane
            lang="jsx"
            source={require("raw-loader!../../assets/patterns1.example")}
            textSize="22px"
            margin="20px 0" />
        </Appear>
        <Appear>
        <CodePane
            lang="jsx"
            source={require("raw-loader!../../assets/patterns2.example")}
            textSize="22px"
            margin="20px 0" />
        </Appear>
    </div>
);


export default {
    Title,
    Patterns1,
    Patterns2,
    Patterns3,
};
