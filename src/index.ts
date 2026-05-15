import mysql from 'mysql2/promise'

const main = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'company'
  })

  try {
    console.log('连接成功')
    const [results]  = await connection.execute('SELECT * FROM employee limit 1')
    console.log(results)
  } catch (err) {
    console.error('执行失败:', err)
  } finally {
    await connection.end()
  }
}

main()