export const OnChange = (event: React.FormEvent<HTMLInputElement>, data: any, setData: any) => {
  let value;
  let name = event.currentTarget.name;
  if (event && event.currentTarget) {
    if (event.currentTarget) {
      value = event.currentTarget.value;
    }
  }

  let newData = { ...data };
  newData[name] = value;

  setData(newData);
};
