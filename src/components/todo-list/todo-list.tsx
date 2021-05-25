import { useEffect, useState } from 'react';
import { TTodo } from './../../domain';

type TTodoListProps = {
    children: (todos: TTodo[]) => JSX.Element[];
    getTodos: () => TTodo[];
}

export const TodoList = (props: TTodoListProps): JSX.Element => {
    const [todos, setTodos] = useState<TTodo[]>([]);

    useEffect(() => {
        setTodos(props.getTodos())
    }, [])

    return (
        <div>
            {props.children(todos)}
        </div>
    );
}
