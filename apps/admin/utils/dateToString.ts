export function dateToString(date: Date) {
    if (!date || !(date instanceof Date)) {
        console.log('[dateToString] Wrong date, ', date);
        return '';
    }

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month.toString().length < 2) {
         // @ts-ignore
        month = '0' + month;
    }
    
    if (day.toString().length < 2) {
        // @ts-ignore
        day = '0' + day;
    }
    return `${day}.${month}.${year}`;
}
