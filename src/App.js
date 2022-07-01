import React from "react"
import styled from "styled-components"

import useBoard from "./useBoard"
import OX from "./OX"

const Title = styled.h1`
  color: #333;
  text-align: center;
`

const Wrapper = styled.div`
  text-align: center;
`

const Checkerboard = styled.div`
  display: inline-block;
  margin-top: 0;
`

const Row = styled.div`
  display: flex;
`

const WinnerModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const ModalInner = styled.div`
  background: white;
  color: black;
  height: 300px;
  width: 300px;
  padding: 24px;
  text-align: center;
`

function App () {
  const { board, wineer, handleOXClick } = useBoard()
  return (
    <div>
      <Title>OOXX</Title>
      {wineer && (
        <WinnerModal>
          <ModalInner>
            {wineer === "draw" && "平手"}
            {wineer === "O" && "獲勝的是O"}
            {wineer === "X" && "獲勝的是X"}
            <br />
            <button onClick={() => window.location.reload()}>再玩一次</button>
          </ModalInner>
        </WinnerModal>
      )}
      <Wrapper>
        <Checkerboard>
          {board.map((row, rowIndex) => {
            return (
              <Row key={rowIndex}>
                {row.map((col, colIndex) => {
                  return (
                    <OX
                      key={colIndex}
                      row={rowIndex}
                      col={colIndex}
                      value={board[rowIndex][colIndex]}
                      onClick={handleOXClick}
                    />
                  )
                })}
              </Row>
            )
          })}
        </Checkerboard>
      </Wrapper>
    </div>
  )
}


export default App
