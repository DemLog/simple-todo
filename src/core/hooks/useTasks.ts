import {useQuery} from "react-query";
import {StorageService} from "@core/services/storageService";
import {Task} from "@core/types/task";
import {compareTasks} from "@core/services/algorithmsService";

export const useTasks = () => {
    const {data} = useQuery<Task[], Error>({
        queryKey: 'tasks',
        queryFn: StorageService.getValue
    });
    return {
        tasks: data?.sort(compareTasks),
    }
};
