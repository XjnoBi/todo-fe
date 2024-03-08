import React from 'react'

import { Button, Flexbox, Text } from 'components'

import { Todo } from 'hooks/use-fetch-todo'
import useMutateTodo from 'hooks/use-mutate-todo'

type Props = {
  data: Todo
  onSelect: (data: Todo) => void
  onChange: () => void
}

const Item: React.FC<Props> = ({ data, onSelect, onChange }) => {
  const { updateTodo, deleteTodo } = useMutateTodo()

  const handleDelete = () => {
    if (!data.id) return

    deleteTodo(data.id)
    onChange()
  }

  const handleToggleDone = () => {
    if (!data.id) return

    updateTodo({ ...data, is_completed: !data.is_completed })
    onChange()
  }

  return (
    <Flexbox justifyContent='space-between' gap='16rem'>
      <Text textDecoration={data.is_completed ? 'line-through' : undefined}>
        {data.title}
      </Text>
      <Flexbox>
        {!data.is_completed && (
          <>
            <Button variant='ghost' onClick={() => onSelect(data)}>
              Edit
            </Button>
            <Button variant='ghost' onClick={handleDelete}>
              Delete
            </Button>
          </>
        )}
        <Button variant='ghost' onClick={handleToggleDone}>
          {data.is_completed ? 'Undo' : 'Done'}
        </Button>
      </Flexbox>
    </Flexbox>
  )
}

export default Item
