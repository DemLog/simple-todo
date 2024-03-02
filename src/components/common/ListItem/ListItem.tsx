import React, {useState} from "react";
import {ListItemProps} from "./ListItem.types";
import {Box, Button, Image, Input, Text} from "@components/UI";
import {Checkbox} from "@components/UI/Checkbox";
import styled from "styled-components";
import trashImg from "@assets/images/trash.png";
import editImg from "@assets/images/edit.png";
import {Modal} from "@components/Modal";
import {useActionTask} from "@core/hooks/useActionTask";
import {Task} from "@core/types/task";

const ListItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #262626;
  border-radius: 8px;
  border: 1px #333333 inset;
  box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.06);
`;

export const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
    const {task} = props;
    const {updateTask, deleteTask} = useActionTask();

    const [openedEditModal, setOpenedEditModal] = useState<boolean>(false);
    const [openedDeleteModal, setOpenedDeleteModal] = useState<boolean>(false);
    const [changeTitle, setChangeTitle] = useState<string>(task.title);

    const handleCancelEdit = () => {
        setOpenedEditModal(false);
        handleChangeTitle(task.title);
    };
    const handleCancelDelete = () => setOpenedDeleteModal(false);

    const handleClickEditButton = () => setOpenedEditModal(true);
    const handleClickDeleteButton = () => setOpenedDeleteModal(true);

    const handleChangeTitle = (value: string) => setChangeTitle(value);

    const handleChangeChecked = () => {
        const newTask: Task = {...task, checked: !task.checked};
        updateTask(newTask);
    };

    const handleAcceptEdit = () => {
        const newTask: Task = {...task, title: changeTitle};
        updateTask(newTask);
        setOpenedEditModal(false);
    };
    const handleAcceptDelete = () => {
        deleteTask(task.id);
        setOpenedDeleteModal(false);
    };

    return (
        <ListItemStyled>
            <Box display="flex" w="100%" p={12}>
                <Checkbox checked={task.checked} onChange={handleChangeChecked}/>
                <Box fG={1} ml={16} mr={16} display="flex">
                    <Text fs={14} w={400} c={task.checked ? "#808080" : "#F2F2F2"} isLT={task.checked}>{task.title}</Text>
                </Box>
                <Box display="flex">
                    <Button bgColor="unset" onClick={handleClickEditButton}>
                        <Image src={editImg}/>
                    </Button>
                    <Button bgColor="unset" onClick={handleClickDeleteButton}>
                        <Image src={trashImg}/>
                    </Button>
                </Box>
            </Box>
            <Modal isOpen={openedEditModal} onClose={handleCancelEdit} onAccept={handleAcceptEdit}>
                <Box w="100%" display="flex" fD="column" aI="center">
                    <Box w="100%" mb={16}>
                        <Text fs={15} w={600}>Измените задачу:</Text>
                    </Box>
                    <Input h={40} bgColor="#D9D9D9" c="#000000" fullW
                           autoFocus
                           value={changeTitle}
                           onChange={event => handleChangeTitle(event.target.value)}/>
                </Box>
            </Modal>
            <Modal isOpen={openedDeleteModal} onClose={handleCancelDelete} onAccept={handleAcceptDelete}>
                <Box w="100%" display="flex" fD="column" aI="center">
                    <Text fs={15} w={600}>Вы действительно хотите удалить задачу?</Text>
                </Box>
            </Modal>
        </ListItemStyled>
    );
};