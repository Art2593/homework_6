function getDayName(inputDate) {
    
    let [day, month, year] = inputDate.split('.');

    let infoDay = new Date(`${year}-${month}-${day}`);
    
    let weekDay = infoDay.getDay();

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    
    return dayNames[weekDay];

}

function getMinutesFromStaretedDay() {
    const date = new Date();
    const minutes = date.getHours() * 60 + date.getMinutes() ;
    return minutes;
}

function getDateOFyoungerUser(user1, user2) {
    let users = [user1, user2];

    let youngerUser = users[0];
    for(let item of users){
        if(youngerUser < item){
            youngerUser = item;
        }
    }
    return youngerUser;
}

export { getDayName }
export { getMinutesFromStaretedDay }
export { getDateOFyoungerUser }