import { _decorator, Component, EventKeyboard, EventTouch, input, Input, instantiate, KeyCode, Node, Prefab, Vec2, Vec3 } from 'cc';
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

    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.fireLaser, this);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    movePlayer() {
        this.node.setWorldPosition(this.newPos.x, this.newPos.y, 0);
    }

    fireLaser(event: EventKeyboard) {
        switch (event.keyCode)
        {
            case KeyCode.SPACE: 
            var bullet = instantiate(this.spaceLaser);
            bullet.setWorldPosition(this.node.getPosition());
            this.node.parent.addChild(bullet);
            console.log("FIRED");
            break;
        }
        
    }

    public getPlayerLocation() {
        return this.node.position;
    }

}


