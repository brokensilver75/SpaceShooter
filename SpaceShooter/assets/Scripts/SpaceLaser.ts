import { _decorator, CCInteger, Component, find, Game, Node, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpaceLaser')
export class SpaceLaser extends Component {

    private manager;

    /*@property(
        {
            type: CCInteger,
            tooltip: 'LaserSpeed'
        }
    )*/
    private laserSpeed: number;

    onLoad() {
        this.manager = find("GameManager").getComponent("GameManager");
        this.laserSpeed = this.manager.getLaserSpeed();
    }
    
    start() {

    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.getPosition().x, this.node.getPosition().y + this.laserSpeed * deltaTime);
        if (this.node.getPosition().y > 480)
        {
            this.node.destroy();
        }
    }
}


