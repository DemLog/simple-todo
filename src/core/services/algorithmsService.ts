import {Task} from "@core/types/task";

export const compareTasks = (a: Task, b: Task): number => {
    if (a.checked === b.checked) {
        if (a.time < b.time) {
            return 1;
        } else if (a.time > b.time) {
            return -1;
        } else {
            return 0;
        }
    } else {
        return a.checked ? 1 : -1;
    }
};