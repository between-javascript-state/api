import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CourseContentTitle } from "../courseContent/CourseContentTitle";
import { PartnerTitle } from "../partner/PartnerTitle";
import { TopicTitle } from "../topic/TopicTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="coursecontent.id"
          reference="CourseContent"
          label="Content"
        >
          <SelectInput optionText={CourseContentTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Image" source="image" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="partner.id" reference="Partner" label="Partner">
          <SelectInput optionText={PartnerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="topics"
          reference="Topic"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TopicTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
