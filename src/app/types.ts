export type Task = {
    pic: string,
    task: string,
    solution: string
}

export type AppState = 'start' | 'start-next' | 'current' | 'next' | 'end';