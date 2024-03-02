import React from "react";
import {HeaderProps} from "./Header.types";
import {Container, Layout} from "@components/UI";
import {Logo} from "@components/Logo";

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <Layout bgColor="#0D0D0D" h={200}>
            <Container jC="center" aI="center">
                <Logo />
            </Container>
        </Layout>
    );
};