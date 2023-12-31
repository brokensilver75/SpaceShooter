import { _decorator, CCInteger, Component, instantiate, macro, Node, Prefab } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('CoinAsteroidSpawner')

export class CoinAsteroidSpawner extends Component {

    @property(
        {
            type: CCInteger,
            tooltip: 'CoinAsteroidSpawnerSpeed'
        }
    )
    private coinAsteroidSpawnerSpeed: number = 60;

    @property(
        {
            type: Prefab,
            tooltip: 'Asteroid'
        }
    )
    private coinAsteroid: Prefab;

    @property (
        {
            type: GameManager,
            tooltip: 'Game Manager'
        }
    )
    private manager: GameManager;
    
    onLoad() {
        this.schedule(this.spawnAsteroid, 3, macro.REPEAT_FOREVER, 0);
    }

    start() {

    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.getPosition().x + this.coinAsteroidSpawnerSpeed * deltaTime, this.node.getPosition().y);
        
        if (this.node.getPosition().x <= -260 || this.node.getPosition().x >= 260)
        {
            this.coinAsteroidSpawnerSpeed *= -1;
        }
    }

    spawnAsteroid() {
        var enemy = instantiate(this.coinAsteroid);
        enemy.setWorldPosition(this.node.getPosition());
        this.node.parent.addChild(enemy); 
    }
}


