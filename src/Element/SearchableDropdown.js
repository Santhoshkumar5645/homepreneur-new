import React, { useEffect, useState } from 'react'

function SearchableDropdown(props) {
    const [dropDown, SetdropDown] = useState(false)
    const [selectedText, setSelectedData] = useState('');
    const [selectedId, setSelectedId] = useState(0)
    const [inputText, setInputText] = useState('')

    const CustomeError = props.error;
    const InputName = props.inputname;

    return (
        <>
            <div className='flex flex-col gap-1  '>
                <input name={props.inputname}  {...props.fieldData}  {...props.inputExtraProps} className='invisible' value={selectedId} type="text" />
                <label for={props.id}>{props.label}</label>
                <div onClick={() => { SetdropDown(!dropDown) }} className='w-full select-none relative cursor-pointer appearance:none capitalize placeholder:capitalize  border-[0.5px] text-paragraph border-paragraph placeholder:text-paragraph/40 focus:outline-none rounded-md p-3 bg-[#DCB7CD]/0'>
                    {selectedText === '' ? 'select Category' : selectedText}
                </div>
                <div className={dropDown ? 'w-full border-paragraph  bg-white border-[0.5px] rounded-[10px] left-0 p-2 duration-300 transition-all' : 'hidden'}>
                    <input onChange={(e) => { setInputText(e.target.value); console.log(e.target.value) }} value={inputText} className='w-full my-1 rounded-[5px] px-2 py-2 border-paragraph border-[0.5px]' type="text" />
                    <ul className='max-h-52 overflow-y-auto'>
                        {props.options.map((item, index) =>
                            <li key={index} onClick={() => { setSelectedData(item.name); SetdropDown(false); setInputText(''); setSelectedId(item.id); props.chooseCategory(item.id) }} className={`hover:bg-primary cursor-pointer hover:text-white px-2 py-1  ${selectedText === item.name ? 'text-white bg-primary' : ''} ${item.name.toLowerCase().startsWith(inputText.toLowerCase()) ? 'block' : 'hidden'}`}>{item.name}</li>
                        )}


                    </ul>

                </div>

                {/* {CustomeError && (
                    <span style={{ color: "red", fontSize: 14, fontWeight: 400 }}>{CustomeError[InputName]?.message}</span>
                )} */}

                {selectedId !== 0 ? null :
                    <span style={{ color: "red", fontSize: 14, fontWeight: 400 }}>{"Please choose category"}</span>
                }
            </div>
        </>
    )
}

export default SearchableDropdown