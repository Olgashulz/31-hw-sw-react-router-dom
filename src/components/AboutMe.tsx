import React, {useEffect, useState} from 'react';
import {base_url} from "../utils/constants";
import Loader from "./Loader";
import {Hero} from "../utils/types";
import {useParams} from "react-router-dom";
import Modal from "./Modal";

const AboutMe = () => {
    const [hero, setHero] = useState<Hero>()
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const {heroId} = useParams<{ heroId: string }>();

    useEffect(() => {
            if (heroId) {
                fetch(`${base_url}/v1/peoples`)
                    .then(response => response.json())
                    .then((data: Hero[]) => {
                        console.log(heroId!.split("-")[0].toLowerCase())
                        const heroData = data.find((item) => joinName(item.name).includes(joinName(heroId!)))
                        if (heroData) {
                            getHero(parseInt(heroData.id));
                        } else {
                            setIsLoading(false);
                            setShowModal(true);
                        }
                    })
            } else {
                getHero(1);
            }
        }, []
    )

    const joinName = (name: string) => {
        return name.split(/[-_]/).join("").toLowerCase()

    }

    const getHero = (id: number) => {
        fetch(`${base_url}/v1/peoples/${id}`)
            .then(response => response.json())
            .then(data => {
                const heroModel = {
                    name: data.name,
                    birthYear: data.birth_year,
                    eyeColor: data.eye_color,
                    hairColor: data.hair_color,
                    gender: data.gender,
                    imgUrl: `${base_url}/${data.image}`
                };
                setIsLoading(false);
                setHero(heroModel);
            })
    }

    if (isLoading) {
        return (
            <Loader/>
        )
    } else {
        return (
            <>
                {(hero) &&
                    <div className='meinContainer aboutMe'>
                        <h2 className="aboutMe-title">{hero.name}</h2>
                        <div className="cardContainer">
                            <div className="cardPhoto">
                                <img src={hero.imgUrl} alt='sw hero'/>
                            </div>
                            <div className="cardInfo">
                                <p className="cardText">Birth year:
                                    <span>{hero.birthYear}</span>
                                </p>
                                <p className="cardText">Eye color:
                                    <span>{hero.eyeColor}</span>
                                </p>
                                <p className="cardText">Hair color:
                                    <span>{hero.hairColor}</span>
                                </p>
                                <p className="cardText">Gender:
                                    <span>{hero.gender}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                }
                {showModal && (
                    <Modal setShowModal={setShowModal} heroId={heroId} setIsLoading={setIsLoading}>
                    </Modal>
                )}
            </>
        )
    }
}

export default AboutMe;