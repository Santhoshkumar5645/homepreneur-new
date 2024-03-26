import React, { useContext } from "react";
import TitleGradient from "../../Element/TitleGradient";
import { AuthContext } from "../../ContextApi/AppContext";

function Whoweare() {
    const { lang } = useContext(AuthContext);

    const WhoweareData = [
        {
            title: "Who is an",
            tamiltitle: "வீடுகளில் இருந்து",
            hightlight: "Homepreneur",
            tamilhighlight: "தொழில் முனைவோர்",
            content:
                "Many women have taken up business freelancing work in small or medium scale by working from home and generating revenue. These women are called as HOMEPRENEURS. To put it in simple terms it is an ENTREPRENEURSHIP from HOME. Over the three editions, from the feedback of the jury members, it is heartening to see that Homepreneurs are very diverse with inspirational stories, innovative in their ideas, creative in their marketing and are generating income that is many a times crucial in running their households and sometimes it augments an existing source of income to meet the demands of family.",
            tamilcontent:
                "பெண்கள் பலர் தங்கள் வீடுகளில் இருந்து சிறிய அல்லது நடுத்தர அளவில், வணிக “பகுதி நேர வேலைகளை” மேற்கொண்டு வருமானம் ஈட்டுகின்றனர். அந்தப் பெண்கள் சுயசக்திகள் என்றழைக்கப்படுகிறார்கள். எளிமையாகச் சொன்னால்,  வீட்டிலிருந்து தொழில் முனைவது. இதுவரை மேற்கொண்ட நான்கு  பதிப்புகளில் நடுவர் மன்ற உறுப்பினர்களின் கருத்துப்படி சுயசக்திகள் பலதரப்பட்ட ஊக்கக் கதைகள், புதுமையான யோசனைசகள், ஆக்கப்பூர்வமான சந்தைப்படுத்துதல் மூலமாக வருமானம் ஈட்டிவருவது மகிழ்ச்சியளிக்கிறது. இது குடும்பத் தேவைகளை பூர்த்தி செய்வதோடு அவரவர் இல்லங்களின் வருமான ஆதாரத்தையும் அதிகரிக்கிறது.",
        },
        {
            title: "A Unique Platform for recognizing",
            tamiltitle: "பெண்களை அங்கீகரிப்பதற்கான",
            hightlight: "Women",
            tamilhighlight: "ஒரு பிரத்தியேக தளம்",
            content:
                "HOMEPRENEUR AWARDS (Suyasakthi Virudhugal) seeks to provide a platform to recognize and celebrate the women who have chosen to pursue their passion through entrepreneurship from home. The business could be anything from baking cakes at home to teaching among many categories mentioned on the website. If you are making any income through HOMEPRENEURSHIP, you are eligible to apply for the award under the various categories mentioned.",
            tamilcontent:
                "சுயசக்தி விருதுகள் வீட்டில் இருந்தே தொழில் முனைவதன் மூலம், தங்களின் இலக்கை அடைய விரும்பும் பெண்களை அங்கீகரித்து கொண்டாட விளைகிறது. கேக் செய்வது முதல் பாடம் கற்பிப்பது வரை இவ்வணிகம் எதுவாக வேண்டுமானாலும் இருக்கலாம். சுயசக்திகளாக வீடுகளில் இருந்து நீங்கள் வருமானம் ஈட்டினால், குறிப்பிடப்பட்ட பல்வேறு பிரிவுகளின் கீழ் இந்த விருதுக்கு விண்ணப்பிக்க நீங்கள் தகுதியுடையவர்கள்.",
        },
        {
            title: "About",
            tamiltitle: "About",
            hightlight: "Us",
            tamilhighlight: "பிராண்ட் அவதார்",
            content:
                "At Brand Avatar, we're more than just a branding and event management firm - we're creators of unforgettable experiences. With over eight years of experience, we've brought to life a series of remarkable events that include VILLAGE TICKET, FITUP FEST, ART OF PARENTING, PRIDE OF TAMILNADU AWARDS, and FASHION PREMIERE WEEK. HOMEPRENEUR AWARDS is our unique initiative, a platform to recognise and celebrate women. And let's not forget about Avatar Live - our flagship platform with over 284K subscribers on Youtube.  Avatar Live isn't just a channel - it's a community of like-minded individuals who strive for excellence and growth in all aspects of life.",
            tamilcontent:
                "பிராண்டிங் மற்றும் ஈவென்ட் மேனேஜ்மென்ட் (branding and event management) நிறுவனமான Brand Avatar கடந்த மூன்று ஆண்டுகளில் தனித்துவமான மற்றும் அற்புதமான நிகழ்வுகளை உயிர்ப்பித்துள்ளது, VILLAGE TICKET, FITUP FEST, ART OF PARENTING, PRIDE OF TAMILNADU AWARDS, FASHION PREMIERE WEEK, போன்றவை சமீபத்திய நிகழ்வுகளாகும். BRAND AVATAR,  நிறுவனங்களுக்கும் தனிநபர்களுக்கும் ஒரு முழுமையான ஒருங்கிணைந்த தகவல் தொடர்பு சந்தைப்படுத்தல் திட்டத்தையும் (fully integrated marketing communications program), உற்பத்தி பொருள் மேலாண்மை தீர்வுகளையும் (brand management solutions) வழங்குகிறது. BRAND AVATAR வீட்டிலிருந்து வணிகம் செய்து வருவாய் ஈட்டுகிற பெண்களை கௌரவப்படுத்தி ஊக்குவிக்க “HOMEPRENEUR AWARD(சுயசக்தி விருதுகள்)” என்னும் பிரம்மாண்ட விருது மேடையை உருவாக்கியுள்ளது.",
        },
        {
            title: "Student",
            tamiltitle: "மாணவர்",
            hightlight: "Edition",
            tamilhighlight: "பதிவுகள்",
            content:
                "HOMEPRENEUR – STUDENT EDITION is an initiative of Homepreneur Awards 2024 to recognize and motivate college-going students who are into the field of entrepreneurship. HOMEPRENEUR – STUDENT EDITION seeks to enable and provide a platform for them to share their entrepreneurial ideas, and how they intend to start, execute and scale up. The most feasible and realistic ideas with clarity will be recognized and awarded. Any college-going woman student/ group is eligible to apply.",
            tamilcontent:
                "இல்லத்தரசி -மாணவர் சாதனையாளர்கள் விருதுகள் 2024.கல்வி கற்கும் போதே சுயதொழில் செய்யும் சாதனையாளர்களை ஊக்குவிக்கும் பதிவுகள். இந்த தளம் மாணவர்களின் சுயதொழில் தொடங்கும் கருத்துகள், செயல்முறைகள், லாபம் ஈட்டும் வழிமுறைகளை பிரதிபலிக்க சிறந்த தளம். ",
        },
    ];

    return (
        <>
            <div
                id="About"
                className="brand-max-width mx-auto py-10"
                style={{ backgroundImage: "url('assets/svg/background/section-bg.svg')" }}>
                <div className="brand-container">
                    <div className="flex justify-center flex-col items-center">
                        <TitleGradient title={"Who are we"} />

                        <img
                            className="w-[200px] h-auto my-5 block md:block lg:hidden xl:hidden"
                            src="assets/images/honor-sheild.png"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center gap-5 my-10  ">
                        <div className=" flex flex-col w-full md:w-3/5 lg:w-3/5 xl:w-3/5 gap-5">
                            <Box
                                reverseborder={false}
                                title={lang === "english" ? WhoweareData[0].title : WhoweareData[0].tamiltitle}
                                hightlight={
                                    lang === "english" ? WhoweareData[0].hightlight : WhoweareData[0].tamilhighlight
                                }
                                content={lang === "english" ? WhoweareData[0].content : WhoweareData[0].tamilcontent}
                            />
                            <img
                                className="h-20 hidden md:block lg:block xl:block"
                                src="assets/svg/icons/down-color.svg"
                                alt=""
                            />
                            <Box
                                reverseborder={false}
                                title={lang === "english" ? WhoweareData[1].title : WhoweareData[1].tamiltitle}
                                hightlight={
                                    lang === "english" ? WhoweareData[1].hightlight : WhoweareData[1].tamilhighlight
                                }
                                content={lang === "english" ? WhoweareData[1].content : WhoweareData[1].tamilcontent}
                            />
                        </div>
                        <img
                            className="w-[200px] h-auto hidden lg:block xl:block"
                            src="assets/images/honor-sheild.png"
                            alt=""
                        />

                        <div className="mt-0 md:mt-15 lg:mt-14 xl:mt-14 flex flex-col w-full md:w-3/5 lg:w-3/5 xl:w-3/5 gap-5">
                            {/* <Box
                                reverseborder={true}
                                title={lang === "english" ? WhoweareData[2].title : WhoweareData[2].tamiltitle}
                                hightlight={
                                    lang === "english" ? WhoweareData[2].hightlight : WhoweareData[2].tamilhighlight
                                }
                                content={lang === "english" ? WhoweareData[2].content : WhoweareData[2].tamilcontent}
                            /> */}
                            <div
                                className={`p-5 border-[#EBEAB5] border-[0.1px]  rounded-2xl ${
                                    true ? "border-l-4" : "border-r-4"
                                }`}>
                                <p className="text-white/60 text-xl">
                                    {lang === "english" ? WhoweareData[2].title : WhoweareData[2].tamiltitle}{" "}
                                    <spa className="text-white">
                                        {lang === "english"
                                            ? WhoweareData[2].hightlight
                                            : WhoweareData[2].tamilhighlight}
                                    </spa>{" "}
                                </p>
                                <p className="text-white/50 text-sm mt-2 indent-[20px] text-justify">
                                    {lang === "english" ? WhoweareData[2].content : WhoweareData[2].tamilcontent}
                                </p>

                                <p className="text-white/50 text-sm mt-2 ">
                                    To know more
                                    <a
                                        href="https://brandavatar.in/"
                                        target="_blank"
                                        className="text-white mx-2 underline italic">
                                        visit brand avatar
                                    </a>
                                </p>
                            </div>
                            <img
                                className="h-20 hidden md:block lg:block xl:block"
                                src="assets/svg/icons/down-color.svg"
                                alt=""
                            />
                            <Box
                                reverseborder={true}
                                title={lang === "english" ? WhoweareData[3].title : WhoweareData[3].tamiltitle}
                                hightlight={
                                    lang === "english" ? WhoweareData[3].hightlight : WhoweareData[3].tamilhighlight
                                }
                                content={lang === "english" ? WhoweareData[3].content : WhoweareData[3].tamilcontent}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Whoweare;

const Box = (props) => {
    return (
        <>
            <div
                className={`p-5 border-[#EBEAB5] border-[0.1px]  rounded-2xl ${
                    props.reverseborder ? "border-l-4" : "border-r-4"
                }`}>
                <p className="text-white/60 text-xl">
                    {props.title} <spa className="text-white">{props.hightlight}</spa>{" "}
                </p>
                <p className="text-white/50 text-sm mt-2 indent-[20px] text-justify">{props.content}</p>
            </div>
        </>
    );
};
