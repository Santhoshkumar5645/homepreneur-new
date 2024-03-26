import React, { useEffect, useState } from 'react'
import useFetchData from '../CustomHooks/useFetchData'
import DropDown from '../Element/DropDown'
import FileInput from '../Element/FileInput'
import Input from '../Element/Input'
import Loader from '../Element/Loader'
import RadioButton from '../Element/RadioButton'
import Textarea from '../Element/Textarea'
import { ScrolltoTop } from '../Utility'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import CheckBox from '../Element/CheckBox'
import PhoneInputField from '../Element/PhoneInputField'
import SearchableDropdown from '../Element/SearchableDropdown'
import { createSearchParams } from 'react-router-dom'


function Form() {


    document.title = 'Homepreneur Awards 2024 | Registration'

    // const { data: category, loading, error, refetch } = useFetchData("homepreneur/categories", "get", [], true);
    const { refetch, loading } = useFetchData('', '', '', '', '', false);
    const [popupShow, setPopup] = useState(false);
    const [modalShow, setModal] = useState(false);
    const [sectionShow, setSection] = useState(false);
    // const [fileChange, setFileChange] = useState(false)
    const [imagename, setImage] = useState('')
    const [imageUrl, setImageUrl] = useState('')


    // Javahar code
    const [selectedId, setSelectedId] = useState(0);

    const [errorFlag, seterrorFlag] = useState(false)

    const chooseCategoryData = (id) => {
        setSelectedId(id)
    };

    // Javahar Code end


    //startup TN

    const [startupTN, setStartupTN] = useState(false)



    const { register, handleSubmit, watch, getValues, setError, control, formState: { errors }, reset } = useForm(
        { mode: 'onBlur' }
    );

    const navigate = useNavigate();
    const OnSubmit = async (data) => {

        const formData = new FormData();
        
        const Data={
            name:data.name,
            email:data.email,
            mobile_number:data.mobile_number,
            city:data.city
        }


        // formData.append("name", data.name);
        // formData.append("email", data.email);
        // formData.append("mobile_number", data.mobile_number);
        // formData.append("city", data.city);

        const response = await refetch("event-register", 'post', Data, true)
        if (response.status) {


            toast.success(response.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });


            reset({});

          

        }






    }




    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [])

    if (loading) return <Loader />

    return (
        <>
            <div className='' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
                <div className='brand-container my-10 h-screen'>
                    <p className='text-center text-primary text-[30px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[30px] font-medium'>Event Register</p>
                    <p className='text-center text-primary text-[25px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[30px] font-medium mt-28 capitalize'>house full</p>

                    <form onSubmit={handleSubmit(OnSubmit)} className='lg:mx-56 xl:mx-56 my-10 hidden'>
                        <div className='flex flex-col gap-8 '>
                            <Input error={errors} register={register} validationSchema={{ required: "First Name is required", }} required label={'name'} id={'first_name'} placeholder={'enter your first name'} type={'text'} inputname={'name'} />
                            <Input error={errors} register={register} validationSchema={{ required: "required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email address" } }} required label={'Email Id / மின்னஞ்சல் முகவரி*'} id={'email'} placeholder={'enter your email'} type={'email'} inputname={'email'} />
                           

                            <Input error={errors} register={register} validationSchema={{ required: "phone number is required", pattern: { value: /^[0-9]*$/, message: "Only numbers are allowed", }, minLength: { value: 10, message: 'Mobile Number Must be 10 digit' }, maxLength: { value: 10, message: "Mobile Number Must be 10 digit", } }} required label={'mobile number'} id={'mobile_number'} placeholder={'enter your mobile number'} type={'text'} inputname={'mobile_number'} />

                            <Input error={errors} register={register} validationSchema={{ required: "City or District is required", }} required label={'City / District'} id={'city'} placeholder={'enter your city/district'} type={'text'} inputname={'city'} />

                            <div className='flex justify-center '>
                                <button type='submit' className='capitalize px-10 py-3 bg-primary rounded-lg text-white w-fit '>submit</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <Modal show={modalShow} Handler={setModal} />

        </>
    )
}

export default Form


const Modal = (props) => {
    return (
        <>
            <div className={props.show ? 'fixed inset-0 flex justify-center items-center bg-heading/50  backdrop-blur-sm z-50' : 'hidden'}>

                <div className='bg-white w-3/4 h-3/5 md:w-1/2 lg:w-1/2 xl:w-1/2 md:h-1/2 lg:h-1/2 xl:h-1/2 p-5 rounded-lg'>
                    <img onClick={() => props.Handler(false)} className='float-right w-7 cursor-pointer active:opacity-50' src="assets/svg/icons/close.svg" alt="" />
                    <div className='flex flex-col gap-2 justify-center items-center w-full  h-full'>
                        <p className='-mt-16 text-2xl text-center capitalize text-primary font-extrabold'>Congratulations on your previous award! </p>
                        <p className='text-center text-primary'>We appreciate your participation in the past season. Please note that previous year's winners are not eligible to apply for this season's awards. We encourage you to continue pursuing excellence in your business endeavours.</p>
                    </div>

                </div>

            </div>
        </>
    )
}