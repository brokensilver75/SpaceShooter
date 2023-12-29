import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Asteroid')
export class Asteroid extends Component {
    @property(
        {
            type: CCInteger,
            tooltip: 'AsteroidSpeed'
        }
    )
    private asteroidSpeed: number;
    
    start() {

    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.getPosition().x, this.node.getPosition().y - this.asteroidSpeed * deltaTime);
        if (this.node.getPosition().y < -480)
        {
            this.node.destroy();
        }
    }
}


