export function addTask(newState) {
    return {
        type: "ADD_TASK",
        payload: newState
    }
}