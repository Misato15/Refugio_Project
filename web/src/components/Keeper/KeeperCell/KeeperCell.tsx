import type { FindKeeperById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Keeper from 'src/components/Keeper/Keeper'

export const QUERY = gql`
  query FindKeeperById($id: String!) {
    keeper: keeper(id: $id) {
      id
      name
      age
      gender
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Keeper not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ keeper }: CellSuccessProps<FindKeeperById>) => {
  return <Keeper keeper={keeper} />
}
