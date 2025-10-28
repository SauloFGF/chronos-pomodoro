import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
    switch (action.type) {
        case TaskActionTypes.START_TASK: {
            const newTask = action.payload;
            const nextCycle = getNextCycle(state.currentCycle)
            const secondsRemaining = newTask.duration * 60;

            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask],
            }
        }
        case TaskActionTypes.INTERRUPT_TASK: {
            return state
        }
        case TaskActionTypes.RESET_STATE: {
            return state
        }
    }

    //sempre deve retornar o estado
    return state;
}