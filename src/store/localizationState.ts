​import {HttpService} from "../service/httpService";
import {InitLocalization} from "../action/InitLocalization.action";
import { State, Action, StateContext } from '@ngxs/store';

@State<LeftMenuLocalize>({
  name: 'LocalizationStateName',
  defaults: {
    menu : "menu",
    item1 : "item1",
    item2 : "item2"
  }
})
export class LocalizationState {
    constructor(private _httpService: HttpService) {}

    @Action(InitLocalization)
    InitLocalize(ctx: StateContext<LeftMenuLocalize>, action:InitLocalization ) {
        const state = ctx.getState();
        console.log("state",state);
        console.log("action",action);
        ctx.setState({
            //...state,
            menu : action.fileName,
            item1 : action.fileName,
            item2 : action.fileName
          });
    }

}

export class LocalizeMeta {
    url:string;

}

export class LeftMenuLocalize {
    menu: string;
    item1 : string;
    item2 : string;
}