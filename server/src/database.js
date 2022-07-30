import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/mean-employees')
  .then(function (connection) {console.log('Database connected !!!!')});

export default mongoose