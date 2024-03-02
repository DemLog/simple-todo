import React from "react";
import {LogoProps} from "./Logo.types";
import {Text, Image, Box} from "@components/UI";
import rocketImg from "@assets/images/rocket.png";

export const Logo: React.FC<LogoProps> = (props: LogoProps) => {
    return (
        <Box display="flex" aI="center" jC="center">0
            <Image src={rocketImg}/>
            <Box ml={4}>
                <Text w={900} fs={40} c="#4EA8DE">sim</Text>
                <Text w={900} fs={40} c="#5E60CE">ple-</Text>
                <Text w={900} fs={40} c="#4EA8DE">to</Text>
                <Text w={900} fs={40} c="#5E60CE">do</Text>
            </Box>
        </Box>
    );
};