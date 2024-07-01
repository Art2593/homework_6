function changeAgeInObj(obj, age) {
    
    obj.age = age;
    return obj;
    
}

function addFieldToCopy(obj, NewField) {
    return Object.assign({}, obj, NewField);
}

export { changeAgeInObj }
export { addFieldToCopy }
