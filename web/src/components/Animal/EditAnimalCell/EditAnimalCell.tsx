import type { EditAnimalById, UpdateAnimalInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AnimalForm from 'src/components/Animal/AnimalForm'

export const QUERY = gql`
  query EditAnimalById($id: String!) {
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
const UPDATE_ANIMAL_MUTATION = gql`
  mutation UpdateAnimalMutation($id: String!, $input: UpdateAnimalInput!) {
    updateAnimal(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ animal }: CellSuccessProps<EditAnimalById>) => {
  const [updateAnimal, { loading, error }] = useMutation(
    UPDATE_ANIMAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Animal updated')
        navigate(routes.animals())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAnimalInput,
    id: EditAnimalById['animal']['id']
  ) => {
    updateAnimal({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Animal {animal?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AnimalForm
          animal={animal}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
