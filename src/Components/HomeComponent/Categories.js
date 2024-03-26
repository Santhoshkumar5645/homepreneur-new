import React, { useContext, useState } from 'react'
import Titlenew from '../../Element/Titlenew';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../ContextApi/AppContext';

function Categories(props) {
    const [categoryActive, setCategoryActive] = useState(null);
    const { lang } = useContext(AuthContext)

    const navigate = useNavigate();

    const CategoryData = [
        {
            id: 1,
            categoryname: "Digital Homepreneur ",
            tamilcategoryname: 'டிஜிட்டல் சுயசக்தி விருதுகள்',
            icon:'assets/svg/categories/P1.svg',
            whiteicon:'assets/svg/categories/W1.svg',
            content: "This category recognizes home-based women entrepreneurs in the digital space, leveraging technology to reach customers worldwide. Digital homepreneurs may include web developers, social media marketers, e-commerce store owners, online coaches, or digital content creators, youtubers, among others.",
            tamilcontent: 'இந்த தளம் வீட்டில் இருந்தபடியே மின்வழியாக மின்வெளியை உருவாக்கி தங்கள் தொழில்நுட்ப வல்லமையை பயன்படுத்தி உலக அளவில் உள்ள வாடிக்கையாளர்களை அடைந்தவர்களுக்கானது. இதில் வலைதளம் நிறுவனர்(வெப் டெவெலப்பர் ) சமூக வலைத்தளங்களில் சந்தைபடுத்துவர்(சோசியல் மீடியா மார்க்கெட்டர்ஸ் ) மின் வணிக வியாபாரிகள்(இ காம்) மின்வழி படைப்பாளர்களுக்கானது(டிஜிட்டல் கன்டென்ட் கிரியேட்டர்ஸ்), யூடியூபர்கள். ',
        },
        {
            id: 2,
            categoryname: "Agriculture",
            tamilcategoryname: 'விவசாயம்',
            icon:'assets/svg/categories/P2.svg',
            whiteicon:'assets/svg/categories/W2.svg',
            content: "This category recognizes home-based women entrepreneurs who are involved in agriculture-related businesses, supporting the growth of the agricultural industry while also promoting sustainable practices. Entrepreneurs in this category may include farmers, Agritech startup founders, food processors, or producers of organic and eco-friendly agricultural products, Gardening Nursery specialists, Farming, Agro Based Products, and Organic Products, among others.",
            tamilcontent: 'இந்த தளம் வீட்டில் இருந்தபடியே விவசாயம் சார்ந்த தொழில் முனைவோருக்கானது.இந்த பகுதி விவசாயிகள்,வேளான்மை சார்ந்த தொழில்நுட்ப நிறுவனர்கள்,உணவு சார்ந்த விற்பனையாளர்கள்,இயற்கையான மற்றும் சுற்றுசூழலுக்கு கேடு விளைவிக்காத வேளாண் பொருட்கள் விற்பனையாளர்கள்,தோட்டக்கலை ஆர்வலர்கள் போன்ற வேளாண் தொழில் முனைவோருக்கான விருது பரிசீலிக்கும் தளம். ',

        },
        {
            id: 3,
            categoryname: "Healthcare",
            tamilcategoryname: 'ஆரோக்கியம் மற்றும் சுகாதாரம். ',
            icon:'assets/svg/categories/P3.svg',
            whiteicon:'assets/svg/categories/W3.svg',
            content: "This category recognizes home-based women entrepreneurs who are involved in healthcare-related businesses, providing essential medical services and products to individuals and communities. Entrepreneurs in this category may include Health Care Products, healers, healthcare providers, medical device manufacturers, telemedicine providers, health and wellness coaches, and organic food products manufacturers among others. ",
            tamilcontent: 'இந்த தளம் வீட்டில் இருந்தபடியே ஆரோக்கியம் சார்ந்த சார்ந்த தொழில் முனைவோருக்கானது. சுகாதார பொருட்கள் விற்பனையாளகள்,நோய் குணப்படுத்துவோர்,உடல்நல மேம்பாட்டு செயல்பாடுகள் வழங்குவோர்,மருத்துவ பொருட்கள் உற்பத்தியாளர்கள்,தொலைமருத்துவம் வழங்குவோர்,ஆரோக்கிய வாழ்வியல் வழிகாட்டிகள், ஆரோக்கிய உணவு உற்பத்தியாளர்கள் போன்றவருக்கான தளம்.',

        },
        {
            id: 4,
            categoryname: "Arts & Culture",
            tamilcategoryname: 'கலை மற்றும் கலாச்சாரம்',
            icon:'assets/svg/categories/P4.svg',
            whiteicon:'assets/svg/categories/W4.svg',
            content: "This category recognizes home-based women entrepreneurs who are involved in arts and cultural-related businesses, promoting creativity and cultural diversity. Entrepreneurs in this category may include artists, fashion designers, art teachers, Face painters, Puppeteer, Jewellery Designer, Candle Maker, Quilling Maker, Carpet Maker, Toy Maker, and Sand Sculptor, among others. ",
            tamilcontent: 'இல்லத்தில் இருந்தபடியே கலை மற்றும் கலாச்சாரம் சார்ந்த தொழில் முனைவோருக்கான தளம். கற்பனை மற்றும் கலாச்சார பன்முகதன்மை வெளிப்படுத்தும் தொழில் சார்ந்த வணிகங்கள் இதில் இடம் பெறும்.ஓவியம் தீட்டுவோர், ஆடை வடிவமைப்பாளர்கள், ஓவியம் மற்றும் கலை கற்பிப்போர்,முக ஓவியம் தீட்டுவோர், பொம்மலாட்டக் கலைஞர்கள், காகித கைவினை கலைஞர்கள், நகை வடிவமைப்பாளர்கள்,மெழுகுவர்த்தி உற்பத்தியாளர்கள், பொம்மை செய்வோர், தரைவிரிப்பு தயாரிப்பாளர்கள், மண் சிலை செய்வோர் ஆகியோர் களம் காணும் இடம் இது. ',

        },
        {
            id: 5,
            categoryname: "NRI",
            tamilcategoryname: 'வெளிநாட்டு வாழ் இந்தியர்கள். ',
            icon:'assets/svg/categories/fl-primary.svg',
            whiteicon:'assets/svg/categories/fl-white.svg',
            content: "This category recognizes Non-Resident Indian home-based women entrepreneurs who have established successful businesses either in India or abroad. Entrepreneurs in this category may include tech startup founders, investors, healthcare providers, e-commerce entrepreneurs, business consultants and any business across the category. ",
            tamilcontent: 'இந்த பகுதியில் வீட்டில் வசித்தபடியே இந்தியாவிலோ அல்லது வெளிநாட்டிலோ வணிகம் செய்யும் வெளிநாட்டு வாழ் இந்தியர்கள் களம் காணும் இடம். தொழில்நுட்ப சிறுதொழில் முனைவோர், முதலீட்டாளர்கள், மின்வழி தொழில் முனைவோர், வியாபார அறிவுரையாளர்கள் இந்த பகுதியில் தேர்வு செய்யப்படுவர்.  ',


        },
        {
            id: 6,
            categoryname: "Home Retail & Professional",
            tamilcategoryname: 'இல்ல அளவில் செயல்படும் சிறு தொழில் விற்பனையாளர்கள். ',
            icon:'assets/svg/categories/P6.svg',
            whiteicon:'assets/svg/categories/W6.svg',
            content: "This category recognizes home-based women entrepreneurs who run businesses from home in the retail sector, offering unique and innovative products to consumers. Any product-based business such as Product Sellers, clothing, Jewellery making, Distributors, embroiderers, Boutique Owners, or Service-based businesses such as Content writers, PR, and Consulting, among others.",
            tamilcontent: 'இதில் வாடிக்கையர்களுக்கு வீட்டில் இருந்தபடி பிரத்தியேகமான பொருட்கள் சில்லறை அளவில் விற்பனை செய்யும் தோழில் முனைவோர் இடம்பெறுவர். ஆடை விற்பனையாளர்கள், அணிகலன் செய்வோர்,விநியோகஸ்தர்கள், தையல் கலைஞர்கள், மேலும் தொழில் சார்ந்த சேவைகள் செய்யும் பொருட்கள் பற்றிய விளக்கம் எழுதுவோர், மக்கள் தொடர்பு வல்லுநர்கள், தொழில் சார்ந்த ஆலோசனை  வழங்குவோர் இடம் பிடிப்பர். ',

        },
        {
            id: 7,
            categoryname: "Sports & Fitness",
            tamilcategoryname: 'விளையாட்டு மற்றும் உடற்பயிற்சியாளர்கள் ',
            icon:'assets/svg/categories/P7.svg',
            whiteicon:'assets/svg/categories/W7.svg',
            content: "This category recognizes home-based women entrepreneurs who are involved in sports and fitness-related businesses, promoting health and wellness through physical activity. home-based women entrepreneurs in this category may include fitness trainers, gym owners, sports coaches, Yoga Teachers, Zumba instructors, Aerobics instructors, and Games And Sports equipment,  among others.",
            tamilcontent: 'வீட்டில் இருந்தபடி வாடிகையாளர்களுக்கு உடற்பயிற்சி சார்ந்த தொழில் முனைவோருக்கான பகுதி இது. உடற்பயிற்சியாளர்கள், யோகா ஆசிரியர்கள் ஸும்பா கற்பிப்போர், நடன பயிற்சியாளர்கள், விளையாட்டு பொருட்கள் விற்பனை செய்வோர் இதில் அடங்குவர். ',

        },
        {
            id: 8,
            categoryname: "Food & Beverages",
            tamilcategoryname: 'உணவு & பானங்கள்',
            icon:'assets/svg/categories/P8.svg',
            whiteicon:'assets/svg/categories/W8.svg',
            content: "This category recognizes home-based women entrepreneurs who are involved in food and beverage-related businesses, offering innovative culinary experiences to consumers. home-based women entrepreneurs in this category may include Food Processing, Food Products, Baker, Catering Units, chefs, restaurateurs, food truck owners, food bloggers, or beverage manufacturers, among others.",
            tamilcontent: 'வாடிக்கையாளர்களுக்கு வீட்டில் இருந்து சிறந்த உணவு மற்றும் ஆரோக்கிய பானம் வழங்குவோருக்கான தளம். உணவு மேம்பாட்டு பொருட்கள், உணவு பண்ட விற்பனையாளர்கள், கேக் செய்வோர், சமையல் வல்லுநர், உணவு விடுதி நடத்துவோர், உணவு சார்ந்த இணையதள பதிவர், பானங்கள் உற்பத்தி செய்வோர் இதில் பங்கு பெறலாம். ',

        },
        {
            id: 9,
            categoryname: "Beauty & Wellness",
            tamilcategoryname: 'அழகியல் மற்றும் ஆரோக்கியம்.',
            icon:'assets/svg/categories/P9.svg',
            whiteicon:'assets/svg/categories/W9.svg',
            content: "This category recognizes home-based women entrepreneurs who are involved in beauty and wellness-related businesses, promoting self-care and healthy living. Entrepreneurs in this category may include spa operators, wellness coaches, or skincare product creators, Home Parlour, Beauty Products, Wellness Products, and Mehendi Application Unit, among others.",
            tamilcontent: 'சுயசக்தியுடன் இல்லாதரசிகள் வீட்டில் இருந்தே சுய பராமரிப்பும் ஆரோக்கிய வாழ்வியல் சார்ந்த தொழில் முனைவோரை ஊக்குவிக்கும் தளம் இது.ஸ்பா நடத்துவர், வாழ்வியல் வழிகாட்டிகள், அழகை மெருகூட்டும் பொருட்கள் செய்வோர், அழகியல் வல்லுநர்கள், அழகு மற்றும் ஆரோக்கிய பொருட்கள் விற்பனையாளர்கள், மருதாணி வல்லுநர்கள் இடம் பெறுவார்கள். ',

        },
        {
            id: 10,
            categoryname: "Education & Literature",
            tamilcategoryname: 'கல்வி மற்றும் இலக்கியம்',
            icon:'assets/svg/categories/P10.svg',
            whiteicon:'assets/svg/categories/W10.svg',
            content: "This category recognizes home-based women entrepreneurs who are involved in education and literature-related businesses, offering knowledge and learning opportunities to individuals and communities. Entrepreneurs in this category may include online tutors, e-learning platform operators, authors, coaches, or education consultants, Play Schools, Special Education, Publishing, and Library, among others.",
            tamilcontent: 'வீட்டில் இருந்து கல்வி மற்றும் இலக்கியம் சார்ந்த தொழில் முனைவோருக்கான பகுதி. ஆன்லைன் ஆசிரியர்கள், மின்வழி தள செயல்பாட்டாளர்கள், எழுத்தாளர்கள்,படைப்பாளிகள்,கல்வி ஆலோசகர், வழிகாட்டிகள், சிறுவர் பயிலும் கல்வி அமைப்புகள் நடத்துவர், தனித்திறமை வாய்ந்த கல்வி நடத்துவோர் இதில் பங்கு கொள்ளலாம். ',

        },
        {
            id: 11,
            categoryname: "Media & Entertainment",
            tamilcategoryname: 'ஊடகம் மற்றும் பொழுதுபோக்கு',
            icon:'assets/svg/categories/P11.svg',
            whiteicon:'assets/svg/categories/W11.svg',
            content: "This category recognizes home-based women entrepreneurs who are involved in media and entertainment-related businesses, providing engaging and informative content to audiences. Entrepreneurs in this category may include Event Management, Theater Artists, Design shops, Animation consultants, PR Consulting social media influencers, and YouTubers, among others. ",
            tamilcontent: 'பார்வையாளர்கள் விரும்பும் வண்ணம் வீட்டில் இருந்தபடி ஊடக தொழில் முனைவோருக்கான தளம். சிறப்பு நிகழ்ச்சி மேலாண்மையாளர்கள், நாடக கலைஞர், ஊடக வடிவமைப்பாளர், இயங்குபட (அனிமேஷன் ) ஆலோசகர்கள், ஊடக பொது தொடர்பாளர்கள், சமூக வலைதள வழிகாட்டிகள், சமூக வலை தளம் வலைஒளி சேனல்கள் நடத்துவோர் இதில் வாகை சூடலாம். ',

        },
        {
            id: 12,
            categoryname: "Social Welfare & NGO",
            tamilcategoryname: 'சமூக நல ஆர்வலர்கள்.',
            icon:'assets/svg/categories/P12.svg',
            whiteicon:'assets/svg/categories/W12.svg',
            content: "This category recognizes home-based women entrepreneurs who are involved in social welfare and NGO-related businesses, creating positive change in their communities and beyond. Entrepreneurs in this category may include charity organizers, fundraisers, social entrepreneurs, community development specialists, or Social Activism, Social Impact, Self Help Groups, and NGOs among others. ",
            tamilcontent: 'சமூக அக்கறையுடன் வாழ்வியல் முன்னேற்றம் தரும் தொழில் செய்யும் இல்லத்தரசிகள் பங்கு பெறும் இடம் இது.  தொண்டு அமைப்பாளர்கள்,நிதி திரட்டுபவர்கள், சமூக நல தொழில் முனைவோர்,சமூக வளர்ச்சி வல்லுநர்கள், சமூக ஆர்வலர்,சுய உதவி குழுக்கள், என்.ஜி.ஓ(அரசு சாரா நிறுவனங்கள் மற்றும் அமைப்புகள்) போன்ற அமைப்பு சார்ந்தவர்கள் கெளரவிக்கப்படும் சிறந்த பகுதி இது. ',

        },
    ]

    const CategoryHandler = async (id) => {
        if(id === categoryActive){

            setCategoryActive(null)
        } else{

            setCategoryActive(id)
        }

    }

    const ScrolltoCategory = () => {
        const element = document.getElementById('category_content');
        console.log(window.screenY)
        element.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <>
            <div className='brand-max-width mx-auto' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
                <div className='brand-container my-10'>
                    <div className='flex justify-center md:justify-start lg:justify-start xl:justify-start'>
                        <Titlenew title={props.title} />
                    </div>
                    <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row my-5 gap-5 items-center'>
                        {/* <div className='hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full transition-all duration-300 '>
                            {CategoryData.map((list, index) =>
                                <CategoryCard key={index} title={lang === 'english' ? list.categoryname : list.tamilcategoryname} active={categoryActive} index={index} Handler={CategoryHandler} ScrollHangler={ScrolltoCategory} img={list.icon} />
                            )}
                        </div>
                        <div id='category_content' className='hidden p-4 scroll-my-40 flex flex-col items-center w-full md:w-full lg:w-1/3 xl:w-1/3 gap-5  bg-[#D4A7C1] rounded-lg'>
                            <p className='text-sm md:text-xl lg:text-xl xl:text-xl text-primary transition-all duration-300'>{lang === 'english' ? CategoryData[categoryActive].categoryname : CategoryData[categoryActive].tamilcategoryname}</p>
                            <p className='w-4/5 text-sm md:text-lg lg:text-lg xl:text-lg text-[#000000]/50 transition-all duration-300'>{lang === 'english' ? CategoryData[categoryActive].content : CategoryData[categoryActive].tamilcontent}</p>
                            <p onClick={() => navigate('/register')} className='px-5 cursor-pointer py-2 bg-primary text-white rounded-lg capitalize'>{lang === 'english' ? 'Apply for awards' : 'பதிவு செய்க'}</p>
                        </div> */}

                        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full transition-all duration-300 '>

                            {CategoryData.map((list, index) =>
                                <CategoryCardNew key={index} title={lang === 'english' ? list.categoryname : list.tamilcategoryname} active={categoryActive && categoryActive} index={index} Handler={CategoryHandler} ScrollHangler={ScrolltoCategory} img={list.icon} content={lang === 'english' ? list.content : list.tamilcontent } colorimg={list.icon} whiteimg={list.whiteicon} />
                            )}
                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}

export default Categories

const CategoryCard = (props) => {
    const { lang } = useContext(AuthContext)

    return (
        <>
            <div onClick={() => { props.Handler(props.index); props.ScrollHangler() }} className={`border group border-primary hover:bg-primary cursor-pointer py-2 px-3 rounded-[5px] flex justify-between  items-center gap-2 ${props.active === props.index ? 'bg-primary' : ''}`}>
                <div>
                    <p className={`text-xs md:text-sm group-hover:text-white ${lang === 'english' ? 'lg:text-lg xl:text-xl' : 'lg:text-sm xl:text-xs'}  whitespace-nowrap ${props.active === props.index ? 'text-white' : 'text-primary'} `}>{props.title}</p>
                    <p className={`text-sm underline-offset-4 underline first-letter:capitalize text-primary group-hover:text-white ${props.active === props.index ? 'text-white' : 'text-primary'}`}>see more..</p>
                </div>
                <img className='bg-white p-[1px]' src={props.img} alt="" />
            </div>
        </>
    )
}

const CategoryCardNew = (props) => {
    const { lang } = useContext(AuthContext)
    const navigate = useNavigate();
    return (
        <>
            <div  className={`${props.active === props.index ? 'border border-primary/20 shadow-md' : 'border border-primary/0 '} rounded-[10px] transition-all duration-300 `}>
                <div onClick={() => props.Handler(props.index)} className={`border shadow-md active:opacity-90 cursor-pointer flex justify-between border-primary/20 group hover:bg-primary px-3 py-4 rounded-[10px] overflow-hidden select-none ${props.active === props.index ? 'bg-primary' : 'bg-white'}`}>
                    <div className='flex w-full items-center gap-5 '>
                        <img className={` ${props.active === props.index ? 'hidden' : ' group-hover:hidden block'}`} draggable={false} src={props.colorimg} alt="" />
                        <img className={` ${props.active === props.index ? 'block ' : 'group-hover:block hidden'}`} draggable={false} src={props.whiteimg} alt="" />
 
                        <p className={` md:text-sm group-hover:text-white ${lang === 'english' ? ' text-lg lg:text-lg xl:text-xl' : 'text-xs md:text-sm  lg:text-sm xl:text-xs'}   ${props.active === props.index ? 'text-white' : 'text-primary'} `}>{props.title}</p>
                    </div>
                    <img className={` ${props.active === props.index ? 'w-0 -rotate-45' : 'group-hover:block '} group-hover:hidden transition-all duration-300`} src="assets/svg/icons/plus.svg" alt="" />
                    <img className={`${props.active === props.index ? 'group-hover:block -rotate-45' : 'w-0'} group-hover:w-auto  transition-all duration-300`} src="assets/svg/icons/plus-white.svg" alt="" />
                </div>
                <div className={`${props.active === props.index ? 'p-5 h-auto' : 'p-0 h-0'} overflow-hidden transition-all duration-0`}>
                    <p className={`text-sm md:text-lg lg:text-lg xl:text-lg text-[#000000]/50   `}>{props.content}</p>
                </div>

                <div className='flex justify-center p-2'>
                <p onClick={() => navigate('/')} className={`px-5 w-fit cursor-pointer py-2 bg-primary text-white rounded-lg text-center capitalize ${props.active === props.index ? '' : 'hidden'}`}>{lang === 'english' ? 'Registration Closed' : 'பதிவு முடிவடைந்தது.'}</p>
                </div>


                
            </div>

        </>
    )
}