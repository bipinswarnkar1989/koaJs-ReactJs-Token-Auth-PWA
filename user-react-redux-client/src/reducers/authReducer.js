const INITIAL_STATE = {
    isLoggedIn:false,
    user:null,
    isLoading:false,
    error:null,
    loaded:false,
    successMsg:null
}

const authReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
              ...currentState,
              isLoading:true,
              successMsg:null
            }

        case 'LOGIN_FAILED':
            return {
                ...currentState,
                isLoading:false,
                error:action.resp.message,
                isLoggedIn:false,
                user:null,
                successMsg:null
            }

        case 'LOGIN_SUCCESS':
            return {
                ...currentState,
                isLoading:false,
                isLoggedIn:true,
                error:null,
                user:action.resp.user,
                successMsg:action.resp.message
            }
        
       case 'REQUEST_AUTHENTICATION':
           return {
               ...currentState,
               isLoading:true,
               isLoggedIn:false,
               error:null,
               user:null,
               loaded:false,
               successMsg:null
           }

       case 'AUTH_SUCCESS':
          return {
            ...currentState,
            isLoading:false,
            isLoggedIn:true,
            error:null,
            user:action.resp.user,
            loaded:true,
            successMsg:action.resp.message
          }

      case 'AUTH_FAILED':
          return {
            ...currentState,
            isLoading:false,
            isLoggedIn:false,
            error:action.resp.message,
            user:null,
            loaded:true,
            successMsg:null
          }
    
      case 'FLUSH_MESSAGES':
         return {
            ...currentState,
            error:null,
            successMsg:null
        }

     case 'REQUEST_LOGOUT':
         return {
           ...currentState,
           isLoading:false,
           isLoggedIn:false,
           error:null,
           user:null,
           loaded:true,
           successMsg:null
         }
    
        default:
            return currentState;
    }
}


export default authReducer;
