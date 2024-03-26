import React from 'react'



function Input(props) {
    const CustomeError = props.error;
    const InputName = props.inputname;
    return (
        <>
            <div className='flex flex-col items-start gap-1 w-full'>
                <label for={props.id} className='text-heading text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] capitalize'>{props.label}</label>
                <input {...props.register(props.inputname, props.validationSchema)} id={props.id} className='w-full appearance:none placeholder:capitalize border-[0.5px] text-paragraph border-paragraph placeholder:text-paragraph/40 focus:outline-none rounded-md p-3 bg-[#DCB7CD]/0 text-md' placeholder={props.placeholder} type={props.type} name={props.inputname} max={props.max} min={props.min} />

                {CustomeError && (
                    <span style={{color:"red",fontSize:14,fontWeight:400}} className='capitalize'>{CustomeError[InputName]?.message}</span>
                )}
               
            </div>
        </>
    )
}

export default Input