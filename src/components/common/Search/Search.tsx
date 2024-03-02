import React from "react";
import {SearchProps} from "./Search.types";
import {Box, Button, Input} from "@components/UI";

export const Search: React.FC<SearchProps> = (props: SearchProps) => {
    const {onSearch, onClick} = props;

    return (
        <Box display="flex" w="100%">
            <Input h={54} fullW c="#FFFFFF" bgColor="#262626" ph="Введите текст для поиска задачи..."
                   phColor="#808080"
                   onChange={event => onSearch(event.target.value)}
                   onKeyDown={event => {
                       if (event.key === 'Enter') onClick()
                   }}
            />
            <Button ml={8} h={54} bgColor="#1E6F9F" c="#FFFFFF" onClick={onClick}>Найти</Button>
        </Box>
    );
};