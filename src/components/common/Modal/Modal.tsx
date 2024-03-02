import React from "react";
import {ModalProps} from "./Modal.types";
import {Box, Button, Text} from "@components/UI";
import styled from "styled-components";

const BackgroundModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aqua;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentModal = styled.div`
  width: 460px;
  height: 140px;
  background-color: #333333;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px rgba(209, 209, 209, 0.2);
  padding: 16px;
`;

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    const {children, isOpen, onClose, onAccept} = props;

    return (isOpen ?
            <BackgroundModal>
                <ContentModal>
                    <Box h="100%" display="flex" fD="column" jC="space-between">
                        <Box h="100%" w="100%" display="flex" jC="center" aI="center">
                            {children}
                        </Box>
                        <Box display="flex" jC="end" w="100%" gap={12}>
                            <Button h={30} bgColor="#4EA8DE" onClick={onAccept}>
                                <Text fs={13} w={700}>ОК</Text>
                            </Button>
                            <Button h={30} bgColor="#DE574E" onClick={onClose}>
                                <Text fs={13} w={900}>Отмена</Text>
                            </Button>
                        </Box>
                    </Box>
                </ContentModal>
            </BackgroundModal> : null
    );
};