console.log("Welcome To World Calculator");
const updateTime = () => {

    let d = new Date();

    usa.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
    }).split(',')[1];

    india.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
    }).split(',')[1];

    china.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Asia/Shanghai',
    }).split(',')[1];

    if (d.getHours() == parseInt(alarm.value.split(":")[0]) && d.getMinutes() == parseInt(alarm.value.split(":")[1])) {
        alert("Alarm is Ringing..");
        setTimeout(() => {
        }, 4);
        alarm.value = "";
    }
}

setInterval(updateTime, Infinity);

