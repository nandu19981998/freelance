import React, {useState} from 'react';
import styles from './index.module.scss';
import UserTile from '../../components/UserTile';
import TextField from '../../components/TextField';
import SelectInput from '../../components/SelectInput';
import Button from '../../components/Button';
import axios from 'axios';
import {useRouter} from 'next/router'
import Loader from '../../components/Loader'

const mockData = {
		    gender: "male",
		    name: "John",
            age: "45",
		    email: "siniya60@gmail.com",
		    country:"India",
		    city: "Kerala",
		    phone:"7994222249",
};

const Create = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
            gender: {
                 value: '',
                error: null,
                errorMessage: 'Select a gender',
                pattern: /^(Female|Male)$/
            },
		    name: {
                 value: '',
                error: null,
                errorMessage: 'First name should be atleast have 3 characters',
                pattern: /^[A-Za-z\s]{3,}$/,
            },
            age: {
                 value: '',
                error: null,
                errorMessage: 'Please provide a valid age',
                pattern: /^(?:[1-9]|[1-9][0-9])$/
            },
		    email: {
                 value: '',
                error: null,
                errorMessage: 'Please provide a valid email address',
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
            },
		    country:{
                 value: '',
                error: null,
                errorMessage: 'Provide Country name',
                pattern: /^[A-Za-z\s]+$/i
            },
		    city: {
                 value: '',
                error: null,
                errorMessage: 'Provide City name',
                pattern: /^[A-Za-z\s]+$/i
            },
		    phone:{
                 value: '',
                error: null,
                errorMessage: 'Provide a valid phone number',
                pattern: /^[6-9]\d{9}$/
            },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        for (let key in formData) {
                if(!formData[key].pattern.test(formData[key].value)){
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        [key]: {
                        ...prevFormData[key],
                        error: true,
                        },
                    }));
                }
        };
        console.log(formData);
        if(!Object.values(formData).some(ele => ele.error === null ? true : ele.error)){
            const {gender: {value: genderValue}, age: {value: ageValue}, email: {value: emailValue}, phone: {value: phoneValue}, city: {value: cityValue}, country: {value: countryValue}, name: {value: nameValue}} = formData;
            const requestBody = {
                gender: genderValue,
                age: ageValue,
                email: emailValue,
                phone: phoneValue,
                city: cityValue,
                country: countryValue,
                name: nameValue
            };
            setLoading(true)
            await axios.post('/api/user/create', requestBody);
            setLoading(false)
            router.push('/');
        }
    }

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: {
                ...prevFormData[name],
                value: value,
                },
            }));
        setFormData((prevFormData) => {
            const errorStatus = !prevFormData[name].pattern.test(value);
            return {
                ...prevFormData,
                [name]: {
                ...prevFormData[name],
                error: errorStatus,
                },
            }
        });
    }

    return <main className={styles.createContainer}>
                <div className={styles.profileContainer}>
                    <h1 className={styles.heading}>Lets level up your brand, together</h1>
                    <p className={styles.description}>Your candidate is being added to our site</p>
                    <div className={styles.userContainer}>
                    <UserTile userDetails={mockData}/>
                    </div>
                </div>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <div className={styles.firstRow}>
                        <TextField errorStatus={formData.name} name="name" label="First name" placeholder="First name" onChange={handleOnChange} />
                        <SelectInput errorStatus={formData.gender} name="gender" label="Gender" options={["Male", "Female"]} onChange={handleOnChange}/>
                    </div>
                    <div className={styles.secondRow}>
                        <TextField errorStatus={formData.age} name="age" label="Age" placeholder="Age" onChange={handleOnChange}/>
                        <TextField errorStatus={formData.city} name="city" label="City" placeholder="City" onChange={handleOnChange}/>
                        <TextField errorStatus={formData.country} name="country" label="Country" placeholder="Country" onChange={handleOnChange}/>
                    </div>
                    <TextField errorStatus={formData.email} name="email" label="Email" placeholder="Email" onChange={handleOnChange}/>
                    <TextField errorStatus={formData.phone} name="phone" label="Phone Number" placeholder="Phone Number" onChange={handleOnChange}/>
                    <Button type="submit" >{
                        loading ? <Loader/> : "Add Candidate"
                    }</Button>
                </form>
           </main>;
};

export default Create;