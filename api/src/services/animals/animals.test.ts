import type { Animal } from '@prisma/client'

import {
  animals,
  animal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} from './animals'
import type { StandardScenario } from './animals.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('animals', () => {
  scenario('returns all animals', async (scenario: StandardScenario) => {
    const result = await animals()

    expect(result.length).toEqual(Object.keys(scenario.animal).length)
  })

  scenario('returns a single animal', async (scenario: StandardScenario) => {
    const result = await animal({ id: scenario.animal.one.id })

    expect(result).toEqual(scenario.animal.one)
  })

  scenario('creates a animal', async () => {
    const result = await createAnimal({
      input: {
        name: 'String',
        size: 'String',
        age: 3089235,
        color: 'String',
        specie: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.size).toEqual('String')
    expect(result.age).toEqual(3089235)
    expect(result.color).toEqual('String')
    expect(result.specie).toEqual('String')
  })

  scenario('updates a animal', async (scenario: StandardScenario) => {
    const original = (await animal({ id: scenario.animal.one.id })) as Animal
    const result = await updateAnimal({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a animal', async (scenario: StandardScenario) => {
    const original = (await deleteAnimal({
      id: scenario.animal.one.id,
    })) as Animal
    const result = await animal({ id: original.id })

    expect(result).toEqual(null)
  })
})
