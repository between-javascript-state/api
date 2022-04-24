import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CourseContentTitle } from "../courseContent/CourseContentTitle";

export const CourseChapterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="coursecontent.id"
          reference="CourseContent"
          label="Courses Contents"
        >
          <SelectInput optionText={CourseContentTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
