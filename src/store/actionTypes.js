const actionCreator = (type, payload)=>{

    return payload ? {type, payload} : { type };
};

export { actionCreator };