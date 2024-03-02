import React from "react";
import {AddButtonProps} from "./AddButton.types";
import {Box, Button, Image, Text} from "@components/UI";
import plusImg from "@assets/images/plus.png";

export const AddButton: React.FC<AddButtonProps> = (props: AddButtonProps) => {
    const {onClick} = props;

    return (
        <Button h={30} bgColor="#333333">
            <Box display="flex" gap={5} aI="center" onClick={onClick}>
                <Image src={plusImg}/>
                <Text w={600}>Добавить задачу</Text>
            </Box>
        </Button>
    );
};