import { Model } from '../index.model'

const model = new Model()

describe('test model', () => {
    test('test count', () => {
        expect(model.count).toBe(0);
    })
})