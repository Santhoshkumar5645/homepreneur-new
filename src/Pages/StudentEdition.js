import React, { useContext, useEffect, useState } from "react";
import Title from "../Element/Title";
import { ScrolltoTop } from "../Utility";
import { useNavigate } from "react-router";
import Titlenew from "../Element/Titlenew";
import { AuthContext } from "../ContextApi/AppContext";
import WinnersTable from "../Components/HomeComponent/WinersTable";
import CustomCard from "../Element/CustomCard";

function StudentEdition() {
    document.title = "Homepreneur Awards 2024 | Student Edition";

    const { lang } = useContext(AuthContext);

    const [showIndex, setIndex] = useState(0);
    const navigate = useNavigate();

    const ProcessClickHandler = (index) => {
        setIndex(index);
    };

    const jusryContent = [
        {
            name: 'Shimona Madhu',
            image: '/assets/images/student_edition_jury/ju1.webp',
            designation: 'Director',
            company: 'Lemontree Hotel, Shimona',
            contact: '9677898118',
        },
        {
            name: 'Janani Iyer',
            image: '/assets/images/student_edition_jury/ju2.webp',
            designation: 'Partner and Cofounder',
            company: 'Digi Pro Marketing ',
            contact: '7667285155',
        },
        {
            name: 'Sweta Mathur',
            image: '/assets/images/student_edition_jury/ju3.webp',
            designation: 'CEO',
            company: 'nilaiyana Studios Pvt Ltd',
            contact: '7708273140',
        },
    ]

    useEffect(() => {
        ScrolltoTop();
    }, []);

    const PageContent = {
        title: "Homepreneur - Student Edition",
        tamiltitle: "சுயசக்தி விருதுகள் ( மாணவர் பதிவு )",
        content:
            "HOMEPRENEUR – STUDENT EDITION is an initiative of Homepreneur Awards 2024 to recognize and motivate college-going students who are into the field of entrepreneurship. HOMEPRENEUR – STUDENT EDITION seeks to enable and provide a platform for them to share their entrepreneurial ideas, and how they intend to start, execute and scale up. The most feasible and realistic ideas with clarity will be recognized and awarded. Any college-going woman student/ group is eligible to apply.",
        tamilcontent:
            "சுயசக்தி -மாணவர் சாதனையாளர்கள் விருதுகள் 2024.கல்வி கற்கும் போதே சுயதொழில் செய்யும் சாதனையாளர்களை ஊக்குவிக்கும் பதிவுகள். இந்த தளம் மாணவர்களின் சுயதொழில் தொடங்கும் கருத்துகள், செயல்முறைகள், லாபம் ஈட்டும் வழிமுறைகளை பிரதிபலிக்க சிறந்த தளம்.ஏதார்த்தமான,செயல் படக்கூடிய நல்ல சுயதொழில் கருத்துகள் பரிசீலனை செய்யப்பட்டு விருதுகள் வழங்கப்படும்.கல்லூரி செல்லும் பெண்கள் /குழுக்கள் விண்ணப்பம் செய்யலாம்.",
    };

    const listData = [
        {
            icon: "assets/svg/student_edition/card.svg",
            title: "Eligibility",
            tamiltitle: "தகுதி",
            content: [
                {
                    title: "The applicant should be studying in college.",
                    tamiltitle: "விண்ணப்பதாரர் கல்லூரியில் பயின்று  கொண்டிருக்க வேண்டும்",
                },
                {
                    title: "Only female students/ team is eligible.",
                    tamiltitle: " பெண்கள் மட்டுமே பங்கு பெற முடியும்.",
                },
                {
                    title: "Registration online is compulsory.",
                    tamiltitle: "வலைத்தளத்தில்(ஆன்லைனில் ) பதிவு செய்தல் அவசியம்.",
                },
                {
                    title: "Individual participation or a team of 3 maximum.",
                    tamiltitle: " தனிநபராகவோ அல்லது மூன்று பேர் கொண்ட குழுவாகவோ பங்கு பெறலாம்.",
                },
                {
                    title: "Stream of education/college/course is irrelevant.",
                    tamiltitle: "எத்தகையை படிப்பு /கல்லூரி /பிரிவு என்பது போட்டியின் நிலையை மாற்றாது.",
                },
            ],
        },
        {
            icon: "assets/svg/student_edition/setting.svg",
            title: "Process",
            tamiltitle: "செயல்முறை",
            content: [
                {
                    title: "Interested students to apply online here.",
                    tamiltitle: "விருப்பம் உள்ள மாணவர்கள் ஆன்லைன் வழியாக விண்ணப்பம் செய்ய வேண்டும்.",
                },
                {
                    title: "Uploading the presentation in the application form is mandatory.",
                    tamiltitle: "விளக்கவுரையை விண்ணப்ப வடிவில் பதிவேற்றம் செய்ய வேண்டும்.",
                },
                // {
                //   title: 'Top 15 or 20 applicants will be called for the jury interview on 23rd & 24th of July.',
                //   tamiltitle: '08 மற்றும் 09 ஆம் ஜூலை தேர்ந்தெடுக்க பட்ட முதல் 15 அல்லது 20 பங்கேற்பாளர்களுக்கு நடுவர் நேர்காணல் நடைபெறும்.',

                // },
                {
                    title: "The top 3 ideas/ businesses will be selected to be awarded during the main event.",
                    tamiltitle:
                        "தேர்ந்தெடுக்கப்பட்ட முதல் 3 சிறந்த (வணிக கருத்துக்கள்/ தொழில் )விழா அன்று விருது வழங்கி கெளரவிக்க படும்.",
                },
            ],
        },
        {
            icon: "assets/svg/student_edition/format.svg",
            title: "Format & Presentaion",
            tamiltitle: "விளக்கவுரை வடிவம்",
            content: [
                {
                    title: "A maximum of 5 slides presentation",
                    tamiltitle: "விளக்கவுரை வடிவம் 5 பக்கங்கள் மிகாமல் இருக்க வேண்டும்.",
                },
                {
                    title: "Requisites/ Guidelines of the deck are as follows:",
                    tamiltitle: "விண்ணப்பிக்க வேண்டிய விவரங்கள் கீழ் வருமாறு இருக்க வேண்டும்..",
                },
                {
                    title: "Profile of the student entrepreneur (Team)",
                    tamiltitle: "விண்ணப்பதாரரின் சுய விவரங்கள்.",
                },
                {
                    title: "Explain your business idea.",
                    tamiltitle: "வணிக கருத்துக்களின் விளக்கவுரை.",
                },
                {
                    title: "Explain your revenue model",
                    tamiltitle: "தொழில் செயல் பட தேவையான வருவாய் விவரங்கள்.",
                },
                {
                    title: "Explain your sales & marketing strategy",
                    tamiltitle: "வணிக லட்சியத்தின் விற்பனை மற்றும் சந்தை படுத்தும் குறிக்கோள்கள்.",
                },
            ],
        },
        {
            icon: "assets/svg/student_edition/terms.svg",
            title: "Terms & Conditions",
            tamiltitle: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
            content: [
                {
                    title: "The organizers reserve the right to approve/ deny the applications.",
                    tamiltitle:
                        "விழாக்குழுவினருக்கு விண்ணப்பங்களை தகுதியின் அடிப்படையில் ஏற்கவோ/மறுக்கவோ முழு உரிமை உண்டு.",
                },
                {
                    title: "Consideration of the application is subject to the accuracy of the information given.",
                    tamiltitle:
                        "விண்ணப்பங்களை ஏற்க அதில் குறிப்பிட பட்ட விவரங்கள் துல்லியமாகவும் உண்மையாகவும் இருத்தல் அவசியம்.",
                },
                {
                    title: "Ideas presented should be consistent throughout the process. Any deviation will lead to disqualification.",
                    tamiltitle:
                        "பகிரப்பட்ட வியாபார கருத்துக்கள் கடைசி வரையும் முறையான மாறாத விளக்கவுரையுடன் இருக்க வேண்டும்.",
                },
                {
                    title: "Change or addition to the registered team will strictly be prohibited.",
                    tamiltitle: "விண்ணப்பித்த பின்னர் குழுவில் நபர்கள் மாற்றல் ஏற்கப் படமாட்டது.",
                },
            ],
        },
    ];




    return (
        <>
            <div className="brand-max-width mx-auto  relative">
                <img
                    className="w-full h-auto"
                    src={lang === "english" ? "assets/images/banner/stu_bnr_eng.webp" : "assets/images/banner/stu_bnr_tamil.webp"}
                    alt=""
                />
                {/* <div className='inset-0 absolute bg-gradient-to-tr from-primary via-primary/80 to-primary'></div> */}
            </div>
            <div className="brand-container my-24">
                <Titlenew title={lang === "english" ? PageContent.title : PageContent.tamiltitle} />
                {/* <Title title={'Homepreneur - Student Edition'} /> */}

                <div className="flex items-center  flex-col md:flex-row lg:flex-row xl:flex-row">
                    <img
                        className="w-52 h-auto"
                        src="assets/images/honor-sheild.png"
                        alt=""
                    />
                    <p className="text-paragraph">
                        {lang === "english" ? PageContent.content : PageContent.tamilcontent}
                    </p>
                </div>
                <Titlenew title={lang === 'english' ? 'JURY MEMBERS': 'நடுவர் குழு உறுப்பினர்கள்'} />
                <div className="p-5 my-10  bg-primary flex  justify-center flex-wrap">
                    {jusryContent.map((item, index) =>
                        <>
                        <CustomCard img={item.image} jname={item.name} designation={`${item.designation} - ${item.company}`} />

                            <div className="p-3 bg-primary hover:scale-105 transition-all duration-300 w-fit cursor-pointer hidden">
                                <img className="h-[400px] w-[350px] object-cover object-top " src={item.image} alt="" />
                                <div className="bg-white p-2">
                                <p className="capitalize font-bold">Name : <span className="font-normal"> {item.name} </span> </p>
                                <p className="capitalize font-bold">Designation : <span className="font-normal"> {item.designation} </span> </p>
                                <p className="capitalize font-bold">Company Name : <span className="font-normal"> {item.company} </span> </p>

                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10 justify-center">
                    <div className="flex flex-col gap-10">
                        {listData.map((list, index) => (
                            <div className="flex gap-10">
                                <StickerComponent
                                    language={lang}
                                    Handler={ProcessClickHandler}
                                    key={index}
                                    ind={index}
                                    title={lang === "english" ? list.title : list.tamiltitle}
                                    icon={list.icon}
                                />
                                <img
                                    className={
                                        showIndex === index
                                            ? "transition-all duration-300 translate-x-0 visible"
                                            : "-translate-x-full transition-all duration-300 invisible"
                                    }
                                    src="assets/svg/student_edition/arrow.svg"
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                    <div className="border-l-2 border-primary rounded-l-lg p-5 px-10 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                        {listData.map((list, index) => (
                            <div className={showIndex === index ? "flex flex-col items-start gap-5" : "hidden"}>
                                <p className="text-xl ">{lang === "english" ? list.title : list.tamiltitle}</p>
                                <ul className="list-decimal flex flex-col gap-10">
                                    {list.content.map((item, index) => (
                                        <li>
                                            <p>{lang === "english" ? item.title : item.tamiltitle}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center my-5">
                    <p
                        onClick={() => alert(lang === "english"
                            ? "Registration Closed"
                            : "பதிவு முடிவடைந்தது.")}
                        className="text-white text-sm capitalize whitespace-nowrap py-3 px-5 bg-primary rounded-[10px] w-fit active:opacity-50 cursor-pointer select-none outline-none">
                        {" "}
                        {lang === "english"
                            ? "Registration Closed"
                            : "பதிவு முடிவடைந்தது."}
                    </p>
                </div>

                {/* <div className="flex justify-center my-10 ">
              <h1 className="text-2xl	">{lang == "english"
                            ? "Winners 2022"
                            : "வெற்றியாளர்கள் 2022"}</h1>
                              </div> */}
                <div className=" my-10 ">
                    <Titlenew title={lang === "english" ? "Winners 2022" : "வெற்றியாளர்கள் 2022"} />
                </div>
                <WinnersTable />
            </div>
        </>
    );
}

export default StudentEdition;

const StickerComponent = (props) => {
    return (
        <>
            <div
                onClick={() => props.Handler(props.ind)}
                className="w-[280px] relative select-none cursor-pointer">
                <div className="p-3.5 border-8 border-primary w-fit rounded-full z-20 relative bg-white">
                    <img
                        className="w-10 h-10 "
                        src={props.icon}
                        alt=""
                    />
                </div>
                <div className="px-5 bg-primary py-4 w-[230px] rounded-lg absolute left-16 top-3.5 z-10">
                    <p className={`text-white whitespace-nowrap  ${props.language === "english" ? "text-lg" : "text-xs"}`}>
                        {props.title}
                    </p>
                </div>
            </div>
        </>
    );
};
