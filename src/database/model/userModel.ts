// import { DataTypes, Model } from "sequelize";
// import sequelize from "../Db";


// export class User extends Model {}
// export class userModel {
//   id!: number;
//   firstName!: string;
//   lastName!: string;
//   email!: string;
//   number!: number;
//   password!: string;
//   createdAt!: Date;
//   updatedAt!: Date;
//   deleted!: boolean;
// }



// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },


//     firstName: {
//       type: DataTypes.STRING,
//       field: 'First name',
//     },
    
//     lastName: {
//       type: DataTypes.STRING,
//       field: 'Last name',
//     },
    
//     email: {
//       type: DataTypes.STRING,
//       field: 'Email',
//     },
    
//     number: {
//       type: DataTypes.NUMBER,
//       field: 'number',
//     },
    
//     password: {
//       type: DataTypes.STRING,
//       field: 'password',
//     },
//     deletedAt: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.NOW,
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.NOW,
//     },
//   },
//   {
//     sequelize,
//     tableName: 'Users',
//     modelName: 'UserModel',
//     schema: 'operation',
//     underscored: false,
//     freezeTableName: true, // not pluralizes
//   },
// );

// (async function test() {
//   try {
//     await sequelize.sync({ force: true });
//     const data = await User.findAll();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await sequelize.close();
//   }
// });

