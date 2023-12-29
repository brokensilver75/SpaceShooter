import { _decorator, CCInteger, Component, Game, Node, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpaceLaser')
export class SpaceLaser extends Component {

    @property(
        {
            type: CCInteger,
            tooltip: 'LaserSpeed'
        }
    )
    private laserSpeed: number;
    
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


