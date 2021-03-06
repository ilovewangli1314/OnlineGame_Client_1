// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import { pbgame } from "../protos/game";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu("game/UICtrl")
export default class UICtrl extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start(): void {

    }

    // update (dt) {}

    restartGame(): void {
        let starx = window["starx"];
        let msg = pbgame.JoinRequest.encode(pbgame.JoinRequest.create()).finish();
        starx.request("entry.restartgame", msg, null);
    }
}
