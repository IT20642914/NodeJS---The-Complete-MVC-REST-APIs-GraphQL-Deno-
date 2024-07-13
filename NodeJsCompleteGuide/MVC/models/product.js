const fs= require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title){
        this.title = title;
    }

    save() {
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
        console.log("first p: ", p)
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            
            let products = [];
            if (fileContent.length > 0) {
                try {
                    products = JSON.parse(fileContent);
                } catch (parseError) {
                    console.error('Error parsing JSON:', parseError);
                    return;
                }
            }
    
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (writeError) => {
                if (writeError) {
                    console.error('Error writing file:', writeError);
                }
            });
        });
    }
    
    static fetchAll(callback) {
    const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

    fs.readFile(p, (err, fileContent) => {
            if (err) {
                console.error('Error reading file:', err);
                callback([]);
            }
            
            try {
                const products = JSON.parse(fileContent);
                callback(products);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                callback([]);
            }
        });
     }
}    