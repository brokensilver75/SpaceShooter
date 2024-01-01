import { _decorator, CCInteger, Component, instantiate, macro, Node, Prefab } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('ShieldSpawner')

export class CoinAsteroidSpawner extends Component {

    @property(
        {
            type: CCInteger,
            tooltip: 'ShieldSpawnerSpeed'
        }
    )
    private shieldSpawnerSpeed: number = 60;

    @property(
        {
            type: Prefab,
            tooltip: 'Shield'
        }
    )
    private shield: Prefab;

    @property (
        {
            type: GameManager,
            tooltip: 'Game Manager'
        }
    )
    private manager: GameManager;
    
    onLoad() {
        this.schedule(this.spawnShield, 10, macro.REPEAT_FOREVER, 0);
    }

    start() {

    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.getPosition().x + this.shieldSpawnerSpeed * deltaTime, this.node.getPosition().y);
        
        if (this.node.getPosition().x <= -260 || this.node.getPosition().x >= 260)
        {
            this.shieldSpawnerSpeed *= -1;
        }
    }

    spawnShield() {
        var shieldInstance = instantiate(this.shield);
        shieldInstance.setWorldPosition(this.node.getPosition());
        this.node.parent.addChild(shieldInstance); 
    }
}


