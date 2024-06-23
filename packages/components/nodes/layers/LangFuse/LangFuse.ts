import { INode, INodeParams, INodeOptionsValue } from '../../../src/Interface'

class LangFuse_Layers implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs?: INodeParams[]
    credential: INodeParams

    constructor() {
        this.label = 'Dense Layer'
        this.name = 'Dense layer'
        this.version = 1.0
        this.type = 'output'
        this.icon = 'Langfuse.svg'
        this.category = 'Layers'
        this.baseClasses = [this.type]
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
        return new LangFuse_Layers()
    }
}

module.exports = { nodeClass: LangFuse_Layers }
