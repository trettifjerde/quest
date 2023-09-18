export type Task = {
    pic: string,
    task: string,
    solution: string[]
}

export type AppState = 'preload' | 'start' | 'start-next' | 'current' | 'next' | 'end' | 'reward';