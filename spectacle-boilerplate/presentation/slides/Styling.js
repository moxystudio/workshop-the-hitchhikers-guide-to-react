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
            💅 Styling Options
        </Heading>
    </div>
);

const PlainCss = () => (
    <div>
        <Heading size={4} textColor="secondary">
            Plain CSS
        </Heading>
    </div>
)

export default {
    Title,
    PlainCss,
};
