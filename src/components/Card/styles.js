import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  :hover {
    transform: scale(1.04);
  }

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  ${props => props.isDragging
    && css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      background: transparent;
      border-radius: 5px;
      cursor: grabbing;
      p,
      img,
      header {
        opacity: 0;
      }
    `}
`
export const Label = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 2px;
  background: ${props => props.color};
`
