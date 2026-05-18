import './admin.js';
import './class.js';
import './student.js';
import './book.js';
import sequelize from './db.js';
sequelize.sync({ force: true }).then(() => {
    console.log('数据库同步完成');
});
export default sequelize;
