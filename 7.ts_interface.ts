{
    interface Person{
        readonly firstName: string,
        lastName: string,
        middleName?: string
    }
    
    function getFullName(person: Person){
        if(person.middleName){

            return person.firstName + " " + person.lastName + person.middleName;
        }
        return person.firstName + person.lastName;
    }

    let cursh = {
        firstName: "Ngọc",
        lastName: "Huyền",
        
    }
    cursh.firstName  ="trúc quỳnh";
    cursh.firstName ="thắm hương";
    const reuslt = getFullName(cursh);
    console.log(reuslt)
}