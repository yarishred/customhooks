# useForm Ejemplo de Uso

Ejemplo:

const initialState = {
    name: '',
    age: 0,
    email: ''
};

const [formValues, handleInputChange, reset ]= useForm(initialState)