export interface Client {
  companyId?: string;
  createdAt?: string;
  id: string;
  firstName: string;
  lastName: string;
  emailAdress?: string;
  phoneNumber?: string;
  streetAddress?: string;
}

export interface ClientsState {
  clients: Client[] | [];
}
