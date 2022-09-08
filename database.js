const mysql = require('mysql2/promise');

export default async function database() {
    return await mysql.createConnection({
            host: 'sql11.freesqldatabase.com',
            user: 'sql11518049',
            password: '4rHFMQKdRT',
            database: 'sql11518049',
            port: 3306
        })
}