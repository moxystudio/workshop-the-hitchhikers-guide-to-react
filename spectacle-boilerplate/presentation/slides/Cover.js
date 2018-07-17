import React from "react";
import {
    Layout,
    Link,
    Text,
    Heading
} from "spectacle";

const Cover = () => (
    <div>
        <Heading size={1} fit caps lineHeight={1} textColor="primary" >
            The hitchhiker's 
        </Heading>
        <Heading size={1} fit caps lineHeight={1} textColor="primary" margin="0 0 40px 0">
            guide to react 
        </Heading>
        <Layout>
            <Text textSize="24" textAlign="right" textColor="primary">
                António Capelo
            </Text>
            <Text textSize="24" textAlign="right" textColor="primary">
                Vasco Santos
            </Text>
        </Layout>
        <Layout>
            <Text textSize="24" textAlign="right" textColor="quarternary">
                <Link href="https://github.com/antoniocapelo" textColor="quarternary">
                    @antoniocapelo
                </Link>
            </Text>
            <Text textSize="24" textAlign="right" textColor="quarternary">
                <Link href="https://github.com/vasco-santos" textColor="quarternary">
                    @vasco-santos
                </Link>
            </Text>
        </Layout>
        <Layout>
            <Text textSize="18" textAlign="right" textColor="primary">
                Software Engineer
                <Link href="https://github.com/moxystudio" margin="0 3px" bold textColor="primary">
                    @moxystudio
                </Link>
            </Text>
            <Text textSize="18" textAlign="right" textColor="primary">
                Software Engineer
                <Link href="https://github.com/moxystudio" margin="0 3px" bold textColor="primary">
                    @moxystudio
                </Link>
            </Text>
        </Layout>
    </div>
);

export default Cover;
