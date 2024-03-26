import React from 'react'

function CheckBox(props) {

    const CustomeError = props.error;
    const InputName = props.inputname;

    return (
        <div className='flex flex-col'>
            <div class="flex items-start mb-4 gap-5 w-full ">
                <input {...props.register(props.inputname, props.validationSchema)} id="default-checkbox" name={props.inputname} type="checkbox"  className="w-5 h-5 mt-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:right-0 accent-primary " />
                <label for="default-checkbox" class="text-heading w-4/5 text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] capitalize">{props.label}</label>
            </div>
            {CustomeError && (
                <span style={{ color: "red", fontSize: 14, fontWeight: 400 }}>{CustomeError[InputName]?.message}</span>
            )}
        </div>
    )
}

export default CheckBox