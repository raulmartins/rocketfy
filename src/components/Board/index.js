import React from 'react'

import { Container } from './styles'
import List from '../List'
import { loadLists } from '../../service/api'

const lists = loadLists()

export default function Board() {
  return (
    <Container>
      {lists.map(list => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  )
}
