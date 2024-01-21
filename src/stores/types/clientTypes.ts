export interface Client {
  id: string;
  createdAt?: string;
  name: string;
  streetAddress?: string;
  emailAddress?: string;
  phoneNumber?: string;
  admissionDate?: string;
}

export interface ClientsState {
  clients: Client[] | [];
}

export interface ClientDB {
  client_address: string;
  client_admission_date: string;
  client_email: string;
  client_name: string;
  client_phone_number: string;
  created_at: string;
  id: string;
}
