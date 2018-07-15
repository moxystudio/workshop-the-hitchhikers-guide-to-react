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
            <Link targe="_blank" href="https://storybooks-official.netlify.com/?selectedKind=ui%2FSearchBox&selectedStory=with%20stories&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Fstories%2Fstories-pane://storybooks-official.netlify.com/?selectedKind=ui%2FSearchBox&selectedStory=with%20stories&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Fstories%2Fstories-panel">
                Example
            </Link>
        </Text>
    </div>
);

export default {
    Title,
    Main,
};
