import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap'
import { useState } from 'react';
import { useEffect } from 'react';

function Main() {

    const weatherCities = useSelector((state) => state.weatherList.mainArr);
    const weatherCitiesFilter = weatherCities


    const [weathers, setWeathers] = useState(null)








    const handleChange = (index) => {

        const currentCity = weatherCities[index]


        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentCity.latitude}&lon=${currentCity.longitude}0&appid=${process.env.REACT_APP_API_KEY}&exclude=minutely,hourly&units=metric`)
            .then(response => response.json())
            .then(data => setWeathers(data))
            .catch(err => console.log("error"))


    }



    useEffect(() => {



        if (weathers) {

            const dateVarMon = weathers.daily[0].dt
            const dateMon = new Date(dateVarMon * 1000)


            console.log(weathers.daily)
        }



    }, [weathers])



    return (
        <div>

            <Container >
                <Row className='text-center'>

                    <Col xs="12">
                        <h3 className='my-3'>
                            Türkiye Hava Durumu
                        </h3>
                    </Col>

                </Row>



                <Row>

                    <Col xs="2" className='my-3'>
                        <select className="form-select" aria-label="Default select example" value={weatherCitiesFilter.name} onChange={(e) => handleChange(e.target.value)}>
                            <option selected>Şehir seçiniz</option>




                            {
                                weatherCities.map((city, index) => (

                                    <option key={index} value={index}>{city.name}</option>

                                ))
                            }

                        </select>
                    </Col>

                </Row>

                <Row className='d-flex justify-content-around'>


                    {
                        weathers ?

                            <Col className='mt-5'>
                                <div className="card text-center" style={{ width: "10rem" }}>


                                    <h4 className="card-text mt-2">{dateMon}</h4>
                                    <img className="card-img-top rounded mx-auto d-block" src={`http://openweathermap.org/img/wn/${weathers.daily[0].weather[0].icon}@2x.png`} alt="weather" style={{ width: "5rem" }} />
                                    <div className="card-body">
                                        <p className="card-text">{weathers.daily[0].temp.max} / {weathers.daily[0].temp.min}</p>
                                    </div>
                                </div>
                            </Col>

                            :

                            null
                    }

                    {
                        weathers ?

                            <Col className='mt-5'>
                                <div className="card text-center" style={{ width: "10rem" }}>


                                    <h4 className="card-text mt-2">Salı</h4>
                                    <img className="card-img-top rounded mx-auto d-block" src={`http://openweathermap.org/img/wn/${weathers.daily[1].weather[0].icon}@2x.png`} alt="weather" style={{ width: "5rem" }} />
                                    <div className="card-body">
                                        <p className="card-text">{weathers.daily[1].temp.max} / {weathers.daily[1].temp.min}</p>
                                    </div>
                                </div>
                            </Col>

                            :

                            null
                    }

                    {
                        weathers ?

                            <Col className='mt-5'>
                                <div className="card text-center" style={{ width: "10rem" }}>


                                    <h4 className="card-text mt-2">Çarşamba</h4>
                                    <img className="card-img-top rounded mx-auto d-block" src={`http://openweathermap.org/img/wn/${weathers.daily[2].weather[0].icon}@2x.png`} alt="weather" style={{ width: "5rem" }} />
                                    <div className="card-body">
                                        <p className="card-text">{weathers.daily[2].temp.max} / {weathers.daily[2].temp.min}</p>
                                    </div>
                                </div>
                            </Col>

                            :

                            null
                    }

                    {
                        weathers ?

                            <Col className='mt-5'>
                                <div className="card text-center" style={{ width: "10rem" }}>


                                    <h4 className="card-text mt-2">Perşembe</h4>
                                    <img className="card-img-top rounded mx-auto d-block" src={`http://openweathermap.org/img/wn/${weathers.daily[3].weather[0].icon}@2x.png`} alt="weather" style={{ width: "5rem" }} />
                                    <div className="card-body">
                                        <p className="card-text">{weathers.daily[3].temp.max} / {weathers.daily[3].temp.min}</p>
                                    </div>
                                </div>
                            </Col>

                            :

                            null
                    }

                    {
                        weathers ?

                            <Col className='mt-5'>
                                <div className="card text-center" style={{ width: "10rem" }}>


                                    <h4 className="card-text mt-2">Cuma</h4>
                                    <img className="card-img-top rounded mx-auto d-block" src={`http://openweathermap.org/img/wn/${weathers.daily[4].weather[0].icon}@2x.png`} alt="weather" style={{ width: "5rem" }} />
                                    <div className="card-body">
                                        <p className="card-text">{weathers.daily[4].temp.max} / {weathers.daily[4].temp.min}</p>
                                    </div>
                                </div>
                            </Col>

                            :

                            null
                    }

                    {
                        weathers ?

                            <Col className='mt-5'>
                                <div className="card text-center" style={{ width: "10rem" }}>


                                    <h4 className="card-text mt-2">Cumartesi</h4>
                                    <img className="card-img-top rounded mx-auto d-block" src={`http://openweathermap.org/img/wn/${weathers.daily[5].weather[0].icon}@2x.png`} alt="weather" style={{ width: "5rem" }} />
                                    <div className="card-body">
                                        <p className="card-text">{weathers.daily[5].temp.max} / {weathers.daily[5].temp.min}</p>
                                    </div>
                                </div>
                            </Col>

                            :

                            null
                    }

                    {
                        weathers ?

                            <Col className='mt-5'>
                                <div className="card text-center" style={{ width: "10rem" }}>


                                    <h4 className="card-text mt-2">Pazar</h4>
                                    <img className="card-img-top rounded mx-auto d-block" src={`http://openweathermap.org/img/wn/${weathers.daily[6].weather[0].icon}@2x.png`} alt="weather" style={{ width: "5rem" }} />
                                    <div className="card-body">
                                        <p className="card-text">{weathers.daily[6].temp.max} / {weathers.daily[6].temp.min}</p>

                                    </div>
                                </div>
                            </Col>

                            :

                            null
                    }








                </Row>

            </Container>
        </div>
    )
}

export default Main


