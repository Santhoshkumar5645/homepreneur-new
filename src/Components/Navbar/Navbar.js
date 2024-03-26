import React, { useRef, useState, useEffect, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router';
import { AuthContext } from '../../ContextApi/AppContext';
import { LazyLoadImage } from "react-lazy-load-image-component";


function Navbar() {
    const [showMenu, setShowMenu] = useState(0);
    const ref = useRef()
    const navigate = useNavigate();
    const [sidemenuShow, setSidemenu] = useState(false);

    const { lang, languageSwitch } = useContext(AuthContext)

    const NavbarData = [
        {
            splid: 1,
            title: 'homepreneur awards',
            tamiltitle: 'சுயசக்தி விருதுகள்',
            submenu: [
                { title: 'about us', tamiltitle: 'about us', link: '/', id: 'About', lang: '', href: '' },
            ],
            type: '',
            link: '/',
            id: '',
            href: '',
            lang: ''
        },
        {
            splid: 2,
            title: 'jury members',
            tamiltitle: 'நடுவர் குழு உறுப்பினர்கள்',
            submenu: [],
            type: 'section',
            link: '',
            href: '',
            id: 'juryMembers',
            lang: ''
        },
        {
            splid: 3,
            title: 'sponsors',
            tamiltitle: 'ஸ்பான்சர்கள்',
            submenu: [],
            type: 'section',
            link: '',
            href: '',
            id: 'Sponsors',
            lang: ''
        },
        {
            splid: 4,
            title: 'student Edition',
            tamiltitle: 'மாணவர் பதிவு',
            submenu: [],
            type: 'section',
            link: '/student',
            href: '',
            id: '',
            lang: ''
        },
        // {
        //     splid: 5,
        //     title: ' HPA Campaign',
        //     tamiltitle: ' HPA Campaign',
        //     submenu: [],
        //     type: '',
        //     link: '/campaign',
        //     href: '',
        //     id: '',
        //     lang: ''
        // },
        {
            splid: 8,
            title: 'previous edition',
            tamiltitle: 'முந்தைய பதிப்புகள்',
            submenu: [
                { title: 'Edition - 1', tamiltitle: 'பதிப்பு - 1', link: '/', id: '', lang: '', href: 'https://previous.homepreneurawards.com/edition1/' },
                { title: 'Edition - 2', tamiltitle: 'பதிப்பு - 2', link: '/', id: '', lang: '', href: 'https://previous.homepreneurawards.com/edition22/' },
                { title: 'Edition - 3', tamiltitle: 'பதிப்பு - 3', link: '/', id: '', lang: '', href: 'https://previous.homepreneurawards.com/edition-3/' },
                { title: 'Edition - 4', tamiltitle: 'பதிப்பு - 4', link: '/', id: '', lang: '', href: 'https://previous.homepreneurawards.com/home-edition-4/' },
                { title: 'Edition - 5', tamiltitle: 'பதிப்பு - 5', link: '/', id: '', lang: '', href: 'https://previous.homepreneurawards.com/' },

            ],
            type: '',
            link: '/register',
            href: '',
            id: '',
            lang: ''
        },
        {
            splid: 7,
            title: 'தமிழில் படியுங்கள்',
            tamiltitle: 'read in english',
            submenu: [],
            type: '',
            link: '',
            href: '',
            id: '',
            lang: 'lang'
        },
        {
            splid: 5,
            title: 'Register Now',
            tamiltitle: 'Register Now',
            submenu: [],
            type: 'button',
            link: '/register',
            href: '',
            id: '',
            lang: ''
        },

    ]
    const HandleSidemenu = () => {
        setSidemenu(!sidemenuShow);
    }
    const handleScroll = useCallback(() => {
        console.log("scrolling")
    }, [])

    const Scroll = (id) => {
        const element = document.getElementById(id);
        if (element) {

            var headerOffset = 100;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
    const handleClickScroll = (id, link, lang, href) => {
        if (id !== '') {
            const path = window.location.pathname;
            if (path !== '/') {
                navigate('/')
                Scroll(id);
            }
            const element = document.getElementById(id);
            if (element) {

                var headerOffset = 100;
                var elementPosition = element.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } else {


            if (lang === '') {

                if (href !== '') {
                    window.open(href, '_blank')
                } else {

                    navigate(link)
                }
            } else {
                languageSwitch()
            }
        }
    }

    const ShowSubMenu = (id) => {
        if (showMenu === id) {

            setShowMenu(0)
        } else {
            setShowMenu(id)
        }



    }


    useEffect(() => {
        console.log(lang, 'this is from context')
    }, [])


    return (
        <>
            <div className='brand-container bg-white shadow-2xl backdrop-blur-sm flex justify-between items-center  sticky top-0 z-50' ref={ref}>
                <div className=' relative transition-all my-2 duration-300 bg-primary h-full flex px-1  justify-center rounded-[10px]'>
                    <div>
                        <LazyLoadImage onClick={() => navigate('/')} className='cursor-pointer h-[7rem] object-contain aspect-square' src={lang === 'english' ? "/assets/images/logo1.png" : "/assets/images/logo1.png"}
                            width={150} height={103}
                            alt="Image Alt"
                        />
                    </div>
                    {/* <img loading='lazy' className={`cursor-pointer h-[7rem] `} onClick={() => navigate('/')} src={lang === 'english' ? "assets/images/logo.png" : "assets/images/logotamil.png"} alt="" /> */}
                    {/* <img className='absolute hidden -bottom-10 -right-14 rotate-45' src="assets/svg/icons/season-float.svg" alt="" /> */}
                </div>
                <ul className='hidden sm:hidden md:hidden lg:hidden xl:flex gap-x-6 items-center' >
                    {
                        NavbarData.map((list, index) =>
                            <li onClick={list.submenu.length !== 0 ? () => ShowSubMenu(list.splid) : () => { handleClickScroll(list.id, list.link, list.lang, list.href); ShowSubMenu('0') }} className='flex relative flex-col gap-2' key={index}>
                                <p className={`group  capitalize text-[16px] flex items-center gap-x-2 cursor-pointer ${lang === 'tamil' ? 'text-sm' : ''} ${list.type !== 'button' ? ' ' : 'bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-800   px-5 py-3 rounded-[10px]'}`}>{lang === 'english' ? list.title : list.tamiltitle}
                                    {list.submenu.length !== 0 ?
                                        <span className={`${list.type === 'button' ? 'hidden' : ''}`} > <img src="assets/svg/icons/downarrow.svg" alt="" /></span> :
                                        <></>
                                    }
                                </p>
                                <div className={` ${showMenu === list.splid ? 'absolute top-16 shadow-xl transition-all duration-300 visible bg-white p-3 px-5 flex flex-col gap-5 rounded-[10px] ' : '-top-0 transition-all p-0 bg-none duration-200 invisible opacity-0 absolute'}`}>
                                    {list.submenu.length !== 0 ?
                                        list.submenu.map((item, index) =>
                                            <p key={index} onClick={() => { handleClickScroll(item.id, item.link, item.lang, item.href) }} className='capitalize text-[16px] cursor-pointer text-primary p-2  rounded-md hover:bg-primary hover:text-white'>{lang === 'english' ? item.title : item.tamiltitle}</p>) : <></>}
                                </div>
                            </li>
                        )
                    }
                </ul>
                <img onClick={HandleSidemenu} className='w-8 block sm:block md:block lg:block xl:hidden' src="assets/svg/icons/menu-primary.svg" alt="" />
            </div>
            <SideMenu clickScroll={handleClickScroll} navData={NavbarData} muAction={showMenu} Handler={setShowMenu} menuShow={sidemenuShow} MenuHandler={HandleSidemenu} submenuHandler={ShowSubMenu} language={lang} />
        </>
    )
}

export default Navbar

const SideMenu = (props) => {
    const HandlerOverlay = (e) => {
        if (e.target.id === 'overlay') {
            props.MenuHandler();
        }
    }
    const HandleNavigate = (id, link, lang, href) => {
        props.clickScroll(id, link, lang, href)
        // navigate(link);
        props.MenuHandler();
    }

    // const navigate = useNavigate();
    return (
        <>
            <div id='overlay' onClick={HandlerOverlay} className={props.menuShow ? 'fixed inset-0 bg-heading/70 backdrop-blur-sm z-50' : '-translate-x-full transition-all duration-300'}></div>
            <div className={`${props.menuShow ? '  translate-x-0   ' : '-translate-x-full '} fixed left-0  top-0  bg-white w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 transition-all duration-1000 h-full z-50 `}>
                <ul className='flex flex-col gap-5 my-10 mx-5'>
                    {props.navData.map((list, index) =>
                        <li onClick={list.submenu.length !== 0 ? () => props.submenuHandler(list.splid) : () => { HandleNavigate(list.id, list.link, list.lang, list.href) }} className='flex relative flex-col gap-2' key={index}>
                            <p className={`group  capitalize text-[16px] flex items-center gap-x-2 cursor-pointer ${props.language === 'english' ? '' : 'text-sm'} ${list.type !== 'button' ? 'text-primary $  ' : 'text-white bg-primary px-3 rounded-lg py-2 '}`}>{props.language === 'english' ? list.title : list.tamiltitle}
                                {list.submenu.length !== 0 ?
                                    <span className={`${list.type === 'button' ? 'hidden' : ''}`} > <img src="assets/svg/icons/downarrow.svg" alt="" /></span> :
                                    <></>
                                }
                            </p>
                            <div className={` ${props.muAction === list.splid ? 'transition-all duration-300 visible rounded-lg bg-primary p-3 ' : '-top-0 transition-all p-0 bg-none duration-200 invisible opacity-0 -translate-y-full hidden '}`}>
                                {list.submenu.length !== 0 ?
                                    list.submenu.map((item, index) =>
                                        <p key={index} onClick={() => HandleNavigate(item.id, item.link, item.lang, item.href)} className='capitalize text-[16px] mt-2 cursor-pointer text-white'>{props.language === 'english' ? item.title : item.tamiltitle}</p>) : <></>}
                            </div>
                        </li>)
                    }
                </ul>
            </div>

        </>
    )
}