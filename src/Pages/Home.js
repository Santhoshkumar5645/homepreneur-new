import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import Categories from "../Components/HomeComponent/Categories";
import EventTimeline from "../Components/HomeComponent/EventTimeline";
import Gallery from "../Components/HomeComponent/Gallery";
import Ourprocess from "../Components/HomeComponent/Ourprocess";
import Sponsers from "../Components/HomeComponent/Sponsers";
import Support from "../Components/HomeComponent/Support";
import TextSlider from "../Components/HomeComponent/TextSlider";
import Whoweare from "../Components/HomeComponent/Whoweare";
import { motion } from "framer-motion";
import SponserBIg from "../Components/HomeComponent/SponserBIg";
import { ScrolltoTop } from "../Utility";
import { AuthContext } from "../ContextApi/AppContext";
import { useNavigate } from "react-router";
import useFetchData from "../CustomHooks/useFetchData";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import Jury2024 from "../Components/HomeComponent/Jury2024";
import 'swiper/css';
import 'swiper/css/pagination';
import '../Style/input.css';

// Import Swiper core and required modules
// import { Pagination } from 'swiper/modules';


// Lazy Components 
const Jury = lazy(() => import("../Components/HomeComponent/Jury"));

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


function Home() {
    const { lang, setPopupState } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);



    // const {data: jury, loading, error, refetch } =  useFetchData("jury-members", 'get', [], '1', true ,true)


    const navigate = useNavigate();

    document.title = "Homepreneur Awards 2024";

    const handleLoading = () => {
        console.log('working')
        setIsLoading(false);
    }

    useEffect(() => {
        const PageState = document.readyState;
        if (PageState === 'complete') {
            handleLoading()
        } else {

            window.addEventListener("load", handleLoading);
        }
    }, [])

    useEffect(() => {
        ScrolltoTop();
    }, []);



    const TitleData = [
        {
            title: "First of its kind",
        },
        {
            title: "Recognizing women who build their entrepreneurial dream from home",
        },
        {
            title: "After 5 tremendous seasons Successfully entering into season 6-Homepreneur Awards",
        },
        {
            title: "First of its kind",
        },
        {
            title: "Recognizing women who build their entrepreneurial dream from home",
        },
        {
            title: "After 5 tremendous seasons Successfully entering into season 6-Homepreneur Awards",
        },
    ];

    const partnersData = [
        {
            icon: "assets/images/partners/prt1.webp",
            // title: 'Reach Partner',
        },
        {
            icon: "assets/images/partners/prt4.webp",
            // title: 'Technology Partner',
        },
        {
            icon: "assets/images/partners/prt2.webp",
            // title: 'Reach Partner',
        },
        {
            icon: "assets/images/partners/prt17.webp",
            // title: 'Reach Partner',
        },

        {
            icon: "assets/images/partners/prt1.webp",
            // title: 'Reach Partner',
        },
        {
            icon: "assets/images/partners/prt4.webp",
            // title: 'Technology Partner',
        },
        {
            icon: "assets/images/partners/prt2.webp",
            // title: 'Reach Partner',
        },
        {
            icon: "assets/images/partners/prt17.webp",
            // title: 'Reach Partner',
        },
        {
            icon: "assets/images/partners/prt18.jpeg",
            // title: 'Reach Partner',
        },
        {
            icon: "assets/images/partners/prt19.webp",
            // title: 'Reach Partner',
        },
        {
            icon: "assets/images/partners/prt20.webp",
            // title: 'Reach Partner',
        },
        {
            icon: "assets/images/partners/prt21.webp",
            // title: 'Reach Partner',
        },
        {
            icon: "assets/images/partners/prt22.webp",
            // title: 'Reach Partner',
        },
        {
            icon: "assets/images/partners/prt23.png",
            // title: 'Reach Partner',
        },


    ];

    const SponsersData = [
        {
            icon: "assets/images/sponsers/new1.webp",
            title: "Title Sponsor",
        },
        {
            icon: "assets/images/sponsers/sp2.png",
            title: "Associate Sponsors",
        },
        {
            icon: "assets/images/sponsers/sp3.png",
            title: "Associate Sponsors",
        },
        {
            icon: "assets/images/sponsers/new1.webp",
            title: "Associate Sponsors",
        },
        {
            icon: "assets/images/sponsers/new3.webp",
            title: "Associate Sponsors",
        },
        {
            icon: "assets/images/sponsers/sp5.png",
            title: "Powered by",
        },
        {
            icon: "assets/images/sponsers/sp6.png",
            title: "Powered by",
        },
    ];

    const SponsersDatanew = [
        {
            title: "Title Sponsor",
            icons: [
                {
                    img: "assets/images/sponsers/new1.webp",
                },
            ],
        },

        {
            title: "Powered by",
            icons: [
                {
                    img: "assets/images/sponsers/new3.webp",
                },

            ],
        },

        {
            title: "Co-initiated by",
            icons: [
                {
                    img: "assets/images/sponsers/new2.webp",
                },

            ],
        },

        {
            title: "Associate Sponsor",
            icons: [
                {
                    img: "assets/images/sponsers/new4.webp",
                },

            ],
        },
    ];

    const PartnersDatanew = [
        {
            title: "Reach Partner",
            icons: [
                {
                    img: "assets/images/partners/prt1.webp",
                },
                {
                    img: "assets/images/partners/prt2.webp",
                },
                {
                    img: "assets/images/partners/prt3.png",
                },
                {
                    img: "assets/images/partners/prt5.png",
                },
                {
                    img: "assets/images/partners/prt15.png",
                },
                {
                    img: "assets/images/partners/prt16.png",
                },
            ],
        },

        {
            title: "Technology Partner",
            icons: [
                {
                    img: "assets/images/partners/prt4.webp",
                },
            ],
        },
        {
            title: "Student Edition Partner",
            icons: [
                {
                    img: "assets/images/partners/prt6.png",
                },
            ],
        },
        {
            title: "Veg-Food Partner",
            icons: [
                {
                    img: "assets/images/partners/prt7.png",
                },
            ],
        },

        {
            title: "Institutional Reach Partner",
            icons: [
                {
                    img: "assets/images/partners/prt8.png",
                },
            ],
        },
        {
            title: "Camera Partner",
            icons: [
                {
                    img: "assets/images/partners/prt9.png",
                },
                {
                    img: "assets/images/partners/prt10.png",
                },
            ],
        },
        {
            title: "Non-Veg Partner",
            icons: [
                {
                    img: "assets/images/partners/prt11.png",
                },
            ],
        },
        {
            title: "Tea Partner",
            icons: [
                {
                    img: "assets/images/partners/prt12.png",
                },
            ],
        },
        {
            title: "Creche Partner",
            icons: [
                {
                    img: "assets/images/partners/prt13.png",
                },
            ],
        },
        {
            title: "Youtube Partner",
            icons: [
                {
                    img: "assets/images/partners/prt14.png",
                },
            ],
        },
    ];


    if (isLoading) return <LoadingScreen />

    return (
        <>
            <div className="brand-max-width mx-auto relative  hidden">
                {/* <video
                    className="h-screen w-screen object-cover lg:Object-fill xl:object-fill lg:object-left-top xl:object-left-top"
                    src="assets/video/herosection.mp4"
                    autoPlay={true}
                    muted
                    loop></video>  */}
                <img className="object-cover" src="/assets/tq-banner.jpg" alt="" />
                <div className="inset-0 absolute    gap-10 w-full">
                    <div className="inset-0 absolute   flex flex-row items-center justify-start">

                        <div className="hidden flex flex-col items-center  lg:items-start xl:items-start justify-start lg:pl-[50px] mx-5 xl:pl-[50px] gap-2 w-full md:w-full lg:w-1/2  xl:w-1/2 overflow-hidden">
                            <div className="">
                                <TextSlider data={TitleData} />
                            </div>
                            {/* <Timer date={new Date("2023-05-16T00:00:00")} /> */}
                            <div className="flex items-center gap-5">
                                <motion.img
                                    initial={{ x: 0 }}
                                    animate={{ x: 0 }}
                                    transition={{ type: "spring", stiffness: 150, delay: 1 }}
                                    className=" hidden lg:block xl:block w-[300px] bg-white/0 p-2 rounded-lg h-auto bottom-24 left-5"
                                    src="assets/images/logo-hd.png"
                                    alt=""
                                />

                            </div>

                            <div className="flex gap-2 hidden">
                                <button
                                    onClick={() => navigate("/register")}
                                    className="capitalize xl:hidden lg:hidden text-white bg-primary px-4 py-3 rounded-md active:opacity-25 ">
                                    {lang === "english" ? "Homepreneur awards 2024" : "சுயசக்தி விருதுகள் 2024"}
                                    <br />
                                    <small>{lang === "english" ? "Apply Now" : "விண்ணப்பம் செய்க"}</small>
                                </button>
                                <button
                                    onClick={() => navigate("/studentform")}
                                    className="capitalize xl:hidden lg:hidden text-white bg-primary px-4 py-3 rounded-md active:opacity-25 ">
                                    {lang === "english"
                                        ? "Homepreneur awards (Student Edition)"
                                        : "சுயசக்தி விருதுகள் (மாணவர் பதிவு)"}
                                    <br />
                                    <small>{lang === "english" ? "Apply Now" : "விண்ணப்பம் செய்க"}</small>
                                </button>
                            </div>
                        </div>
                        {/* <div
                            className="absolute  flex-col items-center hidden md:hidden lg:block xl:flex right-0"
                            style={{ backgroundImage: "url('assets/gif/bg1.gif')" }}>
                            <motion.img
                                initial={{ x: 0 }}
                                animate={{ x: 0 }}
                                transition={{ type: "spring", stiffness: 150, delay: 1 }}
                                className=" hidden lg:block xl:block w-[200px] bg-white/0 p-2 rounded-lg h-auto top-10 right-5"
                                src="assets/images/brandavt-brnd.png"
                                alt=""
                            />
                            <img
                                className=""
                                src="assets/images/honor-sheild.png"
                                alt=""
                            />
                            <img
                                className=""
                                src="assets/svg/icons/season.svg"
                                alt=""
                            />
                        </div> */}
                    </div>
                </div>
            </div>



            {/* new Section */}
            <HeroSection />
            <SponserBIg />
            <Ourprocess />
            <EventTimeline />

            <Suspense fallback={<h1>Still Loading…</h1>}>
                <Jury2024 />
            </Suspense>

            <Categories title={lang === "english" ? "Categories" : "பிரிவுகள்"} />
            <Support />
            <Gallery />
            <Sponsers
                reverse={true}
                title={lang === "english" ? "our sponsors" : "ஸ்பான்சர்கள்"}
                partners={SponsersData}
                NewData={SponsersDatanew}
                oldDesign={false}
            />
            <Sponsers
                reverse={false}
                title={lang === "english" ? "our partners" : "பார்ட்னர்ஸ்"}
                partners={partnersData}
                NewData={PartnersDatanew}
                oldDesign={true}
            />
            <Whoweare />
        </>
    );
}

