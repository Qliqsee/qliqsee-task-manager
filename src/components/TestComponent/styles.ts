import { COLORS } from "@/styles/color";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { Button as MuiButton } from "@mui/material";

export const MainWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
`;

export const CommonHeader = styled(Box)`
  padding: 19px 32px 20px 32px;
  height: 123px;
  background-color: ${COLORS.blueBg};
  color: ${COLORS.whiteGeneral};
  position: relative;
`;

interface PanelProps {
  isVisible?: boolean;
}

export const Panel = styled(Box)<PanelProps>`
  flex: 0.37;
  background-color: ${COLORS.whiteGeneral};
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.whiteBg};

  @media screen and (max-width: 990px) {
    position: fixed;
    top: 0;
    left: ${({ isVisible }) => (isVisible ? 0 : "-100%")};
    height: 100%;
    width: 100%;
    max-width: 450px;
    overflow: hidden;

    transition: left 0.5s;
  }
`;

export const PanelHeaderBoldText = styled(Box)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 18.75px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const PanelHeaderBigText = styled(Box)`
  font-family: Roboto;
  font-size: 25px;
  font-style: italic;
  font-weight: 100;
  line-height: 26.46px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const PanelBody = styled(Box)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const PremiumTagText = styled(Box)`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 19.05px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${COLORS.yellowTextColor};
`;

export const UpgradeText = styled(Box)`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 19.05px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${COLORS.blueGeneral};
`;

interface TaskDescriptionProps {
  isCompleted?: boolean;
}

export const TaskDescription = styled(Box)<TaskDescriptionProps>`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 16.08px;
  text-align: left;
  line-height: 1.2;

  color: ${COLORS.blueGeneral};

  ${({ isCompleted }) =>
    isCompleted
      ? `color: ${COLORS.greyText};
  text-decoration: line-through;`
      : ""}
`;

export const EditButton = styled(Box)`
  display: flex;
  width: 51px;
  height: 45px;
  min-width: 51px;
  min-height: 45px;
  top: 397px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${COLORS.blueGeneral};
  opacity: 0px;
  cursor: pointer;
`;

export const EditButtonText = styled(Box)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 18.75px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${COLORS.blueGeneral};
`;

export const Checked = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  cursor: pointer;
  border: 1.5px solid ${COLORS.greenBorder};
  background-color: ${COLORS.greenBg};
`;

export const Unchecked = styled(Box)`
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  cursor: pointer;
  border: 1.5px solid ${COLORS.blueGeneral};
`;

export const PanelFooter = styled(Box)`
  padding: 25px 16px;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const AddButton = styled(Box)`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${COLORS.blueBg};
  border: 2px solid ${COLORS.blueBorder};
  cursor: pointer;
`;

export const Editor = styled(Box)`
  flex: 0.63;
  background-color: ${COLORS.whiteBg};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 990px) {
    flex: 1;
  }
`;
export const EditorBody = styled(Box)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 28px 20px;
`;

export const EditorText = styled(Box)`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.13px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const TaskNameText = styled(Box)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.44px;
  letter-spacing: 0.115em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #000000;
`;

export const CreateTaskInput = styled.input`
  width: 100%;
  outline: none;
  padding: 20px;
  border: 2px solid ${COLORS.greyBorder};
  border-radius: 9px;
  background-color: ${COLORS.whiteGeneral};
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.3px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${COLORS.blueGeneral};
`;

export const EditorFooter = styled(Box)`
  padding: 25px 16px;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  width: 97%;
`;

interface ButtonProps {
  custom_border: string;
  custom_bg: string;
}

export const Button = styled(MuiButton)<ButtonProps>`
  background-color: ${({ custom_bg }) => custom_bg};
  border: 2px solid ${({ custom_bg }) => custom_bg};
  border-radius: 6px;
  text-transform: capitalize;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const MenuWrapper = styled(Stack)`
  position: absolute;
  top: 30px;
  left: 30px;

  @media screen and (min-width: 991px) {
    display: none;
  }
`;

export const HideMenuWrapper = styled(Stack)`
  position: absolute;
  top: 10px;
  right: 30px;

  @media screen and (min-width: 991px) {
    display: none;
  }
`;
