
module.exports = req => {
  return new Promise((resolve, reject) => {
    //check that content-type is json
    //if not json reject with error
    if(json) {
      .get( {'Content-Type': 'text/json' } )
    }
    
    
    let body = '';
    req.on('data', chunk => {
      body += chunk
     
    });
    req.on('end', () => {
      let json = null;
      try{
        json = JSON.parse(body);
      }catch(err){
        return reject(error);
      }
      resolve(json);
    });

    req.on('error', err => reject(err));
    reject(err);
  });
};
