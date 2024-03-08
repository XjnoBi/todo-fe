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
    const [refetchTrigger, setRefetchTrigger ] = React.useState(1)

    const refetch = () => setRefetchTrigger(refetchTrigger + 1)

    React.useEffect(() => {
        const fetchTodo = async () => {
            const res = await apiGet<Todo[]>("todo")
            setData(res)
        }

        fetchTodo()
    }, [refetchTrigger])

    return { data, refetch }
}

export default useFetchTodo