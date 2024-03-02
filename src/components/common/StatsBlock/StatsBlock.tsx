import React from "react";
import {StatsBlockProps} from "./StatsBlock.types";
import {Box, Chip, Text} from "@components/UI";

export const StatsBlock: React.FC<StatsBlockProps> = (props: StatsBlockProps) => {
    const {type, count = 0} = props;
    const textStats = type === "quantity" ? "Количество задач" : "Выполнено";
    const colorStats = type === "quantity" ? "#4EA8DE" : "#8284FA";

    return (
        <Box display="flex" aI="center">
            <Text fs={15} w={700} c={colorStats}>{textStats}</Text>
            <Chip ml={8}>{count}</Chip>
        </Box>
    );
};