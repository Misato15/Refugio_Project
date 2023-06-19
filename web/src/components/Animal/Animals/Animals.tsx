import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Animal/AnimalsCell/'
import { truncate } from 'src/lib/formatters'

import type { DeleteAnimalMutationVariables, FindAnimals } from 'types/graphql'

const DELETE_ANIMAL_MUTATION = gql`
  mutation DeleteAnimalMutation($id: String!) {
    deleteAnimal(id: $id) {
      id
    }
  }
`

const AnimalsList = ({ animals }: FindAnimals) => {
  const [deleteAnimal] = useMutation(DELETE_ANIMAL_MUTATION, {
    onCompleted: () => {
      toast.success('Animal deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteAnimalMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete animal ' + id + '?')) {
      deleteAnimal({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Size</th>
            <th>Age</th>
            <th>Color</th>
            <th>Gender id</th>
            <th>Specie</th>
            <th>Photo url</th>
            <th>Keeper id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td>{truncate(animal.id)}</td>
              <td>{truncate(animal.name)}</td>
              <td>{truncate(animal.size)}</td>
              <td>{truncate(animal.age)}</td>
              <td>{truncate(animal.color)}</td>
              <td>{truncate(animal.gender_id)}</td>
              <td>{truncate(animal.specie)}</td>
              <td>{truncate(animal.photo_url)}</td>
              <td>{truncate(animal.keeper_id)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.animal({ id: animal.id })}
                    title={'Show animal ' + animal.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAnimal({ id: animal.id })}
                    title={'Edit animal ' + animal.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete animal ' + animal.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(animal.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnimalsList
