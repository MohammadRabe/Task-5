function get_appointment(day){
    switch(day){
        case 'Friday':
        case 'Saturday':
            return 'there is non in this day';
        case 'Monday':
        case 'Thursday':
            return 'from 10:00 AM to 5:00 PM';
        case 'Tuseday':
            return 'from 10:00 AM to 6:00 PM';
        case 'Wednesday':
            return 'from 10:00 AM to 7:00 PM';
        default:
            return 'Not valid day :(';
    }
}
