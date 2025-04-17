import 'dotenv/config';

import { sql } from './db';

export async function getBookData(bookId) {
  const data = await sql`SELECT * FROM books WHERE book_id = ${bookId}`;

  return data;
}

export const getServerData = async () => {
  return null;
};
