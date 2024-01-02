const {ipcRenderer} = window.require('electron');

const database = {}

database.getAllValues = function(callback) {
    ipcRenderer.invoke('get-all-values')
        .then((docs) => {
            callback(docs);
        })
        .catch(error => console.log(error));
};

database.insertValue = function(value, callback) {
    ipcRenderer.invoke('insert-value', value)
        .then((doc) => {
            callback(doc);
        })
        .catch(error => console.log(error));
}

export default database;