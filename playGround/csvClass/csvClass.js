
class csvHandler {
    constructor(path){
        this.path = path
    }
     fs = require('fs');
    printData() {
        this.fs.readFile(this.path,"utf-8",(err,data) => {
            if(err) {
                console.log("something went wrong ::::",err);
            } else {
                console.log(data);
            }
        })
    }
     appendData(data) {
        this.fs.appendFile(this.path,`${data}`,(err) => {
            if(err) {
                console.log("something went wrong in appending ::::",err)
            } else {
                console.log("all set")
            }
        })
    }
    overWriteData(data) {
        this.fs.writeFile(this.path,data,(err,data) => {
            if(err) {
                console.log("something went wrong in over writing file ::::",err)
            } else {
                console.log(data)
            }
        })
    }
}

module.exports = csvHandler;


// let csvHandler1 = new csvHandler("data.csv");
// csvHandler1.overWriteData(`id,name,new`)
// csvHandler1.printData()
