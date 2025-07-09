const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aryasinha6408:Arya1904@finance-cluster.corwe0u.mongodb.net/?retryWrites=true&w=majority&appName=finance-clustercd cl', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Successfully connected to MongoDB');
  process.exit(0);
})
.catch((err) => {
  console.error('❌ Connection error:', err);
  process.exit(1);
});
