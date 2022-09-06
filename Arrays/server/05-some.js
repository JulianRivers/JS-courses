const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const seCruzan = (newDate) => {
    dates.some(date => areIntervalsOverlapping(
        {start: date.startDate, end: date.endDate},
        {start: newDate.startDate, end: newDate.endDate}
    ))
};

const numbers =[1,3,5,5,7,2]
const containsPar = numbers.some((item) => (item % 2 == 0));
console.log(containsPar)
