export interface SimpleResponse<T>{
  status: string;
  data?: T ;
  error: any;
}
