import { INode, INodeParams, INodeOutputsValue, INodeOptionsValue } from '../../../src/Interface'

class StickyNote_Layers implements INode {
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
        this.icon = 'Denselayer.svg'
        this.category = 'Layers'
        this.baseClasses = [this.type]
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
                optional: false
            },
            {
                label: 'Input',
                name: 'activation',
                type: 'array',
                placeholder: 'Type something here'
            }
        ]
    }

    async init(): Promise<any> {
        return new StickyNote_Layers()
    }
}

module.exports = { nodeClass: StickyNote_Layers }
