import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;

  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 320px;
  opacity: ${props => (props.done ? 0.6 : 1)};

  &:nth-child(1n - 2) {
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }
  h2 {
    font-weight: 500;
    font-size: 16px;
    padding: 0 10px;
  }

  button {
    width: 40px;
    height: 40px;
    background: #3bfddd;
    border-radius: 20px;
    border: 0;
    cursor: pointer;

    :hover {
      background: #3bccfa;
      transform: scale(1.08);
    }
  }

  ul {
    margin-top: 30px;
  }
`
