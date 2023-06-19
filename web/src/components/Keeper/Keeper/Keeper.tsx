import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteKeeperMutationVariables,
  FindKeeperById,
} from 'types/graphql'

const DELETE_KEEPER_MUTATION = gql`
  mutation DeleteKeeperMutation($id: String!) {
    deleteKeeper(id: $id) {
      id
    }
  }
`

interface Props {
  keeper: NonNullable<FindKeeperById['keeper']>
}

const Keeper = ({ keeper }: Props) => {
  const [deleteKeeper] = useMutation(DELETE_KEEPER_MUTATION, {
    onCompleted: () => {
      toast.success('Keeper deleted')
      navigate(routes.keepers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteKeeperMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete keeper ' + id + '?')) {
      deleteKeeper({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Keeper {keeper.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{keeper.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{keeper.name}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{keeper.age}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{keeper.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editKeeper({ id: keeper.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(keeper.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Keeper
