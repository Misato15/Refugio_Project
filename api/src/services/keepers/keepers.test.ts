import type { Keeper } from '@prisma/client'

import {
  keepers,
  keeper,
  createKeeper,
  updateKeeper,
  deleteKeeper,
} from './keepers'
import type { StandardScenario } from './keepers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('keepers', () => {
  scenario('returns all keepers', async (scenario: StandardScenario) => {
    const result = await keepers()

    expect(result.length).toEqual(Object.keys(scenario.keeper).length)
  })

  scenario('returns a single keeper', async (scenario: StandardScenario) => {
    const result = await keeper({ id: scenario.keeper.one.id })

    expect(result).toEqual(scenario.keeper.one)
  })

  scenario('creates a keeper', async () => {
    const result = await createKeeper({
      input: { name: 'String', age: 9607684, gender: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.age).toEqual(9607684)
    expect(result.gender).toEqual('String')
  })

  scenario('updates a keeper', async (scenario: StandardScenario) => {
    const original = (await keeper({ id: scenario.keeper.one.id })) as Keeper
    const result = await updateKeeper({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a keeper', async (scenario: StandardScenario) => {
    const original = (await deleteKeeper({
      id: scenario.keeper.one.id,
    })) as Keeper
    const result = await keeper({ id: original.id })

    expect(result).toEqual(null)
  })
})
