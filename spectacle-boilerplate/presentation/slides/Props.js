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
            Power Of Props
        </Heading>
    </div>
);

const Api = () => (
    <div>
        <Heading size={3} textColor="quarternary">
            Props act like an 'API' of a component.
        </Heading>
        <Text size={4} lineHeight={2} textColor="secondary">
            They expose what the component is expecting and/or accepts.
        </Text>
    </div>
);

const Code1 = () => (
    <div>
        <Heading size={4} textColor="quarternary" margin="40">
            { `{ No Prop }`}
        </Heading>
    <CodePane
        lang="jsx"
        source={require("raw-loader!../../assets/props1.example")}
        textSize="22px"
        margin="20px 0" />
    </div>
);
    
const Code2 = () => (
    <div>
        <Heading size={4} textColor="quarternary" margin="40">
            { `{ Children prop }`}
        </Heading>
    <CodePane
        lang="jsx"
        source={require("raw-loader!../../assets/props2.example")}
        textSize="22px"
        margin="20px 0" />
    </div>

);

const Code3 = () => (
    <div>
        <Heading size={4} textColor="quarternary" margin="40">
            { `{ Callbacks as props }`}
        </Heading>
    <CodePane
        lang="jsx"
        source={require("raw-loader!../../assets/props3.example")}
        textSize="22px"
        margin="20px 0" />
    </div>
);

const Code4 = () => (
    <div>
        <Heading size={4} textColor="quarternary" margin="40">
            { `{ Primitive Prop types }`}
        </Heading>
    <CodePane
        lang="jsx"
        source={require("raw-loader!../../assets/props4.example")}
        textSize="22px"
        margin="20px 0" />
    </div>
);

const PropValidation = () => (
    <div>
        <Heading size={4} textColor="quarternary" >
            Prop Validation
        </Heading>
    <CodePane
        lang="jsx"
        source={require("raw-loader!../../assets/propsValidation.example")}
        textSize="22px"
        margin="20px 0" />
    </div>
);

const PropValidation2 = () => (
    <div>
        <Heading size={4} textColor="quarternary" margin="40">
            Prop Validation
        </Heading>
    <CodePane
        lang="jsx"
        source={require("raw-loader!../../assets/propsValidation2.example")}
        textSize="22px"
        margin="20px 0" />
    </div>
);


export default {
    Title,
    Api,
    Code1,
    Code2,
    Code3,
    Code4,
    PropValidation,
    PropValidation2,
};
