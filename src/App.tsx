import { useState } from 'react';

import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import countries from 'i18n-iso-countries';
import ruLocale from 'i18n-iso-countries/langs/ru.json';
import './App.css';
import { QuestionsSection } from './ui/questions-section';
type Inputs = {
  firstName: string;
  country: string;
  exampleRequired: string;
};

function App() {
  const [count, setCount] = useState(0);

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div className="form">
        <QuestionsSection />
      </div>
    </>
  );
}

export default App;
