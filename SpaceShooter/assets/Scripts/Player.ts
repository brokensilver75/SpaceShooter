import { _decorator, Component, EventKeyboard, EventTouch, input, Input, instantiate, KeyCode, macro, Node, Prefab, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    public newPos: Vec2;
    public playerTouched: boolean = false;
    
    @property(
        {
            type: Prefab,
            tooltip: 'Laser'
        }
    )
    private spaceLaser: Prefab;

    onCollisionEnter() {

    }

    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.fireLaser, this);
        this.schedule(this.fireLaser, 0.5, macro.REPEAT_FOREVER, 0);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    movePlayer() {
        this.node.setWorldPosition(this.newPos.x, this.newPos.y, 0);
    }

    fireLaser() {
        var bullet = instantiate(this.spaceLaser);
        bullet.setWorldPosition(this.node.getPosition());
        this.node.parent.addChild(bullet); 
    }

    public getPlayerLocation() {
        return this.node.position;
    }

}


