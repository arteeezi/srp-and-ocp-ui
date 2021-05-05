import { TodoTypesEnum } from './domain.enums';

export type TTodo = {
    /** описание todo */
    text: string;
    /** Тип todo */
    type: TodoTypesEnum
}
