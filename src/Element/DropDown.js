import React from 'react'

function DropDown(props) {

    const CustomeError = props.error;
    const InputName = props.inputname;

    return (
        <>
            <div className='flex flex-col items-start gap-1 w-full'>
                <label for={props.id} className='text-heading text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] capitalize' >{props.label}</label>
                <select {...props.register(props.inputname, props.validationSchema)} id={props.id} className='w-full appearance:none placeholder:capitalize border-[0.5px] text-paragraph border-pragraph placeholder:text-pragraph/40 focus:outline-none rounded-md p-3 pr-5 bg-[#DCB7CD]/0' placeholder={props.placeholder} name={props.inputname}>
                    <option value="">{props.placeholder}</option>
                    {props.options ?  props.options.map((list, index) =>
                        <option key={index} value={list.id}>{list.name} </option>
                    ) : null}

                </select>
                {CustomeError && CustomeError[InputName]?.type === "required" && (
                <span style={{ color: 'red' }} className="text-sm">{CustomeError[InputName]?.message}</span>
            )}
            </div>
        </>
    )
}

export default DropDown