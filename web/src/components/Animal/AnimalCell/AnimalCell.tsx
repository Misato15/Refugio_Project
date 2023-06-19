import type { FindAnimalById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Animal from 'src/components/Animal/Animal'

export const QUERY = gql`
  query FindAnimalById($id: String!) {
    animal: animal(id: $id) {
      id
      name
      size
      age
      color
      gender_id
      specie
      photo_url
      keeper_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Animal not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ animal }: CellSuccessProps<FindAnimalById>) => {
  return <Animal animal={animal} />
}
