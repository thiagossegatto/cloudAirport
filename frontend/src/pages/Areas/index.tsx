import React, { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'store';
import { Container, BoxDay, Infos } from './styled';
import { Airport, Cloud } from 'components/Icons';
import history from 'routes/history';

const ShowIcon = (value: number) => {
  if (value === 0) {
    return '.';
  }
  if (value === 1) {
    return <Airport color="#A21" />;
  }
  if (value === 2) {
    return <Cloud />;
  }
};

export default function Areas(): ReactElement {
  const { data } = useSelector((state: ApplicationState) => state.areas);

  useEffect(() => {
    if (data === null) {
      history.push('/');
    }
  }, [data]);

  return (
    <Container>
      <Infos>
        <span>
          Primeiro Aeroporto foi coberto no dia: <b>{data?.firstDay}</b>{' '}
        </span>
        <span>
          Os Aeroportos foram completamente cobertos no dia: <b>{data?.lastDay}</b>{' '}
        </span>
      </Infos>
      <div>
        {data?.areas.map((item: any, index: number) => (
          <BoxDay key={index}>
            <h2>Dia: {index + 1}</h2>
            <div key={index}>
              {item.map((item2: any, index2: number) => (
                <div key={index2}>
                  {item2.map((item3: any, index3: number) => (
                    <div key={index3}>{ShowIcon(item3)}</div>
                  ))}
                </div>
              ))}
            </div>
          </BoxDay>
        ))}
      </div>
    </Container>
  );
}
