// Union |
type UserRole = 'admin' | 'user' 

const getDashboard = (role: UserRole) => {
    if (role == 'admin') {
        return 'Admin Dashboard.'
    }
    else if (role == 'user') {
        return 'User Dashboard'
    }
    else{
        return 'Guest Dashboard'
    }
}

getDashboard("admin");


// Intersection &
type Employee = {
    id: string,
    name: string,
    phoneNo: string
};
type Manager = {
    designation: string,
    teamSize : number
}

type EmployeeManager = Employee & Manager;


const habib: EmployeeManager = {
    id:'90pi9',
    name: 'Habib',
    designation: 'Manager',
    phoneNo: '01724154911',
    teamSize: 8
    

}