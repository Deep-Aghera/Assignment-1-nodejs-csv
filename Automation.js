console.log("Hello Automation");
let csvClass = require('./playGround/csvClass/csvClass');

let url = `https://api.github.com/search/repositories?q=is:public`;

async function fetchData(url)  {
     let data = await fetch(url)
    let newData = await data.json()
    
     return newData
    }


async function printData() {
    let jdata = await fetchData(url);
    
    let csv1 = new csvClass('data.csv');
    console.log(csv1);
    csv1.appendData(`name,description,html_url,watchers_count,stargazers_count,forks_count`)
    let finalCsvData = "";
    let fdata = jdata.items.forEach((data) => {
        if((data.language === "Python" || data.forks >= 200) && data.stargazers_count > 2000 ){
            finalCsvData += `\n${data.name},${data.description},${data.html_url},${data.watchers_count},${data.stargazers_count},${data.forks_count}\n`
        }
    });
    //console.log(finalCsvData);
    csv1.appendData(finalCsvData);

}

printData()