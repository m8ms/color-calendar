import styled from "styled-components";
import { ZINDEX } from "../../styles/consts";

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const SelectWrapper = styled.div`
  font-size: 14px;
  width: 100px;
  position: relative;
  z-index: ${ZINDEX.SELECT};
`;
