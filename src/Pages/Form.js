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

    if (selectedId === 0) return

    const formData = new FormData();
    formData.append("applicant_photo", data.applicant_photo[0]);

    // formData.append("category", data.category);
    formData.append("category", selectedId);

    formData.append("already_won_previous_year_hompreneur", data.already_won_previous_year_hompreneur);
    formData.append("annual_income", data.annual_income);
    formData.append("business_challenges", data.business_challenges);
    formData.append("business_growth_in_one_year", data.business_growth_in_one_year);
    formData.append("complete_postal_address", data.complete_postal_address);
    formData.append("date_of_birth", data.date_of_birth);
    formData.append("district_or_city", data.district_or_city);
    formData.append("education_qualification", data.education_qualification);
    formData.append("email", data.email);
    formData.append("facebook_business_page_link", data.facebook_business_page_link);
    formData.append("first_name", data.first_name);
    formData.append("future_business_plan", data.future_business_plan);
    formData.append("how_did_you_market_the_business", data.how_did_you_market_the_business);
    formData.append("instagram_page_link", data.instagram_page_link);
    formData.append("last_name", data.last_name);
    formData.append("mobile_number", data.mobile_number);
    formData.append("nature_of_business", data.nature_of_business);
    formData.append("number_of_clients_or_cutomers_reached", data.number_of_clients_or_cutomers_reached);
    formData.append("number_of_years_in_business", data.number_of_years_in_business);
    formData.append("state", data.state);
    formData.append("type_of_business_structure", data.type_of_business_structure);
    formData.append("website_link", data.website_link);
    formData.append("why_and_how_did_you_start_your_business", data.why_and_how_did_you_start_your_business);
    // formData.append("country_code", data.country_code);
    formData.append("country", data.country);
    formData.append("awards_won", data.awards_won);
    formData.append("news_articles", '');

    // Nomination Other - Fields
    formData.append("award_applicant_details", data.award_applicant_details);

    formData.append("name_of_the_nominator", data.name_of_the_nominator === undefined ? '' : data.name_of_the_nominator);
    formData.append("nominator_mobile_number", data.nominator_mobile_number === undefined ? '' : data.nominator_mobile_number);
    formData.append("nominator_email", data.nominator_email === undefined ? '' : data.nominator_email);
    formData.append("nominator_postal_address", data.nominator_postal_address === undefined ? '' : data.nominator_postal_address);
    formData.append("reason_for_nominating", data.reason_for_nominating === undefined ? '' : data.reason_for_nominating);
    // TANSIM - Fields
    formData.append("tanseed_grant", data.tanseed_grant);

    formData.append("registered_with_startup_tn", data.registered_with_startup_tn === undefined ? '' : data.registered_with_startup_tn);
    formData.append("located_and_headquarted_in_tamilnadu", data.located_and_headquarted_in_tamilnadu === undefined ? '' : data.located_and_headquarted_in_tamilnadu);
    formData.append("poc_or_mvp", data.poc_or_mvp === undefined ? '' : data.poc_or_mvp);
    formData.append("registered_as_pvt_ltd_company", data.registered_as_pvt_ltd_company === undefined ? '' : data.registered_as_pvt_ltd_company);
    formData.append("pancard_and_gst_number", data.pancard_and_gst_number === undefined ? '' : data.pancard_and_gst_number);

    //TODO-CLEAR PHOTO
    setImage('')
    setImageUrl('')


    const response = await refetch("homepreneur/register", 'post', formData, true)


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

      navigate({ pathname: '/success', search: createSearchParams({ name: response.data.name, id: response.data.registration_number, category: response.data.category, flag: '1' }).toString() })
      console.log('reached')

    }






  }


  useEffect(() => {

    setError('already_won_previous_year_hompreneur', { type: 'custom', message: 'custom message' });


    if (watch('already_won_previous_year_hompreneur') === 'yes') {
      setPopup(true);
      setModal(true);
    } else {
      setPopup(false);
    }

    if (watch('award_applicant_details') === 'Nominating Others') {
      setSection(true)
    } else {
      setSection(false)
    }

    if (watch('applicant_photo').length === 1) {
      console.log(getValues('applicant_photo')[0].name);
      setImage(getValues('applicant_photo')[0].name)
      setImageUrl(URL.createObjectURL(getValues('applicant_photo')[0]))
    }

    if (watch('tanseed_grant') === 'Yes') {
      setStartupTN(true)
    } else {
      setStartupTN(false);
    }



  }, [watch('already_won_previous_year_hompreneur'), watch('award_applicant_details'), watch('applicant_photo'), watch('tanseed_grant')])

  useEffect(() => {
    if (watch('applicant_photo').length === 0) {
      ScrolltoTop();
    }
  }, [])




  const FormDatas = [

    {
      "key": "news_articles",
      "value": "",
      "type": "text"
    },


  ]

  // constatnt

  const CategoryOptions = [
    {
      "id": 1,
      "name": "Agriculture",
      "tamil_name": "விவசாயம்"
    },
    {
      "id": 2,
      "name": "Arts & Culture",
      "tamil_name": "கலை & கலாச்சாரம்"
    },
    {
      "id": 3,
      "name": "Beauty & Wellness",
      "tamil_name": "அழகு & ஆரோக்கியம்"
    },
    {
      "id": 4,
      "name": "Digital Homepreneur",
      "tamil_name": "டிஜிட்டல் ஹோம்பிரீனியர்"
    },
    {
      "id": 5,
      "name": "Education & Literature",
      "tamil_name": "கல்வி மற்றும் இலக்கியம்"
    },
    {
      "id": 6,
      "name": "Food & Beverages",
      "tamil_name": "உணவு & பானங்கள்"
    },
    {
      "id": 7,
      "name": "Healthcare",
      "tamil_name": "ஹெல்த்கேர்"
    },
    {
      "id": 8,
      "name": "Home Retail  & Home Professionals",
      "tamil_name": "வீட்டு சில்லறை வியாபாரம் & இல்லத்தொழில் வல்லுநர்கள்"
    },
    {
      "id": 9,
      "name": "Media & Entertainment",
      "tamil_name": "ஊடகங்கள்/ பொழுதுபோக்கு"
    },
    {
      "id": 10,
      "name": "Social Welfare / Differently Abled",
      "tamil_name": "சமூக நலம் / மாற்றுத்திறனாளி"
    },
    {
      "id": 11,
      "name": "Sports & Fitness",
      "tamil_name": "விளையாட்டு மற்றும் உடற்தகுதி"
    },
    {
      "id": 12,
      "name": "NRI / outside Tamil Nadu",
      "tamil_name": "என். ஆர். ஐ. / தமிழ்நாட்டிற்கு வெளியே"
    }
  ]

  const BinaryOption = [
    {
      id: 'yes',
      name: 'Yes / ஆம்',
    },
    {
      id: 'no',
      name: 'No / இல்லை',
    },
  ]


  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <div className='' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
        <div className='brand-container my-10 '>
          {/* <p className='text-center text-primary text-[16px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[30px]'>Fill Up the Following Details to Get Registered for</p> */}
          {/* <p className='text-center text-primary text-[16px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[30px] font-medium'>Homepreneur Awards Season 6!</p> */}

          <p className='text-center mt-52 text-3xl text-primary animate-pulse '>Hompreneur Awards Registration</p>
          <form onSubmit={handleSubmit(OnSubmit)} className='lg:mx-56 xl:mx-56 my-10 '>

            <div className='flex flex-col gap-8'>
              <div className='flex gap-5 flex-col justify-between items-start flex-wrap'>
                <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Have you already won the previous editions of the Homepreneur awards? / சுயசக்தி விருதுகளின் முந்தைய பதிப்புகளில் நீங்கள் விருது வென்றுள்ளீர்களா ?</p>
                <div className='grid grid-cols-2 gap-3'>

                  <RadioButton error={errors} register={register} validationSchema={{ required: " required" }} label={'Yes / ஆம்'} id={'nominationyes'} inputname={'already_won_previous_year_hompreneur'} value={'yes'} />
                  <RadioButton error={errors} register={register} validationSchema={{ required: " required" }} label={'No / இல்லை'} id={'nominationno'} inputname={'already_won_previous_year_hompreneur'} value={'no'} />
                </div>
              </div>

              {popupShow ? '' :
                <>
                  <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Applicant's Photo / விண்ணப்பதாரரின் புகைப்படம் (Less than 1 MB) *</p>
                  <FileInput fileformat='image/png, image/jpg, image/jpeg' id='applicant_photo' error={errors} register={register} validationSchema={{ required: "Image required" }} inputname={'applicant_photo'} fileName={imagename.length > 10 ? imagename.substring(0, 10) + '...' : imagename} fileUrl={imageUrl} previewHide={false} />

                  <div className='flex gap-5 flex-col justify-between items-start flex-wrap'>
                    <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Award Applicant Details / விருது விண்ணப்பதாரரின் விவரங்கள்*</p>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3'>
                      <RadioButton error={errors} register={register} validationSchema={{ required: " required" }} label={'Self Nomination'} id={'selfnome'} inputname={'award_applicant_details'} value={'Self Nomination'} />
                      <RadioButton error={errors} register={register} validationSchema={{ required: " required" }} label={'Nominating Others'} id={'nomeother'} inputname={'award_applicant_details'} value={'Nominating Others'} />
                    </div>
                  </div>


                  {sectionShow ? <>


                    <Input error={errors} register={register} validationSchema={{ required: "Nominator Name is required", }} label={'Nominator Name'} id={'city'} placeholder={'enter Nominator Name'} type={'text'} inputname={'name_of_the_nominator'} />
                    <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Complete Postal Address / முழு அஞ்சல் முகவரி</p>
                    <Textarea error={errors} register={register} validationSchema={{ required: "Nominator Name is required", }} required id={'nominatoraddress'} label={'address'} placeholder={'type here'} rows={2} inputname={'nominator_postal_address'} />

                    <div className='grid grid-cols-2 gap-3 w-full'>
                      {/* <Input error={errors} register={register} label={'City / District'} id={'city'} placeholder={'enter your city/district'} type={'text'} inputname={'chek'} /> */}

                      <Controller
                        control={control}
                        name="nominator_mobile_number"
                        rules={{ required: "Phone Number is required", }}
                        render={({ field: { ref, ...field } }) => (
                          <PhoneInputField fieldData={{ ...field }}
                            inputExtraProps={{
                              ref,
                              required: true,
                              autoFocus: false
                            }}
                            error={errors} label={'Nominator Mobile Number / கைபேசி எண்*'} inputname={'nominator_mobile_number'} id={'nominator_mobile_number'} />

                        )} />

                      <Input error={errors} register={register} validationSchema={{ required: "required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email address" } }} required label={'Email Id / மின்னஞ்சல் முகவரி*'} id={'nominator_email'} placeholder={'enter nominator email'} type={'email'} inputname={'nominator_email'} />
                    </div>
                    <Textarea error={errors} register={register} validationSchema={{ required: "Reson required", }} id={'reason_for_nominating'} label={'Reason for Nominating the nominee / வேட்பாளரை நியமிப்பதற்கான காரணம்'} placeholder={'type here'} rows={2} inputname={'reason_for_nominating'} />
                  </>

                    : <></>}

                  <SearchableDropdown
                    error={errors}
                    chooseCategory={chooseCategoryData}
                    options={CategoryOptions}
                    errorstate={errorFlag}
                    inputname={'category'} id={'searchable'} label={'Select Category / பிரிவை தேர்வு செய்க*'} />


                  {/* <SearchableDropdown error={errors} register={register} validationSchema={{ required: "Category required" }} inputname={'category'}  options={CategoryOptions} id={'searchable'} label={'Select Category / பிரிவை தேர்வு செய்க*'} /> */}



                  {/* <DropDown error={errors} register={register} validationSchema={{ required: "Category required" }} required options={CategoryOptions} label={'Select Category / பிரிவை தேர்வு செய்க*'} id={'cate'} inputname={'category'} placeholder={'Choose Category'} /> */}

                  {/* <DropDown options={dropdownoptions} label={'Select Subcategory / உட்பிரிவைத் தேர்வு செய்க*'} id={'cate'} inputname={'category'} placeholder={'Choose sub Category'} /> */}

                  <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Details of the Applicant / விண்ணப்பதாரரின் விவரங்கள்</p>
                  <div className='flex gap-5 flex-col justify-between items-start flex-wrap w-full'>
                    <div className='grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 w-full'>
                      <Input error={errors} register={register} validationSchema={{ required: "First Name is required", }} required label={'first name'} id={'first_name'} placeholder={'enter your first name'} type={'text'} inputname={'first_name'} />
                      <Input error={errors} register={register} validationSchema={{ required: "Last Name is required", }} required label={'last name'} id={'lastname'} placeholder={'enter your last name'} type={'text'} inputname={'last_name'} />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:gird-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3 w-full'>
                    <Input error={errors} register={register} validationSchema={{ required: "DOB is required" }} required label={'Date of Birth / பிறந்த தேதி*'} id={'dateb'} placeholder={'dd-mm-yyyy'} type={'date'} inputname={'date_of_birth'} max={'2005-01-01'} />


                    <Input error={errors} register={register} validationSchema={{ required: "Qualification is required", }} required label={'Educational Qualification / கல்வித் தகுதி*'} id={'edu'} placeholder={'enter your qualification'} type={'text'} inputname={'education_qualification'} />
                  </div>

                  <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Complete Postal Address / முழு அஞ்சல் முகவரி*</p>
                  <Textarea error={errors} register={register} validationSchema={{ required: "required", }} required id={'postaladdress'} label={'address line 1*'} placeholder={'type here'} rows={2} inputname={'complete_postal_address'} />
                  {/* <Textarea id={'postaladdress'} label={'address line 2*'} placeholder={'type here'} rows={2} /> */}
                  <div className='grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 w-full'>
                    <Input error={errors} register={register} validationSchema={{ required: "City or District is required", }} required label={'City / District'} id={'city'} placeholder={'enter your city/district'} type={'text'} inputname={'district_or_city'} />
                    <Input error={errors} register={register} validationSchema={{ required: "State or Province is required", }} required label={'State / Province'} id={'state'} placeholder={'enter your state / province'} type={'text'} inputname={'state'} />
                  </div>
                  <div className='grid grid-cols-2 gap-3 w-full'>
                    {/* <Input label={'Postal Code'} id={'city'} placeholder={'enter your city/district'} type={'text'} inputname={'postalcode'} /> */}
                    {/* <DropDown options={dropdownoptions} label={'country'} id={'cate'} inputname={'country'} placeholder={'Choose Country'} /> */}
                  </div>
                  <Input error={errors} register={register} validationSchema={{ required: "required", }} required label={'country'} id={'email'} placeholder={'enter your country'} type={'text'} inputname={'country'} />
                  <Input error={errors} register={register} validationSchema={{ required: "required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email address" } }} required label={'Email Id / மின்னஞ்சல் முகவரி*'} id={'email'} placeholder={'enter your email'} type={'email'} inputname={'email'} />
                  {/* <Input error={errors} register={register} validationSchema={{ required: "required", }} required label={'country Code*'} id={'email'} placeholder={'enter country Code'} type={'number'} inputname={'country_code'} /> */}


                  <Controller
                    control={control}
                    name="mobile_number"
                    rules={{ required: "Phone Number is required", }}
                    render={({ field: { ref, ...field } }) => (
                      <PhoneInputField fieldData={{ ...field }}
                        inputExtraProps={{
                          ref,
                          required: true,
                          autoFocus: false
                        }}
                        error={errors} label={'Mobile Number / கைபேசி எண்*'} inputname={'mobile_number'} id={'mbl'} />

                    )} />




                  {/* <Input error={errors} register={register} validationSchema={{ required: "required", }} required label={'Mobile Number / கைபேசி எண்*'} id={'email'} placeholder={'enter your  mobile'} type={'number'} inputname={'mobile_number1'} /> */}

                  <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>Details of the Current Business & Activities / நடப்பு வணிகம் மற்றும் செயல்பாடுகள் பற்றிய விவரங்கள்</p>
                  <Textarea error={errors} register={register} validationSchema={{ required: "required", }} required id={'business'} label={'Nature of the business / Activities - வணிகத்தின் தன்மை / செயல்பாடுகள்'} placeholder={'type here'} rows={5} inputname={'nature_of_business'} />
                  <Input error={errors} register={register} validationSchema={{ required: "required", }} required label={'Types of Business Structure - Individual / Sole Proprietor / Partnership - வணிக கட்டமைப்பின் வகைகள் - தனிநபர் / தனி உரிமையாளர் / கூட்டாண்மை வணிகம்*'} id={'partnership'} placeholder={''} type={'text'} inputname={'type_of_business_structure'} />
                  <Input error={errors} register={register} validationSchema={{ required: "required", }} required label={'Awards won if any? / விருதுகள் ஏதேனும் வென்றுள்ளீர்களா?'} id={'award'} placeholder={''} type={'text'} inputname={'awards_won'} />
                  <Input error={errors} register={register} validationSchema={{ required: "required", }} required label={'How many years have you been in business? / நீங்கள் எத்தனை ஆண்டுகளாக வணிகத்தில் உள்ளீர்கள்?*'} id={'award'} placeholder={'Enter here'} type={'number'} inputname={'number_of_years_in_business'} />
                  <Input error={errors} register={register} validationSchema={{ required: "required", }} required label={"What's your business growth in one year? / ஒரு வருடத்தில் உங்கள் வணிக வளர்ச்சி என்ன?"} id={'award'} placeholder={'Enter here'} type={'text'} inputname={'business_growth_in_one_year'} />
                  <Input error={errors} register={register} validationSchema={{ required: "required", }} required label={"No of Clients/Customers reached / வாடிக்கையாளர்களின் எண்ணிக்கை*"} id={'award'} placeholder={'Enter here'} type={'number'} inputname={'number_of_clients_or_cutomers_reached'} />
                  <Input error={errors} register={register} validationSchema={{ required: "required", }} required label={"Income earned ( Annually) - வணிகத்தின் ஆண்டு வருமானம்*"} id={'award'} placeholder={'Enter here'} type={'text'} inputname={'annual_income'} />
                  <Textarea error={errors} register={register} validationSchema={{ required: "required", }} required id={'business'} label={'Why & How did you start your business? / வணிகம் தொடங்க காரணம் மற்றும் தொடங்கிய விதம்?*'} placeholder={'type here'} rows={5} inputname={'why_and_how_did_you_start_your_business'} />
                  <Textarea error={errors} register={register} validationSchema={{ required: "required", }} required id={'business'} label={'How do you market your business? - உங்கள் வணிகத்தை எவ்வாறு சந்தைப்படுத்துகிறீர்கள்?*'} placeholder={'type here'} rows={5} inputname={'how_did_you_market_the_business'} />
                  <Textarea error={errors} register={register} validationSchema={{ required: "required", }} required id={'business'} label={'Challenges you have encountered in running the business / வணிகத்தில் நீங்கள் சந்தித்த சவால்கள்*'} placeholder={'type here'} rows={5} inputname={'business_challenges'} />
                  <Textarea error={errors} register={register} validationSchema={{ required: "required", }} required id={'business'} label={'What is your future plan and what support do you need? / உங்கள் எதிர்காலத் திட்டம் என்ன, உங்களுக்கு என்ன ஆதரவு தேவைப்படுகிறது*'} placeholder={'type here'} rows={5} inputname={'future_business_plan'} />
                  <Input error={errors} register={register} validationSchema={{}} required label={"Website Link(if any) / இணையதள முகவரி (ஏதேனும் இருந்தால்)"} id={'website'} placeholder={'Enter here'} type={'text'} inputname={'website_link'} />
                  <Input error={errors} register={register} validationSchema={{}} required label={"Facebook Business Page Link / முகநூல் வணிக பக்க இணைப்பு"} id={'facebook'} placeholder={'Enter here'} type={'text'} inputname={'facebook_business_page_link'} />
                  <Input error={errors} register={register} validationSchema={{}} required label={"Instagram page link / இன்ஸ்டாகிராம் பக்க இணைப்பு"} id={'instagram'} placeholder={'Enter here'} type={'text'} inputname={'instagram_page_link'} />

                  {/* Tansim Choosing */}

                  <div className='flex gap-5 flex-col justify-between items-start flex-wrap'>
                    <p className='text-primary text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>StartupTN grant form - Would be Interested to apply for TANSEED Grants? Yes / no   / StartupTN மானியப் படிவம் - TANSEED மானியங்களுக்கு விண்ணப்பிக்க ஆர்வமா? ஆம் / இல்லை </p>
                    <div className='grid grid-cols-2 gap-3'>
                      <RadioButton error={errors} register={register} validationSchema={{ required: " required" }} label={'Yes / ஆம்'} id={'tanseed_grantyes'} inputname={'tanseed_grant'} value={'Yes'} />
                      <RadioButton error={errors} register={register} validationSchema={{ required: " required" }} label={'No / இல்லை'} id={'tanseed_grantno'} inputname={'tanseed_grant'} value={'No'} />
                    </div>
                  </div>


                  {/* Tansim Fields */}

                  {startupTN ? <>

                    <DropDown error={errors} register={register} validationSchema={{ required: " required" }} required options={BinaryOption} label={'Are You Registered With StartupTN And Startup India? / நீங்கள் StartupTN மற்றும் Startup India உடன் பதிவு செய்துள்ளீர்களா?'} id={'registered_with_startup_tn'} inputname={'registered_with_startup_tn'} placeholder={'Select One / ஏதேனும் ஒன்றை தேர்ந்தெடுக்கவும்'} />
                    <DropDown error={errors} register={register} validationSchema={{ required: " required" }} required options={BinaryOption} label={'Are You Located And Headquartered In Tamil Nadu? / நீங்கள் தமிழ்நாட்டில் உள்ளவரா மற்றும்  உங்கள் வணிகம் தமிழ்நாட்டைத் தலைமையிடமாகக் கொண்டவரா?'} id={'located_and_headquarted_in_tamilnadu'} inputname={'located_and_headquarted_in_tamilnadu'} placeholder={'Select One / ஏதேனும் ஒன்றை தேர்ந்தெடுக்கவும்'} />
                    <DropDown error={errors} register={register} validationSchema={{ required: " required" }} required options={BinaryOption} label={'Do You Have At Least A Proof Of Concept (PoC) Of The Idea Or A Minimum Viable Product (MVP)? / உங்களிடம் குறைந்தபட்சம் யோசனைக்கான ஆதாரம் (PoC) அல்லது குறைந்தபட்ச சாத்தியமான தயாரிப்பு (MVP) உள்ளதா'} id={'poc_or_mvp'} inputname={'poc_or_mvp'} placeholder={'Select One / ஏதேனும் ஒன்றை தேர்ந்தெடுக்கவும்'} />
                    <DropDown error={errors} register={register} validationSchema={{ required: " required" }} required options={BinaryOption} label={'Is Your Company Registered As A Private Limited Company Under The Companies Act 2013? / நிறுவனங்கள் சட்டம் 2013 இன் கீழ் உங்கள் நிறுவனம் ஒரு தனியார் லிமிடெட் நிறுவனமாக பதிவு செய்யப்பட்டுள்ளதா'} id={'registered_as_pvt_ltd_company'} inputname={'registered_as_pvt_ltd_company'} placeholder={'Select One / ஏதேனும் ஒன்றை தேர்ந்தெடுக்கவும்'} />
                    <DropDown error={errors} register={register} validationSchema={{ required: " required" }} required options={BinaryOption} label={'Do You Have A Pan Card And GST Number? / உங்களிடம் பான் கார்டு மற்றும் ஜிஎஸ்டி எண் உள்ளதா?'} id={'pancard_and_gst_number'} inputname={'pancard_and_gst_number'} placeholder={'Select One / ஏதேனும் ஒன்றை தேர்ந்தெடுக்கவும்'} />




                  </>

                    : <></>}




                  {/* declaration */}
                  <CheckBox error={errors} register={register} validationSchema={{ required: 'Please check this field' }} label={'I hereby declare that the above statement is true to the best of my knowledge and belief. மேற்கண்ட கூற்று எனது அறிவுக்கும் நம்பிக்கைக்கும் எட்டிய வரையில் உண்மை என்று இதன் மூலம் உறுதியளிக்கிறேன்.*'} inputname={'declaration'} />
                </>
              }
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