import { _decorator, Component, director, Input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartScript')
export class StartScript extends Component {

    onLoad() {
        this.node.on(Input.EventType.TOUCH_START, this.onPlayTouch, this);
    }

    onPlayTouch() {
        director.loadScene('MainScene');
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}


