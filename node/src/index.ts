interface IHomer {
    name(): String;
}


export class Homer implements IHomer {
    name(){
        return 'Homer Simpson 3';
    }
}

export default function show() {
    let homer = new Homer();
    return homer.name();
}

//const instance = new Homer();
//console.log(instance.name());