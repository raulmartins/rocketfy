import React from 'react'

import { Container, Label } from './styles'

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#f55" />
      </header>
      <p>Estudar react todos os dias</p>
      <img src="https://api.adorable.io/avatars/100/abott@adorable.png" alt="adorable" />
    </Container>
  )
}
