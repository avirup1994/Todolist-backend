let config={}
config.port=3300;
config.allowedcrossorigin="*";
config.env="dev";
config.apiversion='/api/v1';
config.db={uri:'mongodb://127.0.0.1:27017/todolist'};

module.exports={
    port:config.port,
    allowedcrossorigin:config.allowedcrossorigin,
    env:config.env,
    apiversion:config.apiversion,
    db:config.db
}