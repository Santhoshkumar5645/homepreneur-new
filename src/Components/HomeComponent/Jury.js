import React, { useContext, useRef } from 'react'
import TitleGradient from '../../Element/TitleGradient'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sponsers from './Sponsers';
import CustomCard from '../../Element/CustomCard';
import { AuthContext } from '../../ContextApi/AppContext';

function Jury(props) {

    const {lang} = useContext(AuthContext)

    const settings = {
        dots: false,
        fade: false,
        rows:2,
        arrows: false,
        centerPadding: "60px",
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                     rows:1,
                    slidesToShow: 1,
                    centerMode:true,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const mainsetting = {
        dots: false,
        fade: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 10,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 500,
        cssEase: "linear",


    };

    const slider = useRef(null)


    const JuryMembers = [
        {
            juryname: "MsV.P. Rajini Reddy",
            designation: "Director of SAI",
            image: "/assets/images/jurymember/rajini_reddy.jpeg",
            company: "Swarnabhoomi Academic Institutions",
        },
        {
            juryname: "Aruna Guhan",
            designation: "Partner & Creative Director",
            image: "/assets/images/jurymember/aruna_guhan.jpeg",
            company: "AVM Productions",
        },
        {
            juryname: "Shweta Ravi",
            designation: "Co-Founder",
            image: "/assets/images/jurymember/shweta_ravi.jpg",
            company: "RNR Biryani",
        },
        {
            juryname: "Amudhavalli Ranganathan",
            designation: "Director of E-Commerce",
            image: "/assets/images/jurymember/amudhavalli_ranganathan.jpeg",
            company: "FMCG",
        },
        {
            juryname: "Krithika Radhakrishnan",
            designation: "Arkay Production",
            image: "/assets/images/jurymember/jury1.webp",
            company: "VR Derma Pvt.ltd.",
        },
        {
            juryname: "Aruna Subramaniam",
            designation: "Management Consultant & Trustee Bhoomika Trust",
            image: "/assets/images/jurymember/jury2.webp",
            company: "",

        },
        {
            juryname: "Akhila Rajeshwar",
            designation: "Executive Director, TiE Chennai",
            image: "/assets/images/jurymember/jury3.webp",
            company: "",

        },
        {
            juryname: "Brinda Sivakumar",
            designation: "Managing Director, Tanvi’s Jewellery",
            image: "/assets/images/jurymember/jury4.webp",
            company: "",

        },
        {
            juryname: "Hema Rukmani",
            designation: "CEO, Thenandal Entertainment",
            image: "/assets/images/jurymember/jury5.webp",
            company: "",

        },
        {
            juryname: "Jayasree Vummidi",
            designation: "Managing Director, The Lotus Group Correspondent GRT School ",
            image: "/assets/images/jurymember/jury6.webp",
            company: "",

        },
        {
            juryname: "Lakshmi Ravichander",
            designation: "Founder, Event Art",
            image: "/assets/images/jurymember/jury7.webp",
            company: "",

        },
        {
            juryname: "Latha Rajan",
            designation: "Founder, Ma Foi Strategic Consultants",
            image: "/assets/images/jurymember/jury8.webp",
            company: "",

        },
        {
            juryname: "Dr. Madhu Saran",
            designation: "Founder, River NGO",
            image: "/assets/images/jurymember/jury9.webp",
            company: "",

        },
        {
            juryname: "Dr. Manimekalai Mohan",
            designation: "Founder, SSVM Institutions, Coimbatore",
            image: "/assets/images/jurymember/jury10.webp",
            company: "",

        },
        {
            juryname: "Meena Chabbria",
            designation: "South Head, PVR Cinemas & Motivational Coach",
            image: "/assets/images/jurymember/jury11.webp",
            company: "",

        },
        {
            juryname: "Nina Reddy",
            designation: "Joint Managing Director, Savera Hotels",
            image: "/assets/images/jurymember/jury12.webp",
            company: "",

        },
        {
            juryname: "Prasanna Vasanadu",
            designation: "Founder & CEO,   VR Derma Pvt.ltd.",
            image: "/assets/images/jurymember/jury13.webp",
            company: "",

        },
        {
            juryname: "Dr. Preethaa Ganesh",
            designation: "Vice President, Vels Group of Institutions",
            image: "/assets/images/jurymember/jury14.webp",
            company: "",

        },
        {
            juryname: "Poornima Ramaswamy",
            designation: "National Award-winning Designer, Stylist & Entrepreneur",
            image: "/assets/images/jurymember/jury32.webp",
            company: "",

        },
        {
            juryname: "Radha Sanjeev",
            designation: "Chief Operations Officer Glosel Group",
            image: "/assets/images/jurymember/jury16.webp",
            company: "",

        },
        {
            juryname: "Raji Raju",
            designation: "Chairperson, FICCI FLO",
            image: "/assets/images/jurymember/jury17.webp",
            company: "",

        },
        {
            juryname: "Rathna Sivaraman",
            designation: "Entrepreneur & Media Personality",
            image: "/assets/images/jurymember/jury18.webp",
            company: "",

        },
        {
            juryname: "Ravoofa H.K",
            designation: "Media Mason",
            image: "/assets/images/jurymember/jury19.webp",
            company: "",

        },
        {
            juryname: "Rinku Mecheri",
            designation: "Social Entrepreneur Founder, Chennai Volunteers",
            image: "/assets/images/jurymember/jury20.webp",
            company: "",

        },
        {
            juryname: "Rukmini Thiagarajan",
            designation: "Director, Chennai One IT SEZ",
            image: "/assets/images/jurymember/jury21.webp",
            company: "",

        },
        {
            juryname: "Dr. Saranya T. Jaikumar",
            designation: "Educational Psychologist",
            image: "/assets/images/jurymember/jury22.webp",
            company: "",

        },
        {
            juryname: "Dr. Saundarya Rajesh",
            designation: "Founder - President, Avatar Career Creators & Flexi Careers India",
            image: "/assets/images/jurymember/jury23.webp",
            company: "",

        },
        {
            juryname: "Shiny Surendran",
            designation: "Accredited Sports Dietitian IOC & SDA",
            image: "/assets/images/jurymember/jury24.webp",
            company: "",

        },
        {
            juryname: "Shylaja Chetlur",
            designation: "Actor, Media Professional, Cinema Rendezvous, Shylaar Production",
            image: "/assets/images/jurymember/jury25.webp",
            company: "",

        },
        {
            juryname: "Dr. Srinisha Maran",
            designation: "Chairperson, Bharath University &  Sree Balaji Medical College",
            image: "/assets/images/jurymember/jury26.webp",
            company: "",

        },
        {
            juryname: "Swarnamugi Raghupathy",
            designation: "Founder & CEO, Swadhika Foods & Founding Director, BGR NEO",
            image: "/assets/images/jurymember/jury27.webp",
            company: "",

        },
        {
            juryname: "Sushila Ravindranath",
            designation: "Senior Journalist",
            image: "/assets/images/jurymember/jury28.webp",
            company: "",

        },
        {
            juryname: "Veena Kumaravel",
            designation: "Co-Founder, Naturals Salon",
            image: "/assets/images/jurymember/jury29.webp",
            company: "",

        },
        {
            juryname: "Dr. Vimalarani Britto",
            designation: "Entrepreneur, Educationalist & Social Reformer",
            image: "/assets/images/jurymember/jury30.webp",
            company: "",
        },
        {
            juryname: "Dr. Farhana Suhail",
            designation: "Influencer and Founder , NEW TO CHENNAI",
            image: "/assets/images/jurymember/pic.WebP",
            company: "",
        },
        {
            juryname: "Raji Raju",
            designation: "Chairperson, FICCI FLO",
            image: "/assets/images/jurymember/jury17.webp",
            company: "",

        },
    ]


    return (
        <>
            <div id='juryMembers' className=' brand-max-width py-10 mx-auto relative' style={{ backgroundImage: "url(/assets/svg/background/section-bg.svg)" }}>

                <div className='brand-container my-10'>
                <div className=' flex flex-col items-center md:items-end lg:items-end xl:items-end my-5 '>
                        <TitleGradient title={lang === 'english' ? 'JURY MEMBERS': 'நடுவர் குழு உறுப்பினர்கள்'} />
                    </div>
                    <Slider ref={slider} {...settings}>
                        {
                            JuryMembers.map((list, index) =>
                                <CustomCard jname={list.juryname} img={list.image} designation={list.designation} />
                            )
                        }

                    </Slider>

                    <div className='flex  gap-5 justify-center my-10'>
                            <img onClick={() => { slider?.current?.slickPrev() }} className='rotate-180 cursor-pointer' src="/assets/svg/icons/slider-arrow.svg" alt="" />
                            <img onClick={() => { slider?.current?.slickNext() }} className='cursor-pointer' src="/assets/svg/icons/slider-arrow.svg" alt="" />
                        </div>

                </div>
            </div>
        </>
    )
}

export default Jury


const ExposeCard = (props) => {
    return (
        <>
            <div className='p-5 bg-white/20 rounded-lg flex  mx-auto flex-col gap-2 w-full'>
                <img className='object-cover  aspect-square' src={props.image} alt="" />
                <div className='flex flex-col gap-2'>
                    <p className='text-white text-sm  md:text-xl lg:text-xl xl:text-xl'>{props.jname}</p>
                    <p className='text-white/60 text-xs md:text-sm lg:text-sm xl:text-sm'>{props.designation}</p>
                </div>
            </div>
        </>
    )
}