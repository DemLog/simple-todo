import React from "react";
import {StatsProps} from "./Stats.types";
import {Box} from "@components/UI";
import {StatsBlock} from "@components/StatsBlock";

export const Stats: React.FC<StatsProps> = (props: StatsProps) => {
    const {quantity, done} = props;

    return (
        <Box display="flex" jC="space-between" w="100%">
            <StatsBlock type="quantity" count={quantity}/>
            <StatsBlock type="done" count={done}/>
        </Box>
    );
};