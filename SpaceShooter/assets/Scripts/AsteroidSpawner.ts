import { _decorator, Canvas, CCInteger, Component, Game, instantiate, macro, Node, Prefab } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('AsteroidSpawner')
export class AsteroidSpawner extends Component {

    @property(
        {
            type: CCInteger,
            tooltip: 'AsteroidSpawnerSpeed'
        }
    )
    private asteroidSpawnerSpeed;//: number = 60;

    @property(
        {
            type: Prefab,
            tooltip: 'Asteroid'
        }
    )
    private asteroid: Prefab;

    @property (
        {
            type: GameManager,
            tooltip: 'Game Manager'
        }
    )
    private manager: GameManager;

    onLoad() {
        this.schedule(this.spawnAsteroid, this.manager.getSpawnRate(), macro.REPEAT_FOREVER, 0);
        this.asteroidSpawnerSpeed = this.manager.getSpawnerSpeed();
    }

    start() {

    }

    update(deltaTime: number) {
        
        this.node.setPosition(this.node.getPosition().x + this.asteroidSpawnerSpeed * deltaTime, this.node.getPosition().y);
        
        if (this.node.getPosition().x <= -300 || this.node.getPosition().x >= 300)
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


