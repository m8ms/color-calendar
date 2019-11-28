import styled from "styled-components";
import { ZINDEX } from "./consts";

export const SelectWrapper = styled.div`
  font-size: 14px;
  width: 100px;
  position: relative;
  z-index: ${ZINDEX.SELECT};
`;
