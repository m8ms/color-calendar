import styled from "styled-components";
import { SelectWrapper } from "../../styles/common.styled";

type ColorBoxProps = {
  color: string;
};

export const StyledColorBox = styled.div<ColorBoxProps>`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background: ${({ color }) => color};
`;

export const StyledColorOption = styled.div`
  display: flex;
`;

export const ColorSelectWrapper = styled(SelectWrapper)`
  width: 200px;
`;
