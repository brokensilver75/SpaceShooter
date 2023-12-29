import { _decorator, CCInteger, Component, instantiate, macro, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AsteroidSpawner')
export class AsteroidSpawner extends Component {

    @property(
        {
            type: CCInteger,
            tooltip: 'AsteroidSpawnerSpeed'
        }
    )
    private asteroidSpawnerSpeed: number = 60;

    @property(
        {
            type: Prefab,
            tooltip: 'Asteroid'
        }
    )
    private asteroid: Prefab;

    onLoad() {
        this.schedule(this.spawnAsteroid, 3, macro.REPEAT_FOREVER, 0);
    }

    start() {

    }

    update(deltaTime: number) {
        
        this.node.setPosition(this.node.getPosition().x + this.asteroidSpawnerSpeed * deltaTime, this.node.getPosition().y);
        
        if (this.node.getPosition().x <= -221 || this.node.getPosition().x >= 221)
        {
            this.asteroidSpawnerSpeed *= -1;
        }
    }

    spawnAsteroid() {
        var enemy = instantiate(this.asteroid);
        enemy.setWorldPosition(this.node.getPosition());
        this.node.parent.addChild(enemy); 
    }
}


