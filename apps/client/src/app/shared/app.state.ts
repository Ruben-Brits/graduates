import { State, Action, StateContext } from "@ngxs/store";
import { SetUsername } from "./app.actions";

export interface AppStateModel{
    username: string;
    email: string;
    studentNumber: string;
    loginStatus?: 'true' | 'false';
}

@State<AppStateModel>({
name: 'app',
defaults:{
    username: '',
    email: '',
    studentNumber: '00000000',
}
})
export class AppState{
    @Action(SetUsername)
    setUsername({ patchState}: StateContext<AppStateModel>, { payload }: SetUsername){ //dispatch can be added here to call other actions withthin this action
        patchState({username: payload});
        //we can also get the currentState as an object getState()
    }
}