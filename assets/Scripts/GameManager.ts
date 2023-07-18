import { _decorator, CCInteger, Component, instantiate, Node, Prefab, randomRangeInt } from 'cc';
import { BLOCK_SIZE } from './constant';
const { ccclass, property } = _decorator;

enum BlockType {
    None,
    Stone
}

@ccclass('GameManager')
export class GameManager extends Component {

    @property({ type: Prefab })
    public boxPrefab: Prefab | null = null

    @property({ type: CCInteger})
    public roadLength: number = 50

    private road: BlockType[] = []
    start() {
        this.generateRoad()
    }

    update(deltaTime: number) {

    }

    private generateRoad() {
        this.node.removeAllChildren()

        this.road.push(BlockType.Stone)
        for (let i = 1; i < this.roadLength; i++) {
            if (this.road[i - 1] === BlockType.None) {
                this.road.push(BlockType.Stone);
            } else {
                this.road.push(randomRangeInt(BlockType.None, BlockType.Stone + 1));
            }
        }

        this.road.map(block => this.spawnBlockByType(block)).forEach((node, i) => {
            if(node) {
                this.node.addChild(node)
                node.setPosition(i * BLOCK_SIZE, 0, 0)
            }
        })
    }
    private spawnBlockByType(type: BlockType) {
        if (!this.boxPrefab || type === BlockType.None) return null
        return instantiate(this.boxPrefab)
    }
}


