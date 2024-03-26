import React, { useRef, useState } from 'react'

function FileInput(props) {

    const CustomeError = props.error;
    const InputName = props.inputname;
    const ref = useRef();

    const [image, setImage] = useState('assets/svg/icons/image.svg');
    const [filename, setFilename] = useState('')

    const ImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setFilename(event.target.files[0].name)
        }
    }
 

    return (
        
        <div className='w-full border border-primary border-dashed p-5 items-center rounded-lg relative flex flex-col'>
            <div className='w-full flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <div className={props.previewHide? 'hidden': 'p-5 bg-primary/30 rounded-lg'}>
                        <img className={'w-16 h-16 '}  src={props.fileUrl ===''? 'assets/svg/icons/image.svg': props.fileUrl} alt="" />
                    </div>
                    <p className='text-sm text-primary'>{props.fileName}</p>
                </div>
                <label for={props.id} className='px-5 py-3 capitalize bg-primary text-white rounded-lg'> Browse</label>
                <input   {...props.register(props.inputname, props.validationSchema, )} accept={props.fileformat}  className='w-1 absolute opacity-0'  id={props.id} name={props.inputname} type="file" />
            </div>
            {CustomeError && CustomeError[InputName]?.type === "required" && (
                <span style={{ color: 'red' }} className="text-sm capitalize">{CustomeError[InputName]?.message}</span>
            )}
        </div>
    )
}

export default FileInput