import React, { useContext, useRef, useState } from "react";
import TitleGradient from "../../Element/TitleGradient";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import { AuthContext } from "../../ContextApi/AppContext";

function Ourprocess() {
    const { lang } = useContext(AuthContext);
    const slider = useRef(null);
    const navigate = useNavigate();

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const settings = {
        dots: false,
        fade: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "linear",
    };

    const bannerData = [
        {
            title: "registration",
            tamiltitle: "விருதுகளுக்கு பதிவு செய்யும் விதிமுறைகள். ",
            content:
                "The registration stage is a crucial part of the process for entering the award. During this stage, interested candidates will have to provide some basic information about themselves, including their name, contact details, and business details. In addition to this, candidates will also have to share their stories and achievements, highlighting what sets them apart from others in their field. Make sure you give maximum information as possible in the registration phase.",
            tamilcontent:
                "இந்த உயரிய விருதுகளுக்கான தேர்வில் இடம்பெற பதிவு செய்தல் மிக முக்கிய அங்கமாகும்.வெற்றியாளராக விரும்பும் போட்டியாளர்கள்  தங்களைப் பற்றிய குறிப்புகளை பதிவு செய்தல் அவசியம். தங்கள் பெயர் விலாசம் தொழில் சார்ந்த தகவல்களை பதிவிட வேண்டும்.மேலும் தங்கள் துறையில் உள்ள மற்றவர்களிடமிருந்து தங்களை வேறுபடுத்துவதை முன்னிலைப்படுத்த வேண்டும்.உங்களைப் பற்றிய சாதனை தகவல்கள் அனைத்தையும் பதிவிடும்படி கேட்டுக்கொள்கிறோம். ",
            image: "assets/images/banner/banner1.jpg",
        },
        {
            title: "Shortlisting",
            tamiltitle: "விண்ணப்பதாரர்களின் தேர்வு",
            content:
                "This information will be carefully evaluated by the selection committee which will be used to determine the most deserving candidates for the shortlisting stage. It's important for candidates to provide accurate and detailed information during registration to give themselves the best chance of success in the selection process. Those who are shortlisted will move on to the next stage of the selection process, where they will give interviews to an expert jury panels.",
            tamilcontent:
                "விண்ணப்பித்தவர்களின் தகவல்களை பரிசீலனை செய்து எங்கள் குழு சிறந்த போட்டியாளர்களை தேர்ந்தெடுக்கும்.இந்த சுற்றில் தேர்வு பெற போட்டியாளர்கள் தங்களைப் பற்றிய கருத்துகளை சரியானதாகவும் தெளிவானதாகவும் பதிவிடுதல் மிக அவசியம்.இந்த சுற்றில் தகுதி பெறும் போட்டியாளர்கள் அடுத்த நிலையான நடுவர் நேர்காணலுக்கு முன்னேறுவர். ",
            image: "assets/images/gallery/ju5.jpeg",
        },
        {
            title: "Jury Interview",
            tamiltitle: "நடுவர் நேர்காணல்.",
            content:
                "The interview is an integral part of the selection process, where the shortlisted candidates will be interviewed by eminent Jury members. The Jury members will assess the candidates based on a range of criteria. The interview will take place for two days. The evaluation process will be rigorous and thorough to ensure that the most deserving candidates are selected for the final stage of the selection process.",
            tamilcontent:
                "எங்கள் தேர்வுமுறைகளின் மிக நேர்த்தியான அங்கமாக இந்த நேர்காணல் கருதப்படுகிறது. புகழ்பெற்ற எங்கள் நடுவர் குழு தேர்வு பெற்ற போட்டியாளர்களை நேர்காணல் செய்வர். இரண்டு நாள் நடை பெறும் இந்த நேர்காணலில் எங்கள் நடுவர்கள் தகுதியான போட்டியாளர்களை மட்டுமே அடுத்த சுற்று செல்லும்படி நேர்மையான தரநிலைகளுடன் தேர்வு செய்வர். ",
            image: "assets/images/banner/3.jpeg",
        },
        {
            title: "Award cermony",
            tamiltitle: "விருது வழங்கும் நிகழ்வு. ",
            content:
                "Finally, following the interview process, the most outstanding candidates across 12 categories will be selected and awarded at a grand ceremony. The winners of the award will be announced on the site at the appropriate time and all participants will be notified accordingly. This award ceremony will serve as an opportunity to recognize and honour the exceptional achievements of these deserving individuals, and it will be a momentous occasion for all involved. The award ceremony is an excellent platform for the winners to showcase their businesses and network with other successful women entrepreneurs.",
            tamilcontent:
                "இறுதி சுற்றான விருது பரிசளிப்பு விழாவில் மிக தகுதி வாய்ந்த போட்டியாளர்கள் 12 பிரிவுகளில் தேர்வு செய்யப்பட்டு பரிசளிக்கப் படுவர்.விருது பெறும் போட்டியாளர்கள் தக்க சமயத்தில் அறிவிக்கப் பட்டு கெளரவிக்கப் படுவர்.பங்கு பெறும் அனைவரும் தகுதியான வெற்றியாளர்களை கண்டு வியந்து போற்றும் தருணம் இதுவே. விருது பெறும் அனைவரும் தங்கள் வணிகம் பெறுகவும் தொழில் சிறக்கவும் தன் போன்ற பெண்களை ஊக்குவிக்கவும் இது போன்ற சிறந்த மேடை கிடைப்பது அரிது. ",
            image: "assets/images/banner/4.png",
        },
    ];

    return (
        <div
            className="brand-max-width mx-auto py-10"
            style={{ backgroundImage: "url('assets/svg/background/section-bg.svg')" }}>
            <div className="brand-container">
                <div className="flex justify-center flex-col items-center">
                    <TitleGradient title={lang ==='english' ? "Selection Process": 'தேர்வு செயல்முறை'} />
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 my-10 ">
                    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
                        <Slider
                            asNavFor={nav2}
                            ref={(slider1) => setNav1(slider1)}
                            {...settings}>
                            {bannerData.map((item, index) => (
                                <div className="selection:outline-none outline-0 flex justify-center w-full">
                                    <img
                                        className="mx-2 h-[200px] md:lg:h-[400px]  lg:h-[400px] xl:lg:h-[400px] w-full px-2 object-cover selection:outline-none rounded-[15px]"
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="flex flex-col justify-between gap-5 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
                        {/* <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto'> */}
                        <Slider
                            asNavFor={nav1}
                            ref={slider}
                            {...settings}
                            fade={false}>
                            {bannerData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col px-2 gap-3">
                                    <div className="flex gap-3">
                                        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
                                            {index + 1}/{bannerData.length}
                                        </p>
                                        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl  capitalize">
                                            {lang === "english" ? item.title : item.tamiltitle}
                                        </p>
                                    </div>
                                    <p className="text-sm md:text-md mt-5 lg:text-xl xl:text-xl text-justify lg:text-left xl:text-left indent-[50px] text-white">
                                        {lang === "english" ? item.content : item.tamilcontent}
                                    </p>
                                    <div className={"flex justify-center py-5"}>
                                        <p
                                            onClick={() => navigate("/register")}
                                            className="px-5 py-4 cursor-pointer select-none active:bg-white/10 rounded-lg capitalize bg-white text-primary">
                                            {lang === "english" ? "Registration Closed" : "பதிவு முடிவடைந்தது."}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        {/* </div> */}

                        <div className="flex  gap-5 justify-center md:justify-end lg:justify-end xl:justify-end">
                            <img
                                onClick={() => {
                                    slider?.current?.slickPrev();
                                }}
                                className="rotate-180 cursor-pointer"
                                src="assets/svg/icons/slider-arrow.svg"
                                alt=""
                            />
                            <img
                                onClick={() => {
                                    slider?.current?.slickNext();
                                }}
                                className="cursor-pointer"
                                src="assets/svg/icons/slider-arrow.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ourprocess;
