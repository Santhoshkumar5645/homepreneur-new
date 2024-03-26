import React, { useContext } from 'react'
import { AuthContext } from '../../ContextApi/AppContext'
import { useNavigate } from 'react-router'

function Popupcomponent() {

    const { PopupState, setPopupState, lang } = useContext(AuthContext)
    const navigate = useNavigate();

    const listData = [
        "Congratulations to all the Homepreneurs who registered and attended the jury interview of Sakthi Masala's Homepreneur Awards-சுயசக்தி விருதுகள்  Season 6.",
        "The NEXT BIG THING is coming",
        "Block your calendars for 20th August, Sunday, 5 pm onwards., the Grand Award ceremony  at Lady Andal Auditorium, Chennai.",
        "Attend to get inspired with inspiring stories of winners, Inspirational Woman from different walks of life, Amazing Networking opportunities with other Home-Based business women and Entertainment with Music and More...",
        "To confirm your presence for the Award Ceremony kindly CLICK here",
    ]
    const TamillistData = [
        "வாழ்த்துக்கள்! சக்தி மசாலா வழங்கும் சுயசக்தி விருதுகள்-சீசன் 6 என்ற ஒப்பற்ற விருது வழங்கும் விழாவிற்கு விண்ணப்பித்து நடுவர் நேர்காணலை வென்ற அனைத்து போட்டியாளர்களுக்கும் மனமார்ந்த பாராட்டுகள்..",
        "அடுத்த மாபெரும் நிகழ்வு காத்து கொண்டிருக்கிறது..The NEXT BIG THING is coming soon",
        "உங்கள் பொன்னான நேரத்தை மேலும் பொன் செய்யும் நாள் 20ஆம் ஆகஸ்ட், இடம் - லேடி ஆண்டாள் அரங்கு, சென்னை.",
        "இதில் கலந்து கொண்டு பங்கு பெற்று வெற்றியாளர்களை காணவும், வெற்றியின் ரகசியம் காணவும் அன்போடு வரவேற்கிறோம்! பல துறைகளை சேர்ந்த சாதனை பெண்களின் வரலாறுகளை கேட்கவும்,ஊக்கம் பெறவும், இசை, சுவாரஸ்யமான பொழுதுபோக்கு அம்சங்களும் கூடுதல் இணைப்பாக கண்டு மகிழலாம்.",
        "நீங்கள் கலந்துகொள்வதை உறுதி செய்ய மேலே உள்ள விண்ணப்பத்தில் உங்கள் விவரங்களை பதிவு செய்யுமாறு கேட்டுக்கொள்கிறோம்.",
    ]

    return (
        <div className={`fixed shadow-lg border  inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50 ${PopupState ? '' : 'hidden'}`}>
            <div className='w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-3/6 bg-white border pb-16 border-primary/20  rounded-[10px] overflow-hidden'>
                <div className='flex justify-between items-center p-4 shadow-md'>
                    <div className='flex gap-2 flex-wrap items-center'>
                        <p className='font-bold text-xl'>To attend the main event</p>
                        <button onClick={() => navigate('/event-register')} type='button' className='capitalize active:opacity-50 px-10 py-3 bg-primary rounded-lg text-white w-fit '>click here</button>
                    </div>


                    <img onClick={() => { setPopupState(false) }} draggable={false} className='w-8 active:opacity-50 cursor-pointer' src="/assets/svg/icons/close.svg" alt="" />
                </div>

                <div className='flex flex-col gap-5 pt-3 pb-2  h-5/6 overflow-scroll'>
                    <div className='flex flex-col px-4'>
                        {/* <p><span className='font-bold '>Date :</span> 8th and 9th July</p>
                        <p><span className='font-bold '></span>Both days Morning 9 am to 5 pm</p>
                        <p><span className='font-bold '>Venue :</span> Hotel Savera First Floor</p>
                        <p className='font-bold'><span className='font-bold '>Note :</span > Homepreneur Awards are earned based on merit, not monetary influence or recommendation.</p> */}
                        <p className="font-bold">{lang === 'english' ? 'Dear Homepreneurs' : 'அன்பான ஹோம்ப்ரூநர்ஸ்..'} </p>

                    </div>
                    <ul className='flex flex-col gap-3 px-4 pb-3'>
                        {lang === 'english' ?

                            <div className='flex flex-col gap-3'>
                                <p>Congratulations to all the Homepreneurs who registered and attended the jury interview of Sakthi Masala's Homepreneur Awards-சுயசக்தி விருதுகள்  Season 6.</p>
                                <p>The NEXT BIG THING is coming</p>
                                <p>Block your calendars for The Grand Awards ceremony </p>
                                <p className='flex gap-3'><span className='font-bold'>Date:</span> 20th August, Sunday</p>
                                <p className='flex gap-3'><span className='font-bold'>Time:</span> 5 pm onwards </p>
                                <p className='flex gap-3'><span className='font-bold'>Venue:</span>  Lady Andal Auditorium, Chennai.
                                </p>
                                <p>Attend to get inspired with inspiring stories of winners, Inspirational Woman from different walks of life, Amazing Networking opportunities with other Home-Based business women and Entertainment with Music and More...</p>
                                <p>To confirm your presence for the Award Ceremony kindly CLICK here</p>
                            </div>
                            :
                            <div>
                                <p>வாழ்த்துக்கள்! சக்தி மசாலா வழங்கும் சுயசக்தி விருதுகள்-சீசன் 6 என்ற ஒப்பற்ற விருது வழங்கும் விழாவிற்கு விண்ணப்பித்து நடுவர் நேர்காணலை வென்ற அனைத்து போட்டியாளர்களுக்கும் மனமார்ந்த பாராட்டுகள்..</p>
                                <p>அடுத்த மாபெரும் நிகழ்வு காத்து கொண்டிருக்கிறது..</p>
                                <p>உங்கள் பொன்னான நேரத்தை மேலும் பொன் செய்யும் நாள் 20ஆம் ஆகஸ்ட், இடம் - லேடி ஆண்டாள் அரங்கு, சென்னை. </p>
                                {/* <p className='flex gap-3'><span className='font-bold'>Date :</span> 20th August, Sunday</p>
                                <p className='flex gap-3'><span className='font-bold'>Time :</span> 5 pm onwards </p>
                                <p className='flex gap-3'><span className='font-bold'>Venue :</span>  Lady Andal Auditorium, Chennai.
                                </p> */}
                                <p>இதில் கலந்து கொண்டு பங்கு பெற்று வெற்றியாளர்களை காணவும், வெற்றியின் ரகசியம் காணவும் அன்போடு வரவேற்கிறோம்! பல துறைகளை சேர்ந்த சாதனை பெண்களின் வரலாறுகளை கேட்கவும்,ஊக்கம் பெறவும், இசை, சுவாரஸ்யமான பொழுதுபோக்கு அம்சங்களும் கூடுதல் இணைப்பாக கண்டு மகிழலாம்.</p>
                                <p>நீங்கள் கலந்துகொள்வதை உறுதி செய்ய மேலே உள்ள விண்ணப்பத்தில் உங்கள் விவரங்களை பதிவு செய்யுமாறு கேட்டுக்கொள்கிறோம்.</p>
                            </div>
                        }
                    </ul>




                </div>
                <div className=' flex justify-center flex-col items-center gap-3'>
                </div>
            </div>
        </div>

    )
}

export default Popupcomponent