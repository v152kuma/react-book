const Services = ({listOfServices}) => {

    return (
        <>
            <p>List of Services</p>
            <ul>

                {
                    listOfServices.map((service) => (
                        <li style={{listStyleType:"none"}}>{service}</li>
                    )
                   )
                }

            </ul>

        </>

    )



}

export default Services