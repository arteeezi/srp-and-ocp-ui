import { TodoTypesEnum } from './domain.enums';

export type TTodoBase = {
    /** описание todo */
    text: string;
    /** Тип todo */
    type: TodoTypesEnum
}

export type TTodoTask = TTodoBase & {
    storyPoint: number;
}

export type TTodoMeting = TTodoBase & {
    time: string;
}

export type TTodo = TTodoTask | TTodoMeting;
