import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KeeperForm from 'src/components/Keeper/KeeperForm'

import type { CreateKeeperInput } from 'types/graphql'

const CREATE_KEEPER_MUTATION = gql`
  mutation CreateKeeperMutation($input: CreateKeeperInput!) {
    createKeeper(input: $input) {
      id
    }
  }
`

const NewKeeper = () => {
  const [createKeeper, { loading, error }] = useMutation(
    CREATE_KEEPER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Keeper created')
        navigate(routes.keepers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateKeeperInput) => {
    createKeeper({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Keeper</h2>
      </header>
      <div className="rw-segment-main">
        <KeeperForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewKeeper
