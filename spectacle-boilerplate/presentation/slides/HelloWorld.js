import React from "react";
import {
    List,
    ListItem,
    Appear,
    Heading
} from "spectacle";


class Intro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="secondary">
                Hello World
                </Heading>
            </div>
        );
    }
}

class Desc extends React.Component {
    render() {
        return (<div>
            <List textColor="secondary">
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        TODO
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="24" margin="20px 46px">
                        TODO
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        TODO
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        TODO
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        TODO
                    </ListItem>
                </Appear>
            </List>
        </div>);
    }
}

export default {
    Intro,
    Desc
};
