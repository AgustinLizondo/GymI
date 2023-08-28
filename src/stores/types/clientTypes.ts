export interface Client {
  firstName: string;
  lastName: string;
  emailAdress?: string;
  phoneNumber?: string;
  streetAddress?: string;
}

export interface ClientsState {
  clients: Client[] | [];
}
