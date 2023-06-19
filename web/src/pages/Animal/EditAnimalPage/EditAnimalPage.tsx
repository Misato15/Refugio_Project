import EditAnimalCell from 'src/components/Animal/EditAnimalCell'

type AnimalPageProps = {
  id: string
}

const EditAnimalPage = ({ id }: AnimalPageProps) => {
  return <EditAnimalCell id={id} />
}

export default EditAnimalPage
