const person = () => {
    var saveName = "NAME";
    return {
        getname: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getname());
newPerson.setName('Wilmer');
console.log(newPerson.getname());
