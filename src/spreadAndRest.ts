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



