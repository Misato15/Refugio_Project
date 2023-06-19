import type { FindKeepers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Keepers from 'src/components/Keeper/Keepers'

export const QUERY = gql`
  query FindKeepers {
    keepers {
      id
      name
      age
      gender
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No keepers yet. '}
      <Link to={routes.newKeeper()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ keepers }: CellSuccessProps<FindKeepers>) => {
  return <Keepers keepers={keepers} />
}
