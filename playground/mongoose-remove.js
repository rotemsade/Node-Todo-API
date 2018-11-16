const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndDelete('5beea7f825e45e5a4179026a').then((todo) => {
  console.log(JSON.stringify(todo, undefined, 2));
});
