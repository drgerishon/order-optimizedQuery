const { Pool } = require('pg');

// Configure the PostgreSQL connection
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'orders',
  user: 'postgres',
  password: '_gerishon',
});

//optimize query
//i have selected required columns in instead of using * (to select all)
//i have applied LIMIT restrict the number of results returned,efficient for large tables

const optimizedQuery = `
SELECT id, customer_id, order_date, total_amount
FROM orders
WHERE customer_id = 123
ORDER BY order_date DESC LIMIT 3;
`;

//running optimized query
pool.query(optimizedQuery, (err, result) => {
  if (err) {
    console.error('Error occured when executing the query: ', err);
    return;
  }
  console.log('optimized query');
  console.log(result.rows);
});

// Close the connection
pool.end();
