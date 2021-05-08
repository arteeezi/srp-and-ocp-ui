import { TodoTask, TodoMeeting } from './../..//components';
import { isTodoMeeting, TTodo } from './../../domain';

type TTodoItemFactoryProps = {
    todo: TTodo
}

export const TodoItemFactory = ({ todo }: TTodoItemFactoryProps): JSX.Element => {

    if (isTodoMeeting(todo)) {
        return <TodoMeeting todo={todo}/>
    }

    return <TodoTask todo={todo}/>
}
