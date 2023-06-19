import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteAnimalMutationVariables,
  FindAnimalById,
} from 'types/graphql'

const DELETE_ANIMAL_MUTATION = gql`
  mutation DeleteAnimalMutation($id: String!) {
    deleteAnimal(id: $id) {
      id
    }
  }
`

interface Props {
  animal: NonNullable<FindAnimalById['animal']>
}

const Animal = ({ animal }: Props) => {
  const [deleteAnimal] = useMutation(DELETE_ANIMAL_MUTATION, {
    onCompleted: () => {
      toast.success('Animal deleted')
      navigate(routes.animals())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAnimalMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete animal ' + id + '?')) {
      deleteAnimal({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Animal {animal.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{animal.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{animal.name}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{animal.size}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{animal.age}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{animal.color}</td>
            </tr>
            <tr>
              <th>Gender id</th>
              <td>{animal.gender_id}</td>
            </tr>
            <tr>
              <th>Specie</th>
              <td>{animal.specie}</td>
            </tr>
            <tr>
              <th>Photo url</th>
              <td>{animal.photo_url}</td>
            </tr>
            <tr>
              <th>Keeper id</th>
              <td>{animal.keeper_id}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAnimal({ id: animal.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(animal.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Animal
