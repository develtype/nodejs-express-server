export type DataType = {
  id: string;
  data: string;
};

export type DatasType = { [id: string]: DataType };

export type DataCreateParamsType = { data: string };

export type DataUpdateParamsType = { id: string; data: string };

export type DataDeleteParamsType = { id: string };
