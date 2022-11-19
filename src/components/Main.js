import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap'
import { useState } from 'react';

function Main() {

    const weatherCities = useSelector((state) => state.weatherList.mainArr);



    const [weathers, setWeathers] = useState(null)








    const handleChange = (index) => {

        const currentCity = weatherCities[index]


        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentCity.latitude}&lon=${currentCity.longitude}0&appid=${process.env.REACT_APP_API_KEY}&exclude=minutely,hourly&units=metric`)
            .then(response => response.json())
            .then(data => {
                const arr = data.daily;
                arr.pop()
                arr.forEach(item => {
                    const date = new Date(item.dt * 1000);
                    item.dayName = date.toLocaleDateString("tr-TR", { weekday: "long" })
                });
                setWeathers(arr);
            })
            .catch(err => console.log("error"))


    }






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
                        <select className="form-select" aria-label="Default select example" defaultValue="DEFAULT" onChange={(e) => handleChange(e.target.value)}>
                            <option value="DEFAULT" >Şehir seçiniz</option>




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
                        weathers && weathers.map((item, i) => (

                            <Col key={i} className='mt-5'>
                                <div className={`card text-center  ${i === 0 && "border-dark"}`} style={{ width: "10rem", }}  >


                                    <h4 className="card-text mt-2">{item.dayName}</h4>
                                    <img className="card-img-top rounded mx-auto d-block" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather" style={{ width: "5rem" }} />
                                    <div className="card-body">
                                        <p className="card-text">{item.temp.max} / {item.temp.min}</p>
                                    </div>
                                </div>
                            </Col>

                        ))
                    }










                </Row>

            </Container>
        </div>
    )
}

export default Main


