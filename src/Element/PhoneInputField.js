import React, { useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function PhoneInputField(props) {
    const CustomeError = props.error;
    const InputName = props.inputname;

    return (
        <>
        <div className='flex flex-col gap-1'>
            <label for={props.id}>{props.label}</label>
            <PhoneInput {...props.fieldData} {...props.inputExtraProps} searchClass={'phoneInputSearchClass'} enableSearch={true} countryCodeEditable={true}  id={props.id} inputClass={'PhoneInputFieldClass'} country={'in'} inputProps={{ name: props.inputname ,required: true, autoFocus: false}}  />
            {CustomeError && (
                <span className='capitalize' style={{ color: "red", fontSize: 14, fontWeight: 400 }}>{CustomeError[InputName]?.message}</span>
            )}
        </div>
        </>
    )
}

export default PhoneInputField