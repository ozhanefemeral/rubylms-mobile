const userActions = {
    updateUser: (data) => ({ type: 'updateUser', data: data }),
    updateToken: (data) => ({ type: 'updateToken', data: data}),
};
  
export default userActions;