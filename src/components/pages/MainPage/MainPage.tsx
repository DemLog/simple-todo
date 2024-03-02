import React, {useState} from "react";
import {MainPageProps} from "./MainPage.types";
import {Header} from "@components/Header";
import {Box, Container, Input, Layout, Text} from "@components/UI";
import {Search} from "@components/Search";
import {Stats} from "@components/Stats";
import {List} from "@components/List";
import {useTasks} from "@core/hooks/useTasks";
import {useActionTask} from "@core/hooks/useActionTask";
import {Task} from "@core/types/task";
import {Modal} from "@components/Modal";
import {AddButton} from "@components/AddButton";

export const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
    const [searchField, setSearchField] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");


    const [titleNewTask, setTitleNewTask] = useState<string>("");
    const [openedModal, setOpenedModal] = useState<boolean>(false);

    const {tasks} = useTasks();
    const filterTasks = tasks?.filter((obj) => obj.title.toLowerCase().includes(searchText.toLowerCase()));

    const {addNewTask} = useActionTask();
    const handleSearch = (value: string) => {
        setSearchField(prevState => value);
    };

    const handleSearchClickButton = () => {
        setSearchText(prevState => searchField);
    };

    const handleChangeTitleTask = (value: string) => {
        setTitleNewTask(prevState => value);
    };

    const handleCreateTask = () => {
        if (titleNewTask.length > 0) {
            const newTask: Task = {
                id: Date.now(),
                title: titleNewTask,
                checked: false,
                time: Date.now()
            };
            addNewTask(newTask);
        }
        setTitleNewTask(prevState => "");
        setOpenedModal(false);
    };

    const handleCancelCreateTask = () => {
        setTitleNewTask(prevState => "");
        setOpenedModal(false);
    };

    const handleOpenModal = () => setOpenedModal(true);

    const quantityCount = filterTasks?.length || 0;
    const doneCount = filterTasks?.filter((item) => item.checked).length || 0;

    return (
        <>
            <Header/>
            <Layout relative mt={2}>
                <Container fD="column" jC="center" top={-29}>
                    <Search onSearch={handleSearch} onClick={handleSearchClickButton}/>
                    <Box display="flex" w="100%" mt={36}>
                        <AddButton onClick={handleOpenModal} />
                    </Box>
                    <Box mt={16} w="100%">
                        <Stats quantity={quantityCount} done={doneCount}/>
                    </Box>
                    <Box mt={16} mb={16} w="100%">
                        <List tasks={filterTasks}/>
                    </Box>
                </Container>
            </Layout>
            <Modal isOpen={openedModal} onClose={handleCancelCreateTask} onAccept={handleCreateTask}>
                <Box w="100%" display="flex" fD="column" aI="center">
                    <Box w="100%" mb={16}>
                        <Text fs={15} w={600}>Введите новую задачу:</Text>
                    </Box>
                    <Input h={40} bgColor="#D9D9D9" c="#000000" fullW
                           autoFocus
                           onChange={event => handleChangeTitleTask(event.target.value)}
                           onKeyDown={event => {if (event.key === 'Enter') handleCreateTask()}}
                    />
                </Box>
            </Modal>
        </>
    );
};