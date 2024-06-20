import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="Number" source="numberField" />
        <TextInput label="profileID" source="profileId" />
        <div />
        <NumberInput step={1} label="profileNumber" source="profileNumber" />
      </SimpleForm>
    </Create>
  );
};
