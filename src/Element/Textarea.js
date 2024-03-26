import React, { useEffect } from 'react'

function Textarea(props) {

  const CustomeError = props.error;
  const InputName = props.inputname;

  return (
    <>
      <div {...props.register(props.inputname, props.validationSchema)} className='flex flex-col items-start gap-1'>
        <label for={props.id} className='text-heding text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] capitalize'>{props.label}</label>
        <textarea id={props.id} rows={props.rows} class={`border-[0.5px]  placeholder:text-paragraph/40 w-full text-paragraph border-paragraph focus:outline-none rounded-md p-3 bg-[#DCB7CD]/0 capitalize ` } placeholder={props.placeholder} name={props.inputname}></textarea>
        {CustomeError && CustomeError[InputName]?.type === "required" && (
          <span className='capitalize' style={{color:'red'}}>{CustomeError[InputName]?.message}</span>
        )}
      </div>
    </>
  )
}

export default Textarea