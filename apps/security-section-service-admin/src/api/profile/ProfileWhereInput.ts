import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProfileWhereInput = {
  id?: StringFilter;
  image?: JsonFilter;
  numberField?: IntNullableFilter;
  profileId?: StringNullableFilter;
  profileImage?: JsonFilter;
  profileNumber?: IntNullableFilter;
};
