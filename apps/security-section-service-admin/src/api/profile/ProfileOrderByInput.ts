import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  numberField?: SortOrder;
  profileId?: SortOrder;
  profileImage?: SortOrder;
  profileNumber?: SortOrder;
  updatedAt?: SortOrder;
};
