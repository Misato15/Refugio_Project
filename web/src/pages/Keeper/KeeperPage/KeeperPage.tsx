import KeeperCell from 'src/components/Keeper/KeeperCell/'

type KeeperPageProps = {
  id: string
}

const KeeperPage = ({ id }: KeeperPageProps) => {
  return <KeeperCell id={id} />
}

export default KeeperPage
