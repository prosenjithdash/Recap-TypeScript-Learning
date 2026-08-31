// Interface

// type declare
type User = {
    name: string,
    age: number
}

// Interface declare
interface IUser{
    name: string,
    age: number
}

// union
type Role = {
    role: 'admin' | 'user'
}

// Intersection
type UserWithRole = User & Role;

const user1: UserWithRole = {
    name: 'pappu',
    age: 24,
    role: 'admin'
}

const user2: User = {
    name: 'Bappu',
    age: 21
}

const user3: IUser = {
    name: 'Labib',
    age: 23
}


// what's the deference of Type Alias and Interface?

type IsAdmin = boolean
const isAdmin : IsAdmin = true