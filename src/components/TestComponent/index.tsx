import React, { useRef, useState } from "react";
import {
  AddButton,
  Button,
  Checked,
  CommonHeader,
  CreateTaskInput,
  EditButton,
  EditButtonText,
  Editor,
  EditorBody,
  EditorFooter,
  EditorText,
  HideMenuWrapper,
  MainWrapper,
  MenuWrapper,
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeaderBigText,
  PanelHeaderBoldText,
  PremiumTagText,
  TaskDescription,
  TaskNameText,
  Unchecked,
  UpgradeText,
} from "./styles";
import { Avatar, Box, Stack, useMediaQuery } from "@mui/material";
import { CheckFat, List, Plus, X } from "@phosphor-icons/react";
import { COLORS } from "@/styles/color";

interface ITodos {
  title: string;
  isCompleted: boolean;
  id: number;
}

const TestComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [showPanel, setShowPanel] = useState(false);
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [todo, setTodo] = useState("");

  const maxWidth990 = useMediaQuery("(max-width:990px)");

  const handleAdd = () => {
    if (maxWidth990) {
      setShowPanel(false);
    }
    inputRef.current?.focus();
  };

  const completeTodo = (id: number) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.isCompleted = true;
      }

      return item;
    });

    setTodos(newTodos);
  };

  const createTodo = () => {
    if (!todo.trim()) return;
    setTodos([...todos, { title: todo, id: Date.now(), isCompleted: false }]);

    setTodo("");
  };

  return (
    <MainWrapper>
      <Panel isVisible={showPanel}>
        <CommonHeader>
          <Stack spacing={"21px"} direction={"row"}>
            <Avatar src="" sx={{ width: 50, height: 50 }} />
            <Stack spacing={"8px"}>
              <PanelHeaderBoldText>Hello, Jhon</PanelHeaderBoldText>
              <PanelHeaderBigText>What are your plans for today?</PanelHeaderBigText>
            </Stack>
          </Stack>

          <HideMenuWrapper>
            <X onClick={() => setShowPanel(false)} cursor={"pointer"} weight="bold" size={30} />
          </HideMenuWrapper>
        </CommonHeader>

        <PanelBody>
          <Stack
            bgcolor={COLORS.yellowBg}
            border={`1px solid ${COLORS.yellowBorder}`}
            width={"100%"}
            height={"116px"}
            position={"relative"}
            direction={"row"}
            alignItems={"center"}
            pl="25px"
            boxShadow={"0px 4px 4px 0px #0000001A"}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              top={0}
              right={23}
              bgcolor={COLORS.blueGeneral}
              height={71}
              width={"66px"}
            >
              <PremiumTagText>$1</PremiumTagText>
            </Stack>
            <Box mr="25px" width={53} height={41}>
              <img width={"100%"} height={"100%"} src="/cup.svg" alt="cup" />
            </Box>
            <Box>
              <UpgradeText>Go Pro Upgrade Now</UpgradeText>
            </Box>
          </Stack>

          <Stack width={"90%"} margin={"auto"} direction={"column"} spacing={"24px"} mt="20px">
            {todos?.map((item) => (
              <Stack
                key={item.id}
                bgcolor={COLORS.whiteGeneral}
                border={`1px solid ${COLORS.whiteBorder}`}
                width={"100%"}
                //   height={"91px"}
                direction={"row"}
                alignItems={"center"}
                px="23px"
                boxShadow={"0px 4px 4px 0px #0000001A"}
                borderRadius={"6px"}
                justifyContent={"space-between"}
                py={"20px"}
                spacing={"10px"}
              >
                <Stack alignItems={"center"} flexGrow={1} spacing={"17px"} direction={"row"}>
                  <Box width={"fit-content"} onClick={() => completeTodo(item.id)}>
                    <CheckButton isChecked={item.isCompleted} />
                  </Box>
                  <TaskDescription isCompleted={item.isCompleted}>
                    velit blanditiis. Saepe corrupti possimus ullam neque fugit, cupiditate id nemo vero ducimus deserunt.
                  </TaskDescription>
                </Stack>

                <EditButton>
                  <EditButtonText>Edit</EditButtonText>
                </EditButton>
              </Stack>
            ))}
          </Stack>
        </PanelBody>
        <PanelFooter>
          <AddButton onClick={handleAdd}>
            <Plus fontSize={22} weight="bold" color={COLORS.whiteGeneral} />
          </AddButton>
        </PanelFooter>
      </Panel>
      <Editor>
        <CommonHeader>
          <MenuWrapper>
            <List onClick={() => setShowPanel(true)} cursor={"pointer"} weight="bold" size={30} />
          </MenuWrapper>
          <Stack height={"100%"} width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <EditorText>Edit Task</EditorText>
          </Stack>
        </CommonHeader>
        <EditorBody>
          <TaskNameText>Task Name</TaskNameText>
          <Box mt="15px">
            <CreateTaskInput value={todo} onChange={(e) => setTodo(e.target.value)} ref={inputRef} placeholder="Type here..." />
          </Box>
        </EditorBody>
        <EditorFooter>
          <Button size="large" custom_bg={COLORS.redBg} custom_border={COLORS.redBorder} variant="contained">
            Delete
          </Button>
          <Button
            onClick={createTodo}
            size="large"
            custom_bg={COLORS.blueBg}
            custom_border={COLORS.blueGeneral}
            variant="contained"
            fullWidth
          >
            Save
          </Button>
        </EditorFooter>
      </Editor>
    </MainWrapper>
  );
};

export default TestComponent;

interface CheckButtonProps {
  isChecked?: boolean;
}
const CheckButton = ({ isChecked }: CheckButtonProps) => {
  return isChecked ? (
    <Checked>
      <CheckFat size={11} weight="fill" color="#399649" />
    </Checked>
  ) : (
    <Unchecked />
  );
};
