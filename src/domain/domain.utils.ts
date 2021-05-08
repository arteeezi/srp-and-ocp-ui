import { TodoTypesEnum } from './domain.enums';
import { TTodo, TTodoMeting } from './domain.types';

export const isTodoMeeting = (todo: TTodo): todo is TTodoMeting =>{
    return todo.type === TodoTypesEnum.MEETING;

}
