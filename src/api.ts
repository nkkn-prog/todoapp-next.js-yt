import { Task } from "./types";

// 非同期処理なのでPromiseを使う
export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks`, {
        cache:'no-store', //SSR
        })
    const todos = res.json();

    return todos
}


export const addTodos = async (todo:Task): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks`, {
        method:'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(todo),
    });
    const newTodos = res.json();

    return newTodos;
}

export const editTodos = async (id:string, newText:string): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method:'PUT',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({text:newText}),
    });
    const updatedTodos = res.json();

    return updatedTodos;
}

export const deleteTodos = async (id:string): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method:'DELETE',
        headers: {
            "Content-Type":"application/json"
        },
    });
    const deleteTodos = res.json();

    return deleteTodos;
}