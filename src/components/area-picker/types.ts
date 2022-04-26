export type AreaList = {
  city_list: Record<string, string>;
  county_list: Record<string, string>;
  province_list: Record<string, string>;
};
export type AreaColumnOption = {
  name: string;
  code: string;
};

export type AreaColumnType = "province" | "county" | "city";

export type StateType = {
  code?: string;
  province: AreaColumnOption[];
  county: AreaColumnOption[];
  city: AreaColumnOption[];
};
