import type { EditKeeperById, UpdateKeeperInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KeeperForm from 'src/components/Keeper/KeeperForm/'

export const QUERY = gql`
  query EditKeeperById($id: String!) {
    keeper: keeper(id: $id) {
      id
      name
      age
      gender
    }
  }
`
const UPDATE_KEEPER_MUTATION = gql`
  mutation UpdateKeeperMutation($id: String!, $input: UpdateKeeperInput!) {
    updateKeeper(id: $id, input: $input) {
      id
      name
      age
      gender
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ keeper }: CellSuccessProps<EditKeeperById>) => {
  const [updateKeeper, { loading, error }] = useMutation(
    UPDATE_KEEPER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Keeper updated')
        navigate(routes.keepers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateKeeperInput,
    id: EditKeeperById['keeper']['id']
  ) => {
    updateKeeper({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Keeper {keeper?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <KeeperForm
          keeper={keeper}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
