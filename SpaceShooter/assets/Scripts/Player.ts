import { _decorator, Component, EventTouch, input, Node, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    public newPos: Vec2;
    public touched: boolean;

    start() {

    }

    update(deltaTime: number) {
        
    }

    movePlayer() {
        this.node.setWorldPosition(this.newPos.x, this.newPos.y, 0);
    }
}


