//genericWithInterface

interface Developer<T,W=null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T
    bike?: W

}

type withOutBrand =
    {
        heartRate: string;
        stopWatch: boolean;
    }

const poorDeveloper: Developer<withOutBrand,{brand:string,model:string,cc:string}> = {
    name: 'Mr. Poor',
    salary: 20000,
    device: {
        brand: 'HP',
        model: 'ThinkPad',
        releasedYear:'2023'
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true
    },
    bike: {
        brand: 'Honda',
        model:'NX200',
        cc: '184.5CC'
    }
}


interface withBrand
    {
        heartRate: string;
        callSupport: boolean;
        calculator: boolean;
        aiFeature: boolean;
    }
const richDeveloper: Developer<withBrand> = {
    name: 'Mr. Rich',
    salary: 90000,
    device: {
        brand: 'Apple',
        model: 'Macbook Air m4',
        releasedYear:'2026'
    },
    smartWatch: {
        heartRate: '200',
        callSupport: true,
        calculator: true,
        aiFeature: true
    }
}