import React from 'react'
import styled from 'styled-components'

import { Todo } from 'hooks/use-fetch-todo'
import { Box, Flexbox } from 'components'
import Item from './Item'

type Props = {
  data?: Todo[]
  onSelect: (data: Todo) => void
  onChange: () => void
}

const List: React.FC<Props> = ({ data, onSelect, onChange }) => {
  const completed = data?.filter((i) => i.is_completed)
  const pending = data?.filter((i) => !i.is_completed)

  return (
    <Flexbox flexDirection='column' gap='0.5rem'>
      <Box>
        {pending?.map((i) => (
          <Item key={i.id} data={i} onSelect={onSelect} onChange={onChange} />
        ))}
      </Box>
      {(completed?.length || 0) > 0 && <Divider />}
      <Box>
        {completed?.map((i) => (
          <Item key={i.id} data={i} onSelect={onSelect} onChange={onChange} />
        ))}
      </Box>
    </Flexbox>
  )
}

const Divider = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.colors.secondary};
`

export default List
