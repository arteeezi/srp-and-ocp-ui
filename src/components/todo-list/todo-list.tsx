import { useEffect, useState } from 'react';
import { TodoTypesEnum, TTodo } from './../../domain';

type TTodoListProps = {
    children: (todos: TTodo[]) => JSX.Element[]
}

export const TodoList = (props: TTodoListProps): JSX.Element => {
    const [todos, setTodos] = useState<TTodo[]>([]);

    useEffect(() => {
        /* Todo: Для полного соответсия OCP надо что бы из родительского компонента приходил пропс с получением
            пользователей
        */

        setTodos([{
            text: 'обсуждение нового проекта',
            type: TodoTypesEnum.MEETING,
            time: '17:30'
        }, {
            text: 'Реализовать вывод списка',
            type: TodoTypesEnum.TASK,
            storyPoint: 1
        }])
    }, [])

    return (
        <div>
            {props.children(todos)}
        </div>
    );
}
