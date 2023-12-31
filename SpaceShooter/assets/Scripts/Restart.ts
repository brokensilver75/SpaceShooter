import { _decorator, Component, director, Input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Restart')
export class Restart extends Component {

    onLoad() {
        this.node.on(Input.EventType.TOUCH_START, this.onRestartTouch, this);
    }

    onRestartTouch() {
        director.loadScene('MainScene');
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}