export default Home;


const LoadingScreen = () => {
    return (
        <>
            <>
                <div className='fixed inset-0 bg-heading/50 backdrop-blur-md w-full h-full  z-50 flex justify-center items-center'>
                    <div className='flex justify-center items-center flex-col gap-2'>
                        <img className='w-20 animate-spin' src="assets/svg/icons/loader.svg" alt="" />
                        <p className='text-primary font-bold capitalize'>Loading...</p>
                    </div>
                </div>
            </>
        </>
    )
}

const HeroSection = () => {

    const navigate = useNavigate();
    const sections = [
        JuryMembers.slice(0, JuryMembers.length / 3),
        JuryMembers.slice(JuryMembers.length / 3, 2 * JuryMembers.length / 3),
        JuryMembers.slice(2 * JuryMembers.length / 3)
    ];
    return (
        <>
            <div className="brand-max-width mx-auto relative ">
                <div className="grid grid-cols-2 bg-primary h-screen text-white px-14 overflow-hidden items-start">
                    <div className="flex flex-col justify-center items-start gap-10 pt-10">
                        <div className="flex gap-10">
                            <div className="flex gap-2 items-center">
                                <img src="/assets/svg/calendar.svg" alt="" />
                                <p>12.12.2024</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="/assets/svg/pin.svg" alt="" />
                                <p>Anna Salai, Chennai</p>
                            </div>
                        </div>
                        <h3 className="text-5xl font-Voyage-regular">Homepreneur Awards <br /> <span className="font-bold">2024</span></h3>
                        <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quibusdam alias ut explicabo doloribus tempore vitae iure dicta deserunt</p>
                        <button onClick={() => navigate("/register")} className="capitalize text-black button-gradient px-5 py-3 rounded-lg flex items-center gap-10 justify-between active:opacity-50">
                            register now
                            <img src="/assets/svg/arow.svg" alt="" />
                        </button>
                    </div>
                    <div className="h-screen overflow-hidden flex items-start justify-between gap-2">

                        {/* <div className="flex flex-col gap-1">
                            <div className="w-[200px] h-[300px]  gradient-background rounded-[30px] p-2 group relative">
                                <img className="rounded-[30px] w-full h-full object-cover" src="/assets/images/jurymember/jury1.webp" alt="" />
                                <div class="absolute rounded-[30px] inset-0 flex items-center justify-center opacity-0  group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-heading m-2">
                                    <p>Details go here</p>
                                </div>
                            </div>
                            <div className="w-[200px] h-[300px]  gradient-background rounded-[30px] p-2 group relative">
                                <img className="rounded-[30px] w-full h-full object-cover" src="/assets/images/jurymember/jury1.webp" alt="" />
                                <div class="absolute rounded-[30px] inset-0 flex items-center justify-center opacity-0  group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-heading m-2">
                                    <p>Details go here</p>
                                </div>
                            </div>
                            <div className="w-[200px] h-[300px]  gradient-background rounded-[30px] p-2 group relative">
                                <img className="rounded-[30px] w-full h-full object-cover" src="/assets/images/jurymember/jury1.webp" alt="" />
                                <div class="absolute rounded-[30px] inset-0 flex items-center justify-center opacity-0  group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-heading m-2">
                                    <p>Details go here</p>
                                </div>
                            </div>
                            <div className="w-[200px] h-[300px]  gradient-background rounded-[30px] p-2 group relative">
                                <img className="rounded-[30px] w-full h-full object-cover" src="/assets/images/jurymember/jury1.webp" alt="" />
                                <div class="absolute rounded-[30px] inset-0 flex items-center justify-center opacity-0  group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-heading m-2">
                                    <p>Details go here</p>
                                </div>
                            </div>
                            <div className="w-[200px] h-[300px]  gradient-background rounded-[30px] p-2 group relative">
                                <img className="rounded-[30px] w-full h-full object-cover" src="/assets/images/jurymember/jury1.webp" alt="" />
                                <div class="absolute rounded-[30px] inset-0 flex items-center justify-center opacity-0  group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-heading m-2">
                                    <p>Details go here</p>
                                </div>
                            </div>
                        </div> */}

                        {sections.map((section, index) => (
                            <div key={index} className="flex flex-col ">
                                {section.map((member, memberIndex) => {
                                    // Determine the animation class based on the index modulo
                                    const animationClass = index % 2 === 0 ? 'animate-slide_to_bottom' : 'animate-slide_to_top';
                                    return (
                                        <JuryMemberCard key={memberIndex} juryMember={member} animate={animationClass} />
                                    );
                                })}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}


const JuryMemberCard = ({ juryMember, animate }) => {
    return (
        <div className={`w-[200px] h-[300px] gradient-background rounded-[30px] p-2 group relative ${animate}`}>
            <img className="rounded-[30px] w-full h-full object-cover" src={juryMember.image} alt={juryMember.juryname} />
            <div className="absolute rounded-[30px] inset-0 flex flex-col  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-heading m-2 p-2 text-center">
                <p>{juryMember.juryname}</p>
                <p>{juryMember.designation}</p>
                {juryMember.company && <p>{juryMember.company}</p>}
            </div>
        </div>
    );
};