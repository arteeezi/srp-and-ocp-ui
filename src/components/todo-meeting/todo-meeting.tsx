import { TTodoMeting } from './../../domain';

type TTodoMeetingProps = {
    todo: TTodoMeting
}

export const TodoMeeting = ({ todo }: TTodoMeetingProps): JSX.Element => {
    return (
        <div>Встреча: {todo.text} в {todo.time}</div>
    )
}
