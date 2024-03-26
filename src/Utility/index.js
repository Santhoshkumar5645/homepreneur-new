

export const ScrolltoTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export const RedirectLink = (url) => {
    window.open(url, '_blank');
}

export const DatetoMillisecond = (date) => {

    const d = new Date(date);
    let ms = d.getMilliseconds();
    console.log(ms);
    return ms

}

export const getTimeLeft = (date) => {
    const totalTimeLeft = date - new Date();
    var days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    var seconds = Math.floor((totalTimeLeft / 1000) % 60);

    days = days <= 9 ? "0" + days : days;
    hours = hours <= 9 ? "0" + hours : hours;
    minutes = minutes <= 9 ? "0" + minutes : minutes;
    seconds = seconds <=9 ? "0" + seconds : seconds;

    return { days, hours, minutes, seconds };
};