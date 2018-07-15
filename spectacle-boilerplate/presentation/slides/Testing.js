import React from "react";
import {
    ListItem,
    Appear,
    Heading
} from "spectacle";

const Listing = () => (
    <div>
        <Heading size={2} lineHeight={1} caps fit textColor="secondary">
            Testing Components
                </Heading>
        <Appear>
            <ListItem textSize="34" margin="20px 0">
                Jest (created by Facebook)
                    </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize="34" margin="20px 0">
                Mocha (more mature solution)
                    </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize="26" margin="20px 0">
                Comparison: https://spin.atomicobject.com/2017/05/02/react-testing-jest-vs-mocha/
                    </ListItem>
        </Appear>
    </div>
);

export default {
    Listing
};
