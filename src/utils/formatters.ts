import { Client, ClientDB } from "../stores/types/clientTypes";

export const formatClientsData = (data: ClientDB[]): Client[] => data.map(
  (client: ClientDB) => ({
    streetAddress: client.client_address,
    admissionDate: client.client_admission_date,
    emailAddress: client.client_email,
    name: client.client_name,
    phoneNumber: client.client_phone_number,
    createdAt: client.created_at,
    id: client.id,
  }),
);
