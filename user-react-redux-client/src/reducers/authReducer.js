const INITIAL_STATE = {
    isLoggedIn:false,
    user:null,
    isLoading:false,
    error:null,
    loaded:false,
}

const authReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
              ...currentState,
              isLoading:true
            }

        case 'LOGIN_FAILED':
            return {
                ...currentState,
                isLoading:false,
                error:action.resp.message,
                isLoggedIn:false,
                user:null
            }

        case 'LOGIN_SUCCESS':
            return {
                ...currentState,
                isLoading:false,
                isLoggedIn:true,
                error:null,
                user:action.resp.user,
            }
        
       case 'REQUEST_AUTHENTICATION':
           return {
               ...currentState,
               isLoading:true,
               isLoggedIn:false,
               error:null,
               user:null,
               loaded:false
           }

       case 'AUTH_SUCCESS':
          return {
            ...currentState,
            isLoading:false,
            isLoggedIn:true,
            error:null,
            user:action.resp.user,
            loaded:true
          }

      case 'AUTH_FAILED':
          return {
            ...currentState,
            isLoading:false,
            isLoggedIn:false,
            error:action.resp.message,
            user:null,
            loaded:true
          }
    
        default:
            return currentState;
    }
}


export default authReducer;
