import React from 'react'

import { Todo } from 'hooks/use-fetch-todo'
import { apiPost, apiPut, apiDelete } from 'api'

const useMutateTodo = () => {
    const [ isBusy, setBusy ] = React.useState(false)

    const addTodo = async (values: Todo) => {
        setBusy(true)
        await apiPost('todo', values)
        setBusy(false)
    }

    const updateTodo = async (values: Todo) => {
        setBusy(true)
        await apiPut('todo', values)
        setBusy(false)
    }

    const deleteTodo = async (id: number) => {
        setBusy(true)
        await apiDelete('todo', { id })
        setBusy(false)
    }

    return { isBusy, addTodo, updateTodo, deleteTodo }
}

export default useMutateTodo