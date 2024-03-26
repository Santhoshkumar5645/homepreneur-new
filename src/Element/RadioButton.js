import React from 'react'

function RadioButton(props) {

    const CustomeError = props.error;
    const InputName = props.inputname

    return (
        <>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-x-5 items-center'>
                    <input {...props.register(props.inputname, props.validationSchema)}
                        class="relative  h-8 w-8 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-8 before:w-8 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-8 after:rounded-full after:content-[''] checked:border-paragraph checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-0 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-0 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                        type="radio"
                        name={props.inputname}
                        value={props.value}
                        id={props.id} />
                    <label for={props.id} className='text-heading text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] capitalize'>{props.label}</label>
                </div>
                {CustomeError && CustomeError[InputName]?.type === "required" && (
                    <span style={{ color: 'red' }} className="text-sm capitalize">{CustomeError[InputName]?.message}</span>
                )}
            </div>
        </>
    )
}

export default RadioButton