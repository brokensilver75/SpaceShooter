import { _decorator, Component, EventTouch, input, Input, Node, Vec3, EventTarget } from 'cc';
const { ccclass, property } = _decorator;
const eventTarget = new EventTarget();

@ccclass('PlayerController')
export class PlayerController extends Component {
    
    touch: EventTouch;
    playerMove: boolean = false;
    onLoad() {
       
       this.node.on(Input.EventType.TOUCH_MOVE, this.playerTouchMove, this);
       
    }
    
    start() {

    }

    update(deltaTime: number) {
        
    }

    playerTouchMove(event: EventTouch) {
        
        var pos = event.getLocation();
        this.node.position = new Vec3(pos.x, pos.y, this.node.position.z);
    }
}


