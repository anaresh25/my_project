// module.exports={
//      MONGOURI:"mongodb+srv://dbUser:root@cluster0.hsrc4.mongodb.net/dbUser?retryWrites=true&w=majority",
//      JWT_SECRET:"m180281ca",
//      cloud_name:"m180281ca",
//      cloud_api_key:"679635916985538",
//      cloud_api_secret:"tun4sReyL8JFiuEy96EZW9SBVbo"
// };
module.exports={
     MONGOURI:process.env.MONGOURI,
     JWT_SECRET:process.env.JWT_SECRET,
     cloud_name:process.env.cloud_name,
     cloud_api_key:process.env.cloud_api_key,
     cloud_api_secret:process.env.cloud_api_secret
};