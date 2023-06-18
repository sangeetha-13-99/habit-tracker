
export const modalReducer=(state,action)=>{
    switch (action.type) {
        case 'OPENMODAL':{
            return {...state,isOpen:true,modalData:action.payload}
        }
        case 'CLOSEMODAL':{
            return {...state,isOpen:false,modalData:{}}
        }
        default:
            break;
    }
}

export const intialModalData={
    isOpen:false,
    modalData:{}
}