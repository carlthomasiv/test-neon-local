import 'dotenv/config';

import { sql } from './db';

export const getServerData = async () => {
  const book_id = 1;
  const data = await sql`SELECT * FROM books WHERE book_id = ${book_id}`;

  return data;
};
