import React, { useContext, useEffect, useState } from 'react'
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
import PhoneInputField from '../Element/PhoneInputField'
import { createSearchParams } from 'react-router-dom'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from '../ContextApi/AppContext'


function StudentForm() {
  const { lang } = useContext(AuthContext);

  document.title = 'Homepreneur Awards 4 | Registration | Student Edition'

  const [imagename, setImage] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [filenamecus, setFilename] = useState('')
  const [fileurl, setFilerul] = useState('')

  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded(!expanded)


  

  // const schema = yup.object().shape({
  //   mobile_number: yup.number().positive().integer().min(10).required().max(10),
  //   application_photo: yup.mixed().required(),
  // });


  const { register, handleSubmit, control, watch, getValues, formState: { errors }, reset } = useForm(
    { mode: 'onBlur'}
  );
  const { refetch, loading } = useFetchData('', '', '', '', '', false);


  const navigate = useNavigate();
  const OnSubmit = async (data) => {
    const formData = new FormData();
    //data
    formData.append("applicant_photo", data.applicant_photo[0]);
    formData.append("applicant_presentation", data.applicant_presentation[0]);

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile_number", data.mobile_number);
    formData.append("indivitual_or_team", data.indivitual_or_team);
    formData.append("course_name", data.course_name);
    formData.append("year_of_studying", data.year_of_studying);
    formData.append("college_name", data.college_name);
    formData.append("idea_for_enterpreneurship", data.idea_for_enterpreneurship);
    formData.append("grt_tagline", '');
    formData.append("have_an_existing_business", data.have_an_existing_business);
    formData.append("social_link", data.social_link);
    formData.append("postal_address", data.postal_address);

    //TODO-CLEAR PHOTO
    setImage('')
    setImageUrl('')
    //TODO-CLEAR FILE UPLOAD
    setFilename('')
    setFilerul('')



    const response = await refetch("homepreneur/student-edition/register", 'post', formData, true)

    console.log(response);

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

      navigate({ pathname: '/success', search: createSearchParams({ name: response.data.name, id: response.data.registration_number, flag: '0' }).toString() })
      console.log('reached')
    }

  }


  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [])


  useEffect(() => {

    if (watch('applicant_presentation').length === 1) {
      setFilename(getValues('applicant_presentation')[0].name)
      setFilerul(URL.createObjectURL(getValues('applicant_presentation')[0]))
    }

    if (watch('applicant_photo').length === 1) {
      setImage(getValues('applicant_photo')[0].name)
      setImageUrl(URL.createObjectURL(getValues('applicant_photo')[0]))

    }

  }, [watch('applicant_presentation'), watch('applicant_photo')])

  // useEffect(() => {


  // }, [watch('applicant_photo')])



  if (loading) return <Loader />

  return (
    <>
      <div className='' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
        <div className='brand-container h-screen flex justify-center '>

        <p className='text-center pt-[200px] text-3xl text-primary animate-pulse '>Hompreneur Student Application Portal Closed</p>


        <div className='brand-container  my-10 hidden'>
            <div className="w-full px-8 mx-auto mt-20 space-y-2 shadow lg:max-w-md">
                <details className="p-4 rounded-lg border-[0.5px] border-black">
                    <summary className="font-semibold">   {lang === "english" ? "Format & Presentaion":"விளக்கவுரை வடிவம்"}</summary>
                    <div className="mt-3">
                     <ul className='flex flex-col gap-5 m-10 mt-5'>
                      <li>1. {lang === "english" ? "A maximum of 5 slides presentation" : "விளக்கவுரை வடிவம் 5 பக்கங்கள் மிகாமல் இருக்க வேண்டும்."}</li>
                      <li>2.  {lang === "english" ? "Requisites/ Guidelines of the deck are as follows" : "விண்ணப்பிக்க வேண்டிய விவரங்கள் கீழ் வருமாறு இருக்க வேண்டும்."}</li>
                      <li>3.{lang === "english" ? " Profile of the student entrepreneur (Team)" : "விண்ணப்பதாரரின் சுய விவரங்கள்."}</li>
                      <li>4. {lang === "english" ? "Explain your business idea." : "வணிக கருத்துக்களின் விளக்கவுரை."}</li>
                      <li>5. {lang === "english" ? "Explain your revenue model" : "தொழில் செயல் பட தேவையான வருவாய் விவரங்கள்."}</li>
                      <li>6. {lang === "english" ? "Explain your sales & marketing strategy" : "வணிக லட்சியத்தின் விற்பனை மற்றும் சந்தை படுத்தும் குறிக்கோள்கள்."}</li>
                      
                     </ul>
                    </div>
                </details>
             
               
         
            </div>
        </div>
     
          <p className='hidden text-center text-primary text-[16px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[30px]'>Fill Up the Following Details to Get Registered for</p>
          <p className='hidden text-center text-primary text-[16px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[30px] font-medium'>Student Edition</p>

          <form onSubmit={handleSubmit(OnSubmit)} className='lg:mx-56 xl:mx-56 my-10 hidden'>

            <div className='flex flex-col gap-8'>
              <div className='flex gap-5 flex-col justify-between items-start flex-wrap'>
                <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Are you registering as an individual or a Team?</p>
                <div className='grid grid-cols-2 gap-3'>
                  <RadioButton error={errors} register={register} validationSchema={{ required: " required" }} label={'Individual'} id={'indivitual'} inputname={'indivitual_or_team'} value={'Individual'} />
                  <RadioButton error={errors} register={register} validationSchema={{ required: " required" }} label={'Team'} id={'team'} inputname={'indivitual_or_team'} value={'Team'} />
                </div>
              </div>

              <div className='flex gap-5 flex-col justify-between items-start flex-wrap w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full'>
                  <Input error={errors} register={register} validationSchema={{ required: "Name is required", }} required label={'Course Studying in'} id={'course'} placeholder={'enter your course name'} type={'text'} inputname={'course_name'} />
                  <Input error={errors} register={register} validationSchema={{ required: "Required", }} required label={'Which year of college are you studying in?'} id={'year'} placeholder={'enter year'} type={'text'} inputname={'year_of_studying'} />
                </div>
              </div>

              <div className='flex gap-5 flex-col justify-between items-start flex-wrap w-full'>
                <div className='grid  grid-cols-1 md:grid-cols-2 gap-3 w-full'>
                  <Input error={errors} register={register} validationSchema={{ required: "First Name is required", }} required label={'Name'} id={'first_name'} placeholder={'enter your name'} type={'text'} inputname={'name'} />
                  <Input error={errors} register={register} validationSchema={{ required: "phone number is required", pattern:{value: /^[0-9]*$/,message: "Only numbers are allowed",}, minLength:{value: 10, message:'Mobile Number Must be 10 digit'},  maxLength:{value: 10,message: "Mobile Number Must be 10 digit",}}} required label={'Mobile Number / கைபேசி எண்*'} id={'mobile_number'} placeholder={'Enter your Mobile Number'} type={'text'} inputname={'mobile_number'} />

                </div>
              </div>

              <div className='grid grid-cols-1 md:gird-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3 w-full'>
                <Input error={errors} register={register} validationSchema={{ required: "Email Required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email address" } }} label={'Email'} id={'email'} placeholder={'enter your mail ID'} type={'email'} inputname={'email'} />
                <Input error={errors} register={register} validationSchema={{ required: "College Name Required", }} required label={'college name'} id={'edu'} placeholder={'enter your college name'} type={'text'} inputname={'college_name'} />
              </div>

              <Textarea error={errors} register={register} validationSchema={{ required: "required", }} required id={'business'} label={'What is your entrepreneurship idea in brief, and the impact it intends to create?'} placeholder={'type here'} rows={5} inputname={'idea_for_enterpreneurship'} />

              <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Student Applicant's Photo / விண்ணப்பதாரரின் புகைப்படம் (Image Should be less than 1 MB)*</p>
              <FileInput fileformat='image/png, image/jpg, image/jpeg' id='applicant_photo' error={errors} register={register} validationSchema={{ required: "Image required" }} inputname={'applicant_photo'} fileName={imagename.length > 10 ? imagename.substring(0, 10) + '...' : imagename} fileUrl={imageUrl} previewHide={false} />

              <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Submit the ppt in the given format(5 slides; 10 MB Limit)[PPT, PDF, PPTX]</p>
              <FileInput fileformat='.pps, .pdf, .pptx, application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation"' id='applicant_presentation' error={errors} register={register} validationSchema={{ required: "file required" }} inputname={'applicant_presentation'} fileName={filenamecus.length > 10 ? filenamecus.substring(0, 10) + '...' : filenamecus} fileUrl={fileurl} previewHide={true} />

              <Input error={errors} register={register} validationSchema={{ required: "required", }} required label={'Do you have an existing business?'} id={'busi'} placeholder={'Type here'} type={'text'} inputname={'have_an_existing_business'} />

              <Textarea error={errors} register={register} validationSchema={{ }} required id={'business'} label={'Please Provide a Link of your Business(website, FB, Intagram store, etc)'} placeholder={'type here'} rows={2} inputname={'social_link'} />
              <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Complete Postal Address / முழு அஞ்சல் முகவரி*</p>
              <Textarea error={errors} register={register} validationSchema={{ required: "required", }} required id={'postaladdress'} label={'address line 1*'} placeholder={'type here'} rows={2} inputname={'postal_address'} />

              <div className='flex justify-center '>
                <button type='submit' className='capitalize px-10 py-3 bg-primary rounded-lg text-white w-fit '>submit</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default StudentForm