import { TTodoTask } from './../../domain';

type TTodoTaskProps = {
    todo: TTodoTask
}

export const TodoTask = ({ todo }: TTodoTaskProps): JSX.Element => {
    return (
        <div>Задача: {todo.text}. StoryPoint: {todo.storyPoint}</div>
    );
}
