import type { Prisma, Keeper } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.KeeperCreateArgs>({
  keeper: {
    one: { data: { name: 'String', age: 8933129, gender: 'String' } },
    two: { data: { name: 'String', age: 1251401, gender: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Keeper, 'keeper'>
