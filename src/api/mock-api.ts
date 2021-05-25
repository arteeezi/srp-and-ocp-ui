import { TodoTypesEnum, TTodo } from './../domain';

export class MockApi {
    static getTodos(): TTodo[] {
        return [
            {
                text: 'обсуждение нового проекта',
                type: TodoTypesEnum.MEETING,
                time: '17:30'
            }, {
                text: 'Реализовать вывод списка',
                type: TodoTypesEnum.TASK,
                storyPoint: 1
            }
        ]
    }
}
