import {useTasks} from "@core/hooks/useTasks";
import {useMutation, useQueryClient} from "react-query";
import {Task} from "@core/types/task";
import {StorageService} from "@core/services/storageService";

export const useAddNewTask = () => {
    const {tasks} = useTasks();
    const queryClient = useQueryClient();

    const {mutate} = useMutation<void, Error, Task>(
        async (task) => {
            if (tasks) {
                const newTasksArray = tasks.concat([task]);
                await StorageService.saveValue(newTasksArray);
            }
            return;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('tasks');
            },
        }
    );

    return mutate
};

export const useDeleteTask = () => {
    const {tasks} = useTasks();
    const queryClient = useQueryClient();
    const {mutate} = useMutation<void, Error, number>(
        async (id) => {
            if (tasks) {
                const newPhonesArray = tasks.filter(item => !(item.id === id));
                await StorageService.saveValue(newPhonesArray);
            }
            return;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('tasks');
            }
        }
    );

    return mutate;
};
export const useUpdateTask = () => {

    const {tasks} = useTasks();
    const queryClient = useQueryClient();

    const {mutate} = useMutation<void, Error, Task>(
        async (task) => {
            if (tasks) {
                const newPhonesArray = tasks.map((item, index) =>
                    item.id === task.id ? task : item
                );
                await StorageService.saveValue(newPhonesArray);
            }
            return;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('tasks');
            }
        });

    return mutate;
};

export const useActionTask = () => {
    return {
        addNewTask: useAddNewTask(),
        deleteTask: useDeleteTask(),
        updateTask: useUpdateTask()
    }
};