import 'dotenv/config';

import { sql } from './db.js';

export async function getBookData(bookId) {
  try {
    const result = await sql`SELECT * FROM books WHERE id = ${bookId}`;
    return result;
  } catch (error) {
    return error;
  }
}

export const getServerData = async () => {
  return null;
};
