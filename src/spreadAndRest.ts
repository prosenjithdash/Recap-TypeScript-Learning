// spread operator
const friends = ['labib', 'kishore', '[proshato']
const uniFriends = ['bilash', 'apurbo']
const jobFriends = ['asif', 'aksh', 'tomal']
friends.push(...uniFriends) // spread
friends.push(...jobFriends) // spread


console.log(friends)


const user =
{
    name: 'Pappu',
    phoneNo: '01724154911'
}

const otherInfo = 
{
    hobby: 'outing',
    bike: 'NX200'
}

const userInfo = { ...user, ...otherInfo }
console.log(userInfo)


// rest operator
const friendsInvite = (frn1: string, frn2: string, frn3: string) => {
    // here invitation send single single
    console.log(`Sent Invitation to ${frn1}`)
    console.log(`Sent Invitation to ${frn2}`)
    console.log(`Sent Invitation to ${frn3}`)
}

friendsInvite('Asig', 'Alok', 'Abir');

// why use rest operator?
// when use loop then need to array
// if you want make array then must use rest operator like => ...tourP
// like that => ['Himel', 'Siam', 'Ashok','Avi']

const tourPlan = (...tourP:string[]) => {
    // here invitation send with forEach loop
    tourP.forEach((tourP:String) => console.log(`Send Tour plan to ${tourP}`))

}

tourPlan('Himel', 'Siam', 'Ashok','Avi');





