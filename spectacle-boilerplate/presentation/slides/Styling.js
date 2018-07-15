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
				<CodePane
						lang="jsx"
						source={require("raw-loader!../../assets/styling1.example")}
						textSize="22px"
						margin="20px 0" />
    </div>
)

const CssModules = () => (
    <div>
        <Heading size={4} textColor="secondary">
            CSS Modules
        </Heading>
				<CodePane
						lang="jsx"
						source={require("raw-loader!../../assets/styling2.example")}
						textSize="22px"
						margin="20px 0" />
    </div>
)

export default {
    Title,
    PlainCss,
		CssModules,
};
