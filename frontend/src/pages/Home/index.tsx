import React, { ReactElement, useState } from 'react';
import Input from 'components/Form/Input';
import { Form, Container } from './styled';
import { OnChange } from 'utils/OnChange';
import { Form as FormState } from 'store/modules/areas/types';
import { Cloud, Airport, Area, Loading } from 'components/Icons';
import Button from 'components/Form/Button';
import { useDispatch, useSelector } from 'react-redux';
import { requestArea } from 'store/modules/areas/actions';
import { ApplicationState } from 'store';

export default function Home(): ReactElement {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: ApplicationState) => state.areas);
  const [form, setForm] = useState<FormState>({ clouds: 4, airports: 3, area: 10 });

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    OnChange(event, form, setForm);
  };

  const handleOnSubmit = (event: HTMLFormElement) => {
    event.preventDefault();
    dispatch(requestArea(form));
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Input
          name="clouds"
          value={form.clouds}
          col={9}
          Icon={Cloud}
          label="Nuvens"
          style={{ borderRadius: '3px 0 0 3px' }}
          onChange={(event: any) => handleOnChange(event)}
          min={4}
        />
        <Input
          name="airports"
          value={form.airports}
          col={9}
          Icon={Airport}
          label="Aeroportos"
          style={{ borderRadius: '3px 0 0 3px' }}
          onChange={(event: any) => handleOnChange(event)}
          min={3}
        />
        <Input
          name="area"
          value={form.area}
          col={9}
          Icon={Area}
          label="Area"
          style={{ borderRadius: '3px 0 0 3px' }}
          onChange={(event: any) => handleOnChange(event)}
          min={8}
        />
        <Button title="Calcular" />
      </Form>
      {loading && <Loading />}
    </Container>
  );
}
