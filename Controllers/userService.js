const users = [{ name: 'test', password: 'test' }];

const authenticate = async({ name, password }) => {
    const user = users.find(u => u.name === name && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

const getAll = async()=> {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

module.exports = {authenticate,getAll}