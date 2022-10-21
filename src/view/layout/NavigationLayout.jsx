import { Border, BottonNav, CardBody, CardSection, Content, Image, ImageSection, Input, MobileProfile, NavigationWrapper, PaddedSection, ProfileDiv, ProfileImage, ProfileText, SideBar, SideNavContainer, SideOptionContainer, SideOptionMiniContainer, SubCard, TopSection } from "./NavigationLayout.Style";
import profileImg from '../../application/assests/images/profileImage.png'
import HomeIcon from "../components/iconComponent/HomeIcon";
import PlaylistIcon from "../components/iconComponent/PlaylistIcon";
import MusicIcon from "../components/iconComponent/MusicIcon";
import SoundOnIcon from "../components/iconComponent/SoundOnIcon";
import MediaPlaylistIcon from "../components/iconComponent/MediaPlaylistIcon";
import AudioIcon from "../components/iconComponent/AudioIcon";
import LoveFrance from "../components/iconComponent/LoveFrance";
import DiscoverIcon from "../components/iconComponent/DiscoverIcon";
import SearchIcon from "../components/iconComponent/SearchIcon";
import ArrowBackIcon from "../components/iconComponent/ArrowBackIcon";
import ArrowForwardIcon from "../components/iconComponent/ArrowForward";
import { MockData } from '../../infrastructure/MOCK_DATA';
import { useState } from "react";
import { SearchOutlined } from '@ant-design/icons'
import theme from "../../application/utils/Theme";

const NavigationLayout = () => {
    const [imageIndex] = useState(1);

    const firstNavOptions = [
        {
            displayText: "Home",
            action: "home",
            icon: <HomeIcon />
        },
        {
            displayText: "Discover",
            action: "discover",
            icon: <DiscoverIcon />

        },
    ]


    const secondNavOptions = [
        {
            displayText: "Your library",
            action: "library",
            icon: <MusicIcon />
        },
        {
            displayText: "Liked songs",
            action: "songs",
            icon: <LoveFrance></LoveFrance>,
            otherIcon: <SoundOnIcon />,
            id: 1
        },
        {
            displayText: "Recently played",
            action: "recentlyPlayed",
            icon: <AudioIcon />
        },
        {
            displayText: "Create playlist",
            action: "createPlaylist",
            icon: <MediaPlaylistIcon />
        },
    ]

    const otherNavOptions = [
        {
            displayText: "Riffs and Runs",
        },
        {
            displayText: "African Heat",
        },
        {
            displayText: "Gidi Nights",
        },
        {
            displayText: "Running out of Playlist na....",
        },
        {
            displayText: "Saturday was a Good Day",
        },
        {
            displayText: "Gidi Nights",
        },
        {
            displayText: "Riffs & Runs  ",
        },
        {
            displayText: "Running out of Playlist na....",
        },
        {
            displayText: "Saturday was a Good Day",
        },
        {
            displayText: "Gidi Nights",
        }
    ]

    return (
        <>
            <NavigationWrapper>
                <SideNavContainer>
                    <SideBar>
                        <ProfileDiv>
                            <ProfileImage src={profileImg} alt="profileImg" />
                            <ProfileText>Hey! Aleem</ProfileText>
                        </ProfileDiv>

                        <SideOptionContainer>
                            <SideOptionMiniContainer>
                                {
                                    firstNavOptions.map((n, index) =>
                                        <>
                                            <div key={index} className={`side-options`}>
                                                <div>{n.icon} </div>
                                                <span>{n.displayText}</span>
                                                <div>{n?.otherIcon}</div>
                                            </div>
                                        </>
                                    )
                                }
                                < Border />
                                {
                                    secondNavOptions.map((s, index) =>
                                        <>
                                            <div key={index} className={`side-options ${s?.id === imageIndex ? `active` : ""}`}>
                                                <div>{s.icon} </div>
                                                <span>{s.displayText}</span>
                                                <div>{s?.otherIcon}</div>
                                            </div>
                                        </>
                                    )
                                }
                                <>
                                    <div className="playlist">
                                        <div className="side-options">
                                            <div><PlaylistIcon /></div>
                                            <span>My playlists</span>
                                            <SearchIcon />
                                        </div>
                                    </div>
                                    <Border />
                                </>

                                {
                                    otherNavOptions.map((o, index) =>
                                        <div key={index} className={`side-options`}>
                                            <span>{o?.displayText}</span>
                                            <div>{o?.otherIcon}</div>
                                        </div>
                                    )
                                }

                            </SideOptionMiniContainer>
                        </SideOptionContainer>
                    </SideBar>
                </SideNavContainer>

                <Content>
                    <MobileProfile>
                        <ProfileImage src={profileImg} alt="profileImg" />
                    </MobileProfile>
                    <TopSection>
                        <ArrowBackIcon />
                        <ArrowForwardIcon />

                        <div className="positionSearch">
                            <SearchOutlined className='icon' />
                            <Input className="inputField" />
                        </div>

                    </TopSection>

                    <ImageSection>
                        <p>uduX</p>
                    </ImageSection>

                    <PaddedSection>
                        <h3>Welcome Back!</h3>
                        <p className="ptag">See more</p>
                        <CardSection>
                            {
                                [1, 2].map(n => {
                                    return (
                                        MockData.map((c) => {
                                            return (
                                                <CardBody>
                                                    <SubCard backgroundColor={c.background}>
                                                        <Image>
                                                            <img src={c.image} alt="pics" />
                                                        </Image>
                                                        <div className="small-text">
                                                            <h4>{c.title}</h4>
                                                            <p>{c.description}</p>
                                                        </div>
                                                    </SubCard>
                                                </CardBody>

                                            )
                                        })
                                    )
                                })
                            }

                        </CardSection>
                    </PaddedSection>

                    <PaddedSection>
                        <h3>Cheers to the weekend</h3>
                        <p className="ptag">See more</p>
                        <CardSection>
                            {
                                [1, 2].map(n => {
                                    return (
                                        MockData.map((c) => {
                                            return (
                                                <CardBody>
                                                    <SubCard backgroundColor={c.background}>
                                                        <Image>
                                                            <img src={c.image} alt="pics" />
                                                        </Image>
                                                        <div className="small-text">
                                                            <h4>{c.title}</h4>
                                                            <p>{c.description}</p>
                                                        </div>
                                                    </SubCard>
                                                </CardBody>

                                            )
                                        })
                                    )
                                })
                            }
                        </CardSection>
                    </PaddedSection>

                </Content>
                <BottonNav>
                    <ul className="flex">
                        <li className='list'>
                            <a href="/#">
                                <span><HomeIcon /></span>
                            </a>
                        </li>
                        <li className='list'>
                            <a href="/#">
                                <span><DiscoverIcon width="20px" /></span>
                            </a>
                        </li>
                        <li className='list'>
                            <a href="/#">
                                <span><MusicIcon width="20px" /></span>
                            </a>
                        </li>
                        <li className='list'>
                            <a href="/#">
                                <span><PlaylistIcon width="20px" /></span>
                            </a>
                        </li>

                    </ul>
                </BottonNav>

            </NavigationWrapper>

        </>
    );
}

export default NavigationLayout;