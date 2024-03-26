import React, { useContext } from 'react'
import Titlenew from '../../Element/Titlenew'
import { AuthContext } from '../../ContextApi/AppContext'

function EventTimeline() {

    const {lang} = useContext(AuthContext)

    const EventTimeLIneData = [
        {
            date:'16th MAY 2024',
            datetamil:'16, மே 2024',
            time:'12 Noon to 4 PM',
            event:'Launch event press meet - chennai',
            eventtamil:'பத்திரிகையாளர்கள் சந்திப்பு / இணையதளம் வெளியீடு'

        },
        {
            date:'16th JUNE 2024, 10pm',
            datetamil:'16 ஜூன் 2024',
            time:'',
            event:'Registration Closes',
            eventtamil:'விண்ணபிக்க கடைசி நாள்'

        },
        {
            date:'8th and  9th JULY 2024',
            datetamil:'08 மற்றும் 09, ஜூலை 2024',
            time:'10 Noon to 5 PM (Both Days)',
            event:'Jury interview - chennai',
            eventtamil:'தேர்வுசெய்யப்பட்ட விண்ணப்பதாரர்களுக்கான நேர்காணல்'

        },
        {
            date:'20th AUGUST 2024',
            datetamil:'20, ஆகஸ்ட் 2024',
            time:'5 PM  to 10 PM',
            event:'Main event - lady andal chennai',
            eventtamil:'சுயசக்தி விருதுகள் வழங்கும் விழா'

        },
      
    ]


    return (
        <>
            <div className='brand-max-width mx-auto' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
                <div className='brand-container my-10'>
                    <div className='flex  justify-center  md:justify-start lg:justify-start xl:justify-start'>
                        <Titlenew title={lang === 'english'? 'Event Timeline': 'செயலாக்கத்திட்டம்'} />
                    </div>
                    <div className='flex items-center flex-col md:flex-row lg:flex-row xl:flex-row justify-between'>
                        <div style={{backgroundImage:"url('assets/gif/bg1.gif')"}}>
                        <img className='' src="assets/images/honor-sheild.png" alt="" />
                        </div>
                        <div className='flex flex-col w-full gap-10 relative justify-end items-end'>
                            <div className='absolute inset-0 flex justify-center'>
                                <div className='hidden border-l-2 border-dotted right-[93px] w-1 h-full border-primary/20'></div>
                            </div>
                            <div className='w-full flex flex-col items-center justify-center overflow-hidden relative'>
                                <div className='absolute top-0 left-0 w-full z-30 bg-white/20 backdrop-blur-sm h-16'></div>
                                <div className='absolute bottom-0 left-0 w-full z-30 bg-white/20 backdrop-blur-sm h-11'></div>


                                <ol class="relative animate-slide border-l border-gray-200 border-dotted dark:border-gray-700 select-none">

                                    {EventTimeLIneData.map((item, index)=> 
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-primary dark:bg-primary"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{lang === 'english' ? item.date : item.datetamil}</time>
                                        <p class="text-sm font-regular text-primary dark:text-primary capitalize">{item.time}</p>
                                        <h3 class="text-lg font-semibold text-primary dark:text-primary capitalize">{lang === 'english' ? item.event : item.eventtamil}</h3>
                                    </li>
                                    )}
                                    {/* <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-primary dark:bg-primary"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">8th and  9th JULY 2024</time>
                                        <p class="text-sm font-regular text-primary dark:text-primary capitalize">10 Noon to 5 PM (Both Days)</p>
                                        <h3 class="text-lg font-semibold text-primary dark:text-primary capitalize">Jury interview - chennai</h3>
                                    </li>
                                    <li class=" ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-primary dark:bg-primary"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">20th AUGUST 2024</time>
                                        <p class="text-sm font-regular text-primary dark:text-primary capitalize">5 PM  to 10 PM</p>
                                        <h3 class="text-lg font-semibold text-primary dark:text-primary capitalize">Main event - lady andal chennai</h3>
                                    </li> */}
                                  
                                </ol>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventTimeline