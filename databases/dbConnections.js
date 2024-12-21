import mongoose from 'mongoose';
function dbConnection(){
  mongoose.connect('mongodb://localhost:27017/mongodb2')
.then(() => {
  console.log("DB connected !");
  
}).catch((err) => {
  console.log("DB error: ",err)
  
});
}
export default dbConnection;