import classes from './bread-crumbs.module.css';

export interface Option {
  value: string;
  label: string;
}

type InputProps = {
  placeholder: string;
  name: 'firstName' | 'country' | 'profession';
  // control: Control<Inputs, unknown>;
  options: Option[];
  maxLimit: number;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // selectedOptions: {
  //   value: string;
  //   label: string;
  // }[];
};

import { Control, Controller, useForm } from 'react-hook-form';
import Select, { MultiValue, SingleValue, createFilter } from 'react-select';
import '../../../App.css';
import { Inputs } from '../questions-section';
import { useState } from 'react';

export const InputSelectMulti = ({
  placeholder,
  options,
  name,
  maxLimit,
}: // selectedOptions,
InputProps) => {
  const { register, control, handleSubmit } = useForm();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event', e);
    // setFolderName(event.target.value);
  };
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: true,
      }}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <Select
          styles={{
            container: (baseStyles, state) => ({
              ...baseStyles,
              width: '100%',
              fontFamily: 'Rubik',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '20px',
              lineHeight: '28px',
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: '100%',
              padding: '9px 15px',
              background: '#ffffff',
              border: '1px solid #dcdee7',
              borderRadius: '4px',
              // borderColor: state.isFocused ? 'grey' : 'red',
            }),
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: '#C2C4CB',
              borderColor: state.isFocused ? 'grey' : 'red',
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              padding: '9px 15px',
              background: '#ffffff',
              '&:hover': {
                background: 'grey',
              },
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              // width: '18px',
              // height: '18px',
              color: '#54636E',
            }),
          }}
          isMulti
          onBlur={onBlur} // notify when input is touched
          // onChange={(selectedOption: MultiValue<Option>) => {
          //   if (selectedOption === null) {
          //     onChange(null);
          //     return;
          //   }
          //   onChange(
          //     selectedOption.map((el) => {
          //       el.value;
          //       console.log(el.value);
          //     })
          //   );
          // }} // send value to hook form
          onChange={onChange}
          // inputRef={ref}
          isSearchable={true}
          // unstyled
          placeholder={placeholder}
          options={options}
          filterOption={createFilter({ matchFrom: 'start' })}
          isOptionDisabled={() => (value ? value.length >= maxLimit : false)}
        />
      )}
    />
  );
};
