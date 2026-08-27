// Destructuring
// Object Des...
// Array Des...

//Object Destructuring
const CTGTour =
{
    name: {
        firstName: 'Prosenjith',
        middleName: 'Dash',
        lastName: 'Pappu'
    },
    bike: 'NX200',
    start: 'Dhaka',
    end: 'CTG',
    totalKM: 260,
    startTime: '1:00 am',
    endTime: '5:00 am'

}
// const middleName = CTGTour.name.middleName;
// const bikeName = CTGTour.bike;

const { name, bike, startTime } = CTGTour;
console.log('Some info about partner: Name ->', name.firstName, ",Bike Name ->", bike, ",Start Time -> ", startTime);


const { name:{firstName} } = CTGTour;
console.log(firstName);


// name alice
const { name: {firstName:tourPartnerName}, bike: motorBike, startTime: startTour } = CTGTour;
console.log('Some info about partner: Name ->', tourPartnerName, ",Bike Name ->", motorBike, ",Start Time -> ", startTour);




// Array Destructuring
const friends = ['Alok', 'Puspita', 'Avik']
const newFriend = friends[2]
console.log(newFriend)

// destructuring new friend
const [, , newFrn] = friends;
console.log(newFrn);
