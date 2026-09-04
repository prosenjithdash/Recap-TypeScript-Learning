// type Guard

// in typeof

type Alphaneumeric = number | string;

// normal function
const add = (num1: Alphaneumeric, num2: Alphaneumeric)=>{
    // now apply type guard with typeGuard
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;

    }
    else {
        num1.toString() + num2.toString()
    }
    

}

add(7, 9)
add('7', 8)
add('7', '9')
add(9, '9')


// in guard

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: 'Admin'
}

const getUserInfo = (user: NormalUser | AdminUser) => {

    // type guard with in
    if ('role' in user) {
            console.log(`${user.name} and his role is : ${user.role}`)

    } else {
        console.log(`This ${user.name}`)
    }

}

getUserInfo({name:'Normal', role:'Admin'})