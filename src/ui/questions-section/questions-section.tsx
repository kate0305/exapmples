import classes from './bread-crumbs.module.css';

type BreadCrumbsProps = {
  title: string | undefined;
  currentCategory: string | undefined;
};
export interface Option {
  value: string;
  label: string;
}

import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import countries from 'i18n-iso-countries';
import ruLocale from 'i18n-iso-countries/langs/ru.json';
import '../../App.css';
import { SectionTitle } from './section-title';
import { Label } from './label';
import { InputSelect } from './input-select';
import { ChangeEvent, useState } from 'react';
import { InputSelectMulti } from './input-multi-select';
export type Inputs = {
  firstName: string;
  country: string;
  profession: string;
  skills: string;
};

export const QuestionsSection = () => {
  countries.registerLocale(ruLocale);
  const countryObj = countries.getNames('ru', { select: 'official' });
  console.log(countryObj);
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      value: key,
      label: value,
    };
  });
  console.log(countryArr);

  const professionOptions: Option[] = [
    { value: 'Backend', label: 'Backend' },
    { value: 'Frontend', label: 'Frontend' },
    { value: 'Design', label: 'Design' },
    { value: 'Mobile Developer', label: 'Mobile Developer' },
    { value: 'qa', label: 'QA' },
    { value: 'hr', label: 'HR' },
    { value: 'ba', label: 'BA' },
  ];

  const skillsOptions: Option[] = [
    { value: 'React', label: 'React' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Sass', label: 'Sass' },
    { value: 'Git', label: 'Git' },
    { value: 'Webpack', label: 'Webpack' },
    { value: 'Redux', label: 'Redux' },
    { value: 'MaterialUI', label: 'MaterialUI' },
    { value: 'Jest', label: 'Jest' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Figma', label: 'Figma' },
    { value: 'Tailwind', label: 'Tailwind' },
  ];

  const [selectedOptions, setSelectedOptions] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptions(e.target.value);
    console.log('selectedOptions');
  };

  console.log(selectedOptions);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form>
      <SectionTitle text="Контактная информация" />
      <div className="container">
        <Label text="Страна/Регион" htmlFor="country" />
        {/* <input
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
          // onFocus={() => clearErrors('firstName')}
        /> */}
        <InputSelect
          name="country"
          placeholder="Выберите страну"
          options={countryArr}
          isMulti={false}
          onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
      <div className="container">
        <Label text="Специализация" htmlFor="profession" />
        <InputSelectMulti
          name="profession"
          placeholder="Выберите свою специализацию"
          options={professionOptions}
          maxLimit={3}
        />
      </div>
      <div className="container">
        <Label text="Стек технологий/навыки" htmlFor="skills" />
        <InputSelectMulti
          name="profession"
          placeholder="Выберите свою специальность"
          options={skillsOptions}
          maxLimit={10}
        />
      </div>
    </form>
  );
};
