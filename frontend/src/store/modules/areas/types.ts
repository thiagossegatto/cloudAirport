export enum Types {
  REQUEST_AREA = '@areas/REQUEST_AREA',
  REQUEST_AREA_SUCCESS = '@areas/REQUEST_AREA_SUCCESS',
  REQUEST_AREA_FAILED = '@areas/REQUEST_AREA_FAILED',
}

export interface AreaState {
  form: Form | null;
  data: Area | null;
  loading: boolean;
}

export interface Form {
  clouds: number;
  airports: number;
  area: number;
}
export interface Area {
  firstDay: number;
  lastDay: number;
  areas: any;
}
