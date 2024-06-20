import { JsonValue } from "type-fest";

export type Profile = {
  createdAt: Date;
  id: string;
  image: JsonValue;
  numberField: number | null;
  profileId: string | null;
  profileImage: JsonValue;
  profileNumber: number | null;
  updatedAt: Date;
};
