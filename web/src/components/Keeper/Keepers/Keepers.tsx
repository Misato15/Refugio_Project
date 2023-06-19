import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Keeper/KeepersCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteKeeperMutationVariables, FindKeepers } from 'types/graphql'

const DELETE_KEEPER_MUTATION = gql`
  mutation DeleteKeeperMutation($id: String!) {
    deleteKeeper(id: $id) {
      id
    }
  }
`

const KeepersList = ({ keepers }: FindKeepers) => {
  const [deleteKeeper] = useMutation(DELETE_KEEPER_MUTATION, {
    onCompleted: () => {
      toast.success('Keeper deleted')
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

  const onDeleteClick = (id: DeleteKeeperMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete keeper ' + id + '?')) {
      deleteKeeper({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {keepers.map((keeper) => (
            <tr key={keeper.id}>
              <td>{truncate(keeper.id)}</td>
              <td>{truncate(keeper.name)}</td>
              <td>{truncate(keeper.age)}</td>
              <td>{truncate(keeper.gender)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.keeper({ id: keeper.id })}
                    title={'Show keeper ' + keeper.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editKeeper({ id: keeper.id })}
                    title={'Edit keeper ' + keeper.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete keeper ' + keeper.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(keeper.id)}
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

export default KeepersList
