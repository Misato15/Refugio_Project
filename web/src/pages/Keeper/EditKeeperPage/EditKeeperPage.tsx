import EditKeeperCell from 'src/components/Keeper/EditKeeperCell/'

type KeeperPageProps = {
  id: string
}

const EditKeeperPage = ({ id }: KeeperPageProps) => {
  return <EditKeeperCell id={id} />
}

export default EditKeeperPage
