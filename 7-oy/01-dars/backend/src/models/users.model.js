const users = [];
let nextId = 1;

export const findByEmail = (email) => users.find(u => u.email === email);

export const findById = (id) => users.find(u => u.id === id);

export const createUser = (name, email, hashedPassword) => {
    const user = { id: nextId++, name, email, password: hashedPassword };
    users.push(user);
    return user;
};
