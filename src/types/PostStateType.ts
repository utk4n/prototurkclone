interface ICategory{
    id: string;
    title: string;
    content: string;
    category: string;
}

export interface PostStateType {
    list : ICategory[]
}