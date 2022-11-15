import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap'
import { useState } from 'react';
import axios from 'axios';

function Main() {

    const weatherCities = useSelector((state) => state.weatherList.mainArr);
    const weatherCitiesFilter = useSelector((state) => state.weatherList.filterArr);



    const [city, setCity] = useState(weatherCitiesFilter)

    const getWeatherData = async (lat, lon) => {

        const key = process.env.REACT_APP_API_KEY

        try {

            const { data } = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}`)

            setCity(data);
        }

        catch {

            alert("Veri alınırken hata oluştu.")
        }


    }

    console.log(city.name);


    return (
        <div>

            <Container >
                <Row className='text-center'>

                    <Col xs="12">
                        <h3 className='my-3'>
                            Türkiye Haftalık Hava Durumu
                        </h3>
                    </Col>

                </Row>

                <Row>

                    <Col xs="2" className='my-3'>
                        <select className="form-select" aria-label="Default select example" value={weatherCitiesFilter.name} onChange={(e) => setCity(e.target.value)}>
                            <option selected>Şehir seçiniz</option>


                            {
                                weatherCities.map((city, index) => (

                                    <option key={index} value={city.id}>{city.name}</option>

                                ))
                            }

                        </select>
                    </Col>

                </Row>

                <Row className='d-flex justify-content-around'>

                    <Col className='mt-5'>
                        <div className="card text-center" style={{ width: "10rem" }}>
                            <h4 className="card-text mt-2">Sun</h4>
                            <img className="card-img-top rounded mx-auto d-block" src="https://cdn-icons-png.flaticon.com/512/0/74.png" alt="weather" style={{ width: "5rem" }} />
                            <div className="card-body">
                                <p className="card-text">78° / 67°</p>
                            </div>
                        </div>
                    </Col>

                    <Col className='mt-5'>
                        <div className="card text-center" style={{ width: "10rem" }}>
                            <h4 className="card-text mt-2">Mon</h4>
                            <img className="card-img-top rounded mx-auto d-block" src="https://cdn-icons-png.flaticon.com/512/0/74.png" alt="weather" style={{ width: "5rem" }} />
                            <div className="card-body">
                                <p className="card-text">78° / 67°</p>
                            </div>
                        </div>
                    </Col>

                    <Col className='mt-5'>
                        <div className="card text-center" style={{ width: "10rem" }}>
                            <h4 className="card-text mt-2">Tue</h4>
                            <img className="card-img-top rounded mx-auto d-block" src="https://cdn-icons-png.flaticon.com/512/0/74.png" alt="weather" style={{ width: "5rem" }} />
                            <div className="card-body">
                                <p className="card-text">78° / 67°</p>
                            </div>
                        </div>
                    </Col>

                    <Col className='mt-5'>
                        <div className="card text-center" style={{ width: "10rem" }}>
                            <h4 className="card-text mt-2">Wed</h4>
                            <img className="card-img-top rounded mx-auto d-block" src="https://cdn-icons-png.flaticon.com/512/0/74.png" alt="weather" style={{ width: "5rem" }} />
                            <div className="card-body">
                                <p className="card-text">78° / 67°</p>
                            </div>
                        </div>
                    </Col>

                    <Col className='mt-5'>
                        <div className="card text-center" style={{ width: "10rem" }}>
                            <h4 className="card-text mt-2">Thu</h4>
                            <img className="card-img-top rounded mx-auto d-block" src="https://cdn-icons-png.flaticon.com/512/0/74.png" alt="weather" style={{ width: "5rem" }} />
                            <div className="card-body">
                                <p className="card-text">78° / 67°</p>
                            </div>
                        </div>
                    </Col>

                    <Col className='mt-5'>
                        <div className="card text-center" style={{ width: "10rem" }}>
                            <h4 className="card-text mt-2">Fri</h4>
                            <img className="card-img-top rounded mx-auto d-block" src="https://cdn-icons-png.flaticon.com/512/0/74.png" alt="weather" style={{ width: "5rem" }} />
                            <div className="card-body">
                                <p className="card-text">78° / 67°</p>
                            </div>
                        </div>
                    </Col>

                    <Col className='mt-5'>
                        <div className="card text-center" style={{ width: "10rem" }}>
                            <h4 className="card-text mt-2">Sat</h4>
                            <img className="card-img-top rounded mx-auto d-block" src="https://cdn-icons-png.flaticon.com/512/0/74.png" alt="weather" style={{ width: "5rem" }} />
                            <div className="card-body">
                                <p className="card-text">78° / 67°</p>
                            </div>
                        </div>
                    </Col>






                </Row>

            </Container>
        </div>
    )
}

export default Main