import classes from './bread-crumbs.module.css';

type BreadCrumbsProps = {
  title: string | undefined;
  currentCategory: string | undefined;
};

import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import '../../../App.css';

type Inputs = {
  firstName: string;
  country: string;
  exampleRequired: string;
};

export const InputText = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <input
      className="input"
      {...register('firstName', {
        required: 'Please enter your name',
        minLength: {
          value: 3,
          message: 'Please enter at least three letters',
        },
      })}
      type="select"
      name="firstName"
      id="firstName"
    />
  );
};
