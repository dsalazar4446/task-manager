export interface ITask {
    id: number;
    title: string;
    status: 'completed' | 'pending' | undefined;
    isSaved: boolean;
}