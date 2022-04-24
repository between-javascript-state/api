import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CourseContentTitle } from "../courseContent/CourseContentTitle";

export const CourseChapterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
