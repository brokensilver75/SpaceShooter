import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AsteroidSpawner')
export class AsteroidSpawner extends Component {

    direction: number = 1;
    @property(
        {
            type: CCInteger,
            tooltip: 'AsteroidSpawnerSpeed'
        }
    )
    private asteroidSpawnerSpeed: number = 60;

    start() {

    }

    update(deltaTime: number) {
        
        this.node.setPosition(this.node.getPosition().x, this.node.getPosition().y);
        if (this.node.getPosition().x <= -221)
        {

        }

        if (this.node.getPosition().x >= 221)
        {

        }
        
    }
}


