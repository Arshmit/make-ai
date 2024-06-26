import { INode, INodeParams, INodeOutputsValue, INodeOptionsValue } from '../../../src/Interface'

class StickyNote implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

    constructor() {
        this.label = 'Dense Layer'
        this.name = 'Dense Layer'
        this.version = 1.0
        this.type = 'Layer'
        this.icon = 'customfunction.svg'
        this.category = 'Utilities'
        this.description = 'Dense Layer Description goes here'
        this.inputs = [
            {
                label: 'Activation Function',
                name: 'activation',
                type: 'options',
                placeholder: 'Type something here',
                options: [
                    { label: 'ReLU', name: 'relu' },
                    { label: 'Sigmoid', name: 'sigmoid' },
                    { label: 'Softmax', name: 'softmax' },
                    { label: 'Tanh', name: 'tanh' }
                ] as INodeOptionsValue[],
                optional: true
            }
        ]
        this.baseClasses = [this.type]
    }

    async init(): Promise<any> {
        return new StickyNote()
    }
}

module.exports = { nodeClass: StickyNote }
