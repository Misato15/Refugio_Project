import type { FindGenders } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Genders from 'src/components/Gender/Genders'

export const QUERY = gql`
  query FindGenders {
    genders {
      id
      gender
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No genders yet. '}
      <Link to={routes.newGender()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ genders }: CellSuccessProps<FindGenders>) => {
  return <Genders genders={genders} />
}
