import type {
  QueryResolvers,
  MutationResolvers,
  KeeperRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const keepers: QueryResolvers['keepers'] = () => {
  return db.keeper.findMany()
}

export const keeper: QueryResolvers['keeper'] = ({ id }) => {
  return db.keeper.findUnique({
    where: { id },
  })
}

export const createKeeper: MutationResolvers['createKeeper'] = ({ input }) => {
  return db.keeper.create({
    data: input,
  })
}

export const updateKeeper: MutationResolvers['updateKeeper'] = ({
  id,
  input,
}) => {
  return db.keeper.update({
    data: input,
    where: { id },
  })
}

export const deleteKeeper: MutationResolvers['deleteKeeper'] = ({ id }) => {
  return db.keeper.delete({
    where: { id },
  })
}

export const Keeper: KeeperRelationResolvers = {
  animal: (_obj, { root }) => {
    return db.keeper.findUnique({ where: { id: root?.id } }).animal()
  },
}
