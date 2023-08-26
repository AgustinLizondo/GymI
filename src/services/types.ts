export interface ApiProps {
  path: string;
  method: string;
  data?: object;
  contentType?: string;
  query?: string;
}
