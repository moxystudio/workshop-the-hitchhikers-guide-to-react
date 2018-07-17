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
            Storybook
        </Heading>
    </div>
);

const Main = () => (
    <div>
        <Heading size={1} caps fit lineHeight={2} textColor="secondary">
            UI Development Environment
        </Heading>
        <Text>
            <Link href="https://storybook.js.org/" target="_blank">
                https://storybook.js.org/
            </Link>
        </Text>
        <Text>
            <Link targe="_blank" href="https://storybooks-official.netlify.com/">
                Example
            </Link>
        </Text>
    </div>
);

export default {
    Title,
    Main,
};
