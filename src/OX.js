import React, { memo, useCallback } from "react"
import styled from "styled-components"

const Col = styled.div`
  width: 30px;
  height: 30px;
  background: #c19d38;
  position: relative;
  border:black solid 2px;

`

const OXElement = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  transform: scale(0.85);
  top: 0;
  left: 0;
  z-index: 1;

  ${(props) =>
    props.$value === "O" &&
    `
   background: black;
  `}

  ${(props) =>
    props.$value === "X" &&
    `
    position: relative;  
    transform: rotate(45deg);  
    &:before {
      content: "";
      height: 100%;
      width: 2px;
      background: white;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);       
    }
  
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      background: white;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%); 
    }
  `}
`

const OX = ({ row, col, value, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(row, col, value)
  }, [row, col, value, onClick])

  return (
    <Col $row={row} $col={col} onClick={handleClick}>
      <OXElement $value={value} />
    </Col>
  )
}

export default memo(OX)