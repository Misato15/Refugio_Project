import type { Prisma, Animal } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnimalCreateArgs>({
  animal: {
    one: {
      data: {
        name: 'String',
        size: 'String',
        age: 4980562,
        color: 'String',
        specie: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        size: 'String',
        age: 4086473,
        color: 'String',
        specie: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Animal, 'animal'>
