import React from "react";
import {ListProps} from "./List.types";
import {Box} from "@components/UI";
import {ListItem} from "@components/ListItem";

export const List: React.FC<ListProps> = (props: ListProps) => {
    const {tasks = []} = props;

    return (
        <Box display="flex" fD="column" jC="space-between" w="100%" gap={14}>
            {tasks.map((item) =>
                <ListItem key={item.id} task={item} />
            )}
        </Box>
    );
};