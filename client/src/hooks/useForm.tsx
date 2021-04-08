import { useState, ChangeEvent, FormEvent } from 'react';

export function useForm<T>(initialState: T, cbFunc: () => void) {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cbFunc();
  };

  const handleReset = () => setValues(initialState);

  return { values, handleChange, handleSubmit, handleReset };
}
