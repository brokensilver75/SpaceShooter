import { _decorator, Component, Game, Node, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpaceLaser')
export class SpaceLaser extends Component {

    @property(
        {
            type: Number,
            tooltip: 'LaserSpeed'
        }
    )
    private laserSpeed: number;
    private laserPos: Vec3; 

    start() {

    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.getPosition().x, this.node.getPosition().y + this.laserSpeed * deltaTime);
    }
}


