export const checkAuthenticated = () => {
    return localStorage.getItem('user') === 'main';
};
