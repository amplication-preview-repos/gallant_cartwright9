import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="Number" source="numberField" />
        <TextInput label="profileID" source="profileId" />
        <div />
        <NumberInput step={1} label="profileNumber" source="profileNumber" />
      </SimpleForm>
    </Edit>
  );
};
