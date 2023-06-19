import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditAnimalById, UpdateAnimalInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormAnimal = NonNullable<EditAnimalById['animal']>

interface AnimalFormProps {
  animal?: EditAnimalById['animal']
  onSave: (data: UpdateAnimalInput, id?: FormAnimal['id']) => void
  error: RWGqlError
  loading: boolean
}

const AnimalForm = (props: AnimalFormProps) => {
  const onSubmit = (data: FormAnimal) => {
    props.onSave(data, props?.animal?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAnimal> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.animal?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Size
        </Label>

        <TextField
          name="size"
          defaultValue={props.animal?.size}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="size" className="rw-field-error" />

        <Label
          name="age"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Age
        </Label>

        <NumberField
          name="age"
          defaultValue={props.animal?.age}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="age" className="rw-field-error" />

        <Label
          name="color"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color
        </Label>

        <TextField
          name="color"
          defaultValue={props.animal?.color}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="color" className="rw-field-error" />

        <Label
          name="gender_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gender id
        </Label>

        <TextField
          name="gender_id"
          defaultValue={props.animal?.gender_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="gender_id" className="rw-field-error" />

        <Label
          name="specie"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Specie
        </Label>

        <TextField
          name="specie"
          defaultValue={props.animal?.specie}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="specie" className="rw-field-error" />

        <Label
          name="photo_url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Photo url
        </Label>

        <TextField
          name="photo_url"
          defaultValue={props.animal?.photo_url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="photo_url" className="rw-field-error" />

        <Label
          name="keeper_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Keeper id
        </Label>

        <TextField
          name="keeper_id"
          defaultValue={props.animal?.keeper_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="keeper_id" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AnimalForm
