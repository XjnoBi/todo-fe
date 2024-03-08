import React from 'react'

import { apiGet } from 'api'

export type Todo = {
    id?: number,
    title: string,
    is_completed: boolean,
    completed_ts: string | null,
    sequence: number,
}

const useFetchTodo = () => {
    const [data, setData] = React.useState<Todo[]>()

    React.useEffect(() => {
        const fetchTodo = async () => {
            const res = await apiGet<Todo[]>("todo")
            setData(res)
        }

        fetchTodo()
    }, [])

    return { data }
}

export default useFetchTodo